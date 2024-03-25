import React from 'react'

import { RowTable } from './RowTable'

export const Table = ({
    data,
    columns,
}) => {
    return (
        <div className='divTable'>
            <table>
                <tbody>
                    <tr className='headerTable'>
                        <th></th>
                        {columns.map((column, counter) => {
                            return (
                                <th key={`column-${counter}`}>{column}</th>
                            )
                        })}

                    </tr>

                    {data.map((rowData, counter) => {
                        return (
                            <RowTable
                                key={`row-${counter}-${rowData[0]}`}
                                rowData={rowData}
                                counter={counter}
                            />
                        )
                    })}
                </tbody>
            </table >
        </div >

    )
}
