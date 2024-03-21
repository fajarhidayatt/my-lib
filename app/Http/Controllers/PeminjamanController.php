<?php

namespace App\Http\Controllers;

use App\Http\Requests\PeminjamanRequest;
use App\Models\Anggota;
use App\Models\Buku;
use App\Models\Peminjaman;
use Carbon\Carbon;
use Inertia\Inertia;

class PeminjamanController extends Controller
{
    // menampilkan semua data peminjaman
    public function index()
    {
        $peminjaman = Peminjaman::with(['anggota', 'buku'])->get();

        return Inertia::render('Peminjaman/Index', [
            'peminjaman' => $peminjaman
        ]);
    }

    // menampilkan halaman form tambah data peminjaman
    public function create()
    {
        $buku = Buku::all();
        $anggota = Anggota::all();

        return Inertia::render('Peminjaman/Create', [
            'buku' => $buku,
            'anggota' => $anggota,
        ]);
    }

    // proses menambahkan data peminjaman
    public function store(PeminjamanRequest $request)
    {
        $data = $request->validated();
        $data['peminjaman'] = Carbon::now('Asia/Jakarta')->toDateTimeString(); // set tanggal peminjaman pada waktu saat ini

        // ambil data buku yang dipinjam
        $buku = Buku::find($data['buku_id']);

        // jika stok buka kurang dari total dipinjam, maka munculkan eror validasi
        if ($buku['stok'] < $data['total']) {
            return back()->withErrors(['total' => 'Stok buku tidak cukup'])->withInput();
        }

        // update stok buku 
        $buku['stok'] = $buku['stok'] - $data['total'];
        $buku->save();

        Peminjaman::create($data);

        return redirect()->route('peminjaman.index');
    }

    // menampilkan halaman detail data peminjaman
    public function edit(string $id)
    {
        $buku = Buku::all();
        $anggota = Anggota::all();
        $detailPeminjaman = Peminjaman::findOrFail($id);

        return Inertia::render('Peminjaman/Edit', [
            'peminjaman' => $detailPeminjaman,
            'buku' => $buku,
            'anggota' => $anggota,
        ]);
    }

    // proses mengubah data peminjaman
    public function update(PeminjamanRequest $request, string $id)
    {
        $detailPeminjaman = Peminjaman::findOrFail($id);

        $data = $request->validated();

        // jika status peminjaman diubah menjadi 'Dikembalikan', maka set tanggal 'pengembalian' dan update stok buku
        if ($data['status'] === 'Dikembalikan') {
            $data['pengembalian'] = Carbon::now('Asia/Jakarta')->toDateTimeString(); // set tanggal pengembalian pada waktu saat ini

            $buku = Buku::find($data['buku_id']);

            // update stok buku 
            $buku['stok'] = $buku['stok'] + $data['total'];
            $buku->save();
        }

        $detailPeminjaman->update($data);

        return redirect()->route('peminjaman.index');
    }
}
