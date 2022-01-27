const errorResponseHandler = (error) => {
  try {
    // check for errorHandle config
    if (
      error.config.hasOwnProperty("errorHandle") &&
      error.config.errorHandle === false
    ) {
      return Promise.reject(error);
    }

    // if has response show the error
    if (error.response) {
      console.error(error.response);
    } else {
      console.error(error.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export default errorResponseHandler;
