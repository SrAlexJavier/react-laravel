import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Tile from '@/Components/Tiles';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between'>

                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Sistema de Gestión Integrado
                    </h2>


                </div>

            }
        >
            <Head title="ERP" />
            <div className='container mt-4'>
            <div className='row'>
                <div className='col-4'>
                    <Link href={route('project.index')} className='tile d-flex justify-content-center'>
                        Proyectos
                    </Link>
                </div>

            </div>
            </div>



        </AuthenticatedLayout>
    );
}
