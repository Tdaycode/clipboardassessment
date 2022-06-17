const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey;
  const data = JSON.stringify(event);

  if (event) {
    // Ternary operator to determine if the event has a partition key
    event = event.partitionKey? partitionKey = event.partitionKey: partitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
  }

   if (partitionKey) {
      partitionKey= typeof partitionKey !== "string" 
      partitionKey = JSON.stringify(partitionKey);
  } else {
    partitionKey = TRIVIAL_PARTITION_KEY;
  }
  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
  }
  return partitionKey;
};