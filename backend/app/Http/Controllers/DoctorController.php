<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;
use Illuminate\Http\JsonResponse;

class DoctorController extends Controller
{
    // CRUD operations for Doctor model

    // Show all doctors
    public function index(): JsonResponse
    {
        $doctors = Doctor::all();

        return response()->json([
            'success' => true,
            'data' => $doctors
        ]);
    }

    // Show a doctor by ID
    public function show(int $id): JsonResponse
    {
        $doctor = Doctor::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $doctor
        ]);
    }

    // Create a new doctor
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'doctor_dni' => ['required', 'string', 'max:255'],
            'specialization_id' => ['nullable', 'integer', 'exists:specializations,id'],
            'department_id' => ['nullable', 'integer', 'exists:departments,id'],
            'availability' => ['required'],
            'status_id' => ['required', 'integer', 'exists:statuses,id'],
        ]);

        $doctor = Doctor::create($validated);

        return response()->json([
            'success' => true,
            'message' => "Doctor created successfully",
            'data' => $doctor
        ], 201);
    }

    // Update an existing doctor by ID
    public function update(Request $request, int $id): JsonResponse
    {
        $doctor = Doctor::findOrFail($id);

        $validated = $request->validate([
            'doctor_dni' => ['sometimes', 'string', 'max:255'],
            'specialization_id' => ['sometimes', 'integer', 'exists:specializations,id'],
            'department_id' => ['sometimes', 'integer', 'exists:departments,id'],
            'availability' => ['sometimes', 'boolean'],
            'status_id' => ['sometimes', 'integer', 'exists:statuses,id'],
        ]);

        $doctor->fill($validated);
        $doctor->save();

        return response()->json([
            'success' => true,
            'message' => 'Doctor updated successfully',
            'data' => $doctor
        ], 200);
    }

    // Delete a doctor by ID
    public function destroy(int $id): JsonResponse
    {
        $doctor = Doctor::findOrFail($id);
        $doctor->delete();

        return response()->json([
            'success' => true,
            'message' => "Doctor deleted successfully"
        ], 200);
    }
}
