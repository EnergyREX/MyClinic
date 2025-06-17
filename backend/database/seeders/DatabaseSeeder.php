<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Permission;
use App\Models\Role;
use App\Models\Specialization;
use App\Models\Status;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $roles = [
            'user',
            'admin'
        ];
    
        foreach ($roles as $roleName) {
            $allRoles[$roleName] = Role::firstOrCreate(['name' => $roleName]);
        }

        $permissions = [
            'view_dashboard',
            'view_profile',

            'view_departments',
            'create_departments',
            'update_departments',
            'delete_departments',

            'view_doctors',
            'view_single_doctor',
            'create_doctors',
            'update_doctors',
            'delete_doctors',

            'view_appointments',
            'view_single_appointments',
            'create_appointments',
            'update_appointments',
            'delete_appointments',

            'view_jwttokens',
            'delete_jwttokens',

            'view_roles',
            'create_role',
            'update_role',
            'delete_role',

            'view_inventory',
            'view_single_item',
            'create_inventory',
            'update_inventory',
            'delete_inventory',

            'view_suppliers',
            'create_suppliers',
            'update_suppliers',
            'delete_suppliers',

            'view_invoices',
            'create_invoices',
            'update_invoices',
            'delete_invoices',

            'view_treatments',
            'create_treatments',
            'update_treatments',
            'delete_treatments',

            'view_records',
            'create_records',
            'update_records',
            'delete_records',

            'view_specializations',
            'view_single_specialization',
            'create_specializations',
            'update_specializations',
            'delete_specializations'
        ];

        foreach ($permissions as $perm) {
            $allPermissions[$perm] = Permission::firstOrCreate(['name' => $perm]);
        }

        $allRoles['admin']->permission()->sync(array_values($allPermissions));

        $allRoles['user']->permission()->sync([
            $allPermissions['view_appointments']->id,
            $allPermissions['view_inventory']->id,
            $allPermissions['view_records']->id,
            $allPermissions['view_roles']->id,
            $allPermissions['view_treatments']->id,
        ]);

        Department::create([
            'name' => "Departamento Ejemplo",
            'description' => "Esto es un departamento de ejemplo"
        ]);

        Status::create([
            'name' => "Active",
            'description' => ""
        ]);

        Status::create([
            'name' => "Unactive",
            'description' => ""
        ]);

        Status::create([
            'name' => "Pending",
            'description' => ""
        ]);

        Specialization::create([
            'name' => "Especialización de ejemplo",
            'description' => "Esto es una especialización de ejemplo",
            'category' => 1
        ]);

        User::factory()->create([
            'email' => 'myclinic@myclinic.com',
            'password' => 'myclinic'
        ]);

        User::factory()->create([
            'email' => 'admin@myclinic.com',
            'password' => 'admin',
            'role_id' => 2

        ]);
    }
}
