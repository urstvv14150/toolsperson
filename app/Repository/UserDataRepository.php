<?php

namespace App\Repository;

use Prettus\Repository\Eloquent\BaseRepository;

class UserDataRepository extends BaseRepository {

    function model()
    {
        return "App\\Models\\UserData";
    }
}