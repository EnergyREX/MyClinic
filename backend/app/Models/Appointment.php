<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'patient_dni',
        'doctor_dni',
        'status_id',
        'hour',
        'date',
    ];
}
