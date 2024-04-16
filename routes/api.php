<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\PostReactionsController;
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

// Pinning a certain post
Route::post('/post/pin', [PostController::class, 'pin']);

// Liking & Disliking post
Route::post('/post/react', [PostReactionsController::class, 'store']);
Route::get('/post/react', [PostReactionsController::class, 'store']);

// Get post's reactions
Route::get('/post/reactions', [PostReactionsController::class, 'get']);