<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JwtToken extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'user_id',
        'token', // Hashed!!
        'created_at',
        'expires_at' // +1 hour when created.
    ];
}
