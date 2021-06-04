import TableRow from './TableRow'

export default function TableBody(props) {
  return (
    <tbody className="TableBody">
      {/* {props.orders.map(order => (
        <TableRow 
          key={order.id}
          orderId={order.id}
          orderCode={order.orderCode}
          orderDate={order.orderDate}
          client={order.client}
          orderComplaint={order.complaint}
        />
      ))} */}
    </tbody>
  )
}