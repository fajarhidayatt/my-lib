<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnggotaRequest;
use App\Models\Anggota;
use Inertia\Inertia;

class AnggotaController extends Controller
{
    // menampilkan semua data anggota
    public function index()
    {
        $anggota = Anggota::all();

        return Inertia::render('Anggota/Index', [
            'anggota' => $anggota
        ]);
    }

    // menampilkan halaman form tambah data anggota
    public function new()
    {
        return Inertia::render('Anggota/Create');
    }

    // proses tambah data anggota
    public function create(AnggotaRequest $request)
    {
        $data = $request->validated();

        Anggota::create($data);

        return redirect()->route('anggota.index');
    }

    // menampilkan halaman detail data anggota
    public function detail(string $id)
    {
        $detailAnggota = Anggota::findOrFail($id);

        return Inertia::render('Anggota/Edit', [
            'anggota' => $detailAnggota
        ]);
    }

    // proses ubah detail data anggota
    public function update(AnggotaRequest $request, string $id)
    {
        $detailAnggota = Anggota::findOrFail($id);

        $data = $request->validated();

        $detailAnggota->update($data);

        return redirect()->route('anggota.index');
    }

    // proses hapus data anggota
    public function delete(string $id)
    {
        $detailAnggota = Anggota::findOrFail($id);

        $detailAnggota->delete();

        return redirect()->route('anggota.index');
    }
}
