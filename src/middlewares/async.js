//It's how middleware are built with Redux. Arbitrary decision.

//Equivalent to below
export default ({ dispatch }) => (next) => async (action) => {
  //Check if it has a promise.
  //If not, send to next.
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //If it does, resolve the promise
  //Then create a new action with the data and dispatch it
  //We send it back to the begining of the dispatch
  const response = await action.payload;
  const newAction = { ...action, payload: response };
  dispatch(newAction);
};

// // Each function is called with a different set of objects. Boilerplate for middleware
// export default function({dispatch}) {
//     //next is a reference to the next middleware of our chain
//     return function(next){
//         //Called with our action object. Type + Payload
//         return function(action){

//         }
//     }
// }
