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

        case ADD_POST:
            let Post = {
                id: 5,
                message: variable.postTextPage,
            };
            variable.postData.push(Post);
            variable.postTextPage = "";
            
            return variable;
            
        case UPDATE_NEW_POST_TEXT:
            variable.postTextPage = action.newText; 
            return variable;
            
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