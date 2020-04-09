import LISTS from './ListsConstants';


export function createList(listName) {
	return (dispatch) => {
		dispatch({
			type: LISTS.CREATE,
			payload: { listName },
		});
	};
}
