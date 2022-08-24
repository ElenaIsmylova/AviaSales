import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { sortedTickets } from "../../redux/top-filters/top-filters-actions"

import './top-filters.css'

function TopFilters() {
	const dispatch = useDispatch()
	const sorting = useSelector(state => state.topFilters)
	const [cheapest, setCheapest] = useState('active')
	const [fastest, setFastest] = useState('')

	useEffect(() => {
		if (sorting) {
			setCheapest('active')
			setFastest('')
		} else {
			setCheapest('')
			setFastest('active')
		}
	}, [sorting])

	return (
		<div className="top-filter">
			<div className={`top-filters__flight ${cheapest}`} onClick={() => dispatch(sortedTickets(true))}>
				Самый дешевый
			</div>
			<div className={`top-filters__flight ${fastest}`} onClick={() => dispatch(sortedTickets(false))}>
				Самый быстрый
			</div>
		</div>
	);
}
  
export default TopFilters