import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";

async function gql<T extends object>(
    query: string,
    variables?: object,
    additionalHeaders?: {
        [key: string]: string;
    }
): Promise<GraphQLResult<T>> {
    const q = API.graphql(graphqlOperation(query, variables)) as Promise<GraphQLResult<T>>;
    return q;
}

export default gql;