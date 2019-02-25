<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

	protected $fillable = [
        'name', 'description', 'price','stock','proveedor_id', 'category_id',
    ];

	//producto pertenece a una categoria 
	public function category(){
        return $this->belongsTo('App\Category');
    }
    public function proveedor(){
    	return $this->belongsTo('App\Proveedor');
    }
    public function images(){
        return $this->hasMany('App\Image');
    }
}
