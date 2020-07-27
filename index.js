const { ApolloServer, gql } = require("apollo-server")
const mongoose = require("mongoose")

const { getFrameworks } = require("./queries/frameworks")
const { getRankings } = require("./queries/rankings")
const { getOverviews } = require("./queries/overviews")
const { getUsages } = require("./queries/usages")
const { getExperiences } = require("./queries/experiences")

require("dotenv").config()
//connection mongoose database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.once("open", () => console.log("DB connected"))

const typeDefs = gql`
  type Query {
    frameworks: [Framework!]!
    rankings: [Ranking!]!
    overviews: [Overview!]!
    usages: [Usage!]!
    experiences(id: String!): [Experiences!]!
  }

  type Framework {
    _id: ID!
    stars: Int!
    symbol: String!
    name: String!
    url: String
  }

  type Ranking {
    _id: ID!
    id: String!
    awareness: [Data]
    interest: [Data]
    satisfaction: [Data]
  }

  type Data {
    year: Int
    rank: Int
    percentage: String
  }

  type Overview {
    _id: ID!
    id: String!
    buckets: [Bucket]
  }

  type Bucket {
    id: String
    count: Int
    percentage: String
  }
  type Usage {
    average: String
    total: Int
    id: String
    ranges: [Range]
  }
  type Range {
    range: String
    percentage: String
    count: Int
  }

  type Experiences {
    id: String
    data: [Experience]
  }

  type Experience {
    year: Int
    total: Int
    completion: [Completion]
    awarenessInterestSatisfaction: [AwarenessInterestSatisfaction]
    buckets: [Bucket]
  }

  type Completion {
    count: Int
    percentage: Int
  }

  type AwarenessInterestSatisfaction {
    awareness: Int
    interest: Int
    satisfaction: Int
  }
`
const resolvers = {
  Query: {
    frameworks: () => getFrameworks(),
    rankings: () => getRankings(),
    overviews: () => getOverviews(),
    usages: () => getUsages(),
    experiences: (parents, args) => getExperiences(args),
  },
  // Mutation: {},
}
const server = new ApolloServer({ cors: true, typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
