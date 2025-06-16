<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    protected $fillable = [
        'supplier_id',
        'item_name',
        'description',
        'quantity',
        'expiration_date',
    ];
}
