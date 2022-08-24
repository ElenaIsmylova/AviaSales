import { useDispatch } from 'react-redux'
import { showMoreAction } from '../../redux/show-more/show-more-actions'

import './show-more.css'

function ShowMore() {
	const dispatch = useDispatch()

	return (
		<button 
			className="btn" onClick={() => dispatch(showMoreAction)}>
				Показать еще 5 билетов!
		</button>
	);
}
  
export default ShowMore