// a reducer is a function that accepts the current state and an action, and returns a new state
// the reducer is a pure function, it does not modify the state, it returns a new state
export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}
