<?php

namespace App\Repository;

use Prettus\Repository\Eloquent\BaseRepository;

class UserObjectRepository extends BaseRepository {

    function model()
    {
        return "App\\Models\\UserObject";
    }
}