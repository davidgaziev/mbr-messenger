<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/contacts', [UserController::class, 'index']);

Route::post('/make-request', [RequestController::class, 'setRequest']);

Route::get('/notifications', [NotificationsController::class, 'index']);

Route::get('/has-request', [ContactController::class, 'hasRequest']);


