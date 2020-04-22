import { connect } from 'react-redux';
import Collection from './Collection';


function mapStateToProps(state) {
	return {
		collections: Object.keys(state.collections.list),
	};
}
export default connect(mapStateToProps, null)(Collection);
