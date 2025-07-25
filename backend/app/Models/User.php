<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    public $timestamps = false;
    protected $fillable = [
        'dni',
        'pfpimg',
        'name',
        'surname',
        'address',
        'phone_number',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    // Devuelve la key.
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    // Información adicional
    public function getJWTCustomClaims()
    {
        return [];
    }

    function role() {
        return $this->belongsTo(Role::class);
    }

    function getRole() {
        $role_id = $this->role_id;
        $role = Role::find($role_id);
        return $role;
    }
}
