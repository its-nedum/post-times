const initState = {
    posts: [
        {id: '1', title: 'Into the BadLands', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'},
        {id: '2', title: 'The Rookie', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'},
        {id: '3', title: 'The Tomorrow People', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'},
        {id: '4', title: 'How To Get Away With Murder', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'},
        {id: '5', title: 'The Flash', body: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'}

    ]
}

const rootReducer = (state =  initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => action.id !== post.id);
        
        return {
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}

export default rootReducer;