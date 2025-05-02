<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('role_id')->references('id')->on('roles');
        });

        Schema::table('roles_permissions', function (Blueprint $table) {
            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('permission_id')->references('id')->on('permissions');
         });

        Schema::table('doctors', function (Blueprint $table) {
            $table->foreign('doctor_dni')->references('dni')->on('users');
            $table->foreign('department_id')->references('id')->on('departments');
        });

        Schema::table('appointments', function (Blueprint $table) {
            $table->foreign('patient_dni')->references('dni')->on('users');
            $table->foreign('doctor_dni')->references('doctor_dni')->on('doctors');
            $table->foreign('status_id')->references('id')->on('statuses');
        });

        Schema::table('appointments_invoices', function (Blueprint $table) {
            $table->foreign('appointment_id')->references('id')->on('appointments');
            $table->foreign('invoice_id')->references('id')->on('invoices');
        });

        Schema::table('records_treatments', function (Blueprint $table) {
            $table->foreign('medical_record_id')->references('id')->on('medical_records');
            $table->foreign('treatment_id')->references('id')->on('treatments');
        });

        Schema::table('inventories', function (Blueprint $table) {
            $table->foreign('supplier_id')->references('id')->on('suppliers');
        });

        Schema::table('jwt_tokens', function(Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
