const asyncHandler=(handlerFunction)=>{
    return ()=>{
        Promise.resolve(handlerFunction()).catch(error=>{console.log(error)});
    }
}
export {asyncHandler};