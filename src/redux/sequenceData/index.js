import features from './features';
import sequence from './sequence';
import circular from './circular';
import translations from './translations';
import combineReducers from '../../../../redux/utils/combineReducers';
export * from './sharedActionCreators';

export default combineReducers({
	features,
	sequence,
	circular,
	translations
})