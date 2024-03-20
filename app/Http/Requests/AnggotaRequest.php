<?php

namespace App\Http\Requests;

use App\Models\Anggota;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AnggotaRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    // validasi input untuk data anggota
    public function rules(): array
    {
        return [
            'nama' => ['required', 'min:3', 'max:255'],
            'email' => ['required', 'email', Rule::unique(Anggota::class)->ignore($this->route('id'))],
            'no_hp' => ['required', 'numeric', 'min_digits:10', 'max_digits:12'],
            'alamat' => ['required', 'min:5'],
        ];
    }

    // custom message untuk error validasi
    public function messages()
    {
        return [
            'required' => ':attribute tidak boleh kosong',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maksimal :max karakter',
            'min_digits' => ':attribute minimal :min angka',
            'max_digits' => ':attribute maksmal :max angka',
            'email' => ':attribute tidak valid',
            'numeric' => ':attribute harus berupa angka',
            'unique' => 'nama :attribute telah digunakan'
        ];
    }
}
