import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import IcPencil from "@/Components/icons/IcPencil";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Peminjaman({ auth, peminjaman }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Master Peminjaman
                </h2>
            }
        >
            <Head title="Peminjaman" />
            <div className="py-3 sm:py-5">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <Link href={route("peminjaman.create")}>
                        <PrimaryButton>+ Tambah Peminjaman</PrimaryButton>
                    </Link>
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-3 sm:mt-5">
                        <div className="relative overflow-x-auto">
                            {/* START tabel peminjaman */}
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Anggota
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Buku
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Dipinjam
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Peminjaman
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Pengembalian
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {peminjaman.length > 0 ? (
                                        peminjaman.map((data, index) => (
                                            <tr
                                                className="bg-white border-b "
                                                key={data.id}
                                            >
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.anggota.nama}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.buku.judul}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.total}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.status}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.peminjaman}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {data.pengembalian ?? "-"}
                                                </td>
                                                <td className="px-6 py-4 flex items-center gap-1">
                                                    <Link
                                                        href={route(
                                                            "peminjaman.edit",
                                                            data.id
                                                        )}
                                                    >
                                                        <SecondaryButton>
                                                            <IcPencil />
                                                        </SecondaryButton>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                className="text-center font-medium py-5"
                                                colSpan={8}
                                            >
                                                Belum ada data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {/* END tabel peminjaman */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
