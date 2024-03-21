import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function PeminjamanEdit({ auth, buku, anggota, peminjaman }) {
    const { data, setData, patch, errors, processing } = useForm({
        buku_id: peminjaman.buku_id,
        anggota_id: peminjaman.anggota_id,
        total: peminjaman.total,
        status: peminjaman.status,
    });

    // proses ubah data
    const ubahData = (e) => {
        e.preventDefault();
        patch(route("peminjaman.update", peminjaman.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Peminjaman
                </h2>
            }
        >
            <Head title="Detail Peminjaman" />
            <div className="py-0 sm:py-3">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-5 p-5">
                        {/* START form */}
                        <form onSubmit={ubahData} className="space-y-6">
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
                                    disabled={
                                        peminjaman.status === "Dikembalikan"
                                    }
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
                                    placeholder="Pilih buku"
                                    value={data.buku_id}
                                    onChange={(e) =>
                                        setData("buku_id", e.target.value)
                                    }
                                    required
                                    disabled={
                                        peminjaman.status === "Dikembalikan"
                                    }
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
                                <InputLabel htmlFor="total" value="Total" />
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
                                    disabled={
                                        peminjaman.status === "Dikembalikan"
                                    }
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
                                    disabled={
                                        peminjaman.status === "Dikembalikan"
                                    }
                                >
                                    <option value="Dipinjam">Dipinjam</option>
                                    <option value="Dikembalikan">
                                        Dikembalikan
                                    </option>
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
                                    disabled={
                                        processing ||
                                        peminjaman.status === "Dikembalikan"
                                    }
                                >
                                    Ubah
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
