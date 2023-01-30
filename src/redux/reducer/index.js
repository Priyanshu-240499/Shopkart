import {combineReducers} from "redux";
import filteredData from "./filteredData";
import ConstAllData from "./ConstAllData";
import CartData from "./cartData";
const rootReducer =combineReducers({
    filteredData:filteredData,
    ConstAllData:ConstAllData,
    CartData:CartData
})
export default rootReducer;