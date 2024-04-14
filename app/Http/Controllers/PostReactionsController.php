<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

use App\Models\Post;

class PostReactionsController extends Controller
{

    const oppositeReactions = [
        // Reactions that are opposite to each other are needed in order
        // to make sure that they do not exist together at the same time
        'Like' => 'Dislike',
        'Dislike' => 'Like'
    ];

    function get(Request $request)
    {   // A method that returns all post reactions
        $request->validate([
            'postId' => ['exists:posts,id'],
        ]);

        return response()->json($this->reactions($request));
    }

    function store(Request $request)
    {   // A method for creating a new reaction (like or dislike) to a post
        $request->validate([
            'postId' => ['exists:posts,id'],
        ]);

        // The reaction model that is created
        $model = "App\Models\\$request->model";

        // If the like exists, it is deleted
        $reaction = $model::where('post_id', $request->postId);
        if ($reaction->exists())
            $reaction->delete();

        // If the curse does not exist, then it is created
        else {
            $model::firstOrCreate([
                'post_id' => $request->postId,
                'visitor_ip' => $request->ip()
            ]);

            // The opposite reaction to the same post is removed
            $oppositeModel = 'App\Models\\' . self::oppositeReactions[$request->model];
            $oppositeModel::where('post_id', $request->postId)->delete();
        }

        return response()->json($this->reactions($request));
    }

    private function reactions(Request $request)
    {   // A method that returns all post reactions (For private use)
        return [
            'likes' => Post::find($request->postId)->likes->count(),
            'dislikes' => Post::find($request->postId)->dislikes->count(),
        ];
    }
}
