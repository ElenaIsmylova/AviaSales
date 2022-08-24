import './no-ticket-message.css'

export const NoTicketMessage = () => {
	return (
		<div className='message'>
			<div>Рейсов, подходящих под заданные фильтры, не найдено.</div>
			<div>Чтобы получить информацию по билетам, выберите один из фильтров на панели слева.</div>
		</div>
	)
}