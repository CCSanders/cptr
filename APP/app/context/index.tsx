import { API, Auth, graphqlOperation, Hub } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';

import React, { useState, createContext, useEffect } from 'react';

import * as queries from '../graphql/queries';
import gql from '../utils/api';
import { User } from '../graphql/API';

export type UserContextType = {
    id: string,
    name: string,
    avatar: string | null | undefined,
    handle: string,
    email: string,
    bio: string | null | undefined
    initialized: boolean,
    loaded: boolean
};

export type AuthContextType = {
    state: string,
    user: CognitoUser | null,
    userEmail: string | null
}

export type AppContextType = {
    user: UserContextType,
    updateUser: (user: UserContextType) => void
    auth: AuthContextType
    updateAuth: (auth: AuthContextType) => void
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = props => {

    const defaultUserValues = {
        id: '',
        avatar: null,
        handle: '',
        name: '',
        bio: '',
        email: '',
        initialized: false,
        loaded: false
    };

    const [user, setUser] = useState<UserContextType>(defaultUserValues);

    const [auth, setAuth] = useState<AuthContextType>({ state: 'DEFAULT', user: null, userEmail: null });

    const updateUser = (user: UserContextType) => {
        console.log("Updating user value in context with: ", user);
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
                updateUser(defaultUserValues);
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
            if (users.data && users.data["userByEmail"] && users.data["userByEmail"]["items"]) {
                const userData : User = users.data["userByEmail"]["items"][0];
                console.log(userData);
                if (userData === undefined) {
                    console.log("Auth'd successfully but failed to load a user with the given email, redirecting to sign up screen: ", email);
                    updateUser({...user, initialized: false, loaded: true});
                }

                console.log("User is init. Updating context and going to home screen.");
                updateUser({
                    id: userData.id, 
                    name: userData.name,
                    handle: userData.handle,
                    email,
                    avatar: userData.avatar,
                    bio: userData.bio,
                    initialized: true, 
                    loaded: true
                });
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