class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", error = [], stack = "") {
      super(message);
      
      // Set properties
      this.statusCode = statusCode;
      this.message = message;
      this.success = false;
      this.error = error;
      this.data = null;
  
      // Handle stack trace
      if (stack) {
        this.stack = stack;
      } else {
        // Capture the stack trace
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { ApiError };
  