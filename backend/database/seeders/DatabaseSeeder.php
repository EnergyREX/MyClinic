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
            'view_appointments',
            'view_roles',
            'view_inventories',
            'view_suppliers',
            'view_doctors',
            'view_statuses',
            'view_medicalrecords',
            'view_medicalrecords-Own',
            'view_treatments'
        ];

        foreach ($permissions as $perm) {
            $allPermissions[$perm] = Permission::firstOrCreate(['name' => $perm]);
        }

        $allRoles['admin']->permission()->sync(array_values($allPermissions));

        $allRoles['user']->permission()->sync([
            $allPermissions['view_appointments']->id,
            $allPermissions['view_inventories']->id,
            $allPermissions['view_medicalrecords']->id,
            $allPermissions['view_roles']->id,
            $allPermissions['view_treatments']->id,
        ]);

        // User::factory(10)->create();

        User::factory()->create([
            'email' => 'test@example.com',
            'password' => 'password'
        ]);
    }
}
