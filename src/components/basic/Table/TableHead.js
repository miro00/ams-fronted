export default function TableHead(props) {
  return (
    <thead className="TableHead">
      <tr className="TableHead-row">
        {props.columns.map(column => (
          <th>
            <span>{column.column_name}</span>
          </th>
        ))}
      </tr>
    </thead>
  )
}