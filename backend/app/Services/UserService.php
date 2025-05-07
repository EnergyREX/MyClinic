<?php 

namespace App\Services;
use App\Models\JwtToken;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Payload;

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
      if (! $token = JWTAuth::attempt($credentials)) {
        return response()->json([
          'success' => false,
          'error' => 'Invalid credentials'
        ], 401);
      }
  
      $user = auth('api')->user();
  
      // Custom claims.
      $customClaims = [
        'id' => $user->id,
        'name' => $user->name,
        'surname' => $user->surname,
        'role_id' => $user->role_id,
      ];
  
      // Creates the token with claims.
      $token = JWTAuth::claims($customClaims)->fromUser($user);
  
      // Get payload from this token.
      $payload = JWTAuth::setToken($token)->getPayload();
      $date = Carbon::parse($payload->get('exp'));
  
      // Register data in the database:
      JwtToken::create([
        'user_id' => $user->id,
        'token' => $token,
        'created_at' => Carbon::now(),
        'expires_at' => $date
      ]);
  
      return response()->json(compact('token'));
  
    } catch (JWTException $e) {
      return response()->json(['error' => 'Could not create the token.'], 500);
    }
  }
  

  // User logout.
  function logout($token) {
    // Gets the user's JWT from request.
    $dbToken = DB::table('jwt_tokens')->where('token', $token)->first();

    JwtToken::destroy($dbToken->id);
    JWTAuth::logout();

    // Returns a response.
    return response()->json([
      'success' => true,
      'message' => 'Deleted successfully'
    ]);
  }
}