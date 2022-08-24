import { GET_FILTERS } from "./sidebar-actions" 

const initionState = {
	all: false,
	without: false,
	one: false,
	two: false,
	three: false,
}

export const sidebarReducer = (state = initionState, action) => {
	switch (action.type) {
		case GET_FILTERS:
			return {...state, [action.id]: action.status}
		default: {
			return state
		}
	}
}