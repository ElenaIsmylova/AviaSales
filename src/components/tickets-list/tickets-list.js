import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Ticket from '../ticket/ticket'
import { NoTicketMessage } from '../no-ticket-message/no-ticket-message'

import './tickets-list.css'

function Tickets() {

	const allTickets = useSelector(state => state.tickets)
	const showMore = useSelector(state => state.showMore)
	const sotrStatus = useSelector(state => state.topFilters)
	const getFiltered = useSelector(state => state.sidebar)

	const [ partTickets, setPartTickets ] = useState([])
	const [ elements, setElements ] = useState()

	let ticketNumber = 0

	useEffect(() => {
			
		if (allTickets.length > 0) {

			let sortedTickets = [...allTickets]
				
			const {without, one, two, three, all} = getFiltered
			if (without === false && one === false && two === false && three === false && all === false) {
				sortedTickets = []
			} else if (without === true && one === false && two === false && three === false && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0))
			} else if (without === false && one === true && two === false && three === false && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1))
			} else if (without === false && one === false && two === true && three === false && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2))
			} else if (without === false && one === false && two === false && three === true && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3))
			} else if(one === true && two === false && three === false && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length <= 1 && ticket.segments[1].stops.length <= 1))
			} else if(two === true && three === false && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length <= 2 && ticket.segments[1].stops.length <= 2))
			} else if(three === true && all === false) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length <= 3 && ticket.segments[1].stops.length <= 3))
			} else if(all === true) {
				sortedTickets = allTickets.filter(ticket => (ticket.segments[0].stops.length <= 3 && ticket.segments[1].stops.length <= 3))
			}

			if (sotrStatus) {
				sortedTickets.sort((a, b) => a.price - b.price)
			} else if (!sotrStatus) {
				sortedTickets.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))
			}
				
			setPartTickets([...sortedTickets.slice(0, showMore)])
		}
	}, [allTickets, sotrStatus, showMore, getFiltered])


	useEffect(() => {
		if(partTickets.length > 0) {
			setElements(partTickets.map((item) => <Ticket key={`${ticketNumber++}`} ticket={item} />))
		} else {
			setElements(<NoTicketMessage />)
		}
	}, [partTickets])

	return (
		<div className="tickets-list">
			{elements}
		</div>
	)
}
  
export default Tickets