import { API, Auth, graphqlOperation, Hub } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

import React, { useState, createContext, useEffect } from 'react';

import * as queries from '../graphql/queries';
import gql from '../utils/api';

type UserContextType = {
    id: string,
    avatar: string,
    handle: string,
    email: string,
    initialized: boolean,
    loaded: boolean
};

type AuthContextType = {
    state: string,
    user: CognitoUser | null,
    userEmail: string | null
}

type AppContextType = {
    user: UserContextType,
    updateUser: (user: UserContextType) => void
    auth: AuthContextType
    updateAuth: (auth: AuthContextType) => void
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = props => {

    const defaultUserValues = {
        id: '',
        avatar: '',
        handle: '',
        email: '',
        initialized: false,
        loaded: false
    };

    const [user, setUser] = useState<UserContextType>(defaultUserValues);

    const [auth, setAuth] = useState<AuthContextType>({ state: 'DEFAULT', user: null, userEmail: null });

    const updateUser = (user: UserContextType) => {
        setUser(user);
    };

    const updateAuth = (auth: AuthContextType) => {
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
            console.log("Loaded previously logged-in user.");
            //console.log('Current user: ', user);
            updateAuth({ state: 'signIn', user, userEmail: user.attributes.email });
            processSignIn(user.attributes.email);
        }).catch(error => {
            console.log(error);
            Auth.signOut();
        })
    };

    const initAuthListener = () => {
        Hub.listen('auth', ({ payload: { event, data } }) => {

            console.log("new auth event has occurred: ", event);

            if (event == 'signOut') {
                updateAuth({ state: event, user: null, userEmail: null });
            } else if (event == 'signIn') {
                Auth.currentAuthenticatedUser().then(user => {
                    updateAuth({ state: 'signIn', user, userEmail: user.attributes.email });
                    processSignIn(user.attributes.email);
                })
            }

        });

        console.log("Auth Hub Initialized within App Context.");
    };

    // Gets user data to put in the global context after successfully authenticating with Cognito.
    const processSignIn = async (email: string) => {

        if (email == undefined || email == '' || email == null) {
            console.warn("Undefined behavior: Sign-in event occured but failed to extract email from auth context data.");

            return;
        }

        gql(queries.userByEmail, {
            email
        }).then((users) => {
            console.log(users.data);
            if (users.data && users.data["userByEmail"] && users.data["userByEmail"]["items"]) {
                const userData = users.data["userByEmail"]["items"][0];
                if (userData === undefined) {
                    console.log("Auth'd successfully but failed to load a user with the given email, redirecting to sign up screen: ", email);
                }

                updateUser({...user, loaded: true});
            }
        }).catch((error) => {
            console.warn("Failed to get user in processSignIn(): ", error);
        });
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