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

        case ADD_MESSAGE: {
            let Message = {
                id: 6,
                message: variable.postMessagePage,
            };
            return {
                ...variable,
                postMessagePage: "",
                messagesData: [...variable.messagesData, {id: 6, message: variable.postMessagePage}]
            };
        // variableCopy.messagesData =[...variable.messagesData]; 
        //variableCopy.messagesData.push(Message);
        //variableCopy.postMessagePage = "";
        //return variableCopy;                
    
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...variable,
                postMessagePage: action.newMessage,
            };
        //postMessagePage = action.newMessage;
        //return variableCopy;
        }
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