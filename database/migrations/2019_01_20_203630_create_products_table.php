<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->decimal('price',8,2)->default(0);
            $table->integer('stock')->default(0);
            $table->integer('proveedor_id');
            $table->integer('category_id');
            //$table->integer('image_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Revrse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
