<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use Illuminate\Support\Facades\Route;

Route::controller(AppointmentController::class)->group(function () {
  Route::post('/appointment', 'store');
});

Route::group([
  'middleware' => 'api',
  'prefix' => 'auth'
], function() {
  Route::post('login', LoginController::class);
  Route::post('logout', LogoutController::class);
});