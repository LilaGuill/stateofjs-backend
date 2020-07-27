const { GraphQLServer } = require("graphql-yoga") // initialise le serveur
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

const server = new GraphQLServer({
  cors: true,
  typeDefs: "./schema/schema.graphql",
  resolvers,
})

const opts = {
  port: 4000,
  cors: {
    origin: "http://localhost:3000", // your frontend url.
    credentials: true,
  },
}

server.start(opts, () => {
  console.log("server started")
})
