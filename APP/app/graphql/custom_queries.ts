/* tslint:disable */
/* eslint-disable */

export const listUserFollowers = /* GraphQL */ `
    query ListUserFollowers($userId: ID!) {
        getUser(id: $userId) {
            followers {
                items {
                    followerId
                }
            }
        }
    }
`;

