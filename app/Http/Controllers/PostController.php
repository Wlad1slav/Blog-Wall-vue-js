<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    function store(Request $request) {
        $request->validate([
            'postTitle' => ['max:255'],
            'postContent' => ['required'],
        ]);

        Post::create([
           'title' => $request->postTitle ?? null,
           'content' => $request->postContent
        ]);
    }

    function delete(Request $request) {
        $request->validate([
            'postId' => ['exists:posts,id'],
        ]);

        Post::find($request->postId)->delete();
    }

    function getAll() {
        return Post::all();
    }
}
