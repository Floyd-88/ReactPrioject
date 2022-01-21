const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState ={
        users: [ ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
    }

    const usersReducer = (variable = initialState, action) => {
        switch (action.type) {

            case FOLLOWED:
                return {
                    ...variable,
                    users: variable.users.map( u =>  {
                        if (u.id === action.usersID) {
                            return {...u, followed: true}
                        }
                        return u;
                    } )

                }
                case UNFOLLOWED:
                    return {
                        ...variable,
                        users: variable.users.map(  u => {
                            if (u.id === action.usersID) {
                                return {...u, followed: false}
                            }
                            return u;
                        } )
    
                    }
                case SET_USERS:
                    return {...variable, users: [...action.users]
                    }
                case SET_CURRENT_PAGE:
                        return {...variable, currentPage: action.currentPage,
                        }
                case SET_TOTAL_USERS_COUNT:
                        return {...variable, totalUsersCount: action.count,
                            }
            
            default:
                return variable;
        }
    } 

    export const followedActionCreater = (usersID) => ({ type: FOLLOWED, usersID }); 
    export const unfollowedActionCreater = (usersID) => ({ type: UNFOLLOWED, usersID }); 
    export const set_usersActionCreater = (users) => ({ type: SET_USERS, users }); 
    export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
    export const setUsersTotalCounterAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export default usersReducer;