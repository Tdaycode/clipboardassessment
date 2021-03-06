const crypto = require("crypto");

exports.deterministicPartitionKey = (input) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionResult;

  if(input === undefined) return "Input cannot be empty";

  // Checking if partition key already exist
  if(input.partitionKey) partitionResult = input.partitionKey;

  if (input) {
    /* Generate a hash of the event data */
      const data = JSON.stringify(input);
      partitionResult = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  /* Checking type of partitionResult */
  if (typeof partitionResult !== "string") {
    partitionResult = JSON.stringify(partitionResult);
  }
  /* Checking if partitionResult exist */
  if (!partitionResult) partitionResult = TRIVIAL_PARTITION_KEY;

  if (partitionResult.length > MAX_PARTITION_KEY_LENGTH) 
        partitionResult = crypto.createHash("sha3-512").update(partitionResult).digest("hex");

  return partitionResult;
};