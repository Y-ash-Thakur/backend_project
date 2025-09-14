class ApiError extends Error { /* In JavaScript classes, the super keyword serves two primary purposes within the context of inheritance: Calling the Parent Class Constructor.
When a subclass extends a parent class, its constructor must call super() before using this. */ 
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = []
  ) {
    super (message)
    this.statusCode = statusCode
    this.data = null 
    this.message = message
    this.success = false;
    this.errors = errors

    if(stack) {
      this.stack = stack
    } else{
      Error.captureStackTrace(this, this.constructor)
    }
  }

}

export { ApiError }