<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserObject extends Model
{
    protected $table = 'user_objects';
    protected $guarded = ['id'];
}
