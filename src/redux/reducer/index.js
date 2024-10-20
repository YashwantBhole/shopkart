import handleCart from './handleCart'
import {combineReducers} from  "redux"
import userReducer from './UserReducer'

const rootReducers = combineReducers({
    user: userReducer,
    handleCart,

})
export default rootReducers