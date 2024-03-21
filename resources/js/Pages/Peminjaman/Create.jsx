import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function PeminjamanCreate({ auth, buku, anggota }) {
    const { data, setData, post, errors, processing } = useForm({
        buku_id: "",
        anggota_id: "",
        total: "",
        status: "",
    });

    // proses tambah data
    const tambahData = (e) => {
        e.preventDefault();
        post(route("peminjaman.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Peminjaman
                </h2>
            }
        >
            <Head title="Tambah Peminjaman" />
            <div className="py-0 sm:py-3">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-5 p-5">
                        {/* START form */}
                        <form onSubmit={tambahData} className="space-y-6">
                            <div>
                                <InputLabel
                                    htmlFor="anggota_id"
                                    value="Anggota"
                                />
                                <SelectInput
                                    name="anggota_id"
                                    id="anggota_id"
                                    placeholder="Pilih anggota"
                                    value={data.anggota_id}
                                    onChange={(e) =>
                                        setData("anggota_id", e.target.value)
                                    }
                                    required
                                >
                                    {anggota.map((data) => (
                                        <option value={data.id} key={data.id}>
                                            {data.nama}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    className="mt-2"
                                    message={errors.anggota_id}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="buku_id" value="Buku" />
                                <SelectInput
                                    name="buku_id"
                                    id="buku_id"
                                    placeholder="Pilih anggota"
                                    value={data.buku_id}
                                    onChange={(e) =>
                                        setData("buku_id", e.target.value)
                                    }
                                    required
                                >
                                    {buku.map((data) => (
                                        <option value={data.id} key={data.id}>
                                            {data.judul}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    className="mt-2"
                                    message={errors.buku_id}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="total"
                                    value="Total Pinjaman"
                                />
                                <TextInput
                                    id="total"
                                    className="mt-1 block w-full"
                                    type="number"
                                    placeholder="Masukkan total buku dipinjam"
                                    value={data.total}
                                    onChange={(e) =>
                                        setData("total", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.total}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="status"
                                    value="Status Peminjaman"
                                />
                                <SelectInput
                                    name="status"
                                    id="status"
                                    placeholder="Pilih status peminjaman"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    required
                                >
                                    <option value="Dipinjam">Dipinjam</option>
                                </SelectInput>
                                <InputError
                                    className="mt-2"
                                    message={errors.status}
                                />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <DangerButton
                                    type="button"
                                    disabled={processing}
                                    onClick={() => window.history.back()}
                                >
                                    Kembali
                                </DangerButton>
                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                >
                                    Tambah
                                </PrimaryButton>
                            </div>
                        </form>
                        {/* END form */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
