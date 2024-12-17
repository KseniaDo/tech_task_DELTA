import React from 'react';
import { LineChart } from '../line-chart/line-chart';

export const GraphInRow = ({ length, dataInfo, displayGraph, dateDates }) => {
    const data = {
        info: dataInfo,
        dates: dateDates
    }
    return (
        <tr style={{ display: displayGraph == 0 ? 'table-row' : 'none' }}>
            <td colSpan={length} style={{ width: '20vw', backgroundColor: 'white' }}>
                <LineChart chartData={data} />
            </td>
        </tr>
    )
}