<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
	public function __construct(User $user){
		$this->user = $user;
	}
    public function getUsers(){
    	$user = $this->user->all();
        return response()->json(['data' => $user,
            'status' => Response::HTTP_OK]);
    }
    public function getUsersOrden(){
    	//donde tenga mas cantida de Pedidos 
    }
    public function getUsersCash(){
    	//donde hallan gastado la mayor cantidad 
    	// de dinero O hecho las compras mas grandes
    }
}
