// a reducer is a function that accepts the current state and an action, and returns a new state
// the reducer is a pure function, it does not modify the state, it returns a new state
// .map() is a pure function, it does not modify the array, it returns a new array.
// action.payload is the data that is returned from the api call. The updated post, or the new post.
export default (posts = [], action) => {
    switch (action.type){
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}
