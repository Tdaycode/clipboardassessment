const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  const data = JSON.stringify(event);

  if (event) {
    // Ternary operator to determine if the event has a partition key
    event = event.partitionKey? candidate = event.partitionKey: candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate) {
    console.log(candidate)
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};