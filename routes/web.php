<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/sign-in', function () {
    return view('sign-in');
});
Route::get('/register', function () {
    return view('register');
});
Route::get('/checkout', function () {
    return view('checkout');
});
Route::get('/summary', function () {
    return view('summary');
});

Route::post('/register-user', [RegisterController::class, 'register']);
