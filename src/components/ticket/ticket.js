import FlyInfo from '../fly-info/fly-info'

import './ticket.css'

function Ticket(props) {

	const {ticket} = props
	const price = ticket.price

	const infoElems = ticket.segments.map((item, ind) => <FlyInfo key={ind} info={item} />)

	return (
		<div className="ticket">
			<div className="ticket__cap">
				<div className="ticket__price">{`${price.toLocaleString()} Р`}</div>
				<img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo" className="ticket_logo" />
			</div>

			{infoElems}
		</div>
	);
}
  
export default Ticket