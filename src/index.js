import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

fbConfig.firestore();

const store = createStore(rootReducer,  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore })),
    reduxFirestore(fbConfig)
  ));
  
  
  const rrfConfig = {
    userProfile: 'users',
    // attachAuthIsReady: true,
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  const rrfProps = {
    firebase: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

 
  ReactDOM.render(
  
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
 
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
