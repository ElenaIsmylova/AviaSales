import { combineReducers } from "redux"

import { ticketReducer } from "./tickets/tickets-reduser"
import { showMoreReducer } from "./show-more/show-more-reducer"
import { topFiltersReducer } from "./top-filters/top-filters-reducers"
import { sidebarReducer } from "./sidebar/sidebar-reduser"

export const rootReducer = combineReducers({
	tickets: ticketReducer,
	showMore: showMoreReducer,
	topFilters: topFiltersReducer,
	sidebar: sidebarReducer
})