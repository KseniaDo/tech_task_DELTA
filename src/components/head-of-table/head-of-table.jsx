import React from 'react';
import { ColumnDate } from '../column-date/column-date';

export const HeadOfTable = ({ nameColumn }) => {
    const resultListOfDates = nameColumn.map((date, index) =>
        <ColumnDate key={index} date={date} />
    )
    return (resultListOfDates)
}