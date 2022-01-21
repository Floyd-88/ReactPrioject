import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreater, updateMessageActionCreater } from '../variable/dialogsPage-reducer';
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {

//     let state = props.store.getState();

//     let addMessage = () => {
//         props.store.dispatch( addMessageActionCreater() );
//     }

//     let updateMessage = (text) => {
//         let action = updateMessageActionCreater(text);
//         props.store.dispatch(action);
//     }

//     return <Dialogs updateNewMessage={updateMessage} 
//                     addMessage= {addMessage} 
//                     postMessagePage={state.dialogsPage.postMessagePage} 
//                     dialogsItemsData={state.dialogsPage.dialogsItemsData} 
//                     messagesData={state.dialogsPage.messagesData} />
// }

const mapStateToProps = (variable) => {
    return {
        postMessagePage: variable.dialogsPage.postMessagePage,
        dialogsItemsData: variable.dialogsPage.dialogsItemsData, 
        messagesData: variable.dialogsPage.messagesData,
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => { 
            let action = updateMessageActionCreater(text);
            dispatch(action);
         },
        addMessage: () => { 
            dispatch(addMessageActionCreater()) 
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
