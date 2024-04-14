<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'posts';
    protected $fillable = [
        'title',
        'content',
        'is_draft',
    ];

    public function likes()
    {   // Get all post's likes
        return $this->hasMany(Like::class, 'post_id');
    }

    public function dislikes()
    {   // Get all post's dislikes
        return $this->hasMany(Dislike::class, 'post_id');
    }
}
