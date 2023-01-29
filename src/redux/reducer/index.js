import {combineReducers} from "redux";
import filteredData from "./reducer1";
import ConstAllData from "./reducer2";
const rootReducer =combineReducers({
    filteredData:filteredData,
    ConstAllData:ConstAllData
})
export default rootReducer;