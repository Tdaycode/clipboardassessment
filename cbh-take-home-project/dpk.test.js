const { deterministicPartitionKey } = require("./dpk");
// Declaring test Data for deterministicPartitionKey function
const testData = "tayo"

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  test("Should return partition key when  given an event", () => {
    // Testing the deterministicPartitionKey function return type string after the event is given
    const trivialKey = deterministicPartitionKey(testData);
    expect(typeof trivialKey).toBe("string");

  })

});
