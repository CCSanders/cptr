import { Auth, Hub } from 'aws-amplify';
import React, { useState, createContext, useEffect } from 'react';

type UserType = {
    id: string,
    avatar: string,
    handle: string,
    initialized: boolean
};

type AuthType = {
    state: string,
    user: any
}

type AppContextType = {
    user: UserType,
    updateUser: (user: UserType) => void
    auth: AuthType
    updateAuth: (auth: AuthType) => void
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = props => {

    const [user, setUser] = useState<UserType>({
        id: '',
        avatar: '',
        handle: '',
        initialized: false
    });

    const [auth, setAuth] = useState<AuthType>({state: 'DEFAULT', user: null});

    const updateUser = (user: UserType) => {
        setUser(user);
    };

    const updateAuth = (auth: AuthType) => {
        console.log("Updating auth value in context with: ", auth);
        setAuth(auth);
    };

    const value = {
        user,
        updateUser,
        auth,
        updateAuth
    };

    const initAuthState = () => {
        Auth.currentAuthenticatedUser().then(user => {
            console.log('Current user: ', user);
            updateAuth({state: 'signIn', user});
        }).catch(error => {
            console.log(error);
            Auth.signOut();
        })
    };

    const initAuthListener = () => {
        Hub.listen('auth', ({ payload: { event, data } }) => {

            console.log("new auth event has occurred: ", event);

            if (event == 'signOut') {
                updateAuth({state: event, user: null});
            } else if (event == 'signIn') {
                updateAuth({state: event, user: data});
            }

        });

        console.log("auth hub initialized.");
    };

    const processSignIn = ({state, user}) => {
        // post login process (i.e. what do we need to do ) 
    }

    useEffect(() => {
        initAuthState();
    }, []);

    useEffect(() => {
        initAuthListener();
    }, []);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};