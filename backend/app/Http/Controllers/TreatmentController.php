<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Treatment;

class TreatmentController extends Controller
{
    // Guardar tratamientos.
    function store(Request $request) {
        $validated = $request->validate([
            'name' => ['string', 'required', 'max:255'],
            'description' => ['string']
        ]);

        $treatment = Treatment::create($validated);

        return response()->json([
            'success' => true,
            'message' => "Treatment created"
        ], 200);
    }

    // Mostrar todos los tratamientos.
    function index() {
        $treatments = Treatment::all();
        return response()->json([
            'success' => true,
            'data' => $treatments
        ]);
    }

    // Mostrar un tratamiento por id.
    function find($id) {
        $treatment = Treatment::findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $treatment
        ]);
    }

    // Editar un tratamiento
    function update($id, Request $request) {
        $treatment = Treatment::findOrFail($id);

        $validated = $request->validate([
            'name' => ['string', 'required', 'max:255'],
            'description' => ['string']
        ]);

        $treatment->fill($validated);
        $treatment->save();

        return response()->json([
            'success' => true,
            'message' => 'Treatment Updated'
        ], 200);
    }

    // Eliminar un tratamiento
    function destroy($id) {
        $treatment = Treatment::findOrFail($id);
        $treatment->delete();

        return response()->json([
            'success' => true,
            'message' => "Treatment Eliminated"
        ]);
    }
}
