exports.successResponse = async (res, payload) => {
  let { data, statusCode, message, total } = payload;
  const response = { data, statusCode, message, status: "success" };

  if (total !== undefined) {
    response.total = total;
  }

  return res.status(statusCode).send(response);
};

exports.errorResponse = async (res, payload) => {
  let { statusCode, message } = payload;
  return res
    .status(statusCode)
    .send({ status: "failure", statusCode, message, payload: null });
};
