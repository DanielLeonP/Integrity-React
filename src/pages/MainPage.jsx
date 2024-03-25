import React from 'react'
import { Table } from '../components/Table'
import { columns, data } from '../database/data'
import { useCustomFilter } from '../hooks/filterData';
import { LogoutButton } from '../components/LogoutButton';

export const MainPage = () => {
    const [searchTerm, setSearchTerm, filteredData] = useCustomFilter(data);

    return (
        <>
            <LogoutButton />
            <div className='container'>
                <div className='title'>Prueba Integrity</div>
                <input
                    className='search-bar'
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <div className='tableContainer' >
                    <Table
                        data={filteredData}
                        columns={columns}
                    />
                </div>

            </div>
        </>
    )
}
