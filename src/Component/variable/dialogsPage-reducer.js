const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState ={
        dialogsItemsData: [
            { id: "1", name: "Илья" },
            { id: "2", name: "Михаил" },
            { id: "3", name: "Виктор" },
            { id: "4", name: "Евгений" },
            { id: "5", name: "Иван" },
        ],
        messagesData: [
            { id: 1, message: "Hello, my frends" },
            { id: 2, message: "Yo" },
            { id: 3, message: "How are you?" },
            { id: 4, message: "I`m fine!" },
        ],
        postMessagePage: "",
    };

const dialogsPageReducer = (variable = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let Message = {
                id: 6,
                message: variable.postMessagePage,
            };
            variable.messagesData.push(Message);
            variable.postMessagePage = "";
                        
            return variable;

        case UPDATE_NEW_MESSAGE_TEXT:
            variable.postMessagePage = action.newMessage;
            
            return variable;
        
        default:
            return variable;
    }
   
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE }); 
export const updateMessageActionCreater = (text) => ({
              type: UPDATE_NEW_MESSAGE_TEXT, 
              newMessage: text,
        });   

export default dialogsPageReducer;        