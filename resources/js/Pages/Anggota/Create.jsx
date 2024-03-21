import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function AnggotaCreate({ auth }) {
    const { data, setData, post, errors, processing } = useForm({
        nama: "",
        email: "",
        no_hp: "",
        alamat: "",
    });

    // proses tambah data
    const tambahData = (e) => {
        e.preventDefault();
        post(route("anggota.create"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Anggota
                </h2>
            }
        >
            <Head title="Tambah Anggota" />
            <div className="py-0 sm:py-3">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-5 p-5">
                        {/* START form */}
                        <form onSubmit={tambahData} className="space-y-6">
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
