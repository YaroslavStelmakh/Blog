export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS_LIST_SUCCESS':
            return {
                postsList: action.items,
            };
        case 'ITEMS_HAS_ERRORED':
            return {
                error: action.error,
            };
        case 'ITEMS_IS_LOADING':
            return {
                isLoading: action.isLoading,
            };
        case 'SAVE_POST_SUCCESS':
            return {
                postData: action.item,
            };

        default:
            return state
    }
}