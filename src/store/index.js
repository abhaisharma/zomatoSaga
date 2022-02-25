import { createStore, applyMiddleware } from 'redux'
import  {rootReducer} from '../store/reducers'

import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga'


const sagaMiddleware = createSagaMiddleware()

export const getStore = () => {
    
  const store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(
          sagaMiddleware
        )
      )
    )

    sagaMiddleware.run(rootSaga)    
    return store;
   };
