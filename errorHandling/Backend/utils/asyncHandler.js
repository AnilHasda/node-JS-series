const asyncHandler = (requestHandler) => {
    try {
      requestHandler();
    } catch (error) {
      console.log(error);
    }
};
export { asyncHandler};
