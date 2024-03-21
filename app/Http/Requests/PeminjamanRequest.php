<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PeminjamanRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    // validasi input untuk data peminjaman
    public function rules(): array
    {
        return [
            'anggota_id' => ['required', 'exists:anggotas,id'],
            'buku_id' => ['required', 'exists:bukus,id'],
            'total' => ['required', 'numeric', 'integer', 'min:1'],
            'status' => ['required', 'in:Dipinjam,Dikembalikan']
        ];
    }

    // custom message untuk error validasi
    public function messages()
    {
        return [
            'required' => ':attribute tidak boleh kosong',
            'exist' => 'Data :attribute tidak terdaftar',
            'numeric' => ':attribute harus berupa angka',
            'integer' => ':attribute harus integer',
            'in' => ':attribute hanya bisa diisi dengan :values',
            'min' => ':attribute minimal :min'
        ];
    }

    // ubah nama attribute
    public function attributes(): array
    {
        return [
            'anggota_id' => 'Anggota',
            'buku_id' => 'Buku',
            'total' => 'Total peminjaman',
            'status' => 'Status peminjaman',
        ];
    }
}
