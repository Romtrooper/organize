import COLLECTIONS from './CollectionsConstants';


export function createCollection(name) {
	return (dispatch) => {
		dispatch({
			type: COLLECTIONS.CREATE,
			payload: { name },
		});
	};
}
