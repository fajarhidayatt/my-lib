<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // membuat model untuk tabel `peminjaman`
        Schema::create('peminjamans', function (Blueprint $table) {
            $table->id();

            $table->integer('anggota_id');
            $table->integer('buku_id');
            $table->unsignedInteger('total')->default(0);
            $table->enum('status', ['Dipinjam', 'Dikembalikan'])->default('Dipinjam');
            $table->dateTime('peminjaman');
            $table->dateTime('pengembalian')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peminjamans');
    }
};
