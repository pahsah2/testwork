import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
} from './reducers/productReducer'
import {
  shopListReducer,
  shopDetailsReducer,
  shopDeleteReducer,
  shopCreateReducer,
  shopUpdateReducer,
} from './reducers/shopReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  shopList: shopListReducer,
  shopDetails: shopDetailsReducer,
  shopDelete: shopDeleteReducer,
  shopCreate: shopCreateReducer,
  shopUpdate: shopUpdateReducer,
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
