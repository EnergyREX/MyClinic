<?php 

namespace App\Services;

use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Models\Invoice;
use Illuminate\Support\Facades\DB;

class AppointmentService {

  function createAppointment(array $validated) {
    // Debe de crear una cita.

    $appointment = Appointment::create([
      'patient_dni' => $validated['patient_dni'],
      'doctor_dni' => $validated['doctor_dni'],
      'status' => $validated['status'],
      'hour' => $validated['hour'],
      'date' => $validated['date'],
    ]);

    // Crea un invoice (factura)
    $invoice = Invoice::create([
      'amount' => $validated['amount'],
      'paid_at' => $validated['paid_at']
    ]);
    
    // Asocia dicha factura a la cita (pivot table appointments_invoices)
    DB::table('appointments_invoices')->insert([
      'appointment_id' => $appointment->id,
      'invoice_id' => $invoice->id
    ]);

    return response()->json([
      'appointment' => $appointment,
      'invoice' => $invoice
    ]);
  }
}