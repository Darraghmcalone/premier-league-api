const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type TeamStanding {
    teamName: String
    position: Int
    matchesPlayed: Int
    goalDifference: String
    points: Int
}
type Query {
    teamStandings: [TeamStanding]
}
`
const teamStandings = [
    {
        teamName: "Liverpool",
        position: 01,
        matchesPlayed: 23,
        goalDifference: '46',
        points: 70
    },
    {
        teamName: "Arsenal",
        position: 04,
        matchesPlayed: 23,
        goalDifference: '13',
        points: 45
    },
    {
        teamName: "Norwich",
        position: 16,
        matchesPlayed: 23,
        goalDifference: '-10',
        points: 26
    },
    {
        teamName: "Newcastle",
        position: 13,
        matchesPlayed: 22,
        goalDifference: "-4",
        points: 31
    }
]

const resolvers = {
    Query: {
        teamStandings: () => {
            return teamStandings
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`)
})

