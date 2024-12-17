import React from 'react';

export const DataInRow = ({ data, difference }) => {
    let colorDiff = 'red'
    if (difference >= 0) {
        colorDiff = 'green'
    }
    return (
        <td>
            {data}
            <span style={{ color: colorDiff, float: 'right' }}>{difference + (difference === '' ? '' : '%')}</span>
        </td>
    )
}