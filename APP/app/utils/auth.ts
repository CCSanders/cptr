import * as mutations from '../graphql/mutations';
import { AccessType } from '../graphql/API';
import gql from '../utils/api';
import { UserContextType } from 'context';

const createProfileData = (email: string, handle: string, name: string, bio: string | null, updateUserContextFunction: (user: UserContextType) => void) => {
    
    gql(mutations.createUser, {
        input: {
            email,
            handle,
            name,
            bio,
            accessType: AccessType.PUBLIC
        }
    }).then((userData) => {
        console.log("Successfully created a user with data: ", userData)

        let id;
        if(userData && userData.data && userData.data["createUser"] ){
            id = userData.data["createUser"].id;
        } else {
            return;
        }

        updateUserContextFunction({
            id,
            avatar: null,
            handle,
            email,
            name,
            bio,
            initialized: true,
            loaded: true
        });
    }).catch((error) => {
        console.warn("Failed to create profile data: ", error);
    })
};

export default createProfileData;