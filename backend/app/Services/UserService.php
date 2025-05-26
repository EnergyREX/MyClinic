<?php 

namespace App\Services;
use App\Models\JwtToken;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Payload;

use function Pest\Laravel\json;

class UserService {


  // Register an user.
  function register(array $request) {
    // From validated data, creates the user.
    $user = User::create([
      'dni' => $request['dni'],
      'name' => $request['name'],
      'surname' => $request['surname'],
      'address' => $request['address'],
      'phone_number' => $request['phone_number'],
      'email' => $request['email'],
      'password' => $request['password'],
      'role_id' => 1
    ]);
    
    // Response of the created user
    return response()->json(['success' => true, 'data' => $user], 200);
  }

  // Login with JWT.
  function login(array $request) {
    $credentials = ['email' => $request['email'], 'password' => $request['password']];

    try {
      if (!$token = JWTAuth::attempt($credentials)) {
        return response()->json([
          'success' => false,
          'error' => 'Invalid credentials'
        ], 401);
      }

      $user = auth('api')->user();

      // Obtain permissions
      $userPerms = User::with('role.permission')->find($user->id)->role->permission;
      $permissions = [];
      foreach ($userPerms as $permission) {
        $permissions[] = $permission->name;
      }

      // If a token already exists
      $existingToken = JwtToken::where('user_id', $user->id)->first();

      if ($existingToken) {
        return response()->json([
          "token" => $existingToken->token,
          "user_id" => $user->id,
          "role_id" => $user->role_id,
          "name" => $user->name,
          "surname" => $user->surname,
          "permissions" => $permissions
        ]);
      }

      // If doesn't exist a token
      $customClaims = [
        'id' => $user->id,
        'role_id' => $user->role_id,
      ];

      $newToken = JWTAuth::claims($customClaims)->fromUser($user);

      // Get payload from this token.
      $payload = JWTAuth::setToken($newToken)->getPayload();
      $date = $payload->get('exp');

      // Save in DB the new token
      JwtToken::create([
        'user_id' => $user->id,
        'token' => $newToken,
        'created_at' => Carbon::now()->timestamp,
        'expires_at' => $date
      ]);

      // Return the token
      return response()->json([
        "token" => $newToken,
        "user_id" => $user->id,
        "role_id" => $user->role_id,
        "name" => $user->name,
        "surname" => $user->surname,
        "permissions" => $permissions
      ]);

    } catch (JWTException $e) {
      return response()->json(['error' => 'Could not create the token.'], 500);
    }
  }

  // User logout.
  function logout($token) {
    // Gets the user's JWT from request.
    $dbToken = DB::table('jwt_tokens')->where('token', $token)->first();

    JwtToken::destroy($dbToken->id);

    // Returns a response.
    return response()->json([
      'success' => true,
      'message' => 'Deleted successfully'
    ]);
  }

  function permissions ($id) {
      // Obtain permissions
      $userPerms = User::with('role.permission')->find(auth('api')->user()->id)->role->permission;
      $permissions = [];
      foreach ($userPerms as $permission) {
        $permissions[] = $permission->name;
      }

      return response()->json([
        'success' => true,
        'permissions' => $permissions
      ]);
}

}