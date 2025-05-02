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
      'role_id' => $request['role_id'],
    ]);
    
    // Response of the created user
    return response()->json(['success' => true, 'data' => $user], 200);
  }

  // Registrar a un doctor.

  // Logueo de un usuario usando JWT.
  function login(Request $request) {
    $credentials = $request->only(['email', 'password']);
    
    // En caso de que no encuentre el usuario.
    if(!$token = auth('api')->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    // Almacena el token dentro de la base de datos ('jwt_tokens')
       
    // Si encuentra el usuario, devuelve un objeto con los datos del mismo. No incluye la contraseña.
    return response()->json([
        'token' => $token,
        [
        'id' => auth()->user()->id, 
        'user_id' => auth()->user()->role_id
        ],
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