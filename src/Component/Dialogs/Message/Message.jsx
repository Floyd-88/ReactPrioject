import React from 'react';
import s from ".././Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={s.messageitem}>
            <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' />
            {props.message}
        </div>
    )
}

export default Message;