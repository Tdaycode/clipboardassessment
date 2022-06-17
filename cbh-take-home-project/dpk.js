const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionResult;

  if (event) {
    if (event.partitionKey) {
      partitionResult = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      partitionResult = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (partitionResult) {
    if (typeof partitionResult !== "string") {
      partitionResult = JSON.stringify(partitionResult);
    }
  } else {
    partitionResult = TRIVIAL_PARTITION_KEY;
  }
  if (partitionResult.length > MAX_PARTITION_KEY_LENGTH) {
    partitionResult = crypto.createHash("sha3-512").update(partitionResult).digest("hex");
  }
  return partitionResult;
};