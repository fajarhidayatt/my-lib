import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-3 sm:py-5">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-md sm:rounded-lg mt-3 sm:mt-5 px-2 py-5 sm:px-5">
                        <h2 className="text-center text-base sm:text-2xl font-medium text-gray-900">
                            Selamat Datang
                        </h2>
                        <h1 className="text-center text-2xl sm:text-4xl font-medium text-gray-900 mt-1 sm:mt-3">
                            Sistem Manajemen Perpustakan
                        </h1>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
