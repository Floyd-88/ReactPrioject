import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsItemsElements = props.variable.dialogsItemsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesDataElements = props.variable.messagesData.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    // let addNewMessage = () => {
    //     let newMessageDialogs = newMessageElement.current.value;
    //     props.addMessage(newMessageDialogs);
    //     newMessageElement.current.value = "";
    // }



    let addMessage = () => {
        props.dispatch({ type: "ADD-MESSAGE" });
    }

    let updateMessage = () => {
        let text = newMessageElement.current.value;
        let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text }
        props.dispatch(action);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItemsElements}
            </div>

            <div className={s.messages}>
                {messagesDataElements}
                <textarea ref={newMessageElement} onChange={updateMessage} value={props.variable.postMessagePage} className={s.newMessage} />
                <button onClick={addMessage} className={s.buttonNewMessage}>Отправить</button>
            </div>

        </div>)
}

export default Dialogs;