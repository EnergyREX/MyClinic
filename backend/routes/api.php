<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\JwtTokenController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TreatmentController;
use Illuminate\Support\Facades\Route;


  // CORS testing route (debug purpose)
  Route::get('/cors', function() {
      return response()->json(['message' => 'Juan hijo de Juan']);
  });

// Api routes
  // Auth routes
  Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::post('/register', 'store')->name('register');
    Route::post('/login', 'login')->name('login');
  });

  // Protected Routes.
  Route::middleware('validateToken')->group(function() {
    
    // Logout route
    Route::prefix('auth')->controller(AuthController::class)->group(function () {
      Route::post('/logout', 'logout');
      Route::get('/permissions', 'permissions')->name('permissions'); // Get the permissions (using to recover)
    });

    Route::prefix('departments')->middleware('auth:api')->controller(DepartmentController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_departments');
      Route::get('/info', 'info')->middleware('permission:view_departments');
      Route::get('/columns', 'columns')->middleware('permission:view_departments');
      Route::get('/{id}', 'find')->middleware('permission:view_single_department');
      Route::post('/', 'store')->middleware('permission:create_departments');
      Route::patch('/{id}', 'update')->middleware('permission:update_departments');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_departments');
      Route::delete('/', 'destroyMany')->middleware('permission:delete_departments');
    });

    Route::prefix('doctors')->middleware('auth:api')->controller(DoctorController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_doctors');
      Route::get('/{id}', 'find')->middleware('permission:view_single_doctor');
      Route::post('/', 'store')->middleware('permission:create_doctors');
      Route::patch('/{id}', 'update')->middleware('permission:update_doctors');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_doctors');
    });

    // Appointment Routes.
    Route::prefix('appointments')->middleware('auth:api')->controller(AppointmentController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_appointments');
      Route::get('/info', 'info')->middleware('permission:view_appointments');
      Route::get('/columns', 'columns')->middleware('permission:view_appointments');
      Route::get('/{id}', 'find')->middleware('permission:view_single_appointment');
      Route::post('/', 'store')->middleware('permission:create_appointment');
      Route::patch('/{id}', 'update')->middleware('permission:update_appointment');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_appointment');
    });

    Route::prefix('jwt-tokens')->middleware('auth:api')->controller(JwtTokenController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:get_tokens');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_token');
    });

    Route::prefix('roles')->middleware('auth:api')->controller(RoleController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_roles');
      Route::get('/{id}', 'find')->middleware('permission:view_single_role');
      Route::post('/', 'store')->middleware('permission:create_role');
      Route::patch('/{id}', 'update')->middleware('permission:update_role');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_role');
    });

    Route::prefix('inventories')->middleware('auth:api')->controller(InventoryController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_inventories');
      Route::get('/{id}', 'find')->middleware('permission:view_single_item');
      Route::post('/', 'store')->middleware('permission:create_inventory');
      Route::patch('/{id}', 'update')->middleware('permission:update_inventory');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_inventory');
    });

    Route::prefix('suppliers')->middleware('auth:api')->controller(SupplierController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_suppliers');
      Route::get('/{id}', 'find')->middleware('permission:view_single_suppliers');
      Route::post('/', 'store')->middleware('permission:create_suppliers');
      Route::patch('/{id}', 'update')->middleware('permission:update_suppliers');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_suppliers');
    });

    Route::prefix('invoices')->middleware('auth:api')->controller(InvoiceController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_invoices');
      Route::get('/{id}', 'find')->middleware('permission:view_single_invoices');
      Route::post('/', 'store')->middleware('permission:create_invoices');
      Route::patch('/{id}', 'update')->middleware('permission:update_invoices');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_invoices');
    });

    Route::prefix('treatments')->middleware('auth:api')->controller(TreatmentController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_treatments');
      Route::get('/{id}', 'find')->middleware('permission:view_single_treatments');
      Route::post('/', 'store')->middleware('permission:create_treatments');
      Route::patch('/{id}', 'update')->middleware('permission:update_treatments');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_treatments');
    });

    Route::prefix('medical-records')->middleware('auth:api')->controller(InventoryController::class)->group(function () {
      Route::get('/', 'index')->middleware('permission:view_records');
      Route::get('/{id}', 'find')->middleware('permission:view_single_records');
      Route::post('/', 'store')->middleware('permission:create_records');
      Route::patch('/{id}', 'update')->middleware('permission:update_records');
      Route::delete('/{id}', 'destroy')->middleware('permission:delete_records');
    });
  });