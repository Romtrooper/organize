import { connect } from 'react-redux';


import { checkTask, createTask } from 'src/store/reducer';


const mapStateToProps = (state, ownProps) => ({
  count: state[ownProps.name],
});

const mapDispatchToProps = dispatch => ({
  actions: {
    checkTask: () => {
      dispatch(checkTask());
    },
    createTask: () => {
      dispatch(createTask());
    },
  },
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);


export default ExampleContainer;
