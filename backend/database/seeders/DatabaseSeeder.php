<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
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
            'view_departments',
            'view_single_department',
            'create_departments',
            'update_departments',
            'delete_departments',

            'view_doctors',
            'view_single_doctor',
            'create_doctors',
            'update_doctors',
            'delete_doctors',

            'view_appointments',
            'view_single_appointment',
            'create_appointment',
            'update_appointment',
            'delete_appointment',

            'get_tokens',
            'delete_token',

            'view_roles',
            'view_single_role',
            'create_role',
            'update_role',
            'delete_role',

            'view_inventories',
            'view_single_item',
            'create_inventory',
            'update_inventory',
            'delete_inventory',

            'view_suppliers',
            'view_single_suppliers',
            'create_suppliers',
            'update_suppliers',
            'delete_suppliers',

            'view_invoices',
            'view_single_invoices',
            'create_invoices',
            'update_invoices',
            'delete_invoices',

            'view_treatments',
            'view_single_treatments',
            'create_treatments',
            'update_treatments',
            'delete_treatments',

            'view_records',
            'view_single_records',
            'create_records',
            'update_records',
            'delete_records',
        ];

        foreach ($permissions as $perm) {
            $allPermissions[$perm] = Permission::firstOrCreate(['name' => $perm]);
        }

        $allRoles['admin']->permission()->sync(array_values($allPermissions));

        $allRoles['user']->permission()->sync([
            $allPermissions['view_appointments']->id,
            $allPermissions['view_inventories']->id,
            $allPermissions['view_records']->id,
            $allPermissions['view_roles']->id,
            $allPermissions['view_treatments']->id,
        ]);

        User::factory()->create([
            'email' => 'myclinic@myclinic.com',
            'password' => 'myclinic'
        ]);

        User::factory()->create([
            'email' => 'admin@myclinic.com',
            'password' => 'admin'
        ]);
    }
}
