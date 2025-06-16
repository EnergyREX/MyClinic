<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;

class SupplierController extends Controller
{
    // Crud básico para crear un distribuidor

        // Guardar proveedor.
        function store(Request $request) {
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string'],
                'address' => ['string', 'required', 'max:255']
            ]);
    
            $supplier = Supplier::create($validated);
    
            return response()->json([
                'success' => true,
                'message' => "Supplier created",
                'data' => $supplier
            ], 200);
        }
    
        // Mostrar todos los proveedores.
        function index() {
            $suppliers = Supplier::all();
            return response()->json([
                'success' => true,
                'data' => $suppliers
            ]);
        }
    
        // Mostrar un proveedor por id.
        function find($id) {
            $supplier = Supplier::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $supplier
            ]);
        }
    
        // Editar un proveedor
        function update($id, Request $request) {
            $supplier = Supplier::findOrFail($id);
    
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string'],
                'direction' => ['string', 'required', 'max:255']
            ]);
    
            $supplier->fill($validated);
            $supplier->save();
    
            return response()->json([
                'success' => true,
                'message' => 'Supplier updated'
            ], 200);
        }
    
        // Eliminar un proveedor
        function destroy($id) {
            $supplier = Supplier::findOrFail($id);
            $supplier->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Supplier eliminated"
            ]);
        }
}
