<?php

use Faker\Generator as Faker;

$factory->define(App\Proveedor::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'direction' => $faker->text,
        'phone' => $faker->randomDigitNotNull, 
        'email' => $faker->unique()->safeEmail,
    ];
});

