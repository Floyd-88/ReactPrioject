const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
        postData: [
            { id: 1, message: 'Это мое первое сообщение!!!' },
            { id: 2, message: 'Привет всем!!!' },
            { id: 3, message: 'Как дела?!' }
        ],
        postTextPage: "",

    };


const postPageReducer = (variable = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let Post = {
                id: 5,
                message: variable.postTextPage,
            };

            return {
                ...variable,
                postTextPage: "",
                postData: [ ...variable.postData, {id: 5, message: variable.postTextPage}],
                };
        }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...variable,
                postTextPage: action.newText,
            };
        
        default:
            return variable;
    }
} 

export const addPostActionCreater = () => ({ type: ADD_POST }); 
export const updatePostActionCreater = (text) => ({
        type: UPDATE_NEW_POST_TEXT, 
        newText: text,
        });

export default postPageReducer;