<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Role extends Model
{
    use HasFactory, Notifiable;
    public $timestamps = false;
    
    protected $fillable = [
        'name'
    ];
    
    public function users() {
        return $this->hasMany(User::class);
    }
    
    public function permission() {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }
    
    public function hasPermission($permission) {
        return $this->permission->contains('name', $permission);
    }
}
