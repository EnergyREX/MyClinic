<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'doctor_dni',
        'specialization_id',
        'department_id',
        'availability',
        'status_id',
    ];
}
