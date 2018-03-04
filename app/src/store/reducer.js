const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};


export const doSomething = () => ({
  type: 'DO_SOMETHING',
});
