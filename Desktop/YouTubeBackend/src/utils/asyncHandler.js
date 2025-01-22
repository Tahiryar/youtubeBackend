const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
      try {
        await requestHandler(req, res, next);
      } catch (error) {
        next(error);  // Pass error to the next middleware
      }
    };
  };
  
  export { asyncHandler };
  