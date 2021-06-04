import './Incidents.scss'
import ModuleOptions from '../../basic/ModuleOptions/ModuleOptions'
import Table from '../../basic/Table/Table'

export default function Incidents() {

  const buttons = [ // TODO: временное решение
    {
      button_id: 0,
      button_title: 'Создать',
      button_icon: 'database_add.png'
    },
    {
      button_id: 1,
      button_title: 'Удалить',
      button_icon: 'database_delete.png'
    }
  ]

  return (
    <div className="Incidents">
      <ModuleOptions buttonsData={buttons} />
      <Table />
    </div>
  )
}