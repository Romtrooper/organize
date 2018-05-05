const FORM = {
  SAVE_TASK: 'SAVE_TASK',
};

const initialState = {
  tasks: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM.SAVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
};

export const saveTask = task => ({
  type: FORM.SAVE_TASK,
  payload: task,
});
