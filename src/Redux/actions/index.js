let listId = 0;
let postId = 0;

export const addListAction = (text) => {
    return {
        type: "ADD_LIST",
        id: listId++,
        title: text,
        isOpen: false,
        comment: []
    };
};

export const selectList = (check) => {
    return {
        type: "IS_OPEN",
        check: check
    };
};

export const rmListItem = (delId) => {
    return {
        type: "RM_LIST_ITEM",
        delId
    };
};

export const addPost = (text) => {
    return {
        type: "ADD_POST",
        comment: {
            id: postId++,
            img: 'https://dummyimage.com/52x52/000/fff.png',
            text
        }
    };
};



