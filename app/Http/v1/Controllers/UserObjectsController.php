<?php

namespace App\Http\v1\Controllers;

use Exception;
use App\Models\UserObject;
use Illuminate\Support\Facades\Log;
use App\Repository\UserObjectRepository;
use Symfony\Component\HttpFoundation\Request;

class UserObjectsController
{
    public function __construct(UserObject $UserObject,UserObjectRepository $UserObjectRepository)
    {
        $this->UserObject =$UserObject;
        $this->UserObjectRepository = $UserObjectRepository;
    }



    public function submitObject(Request $request){
    try{
        Log::info('request => ' . print_r($request->input->detail,true));
        $this->UserObjectRepository->create([
            'title' => $request->title,
            'text' => $request->text,
            'img' => $request->img,
            'footer' => $request->footer,
            'detail' => $request->detail,
            'createdatetime' => $request->createdatetime,
        ]);
        return $request;
    } catch(Exception $e) {
        Log::error('error :' . $e);
    }

    }
}
