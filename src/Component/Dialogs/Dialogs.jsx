import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.css";


const DialogItem = (props) => {
    return (
    <div className={s.dialog}>
        <NavLink to={
            "/Dialogs/" + props.id} className={dialog => dialog.isActive ? s.active : s.dialog}>{props.name}</NavLink>
    </div>)
}

const Messege = (props) => {
    return (
        <div className={s.messageitem}>
            {props.messege}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsItemsData = [
        {id: "1", name: "Илья"},
        {id: "2", name: "Михаил"},
        {id: "3", name: "Виктор"},
        {id: "4", name: "Евгений"},
        {id: "5", name: "Иван"},
    ];

    let messagesData = [
        {id: 1, messege: "Hello, my frends"},
        {id: 2, messege: "Yo"},
        {id: 3, messege: "How are you?"},
        {id: 4, messege: "I`m fine!"},
    ];
    let dialogsItemsElements = dialogsItemsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesDataElements = messagesData.map(m => <Messege messege={m.messege} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItemsElements}
            </div>

            <div className={s.messages}>
            {messagesDataElements}
            </div>

        </div>)
}

export default Dialogs;