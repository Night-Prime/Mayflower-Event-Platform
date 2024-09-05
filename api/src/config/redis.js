const redis = require("redis");

/**
 * This is really not a necessary setup in this server context, reason
 * why it'd be in a different branch but i did this anyway in order to
 * learn how to use redis properly.
 * change from "localhost" to your prod when necessary and vice versa
 */
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (err) => {
  console.log("Redis Error: ", err);
});

module.exports = client;
