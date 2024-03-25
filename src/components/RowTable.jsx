import React, { useState, useEffect } from 'react'

export const RowTable = ({
    rowData,
    counter
}) => {

    return (
        <tr>
            <th>{counter + 1}</th>
            {rowData.map((cell, counter) => {
                return (
                    <th key={`cell-${counter}-cell`}>
                        {cell}
                    </th>
                )
            })}
        </tr >

    )
}
