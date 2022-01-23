import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";

async function gql<T extends object>(
    query: string,
    variables?: object,
    additionalHeaders?: {
        [key: string]: string;
    }
): Promise<GraphQLResult<T>> {
    const q = API.graphql(
        {
            query,
            variables: variables && { input: variables },
        },
        additionalHeaders
    ) as Promise<GraphQLResult<T>>;
    return q;
}

export default gql;