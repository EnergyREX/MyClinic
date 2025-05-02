<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specialization;

class SpecializationController extends Controller
{
    // Crud básico para crear un distribuidor

        // Guardar una especializacion.
        function store(Request $request) {
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string'],
            ]);
    
            $specialization = Specialization::create($validated);
    
            return response()->json([
                'success' => true,
                'message' => "Specialization created",
                'data' => $specialization
            ], 200);
        }
    
        // Mostrar todas las especializaciones.
        function index() {
            $specializations = Specialization::all();
            return response()->json([
                'success' => true,
                'data' => $specializations
            ]);
        }
    
        // Mostrar especializaciones por id.
        function find($id) {
            $specialization = Specialization::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $specialization
            ]);
        }
    
        // Editar un estado
        function update($id, Request $request) {
            $specialization = Specialization::findOrFail($id);
    
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string']
            ]);
    
            $specialization->fill($validated);
            $specialization->save();
    
            return response()->json([
                'success' => true,
                'message' => 'Specialization updated'
            ], 200);
        }
    
        // Eliminar un estado
        function destroy($id) {
            $specialization = Specialization::findOrFail($id);
            $specialization->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Specialization eliminated"
            ]);
        }
}
