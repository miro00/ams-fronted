import './Table.scss'

import TableHead from './TableHead'
import TableBody from './TableBody'

export default function Table() {

  const columns = [ // TODO: temp
    {
      column_id: 0,
      column_name: '№',
      column_size: 'auto'
    },
    {
      column_id: 1,
      column_name: 'Номер',
      column_size: 'auto'
    },
    {
      column_id: 2,
      column_name: 'Дата заявки',
      column_size: 'auto'
    },
    {
      column_id: 3,
      column_name: 'Клиент',
      column_size: 'auto'
    },
    {
      column_id: 4,
      column_name: 'Жалоба',
      column_size: 'auto'
    },
  ]

  const rows = [ // TODO: temp
    {
      row_id: 0,
    }
  ]

  return (
    <table className="Table">
      <TableHead columns={columns} />
      <TableBody rows={rows} />
    </table>
  )
  
}