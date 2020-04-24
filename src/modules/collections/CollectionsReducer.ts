import COLLECTIONS from './CollectionsConstants';

const initialState = {
	list: {},
};

export default function collections(
	state = initialState,
	action: { type: string, payload: any }
) {
	switch (action.type) {
	case COLLECTIONS.CREATE:
		return {
			...state,
			list: Object.assign(state.list, action.payload),
		};

	case COLLECTIONS.CREATE_ITEM:
		 const { collectionId, item } = action.payload;
		return {
			...state,
			list: {
				...state.list,
				[collectionId]: {
					...state.list[collectionId],
					[item.title]: item,
				}
			}
		};

	default:
		return state;
	}
};
