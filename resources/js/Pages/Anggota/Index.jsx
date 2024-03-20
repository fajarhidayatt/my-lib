import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import IcPencil from "@/Components/icons/IcPencil";
import IcTrash from "@/Components/icons/IcTrash";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Anggota({ auth, anggota }) {
    const { delete: destroy } = useForm();

    const hapusData = (e, anggotaId) => {
        e.preventDefault();

        destroy(route("anggota.delete", anggotaId));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Anggota
                </h2>
            }
        >
            <Head title="Anggota" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route("anggota.new")}>
                        <PrimaryButton>+ Tambah Anggota</PrimaryButton>
                    </Link>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-5">
                        <div className="relative overflow-x-auto">
                            {/* start table anggota */}
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            No HP
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Alamat
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {anggota.map((item, index) => (
                                        <tr
                                            className="bg-white border-b "
                                            key={item.id}
                                        >
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.nama}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.no_hp}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.alamat}
                                            </td>
                                            <td className="px-6 py-4 flex items-center gap-1">
                                                <Link
                                                    href={route(
                                                        "anggota.detail",
                                                        item.id
                                                    )}
                                                >
                                                    <SecondaryButton>
                                                        <IcPencil />
                                                    </SecondaryButton>
                                                </Link>
                                                <form
                                                    onSubmit={(e) =>
                                                        hapusData(e, item.id)
                                                    }
                                                >
                                                    <DangerButton>
                                                        <IcTrash />
                                                    </DangerButton>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* end table anggota */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
