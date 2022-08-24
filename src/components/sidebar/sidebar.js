import { useDispatch } from 'react-redux/es/exports'
import { getFilters } from '../../redux/sidebar/sidebar-actions'

import './sidebar.css'

function Sidebar() {
	const dispatch = useDispatch()

	const catchChecker = (e) => {
		const filter = e.target
		dispatch(getFilters(filter.id, filter.checked,))
	}

	return (
		<aside className="sidebar">
			<h2 className='sidebar__header'>Количество пересадок</h2>
			<form className='sidebar__form'>
				<label className="sidebar__label">
					<input 
						id="all"
						type="checkbox" 
						className="sidebar__input visually-hidden" 
						onClick={(e) => catchChecker(e)}/>
					<span className="checker"></span>
					Все
				</label>
				<label className="sidebar__label">
					<input 
						id="without" 
						type="checkbox" 
						className="sidebar__input visually-hidden" 
						onClick={(e) => catchChecker(e)}/>
					<span className="checker"></span>
					Без пересадок
				</label>
				<label className="sidebar__label">
					<input 
						id="one" 
						type="checkbox" 
						className="sidebar__input visually-hidden" 
						onClick={(e) => catchChecker(e)}/>
					<span className="checker"></span>
					1 пересадка
				</label>
				<label className="sidebar__label">
					<input 
						id="two" 
						type="checkbox" 
						className="sidebar__input visually-hidden" 
						onClick={(e) => catchChecker(e)}/>
					<span className="checker"></span>
					2 пересадки
				</label>
				<label className="sidebar__label">
					<input 
						id="three" 
						type="checkbox" 
						className="sidebar__input visually-hidden" 
						onClick={(e) => catchChecker(e)}/>
					<span className="checker"></span>
					3 пересадки
				</label>
			</form>
		</aside>
	)
}
  
export default Sidebar