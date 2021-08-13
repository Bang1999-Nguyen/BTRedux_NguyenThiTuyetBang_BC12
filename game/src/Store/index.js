import {createStore, combineReducers} from 'redux'
import GameOnline from './reducers/gameOnline';

// Khởi tạo root reducer
const rootReducer = combineReducers({
   GameOnline,
});


// Khởi tạo store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;