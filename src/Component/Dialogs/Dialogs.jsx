import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsItemsElements = props.dialogsItemsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesDataElements = props.messagesData.map(m => <Message message={m.message} />);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItemsElements}
            </div>

            <div className={s.messages}>
                {messagesDataElements}
                <textarea placeholder='Написать сообщение' ref={newMessageElement} 
                onChange={updateMessage} 
                value={props.postMessagePage} 
                className={s.newMessage} />

                <button onClick={addMessage} className={s.buttonNewMessage}>Отправить</button>
            </div>

        </div>)
}
export default Dialogs;