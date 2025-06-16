<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;

class InventoryController extends Controller
{
    // Crud básico para crear un distribuidor

        // Guardar estado.
        function store(Request $request) {
            $validated = $request->validate([
                'supplier_id' => ['integer', 'required'],
                'item_name' => ['string', 'required', 'max:255'],
                'description' => ['string', 'max:255'],
                'quantity' => ['integer', 'required'],
                'expiration_date' => ['date', 'required'],
            ]);
    
            $status = Inventory::create($validated);
    
            return response()->json([
                'success' => true,
                'message' => "Status created",
                'data' => $status
            ], 200);
        }
    
        // Mostrar todos los estados.
        function index() {
            $status = Inventory::all();
            return response()->json([
                'success' => true,
                'data' => $status
            ]);
        }
    
        // Mostrar un estado por id.
        function find($id) {
            $status = Inventory::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $status
            ]);
        }
    
        // Editar un estado
        function update($id, Request $request) {
            $status = Inventory::findOrFail($id);
    
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string']
            ]);
    
            $status->fill($validated);
            $status->save();
    
            return response()->json([
                'success' => true,
                'message' => 'Status updated'
            ], 200);
        }
    
        // Eliminar un estado
        function destroy($id) {
            $status = Inventory::findOrFail($id);
            $status->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Status eliminated"
            ]);
        }
}
