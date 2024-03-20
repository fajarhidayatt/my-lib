<?php

namespace Database\Seeders;

use App\Models\Anggota;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnggotaSeeder extends Seeder
{
    // membuat initial data untuk table `anggota`
    public function run(): void
    {
        $anggota = [
            [
                'nama' => 'Budi',
                'email' => 'budi@gmail.com',
                'no_hp' => '082937281921',
                'alamat' => 'Bantul'
            ],
            [
                'nama' => 'Andi',
                'email' => 'andi@gmail.com',
                'no_hp' => '089273819212',
                'alamat' => 'Sleman'
            ],
        ];

        foreach ($anggota as $item) {
            Anggota::create($item);
        }
    }
}
