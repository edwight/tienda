<?php

use Illuminate\Database\Seeder;

class ProveedorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Proveedor::class, 5)->create();
    }
}
