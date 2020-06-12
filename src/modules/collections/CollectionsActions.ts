import COLLECTIONS from './CollectionsConstants';


export function createCollection(name: string) {
	return dispatch => {
		dispatch({
			type: COLLECTIONS.CREATE,
			payload: { [name]: {} },
		});
	};
}

export function createCollectionItem(collectionId: string, item: Object) {
	return dispatch => {
		dispatch({
			type: COLLECTIONS.CREATE_ITEM,
			payload: {
				collectionId,
				item,
			},
		});
	};
}
