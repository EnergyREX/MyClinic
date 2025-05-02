<?php 

namespace App\Services;
use App\Models\JwtToken;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

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
    // Tries to login the user.
    if (!$token = auth('api')->attempt($request)) {
      return response()->json(['success' => false, 'message' => 'Unauthorized'], 401);
    }

    $user = auth('api')->user(); // Gets user's data
    $expiration = Carbon::now()->addHour()->timestamp; // Creates the timestamp

    // If logins the user, create a log in the database, with an expiration time.
    JwtToken::create([
      'user_id' => auth('api')->user()->id,
      'token' => bcrypt($token),
      'created_at' => now(),
      'expires_at' => Carbon::createFromTimestamp($expiration)
    ]);
    
    // Returns the token, expiration, user_id and role_id.
    return response()->json([
      'token' => $token,
      'exp' => Carbon::createFromTimestamp($expiration),
      'user_id' => $user->id,
      'role' => $user->role_id
    ]);
  }

  // Para un logout de un usuario.
  function logout() {
    try {
      JWTAuth::invalidate(JWTAuth::getToken());
      return response()->json(['message' => 'Successfully logged out'], 200);
    } catch (JWTException $except) {
        return response()->json(['message' => 'Token not found!'], 401);
    }
  }
}