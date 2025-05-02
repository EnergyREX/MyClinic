<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LogoutController;
use Illuminate\Support\Facades\Route;

Route::controller(AppointmentController::class)->group(function () {
  Route::post('/appointment', 'store');
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], 
function() {
  Route::controller(AuthController::class)->group(function () {
    Route::post('/register', 'store');
    Route::post('/login', 'login');
  });
});