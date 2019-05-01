<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\UserData;
use Illuminate\Support\Facades\Log;
use App\Repository\UserDataRepository;



class UserDataController
{

    public function __construct(UserData $UserData,UserDataRepository $UserDataRepository)
    {
        $this->UserData =$UserData;
        $this->UserDataRepository = $UserDataRepository;
    }
    
    public function create(Request $request){
    {
        $this->UserDataRepository->create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'phone' => $request->phone,
        ]);  
        return $request;
    }
    
}
}