import './fly-info.css'

function FlyInfo(props) {

	function getPadTime(time) {
		return time.toString().padStart(2, '0')
	}
    
	function showStops(amt) {
		switch(amt) {
			case 0:
				return 'без пересадок'
			case 1:
				return '1 пересадка'
			default:
				return `${amt} пересадки`
		}
	}

	const {origin, destination, duration, date, stops} = props.info
	
	const durationHours = getPadTime(Math.floor(duration / 60))
	const durationMins = getPadTime(duration - durationHours * 60)

	const departureTimeHours = getPadTime(new Date(date).getHours())
	const departureTimeMins = getPadTime(new Date(date).getMinutes())

	const arrivalTime = new Date((new Date(date).getTime() + duration * 60000))
	const arrivalTimeHours = getPadTime(new Date(arrivalTime).getHours())
	const arrivalTimeMins = getPadTime(new Date(arrivalTime).getMinutes())

	const transfers = stops

  return (
		<div className="fly-info">
			<div className="fly-info__elem">
				<p className="fly-info__elem-top">
					{`${origin} – ${destination}`}
				</p>
				<p className="fly-info__elem-info">
					{`${departureTimeHours}:${departureTimeMins} – ${arrivalTimeHours}:${arrivalTimeMins}`}
				</p>
			</div>
			<div className="fly-info__elem">
				<p className="fly-info__elem-top">В пути</p>
				<p className="fly-info__elem-info">{`${durationHours}ч ${durationMins}м`}</p>
			</div>
			<div className="fly-info__elem">
				<p className="fly-info__elem-top">{showStops(transfers.length)}</p>
				<p className="fly-info__elem-info">{transfers.join(", ")}</p>
			</div>
		</div>
	);
}
  
export default FlyInfo