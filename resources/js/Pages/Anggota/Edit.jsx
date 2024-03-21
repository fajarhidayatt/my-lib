import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function AnggotaEdit({ auth, anggota }) {
    const { data, setData, patch, errors, processing } = useForm({
        nama: anggota.nama,
        email: anggota.email,
        no_hp: anggota.no_hp,
        alamat: anggota.alamat,
    });

    // proses ubah data
    const ubahData = (e) => {
        e.preventDefault();
        patch(route("anggota.update", anggota.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Anggota
                </h2>
            }
        >
            <Head title="Detail Anggota" />
            <div className="py-0 sm:py-3">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-5 p-5">
                        {/* START form */}
                        <form onSubmit={ubahData} className="space-y-6">
                            <div>
                                <InputLabel htmlFor="nama" value="Nama" />
                                <TextInput
                                    id="nama"
                                    className="mt-1 block w-full"
                                    placeholder="Masukkan nama anggota"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.nama}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    placeholder="Masukkan email anggota"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.email}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="no_hp" value="No HP" />
                                <TextInput
                                    id="no_hp"
                                    type="number"
                                    className="mt-1 block w-full"
                                    placeholder="Masukkan no HP anggota"
                                    value={data.no_hp}
                                    onChange={(e) =>
                                        setData("no_hp", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.no_hp}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="alamat" value="Alamat" />
                                <TextInput
                                    id="alamat"
                                    type="text"
                                    className="mt-1 block w-full"
                                    placeholder="Masukkan alamat anggota"
                                    value={data.alamat}
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.alamat}
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
