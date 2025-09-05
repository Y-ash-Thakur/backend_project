// const asyncHandler = (fn) => async (req, res, next) => { // Higher order function  
//   try{
//     await fn(req, res, next)

//   } catch (error) {
//       res.status(error.code || 500).json({
//         success: false,
//         message: error.message
//       })
//   }
// }

// export {asyncHandler}

const asyncHandler = (requestHandler) => {
  return (req,res,next) => {
    Promise.resolve().catch((err) => next(err))
  }
}

export {asyncHandler}