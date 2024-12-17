import './App.css'
import { HeadOfTable } from './components/head-of-table/head-of-table'
import { RowsOfTable } from './components/rows-of-table/rows-of-table'
import Chart from 'chart.js/auto'
import { LineChart } from './components/line-chart/line-chart'
import { dateHeaders, tableData } from './data/data'

function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope='col'>Показатель</th>
            <HeadOfTable nameColumn={dateHeaders} />
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((rowData) =>
            <RowsOfTable
              key={rowData.id}
              id={rowData.id}
              dataHeader={rowData.parameter}
              dataInfo={rowData.information}
              datesInfo={dateHeaders}
              dataLength={tableData.length}
            />
          )}
        </tbody>
      </table>
    </>
  )
}

export default App