<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Api routes


// Auth routes
Route::prefix('auth')->controller(AuthController::class)->group(function () {
  Route::post('/register', 'store')->name('register');
  Route::post('/login', 'login')->name('login');
});

// Protected Routes.
Route::middleware('validateToken')->group(function() {
  Route::post('/logout', 'logout')->name('logout');
  
  // Appointment Routes.
  Route::prefix('appointments')->middleware('auth:api')->controller(AppointmentController::class)->group(function () {
    Route::get('/', 'index')->middleware('permission:view_appointments');
    Route::post('/', 'store')->middleware('permission:create_appointment');
  });

});