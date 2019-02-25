<?php

namespace App\Http\Controllers\Products;

use Illuminate\Http\{Request, Response};
use App\Http\Controllers\Controller;
use App\Product;
use App\Image;
use Image AS Img;
use Illuminate\Support\Facades\Storage; //Laravel Filesystem

class ProductsController extends Controller
{
	public function __construct(Product $product){
		$this->product = $product;
	}
    public function getProducts(){
    	$products = $this->product->with('category','images')->get();
    	return response()->json(['data'=>$products,'status'=>Response::HTTP_OK]);
    }
    public function showProducts($id){
    	$product = $this->product->with('category')->find($id);
    	return response()->json(['data'=>$product,'status'=>Response::HTTP_OK]);
    }
    public function store(Request $request)
    {
        
        if ($request->hasFile('images')) {
 
            foreach($request->file('images') as $file){
     
                //get filename with extension
                $filenamewithextension = $file->getClientOriginalName();
     
                //get filename without extension
                $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
     
                //get file extension
                $extension = $file->getClientOriginalExtension();
     
                //filename to store
                $filenametostore = $filename.'_'.uniqid().'.'.$extension;
     
                Storage::put('public/images/'. $filenametostore, fopen($file, 'r+'));
                Storage::put('public/thumbnail/'. $filenametostore, fopen($file, 'r+'));
     
                //Resize image here
                $thumbnailpath = public_path('storage/thumbnail/'.$filenametostore);
                $img = Image::make($thumbnailpath)->resize(400, 150, function($constraint) {
                    $constraint->aspectRatio();
                });
                $img->save($thumbnailpath);
            }
            
            //return redirect('images')->with('status', "Image uploaded successfully.");
        }

        //$image = Image::where(['id'=>'1'])->firstOrFail();
        //$product->images()->save($image);
        
        $product = Product::create($request->all());
        //$image = new Image;
        //$image->large = $request->input('image');
        //$image->small = $request->input('image');
        //$image->save();
        //$product->images()->save($image);

        return response()->json(['data'=>$product,'status'=>Response::HTTP_OK]);
    }
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());

        return response()->json($product);
    }

}
