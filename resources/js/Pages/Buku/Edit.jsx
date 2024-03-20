import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function BukuEdit({ auth, buku }) {
    const { data, setData, patch, errors, processing } = useForm({
        judul: buku.judul,
        penulis: buku.penulis,
        stok: buku.stok,
    });

    // proses ubah data
    const ubahData = (e) => {
        e.preventDefault();
        patch(route("buku.update", buku.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Detail Buku
                </h2>
            }
        >
            <Head title="Detail Buku" />
            <div className="py-0 sm:py-3">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-5 p-5">
                        {/* START form */}
                        <form onSubmit={ubahData} className="space-y-6">
                            <div>
                                <InputLabel htmlFor="judul" value="Judul" />
                                <TextInput
                                    id="judul"
                                    className="mt-1 block w-full"
                                    placeholder="Masukkan nama buku"
                                    value={data.judul}
                                    onChange={(e) =>
                                        setData("judul", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.judul}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="penulis" value="Penulis" />
                                <TextInput
                                    id="penulis"
                                    className="mt-1 block w-full"
                                    placeholder="Masukkan nama penulis"
                                    value={data.penulis}
                                    onChange={(e) =>
                                        setData("penulis", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.penulis}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="stok" value="Stok" />
                                <TextInput
                                    id="stok"
                                    className="mt-1 block w-full"
                                    type="number"
                                    placeholder="Masukkan jumlah stok buku"
                                    value={data.stok}
                                    onChange={(e) =>
                                        setData("stok", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.stok}
                                />
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <DangerButton
                                    disabled={processing}
                                    onClick={() => window.history.back()}
                                >
                                    Kembali
                                </DangerButton>
                                <PrimaryButton disabled={processing}>
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
