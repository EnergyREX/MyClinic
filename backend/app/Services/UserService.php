<?php 

namespace App\Services;
use App\Models\JwtToken;
use App\Models\User;
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
    
    $token = auth()->attempt($request);
    
    return response()->json($token);
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