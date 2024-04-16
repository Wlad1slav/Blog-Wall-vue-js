<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

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

        return Cache::remember("likes_post_$this->id", 60*5, function () {
            return $this->hasMany(Like::class, 'post_id')->get();
        });
    }

    public function dislikes()
    {   // Get all post's dislikes
        return Cache::remember("dislikes_post_$this->id", 60*5, function () {
            return $this->hasMany(Dislike::class, 'post_id')->get();
        });
    }

    static public function pullReactionsCache($id): void
    {   // Deletes all cache related to reactions
        Cache::pull("dislikes_post_{$id}");
        Cache::pull("likes_post_{$id}");
    }

    static public function pullAllPostsCache(): void
    {   // Removes the cache from the all() method
        Cache::pull("all_posts");
    }

    static public function pullPostCache($id): void
    {   // Deletes the cache of a specific post
        Cache::pull("post_$id");
    }

    static public function findCached(int $id)
    {   // Finds a specific cached post
        return Cache::remember("post_$id", 60*60, function () use ($id) {
            return self::find($id);
        });
    }

    static public function allCached()
    {   // Gets all posts cached
        return Cache::remember("all_posts", 60*60, function () {
            return self::all();
        });
    }
}
