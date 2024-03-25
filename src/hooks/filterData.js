import { useState, useEffect } from 'react';

export const useCustomFilter = (datos) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const filtered = datos.filter((row, index) => {
            return row.some(cell => cell.toLowerCase().includes(lowerCaseSearchTerm));
        });

        setFilteredData(filtered);
    }, [searchTerm, datos]);

    return [searchTerm, setSearchTerm, filteredData];
}