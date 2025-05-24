<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use Illuminate\Support\Facades\Schema;

class DepartmentController extends Controller
{
    // Departments info
        function info() {
            $data = [
            'title' => 'Departments',
            'noun' => 'department',
            'endpoints' => [
                "index" => '/departments',
                "show" => '/departments/{id}',
                "all" => '/departments/all',
                "info" => '/departments/info',
                "create" => '/departments',
                "update" => '/departments/{id}',
                "delete" => '/departments/{id}'
            ],
            'formFields' => [
                ["name" => "doctor_dni", "type" => "text"],
                ["name" => "patient_dni", "type" => "text"], 
                ["name" => "status", "type" => "select", "options" => ['Pending', 'Cancelled', 'Completed']],
                ["name" => "hour", "type" => "time"],
                ["name" => "date", "type" => "date"],
            ]
        ];
        
        return $data;
        }

        function columns() {
            $data = [
                [ 'header' => 'ID', 'accessorKey' => 'id' ],
                [ 'header' => 'Name', 'accessorKey' => 'name' ],
                [ 'header' => 'Description', 'accessorKey' => 'description' ],
                [ 'header' => 'Created At', 'accessorKey' => 'created_at' ],
                [ 'header' => 'Updated At', 'accessorKey' => 'updated_at' ],
            ];

            return $data;
        }

        // Save a department
        function store(Request $request) {
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string'],
            ]);
    
            $status = Department::create($validated);
    
            return response()->json([
                'success' => true,
                'message' => "Status created",
                'data' => $status
            ], 200);
        }
    
        // Show all departments
        function index() {
            $departments = Department::paginate(15);
            return response()->json([
                'success' => true,
                'data' => $departments->items(),
                'pagination' => [
                    'current_page' => $departments->currentPage(),
                    'last_page' => $departments->lastPage(),
                    'per_page' => $departments->perPage(),
                    'total' => $departments->total()
                ]
            ]);
        }
    
        // Show a department by id.
        function find($id) {
            $status = Department::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $status
            ]);
        }
    
        // Edit a department
        function update($id, Request $request) {
            $status = Department::findOrFail($id);
    
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
    
        // Delete a department
        function destroy($id) {
            $status = Department::findOrFail($id);
            $status->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Status eliminated"
            ]);
        }
}
