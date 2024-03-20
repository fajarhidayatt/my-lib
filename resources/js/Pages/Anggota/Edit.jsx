import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function AnggotaEdit({ auth, anggota }) {
    const { data, setData, patch, errors, processing } = useForm({
        nama: anggota.nama,
        email: anggota.email,
        no_hp: anggota.no_hp,
        alamat: anggota.alamat,
    });

    const submit = (e) => {
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
            <Head title="Tambah Data Anggota" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-5 p-5">
                        {/* start form */}
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel htmlFor="nama" value="Nama" />
                                <TextInput
                                    id="nama"
                                    className="mt-1 block w-full"
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
                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>
                                    Ubah
                                </PrimaryButton>
                            </div>
                        </form>
                        {/* end form */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
