<?php

namespace App\Http\Controllers;

use App\Http\Requests\BukuRequest;
use App\Models\Buku;
use Inertia\Inertia;

class BukuController extends Controller
{
    // menampilkan semua data buku
    public function index()
    {
        $buku = Buku::all();

        return Inertia::render('Buku/Index', [
            'buku' => $buku
        ]);
    }

    // menampilkan halaman form tambah data buku
    public function create()
    {
        return Inertia::render('Buku/Create');
    }

    // proses menambahkan data buku
    public function store(BukuRequest $request)
    {
        $data = $request->validated();

        Buku::create($data);

        return redirect()->route('buku.index');
    }

    // menampilkan halaman detail data buku
    public function edit(string $id)
    {
        $detailBuku = Buku::findOrFail($id);

        return Inertia::render('Buku/Edit', [
            'buku' => $detailBuku
        ]);
    }

    // proses mengubah data buku
    public function update(BukuRequest $request, string $id)
    {
        $detailBuku = Buku::findOrFail($id);

        $data = $request->validated();

        $detailBuku->update($data);

        return redirect()->route('buku.index');
    }

    // proses menghapus data buku
    public function destroy(string $id)
    {
        $detailBuku = Buku::findOrFail($id);

        $detailBuku->delete();

        return redirect()->route('buku.index');
    }
}
