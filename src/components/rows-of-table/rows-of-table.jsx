import React from 'react';
import { useState } from 'react';
import { DataInRow } from '../data-in-row/data-in-row';
import { GraphInRow } from '../graph-in-row/graph-in-row';

export const RowsOfTable = ({ id, dataHeader, dataInfo, datesInfo, dataLength }) => {
    const [display, setDisplay] = useState([Array(dataLength).fill(0)])

    function showGraph(id) {
        const nextDisplay = [...display];
        nextDisplay[id] == 0 ? nextDisplay[id] = 1 : nextDisplay[id] = 0;
        setDisplay(nextDisplay);
    }

    // подсчет роста/падения между днями
    let arrayOfDifferences = ['']
    const dataNumber = dataInfo.map(Number)
    for (let i = 1; i < dataNumber.length; i++) {
        // подсчет процентов
        arrayOfDifferences[i] = 100 - Math.round(dataNumber[i] / dataNumber[i - 1] * 100)
    }

    // список числовых элементов таблицы
    const elementsListOfData = dataInfo.map((data, ind) =>
        <DataInRow key={ind} data={data} difference={arrayOfDifferences[ind]} />
        , arrayOfDifferences)

    // объединение заголовка и числовых данных
    const headingAndData =
        <tr key={`header${id}`}
            onClick={() => showGraph(id)}>
            <th scope='row'>
                {dataHeader}
            </th>
            {elementsListOfData}
        </tr>

    const graphOfData =
        <GraphInRow
            key={`graph${id}`}
            length={elementsListOfData.length + 1}
            dataInfo={dataInfo}
            displayGraph={display[id]}
            dateDates={datesInfo}
        />

    return ([headingAndData, graphOfData])
}