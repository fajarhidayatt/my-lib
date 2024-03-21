<?php

use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\PeminjamanController;
use App\Http\Controllers\ProfileController;
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

// login
Route::middleware('guest')->group(function () {
    Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('login.post');
});

Route::middleware('auth')->group(function () {
    // menu beranda dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // menu anggota
    Route::get('/anggota', [AnggotaController::class, 'index'])->name('anggota.index');
    Route::get('/anggota/new', [AnggotaController::class, 'new'])->name('anggota.new');
    Route::post('/anggota/create', [AnggotaController::class, 'create'])->name('anggota.create');
    Route::get('/anggota/{id}', [AnggotaController::class, 'detail'])->name('anggota.detail');
    Route::patch('/anggota/{id}', [AnggotaController::class, 'update'])->name('anggota.update');
    Route::delete('/anggota/{id}/delete', [AnggotaController::class, 'delete'])->name('anggota.delete');

    // menu buku
    Route::resource('buku', BukuController::class);

    // menu peminjaman
    Route::resource('peminjaman', PeminjamanController::class);

    // menu admin profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // logout
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
