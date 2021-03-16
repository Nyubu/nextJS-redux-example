import React, { useEffect } from 'react'
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectUsers } from '../redux/selectors'
import Axios from 'axios';
import { setUsers } from '../redux/actions';
import { UserList } from '../components/UserList';

interface HomeProps {}

// 2nd param is a callback function that returns an object with certain data that we want to export from the global state/store
// to access here
const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}));

const actionDispatch = (dispatch) => ({
    setUsers: (users) => dispatch(setUsers(users))
})


export const Home: React.FC<HomeProps> = ({}) => {

    const { users } = useSelector(stateSelector);
    const { setUsers } = actionDispatch(useDispatch());

    const fetchusers = async () => {
        try {
            const response = await Axios.get(`https://reqres.in/api/users`)
            setUsers(response.data.data);
        } catch (err) {
            console.log("Err: ", err)
        }        
    }

    useEffect(() => {
        fetchusers();
    }, [])

    console.log("Users: ", users);

    return (
        <div>
            <UserList/>
        </div>
    )
}

export default Home;