const { deterministicPartitionKey } = require("./dpk");
// Declaring test Data for deterministicPartitionKey function
const testData = ["Tayo is a good"]

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  test("Should return partition key when  given an event", async() => {
    // Testing the deterministicPartitionKey function return type string after the event is given
    await expect(typeof deterministicPartitionKey(testData)).toBe("string")

  })

});
