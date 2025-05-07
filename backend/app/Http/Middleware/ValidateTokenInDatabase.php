<?php

namespace App\Http\Middleware;

use App\Models\JwtToken;
use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class ValidateTokenInDatabase
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the request hasn't the Bearer Token.
        $token = JWTAuth::getToken();
        if (!$token) {
            return response()->json(['error' => 'Token not given'], 401);
        }
        // Get the token from Db
        $dbToken = DB::table('jwt_tokens')->where('token', $token)->first();

        // Check if exists
        if (!$dbToken) {
            return response()->json([
                'error' => "Unknown token",
            ], 401);
        }

        // Check if bearer token is ok and not expired.
        // Change it to Unix timestamp.
        $expires_at = Carbon::parse($dbToken->expires_at)->timestamp;
        $now = Carbon::now();

        // If expiration date is less than actual date. If it is, removes the token.
        if ($expires_at <= $now) {
            JwtToken::destroy($dbToken->id);
            return response()->json([
                'error' => "Expired token"
            ], 401);
        }

        // If not present, return a 401 Unauthorized
        return $next($request);
    }
}
