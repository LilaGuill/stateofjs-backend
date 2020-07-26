const Framework = require("../mongo/models/Framework")
const mongoose = require("mongoose")

describe("insert", () => {
  let connection

  beforeAll(async () => {
    connection = await mongoose.connect("mongodb://localhost/app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  })

  afterAll(async () => {
    await connection.close()
  })

  it("should returns all frameworks", async (done) => {
    const frameworksList = await Framework.find()
    expect(frameworksList).toHaveLength(78)
    done()
  })
})
