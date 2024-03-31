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

        return Post::create([
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

    function pin(Request $request) {
        $request->validate([
            'postId' => ['exists:posts,id'],
        ]);

        // Get a pinned post
        $pinnedPost = Post::where('is_pinned', true)?->first();

        // If a pinned post exists and isnt the post the user wants to pin, then it unpinning
        if ($pinnedPost?->id !== null && $pinnedPost?->id !== intval($request->postId)) {
            $pinnedPost->is_pinned = false;
            $pinnedPost->save();
        }

        $post = Post::find($request->postId);
        $post->is_pinned = !$post->is_pinned;
        $post->save();

    }
}
