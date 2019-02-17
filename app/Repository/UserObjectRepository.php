<?php

namespace App\Repository;

use Prettus\Repository\Eloquent\BaseRepository;

class PostRepository extends BaseRepository {

    function model()
    {
        return "App\\Models\\UserObject";
    }
}