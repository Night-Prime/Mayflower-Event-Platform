const uuid = require("uuid");

const UUIDGenerator = () => {
  const code = uuid.v4();
  return code;
};

module.exports = {
  UUIDGenerator,
};
