<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Services\AppointmentService;

class AppointmentController extends Controller
{
    protected $appointmentService;

    public function __construct(AppointmentService $appointmentService)
    {
        $this->appointmentService = $appointmentService;
    }

        // Usa el servicio AppointmentService.
        public function store(Request $request)
        {
            $validated = $request->validate([
                // Cita
                'patient_dni' => ['required', 'string'],
                'doctor_dni' => ['required', 'string'],
                'status' => ['required'],
                'hour' => ['required'],
                'date' => ['required'],
    
                // Factura
                'amount' => ['required', 'numeric'],
                'paid_at' => ['nullable'],
            ]);
    
            // Ahora usamos el servicio correctamente
            $data = $this->appointmentService->createAppointment($validated);
    
            return response()->json([
                'success' => true,
                'message' => "Appointment and Invoice created",
                'data' => $data,
            ], 200);
        }
    
        // Mostrar todos los estados.
        function index() {
            $status = Appointment::all();
            return response()->json([
                'success' => true,
                'data' => $status
            ]);
        }
    
        // Mostrar un estado por id.
        function find($id) {
            $status = Appointment::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $status
            ]);
        }
    
        // Editar un estado
        function update($id, Request $request) {
            $status = Appointment::findOrFail($id);
    
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
            $status = Appointment::findOrFail($id);
            $status->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Status eliminated"
            ]);
        }
}
