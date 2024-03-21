<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BukuRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    // validasi input untuk data buku
    public function rules(): array
    {
        return [
            'judul' => ['required', 'min:3', 'max:255'],
            'penulis' => ['required', 'min:3', 'max:255'],
            'stok' => ['required', 'numeric', 'integer']
        ];
    }

    // custom message untuk error validasi
    public function messages()
    {
        return [
            'required' => ':attribute tidak boleh kosong',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maksimal :max karakter',
            'numeric' => ':attribute harus berupa angka',
            'integer' => ':attribute harus integer',
        ];
    }

    // ubah nama default attribute
    public function attributes(): array
    {
        return [
            'judul' => 'Judul Buku',
            'penulis' => 'Penulis Buku',
            'stok' => 'Stok Buku',
        ];
    }
}
