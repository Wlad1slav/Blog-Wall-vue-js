<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Get all posts
Route::get('/posts', [PostController::class, 'getAll']);

// Create a new post
Route::post('/post/create', [PostController::class, 'store']);

// Delete a certain post
Route::post('/post/delete', [PostController::class, 'delete']);
