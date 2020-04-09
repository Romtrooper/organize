import LISTS from './ListsConstants';

const initialState = {
	listsCollection: [],
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
	case LISTS.CREATE:
		return {
			...state,
			listsCollection: [...state.listsCollection, action.payload.listName],
		};

	default:
		return state;
	}
};
