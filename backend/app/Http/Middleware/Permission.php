<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Permission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

     // Middleware to check if user has a role with an specific permission.
    public function handle(Request $request, Closure $next, $permission): Response
    {

        $role_id = auth('api')->user()->role_id;
        $user_role = Role::find($role_id);

        if (!$user_role->hasPermission($permission)) {
            abort(403, 'You cannot perform this action');
        }
        
        return $next($request);
    }
}