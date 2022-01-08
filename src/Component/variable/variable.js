import dialogsPageReducer from "./dialogsPage-reducer";
import postPageReducer from "./postPage-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {

    _variable: {
        postPage: {
            postData: [
                { id: 1, message: 'Это мое первое сообщение!!!' },
                { id: 2, message: 'Привет всем!!!' },
                { id: 3, message: 'Как дела?!' }
            ],

            postTextPage: "",

        },

        dialogsPage: {
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

        },

        sidebar: {
            avaData: [
                { id: 1, name: "Илья", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 2, name: "Михаил", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 3, name: "Виктор", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 4, name: "Евгений", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
                { id: 5, name: "Иван", ava: <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' /> },
            ]
        }
    },
    getVariable() {
        return this._variable;
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._variable.postPage = postPageReducer(this._variable.postPage, action);
        this._variable.dialogsPage = dialogsPageReducer(this._variable.dialogsPage, action);
        this._variable.sidebar = sidebarReducer(this._variable.sidebar, action);

        this._callSubscriber(this._variable);
    },

}

export default store;
