<?php

namespace App\Http\Controllers\Categories;

use Illuminate\Http\{Request, Response};
use App\Http\Controllers\Controller;
use App\Category;

class CategoriesController extends Controller
{
    public function index(Category $category){
    	$categories = $category->all(); 
    	return response()->json(['data'=>$categories,'status'=>Response::HTTP_OK]);
    }
    public function show($id){
    	$category = Category::find($id);
    	return response()->json(['data'=>$category,'status'=>Response::HTTP_OK]);
    }
    public function update(Request $request, Category $category)
    {
        $category->update($request->all());

        return response()->json(['data'=>$category,'status'=>Response::HTTP_OK]);
    }
}
