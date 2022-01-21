import React from 'react';
import { connect } from 'react-redux';
import { followedActionCreater, setCurrentPageAC, setUsersTotalCounterAC, set_usersActionCreater, unfollowedActionCreater } from '../variable/users-reduxer';
import Users from './Users';


const mapStateToProps = (variable) => {
    return {
        users: variable.usersPage.users,
        pageSize: variable.usersPage.pageSize,
        totalUsersCount: variable.usersPage.totalUsersCount,
        currentPage: variable.usersPage.currentPage,

    }
};

const mapDispathToProps = (dispatch) => {
    return {
        follow: (usersID) => { 
            dispatch(followedActionCreater(usersID));
         },
        unfollow: (usersID) => { 
            dispatch(unfollowedActionCreater(usersID)); 
        },
        setUsers: (users) => {
            dispatch(set_usersActionCreater(users)); 
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCounterAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Users);;
