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
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { useSelector } from "react-redux";

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

  const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth);
    return isLoaded(auth) ? children : null
  }
 
  ReactDOM.render(
  
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
 
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
