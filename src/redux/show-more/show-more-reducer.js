export const showMoreReducer = (state = 5, action) => {
	switch (action.type) {
		case 'SHOW_MORE':
			return (state + 5)
		default: {
			return state
		}
	}
}