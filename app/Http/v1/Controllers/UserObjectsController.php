<?php

namespace App\Http\v1\Controllers;

use App\Models\UserObject;
use Symfony\Component\HttpFoundation\Request;

class UserObjectsController
{
    public function __construct(UserObject $UserObject)
    {
        $this->UserObject =$UserObject;
    }



    public function submitObject(Request $request){
        UserObject::create([
            'title' => $request->title,
            'text' => $request->text,
            'img' => $request->img,
            'footer' => $request->footer,
            'detail' => $request->detail,
            'createdatetime' => $request->createdatetime,
        ]);
        return $request;

    }
}
