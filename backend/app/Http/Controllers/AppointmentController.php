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
                'status_id' => ['required'],
                'hour' => ['required'],
                'date' => ['required'],
    
                // Factura
                'amount' => ['numeric'],
                'paid_at' => ['nullable'],
            ]);
    
            // Ahora usamos el servicio correctamente
            $appointment = Appointment::create($validated);

            return response()->json([
                'success' => true,
                'message' => "Appointment and Invoice created",
                'data' => $appointment,
            ], 200);
        }
    
        // Mostrar todos los estados.
        function index() {
            $appointment = Appointment::all();
            return response()->json([
                'success' => true,
                'data' => $appointment
            ]);
        }
    
        // Mostrar un estado por id.
        function find($id) {
            $appointment = Appointment::findOrFail($id);
            return response()->json([
                'success' => true,
                'data' => $appointment
            ]);
        }
    
        // Editar un estado
        function update($id, Request $request) {
            $appointment = Appointment::findOrFail($id);
    
            $validated = $request->validate([
                'name' => ['string', 'required', 'max:255'],
                'description' => ['string']
            ]);
    
            $appointment->fill($validated);
            $appointment->save();
    
            return response()->json([
                'success' => true,
                'message' => 'Status updated'
            ], 200);
        }
    
        // Eliminar un estado
        function destroy($id) {
            $appointment = Appointment::findOrFail($id);
            $appointment->delete();
    
            return response()->json([
                'success' => true,
                'message' => "Status eliminated"
            ]);
        }
}
