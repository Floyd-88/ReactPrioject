import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userAva from "../../assets/img/CheVendetta.png"

class Users extends React.Component {

    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
    this.props.setUsers(response.data.items);
    this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
this.props.setUsers(response.data.items);
    });
}


render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for(let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }


    return <div>
           
            <div>
                {pages.map(p=> {
                  return  <span className={this.props.currentPage === p && s.selectedtPage}
                  onClick={(e) => {this.onPageChange(p);}}>{p}</span> 
                })}
            </div>
           {
            this.props.users.map(u =>

                <div className={s.main}>
                    <div className={s.avaFrends}>
                        <div className={s.ava}>
                            <img src={u.photos.small != null ? u.photos.small : userAva} className={s.avaUsers} />
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.nameStatus}>
                                <div className={s.name}>
                                    {u.name}
                                </div>
                                <div className={s.status}>
                                    {u.status}
                                </div>
                            </div>
                            <div className={s.locationUsers}>
                                <div className={s.country}>
                                    {/* {u.location.country} */}
                                </div>
                                <div className={s.city}>
                                    {/* {u.location.city} */}
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className={s.btn}>
                        {u.followed
                            ? <button className={s.btnNoFrend} onClick={() => { this.props.unfollow(u.id) }}>Добавить в друзья</button>
                            : <button className={s.btnFrend} onClick={() => { this.props.follow(u.id) }}>Ваш друг</button>}
                    </div>
                </div>

            )

        }

    </div>
}
}





export default Users;