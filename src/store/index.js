import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { pipe } from 'loadsh/fp'
import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers"
import rootSaga from "./sagas"

const devTools = pipe(applyMiddleware, composeWithDevTools)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, devTools(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store