const typeDefs = `#graphql 
type User {
    _id: ID!
    name: String!
    email: String
    password: String
}
scalar DateTime
type Comment {
    _id: ID!,
    name: String!,
    email: String!,
    movie_id: ID!,
    text: String!,
    date:DateTime!
}
type Game {
    # _id: ID
    title: String,
    company: String,
    platform: [String]
},
type Query{
    users(limit: Int): [User],
    user(_id: ID!): User
    comments: [Comment]
}
type Mutation{
    deleteUser(_id: ID!): User
    addGame(gameInput1: GameInput): Game 
    deleteGame(_id: ID!): Game
}
input GameInput {
    title: String!,
    company: String!,
    platform: [String!]!
}
`;
export default typeDefs;
