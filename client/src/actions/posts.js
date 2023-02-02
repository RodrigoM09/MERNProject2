import * as api from '../api';

// Action Creators are functions that return an action,
// an action is an object that has a type and a payload.
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();

         dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error){
        console.log(error.message);
    }

}

