<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('products', 'Products\ProductsController@getProducts');

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@signup');
    Route::get('signup/activate/{token}', 'AuthController@signupActivate');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        Route::get('users', 'Users\UsersController@getUsers');
        
        //Route::apiResource('products','ProductController');
        //Route::get('products', 'Products\ProductsController@getProducts');
        Route::post('products', 'Products\ProductsController@store');
        Route::put('products/{product}', 'Products\ProductsController@update');
    	Route::delete('products/{product}', 'Products\ProductsController@delete');

        Route::get('category', 'Categories\CategoriesController@index');
        
        Route::get('category/{category}', 'Categories\CategoriesController@show');

        Route::put('category/{id}', 'Categories\CategoriesController@update');
    });
});