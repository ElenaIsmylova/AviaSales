import { ADD_TICKETS } from "./tickets-actions";

export const ticketReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TICKETS:
			return action.tickets
		default: {
			return state
		}
	}
}