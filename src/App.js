import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import 'react-native-gesture-handler';
import { persistor, store } from './redux/store';
import SnackBar from './components/snackbar';
import InviteCollaboratorModal from './components/collaborators-modal';

const App = () => {
    return (
        <>
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <Routes/>
            </PersistGate>
            <InviteCollaboratorModal/>
        </Provider>
        <SnackBar position={'top'}/>
        </>
    )
}


export default App