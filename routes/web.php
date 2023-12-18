<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Main');
})->middleware(['auth', 'verified'])->name(' ');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/chat', function () {
    return Inertia::render('Chat');
})->middleware(['auth', 'verified'])->name('chat');

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
})->middleware(['auth', 'verified'])->name('contacts');

Route::get('/notifications', function () {
    return Inertia::render('Notifications');
})->middleware(['auth', 'verified'])->name('notifications');

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->middleware(['auth', 'verified'])->name('settings');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/accept-contact', [UserController::class, 'acceptContact'])->middleware('auth');
Route::get('/remove-contact', [UserController::class, 'removeContact'])->middleware('auth');
Route::get('/reject-contact', [UserController::class, 'rejectContact'])->middleware('auth');

Route::get('/subscribe', function () {
    return Inertia::render('Subscription');
})->middleware(['auth', 'verified'])->name('subscription');
Route::post('/subscribe', [SubscriptionController::class, 'processSubscription']);

Route::get('/billing', [SubscriptionController::class, 'billing']);

require __DIR__.'/auth.php';
