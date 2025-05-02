<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    // Crud básico para crear un distribuidor

        // Guardar estado.
        function store(Request $request) {
          // Accede al servicio.

    
            return response()->json([
                'success' => true,
                'message' => "Status created",
                'data' => $status
            ], 200);
        }
    
        // Mostrar todos los roles y sus permisos.
        function index() {
            $roles = Role::all();
            return response()->json([
                'success' => true,
                'data' => $roles
            ]);
        }
    
        // Mostrar un estado por id.
        function find($id) {
            $role = Role::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $role
            ]);
        }
    
        // Editar un estado
        function update($id, Request $request) {
            $status = Role::findOrFail($id);
    
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string']
            ]);
    
            $role->fill($validated);
            $role->save();
    
            return response()->json([
                'success' => true,
                'message' => 'Status updated'
            ], 200);
        }
    
        // Eliminar un estado
        function destroy($id) {
            $role = Role::findOrFail($id);
            $role->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Status eliminated"
            ]);
        }
}
