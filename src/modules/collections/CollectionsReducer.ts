import COLLECTIONS from './CollectionsConstants';

const initialState = {
	list: [],
};

export default function collections(
	state = initialState,
	action: { type: string, payload: any }
) {
	switch (action.type) {
	case COLLECTIONS.CREATE:
		return {
			...state,
			list: [...state.list, action.payload.name],
		};

	case COLLECTIONS.CREATE_ITEM:
		return {
			...state,
			list: [...state.list, action.payload.name],
		};

	default:
		return state;
	}
};
