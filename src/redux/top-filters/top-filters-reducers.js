import { SORTED_TICKETS } from "./top-filters-actions" 

export const topFiltersReducer = (state = true, action) => {
	switch (action.type) {
		case SORTED_TICKETS:
			return action.typeSort
		default: {
			return state
		}
	}
}