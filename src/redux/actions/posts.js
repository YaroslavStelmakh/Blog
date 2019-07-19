export function getPostsList() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(
            'https://bloggy-api.herokuapp.com/posts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(getPostsListSuccess(items)))
            .catch((err) => dispatch(itemsHasErrored(err)));
    };
}
export function savePost(data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return fetch(
            'https://bloggy-api.herokuapp.com/posts',
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response)
            .then((item) => {
                dispatch(savePostSuccess(item))
                return item;
            })
            .catch((err) => dispatch(itemsHasErrored(err)));
    };
}

export function itemsHasErrored(err) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        error: err
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function getPostsListSuccess(items) {
    return {
        type: 'GET_POSTS_LIST_SUCCESS',
        items
    };
}

export function savePostSuccess(item) {
    return {
        type: 'GET_POSTS_LIST_SUCCESS',
        item
    };
}