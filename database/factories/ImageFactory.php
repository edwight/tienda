<?php

use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        //
    ];
});
$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'large' => $faker->imageUrl($width = 108, $height = 143), // 'http://lorempixel.com/640/480/',
        'small' => $faker->imageUrl($width = 218, $height = 293), // 'http://lorempixel.com/640/480/',
        'product_id' => $faker->randomFloat($nbMaxDecimals = 0, $min = 1, $max = 5),
    ];
});