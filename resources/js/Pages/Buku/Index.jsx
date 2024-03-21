import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import IcPencil from "@/Components/icons/IcPencil";
import IcTrash from "@/Components/icons/IcTrash";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Buku({ auth, buku }) {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [bukuId, setBukuId] = useState(null);

    const { delete: destroy, processing } = useForm();

    // menampilkan modal konfirmasi hapus data
    const konfirmasiHapusData = (id) => {
        setBukuId(id);
        setConfirmDelete(true);
    };

    // proses hapus data
    const hapusData = (e) => {
        e.preventDefault();
        destroy(route("buku.destroy", bukuId), {
            onSuccess: () => setConfirmDelete(false), // close modal ketika berhasil
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Master Buku
                </h2>
            }
        >
            <Head title="Buku" />
            <div className="py-3 sm:py-5">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <Link href={route("buku.create")}>
                        <PrimaryButton>+ Tambah Buku</PrimaryButton>
                    </Link>
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-3 sm:mt-5">
                        <div className="relative overflow-x-auto">
                            {/* START tabel buku */}
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Judul
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Penulis
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Stok
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buku.length > 0 ? (
                                        buku.map((data, index) => (
                                            <tr
                                                className="bg-white border-b "
                                                key={data.id}
                                            >
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.judul}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.penulis}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.stok}
                                                </td>
                                                <td className="px-6 py-4 flex items-center gap-1">
                                                    <Link
                                                        href={route(
                                                            "buku.edit",
                                                            data.id
                                                        )}
                                                    >
                                                        <SecondaryButton>
                                                            <IcPencil />
                                                        </SecondaryButton>
                                                    </Link>
                                                    <DangerButton
                                                        onClick={() =>
                                                            konfirmasiHapusData(
                                                                data.id
                                                            )
                                                        }
                                                    >
                                                        <IcTrash />
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                className="text-center font-medium py-5"
                                                colSpan={5}
                                            >
                                                Belum ada data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {/* END tabel buku */}
                        </div>
                    </div>
                </div>
            </div>

            {/* modal alert delete data */}
            <Modal show={confirmDelete} onClose={() => setConfirmDelete(false)}>
                <form onSubmit={hapusData} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Hapus Buku
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Apakah kamu yakin ingin menghapus data buku ini?
                    </p>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton
                            onClick={() => setConfirmDelete(false)}
                        >
                            Batal
                        </SecondaryButton>
                        <DangerButton className="ms-3" disabled={processing}>
                            Hapus
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
