<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->text,
        'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 1000), 
        'stock' => $faker->randomDigitNotNull, 
        'proveedor_id' => $faker->randomFloat($nbMaxDecimals = 0, $min = 1, $max = 5),  
        'category_id' => $faker->randomFloat($nbMaxDecimals = 0, $min = 1, $max = 5),
    ];
});
