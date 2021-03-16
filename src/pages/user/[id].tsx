import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../UserPage-Redux/actions'
import { createSelector } from 'reselect'
import { makeSelectUser } from '../../UserPage-Redux/selectors';

interface UserPageProps {

}

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}))

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
});

export const UserPage: React.FC<UserPageProps> = ({}) => {

    const { user } = useSelector(stateSelector);
    const { setUser } = actionDispatch(useDispatch())

    const router = useRouter();    

    const fetchUser = async (id) => {
        try {
            const response = await Axios.get(`https://reqres.in/api/users/${id}`)
            // console.log(response.data.data)
            
            if (response) {
                setUser(response.data.data)
            }
        } catch (err) {
            console.log("Err: ", err)
        }
        
    }

    useEffect(() => {

        if (typeof router.query.id === 'string') {
            const id = parseInt(router.query.id)
            fetchUser(id)
        }

    }, [router.query.id])

    if (!user)
        return <div>Loading . . .</div>

    console.log(user);

    return (
        <div>
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
            <div>{user.id}</div>
        </div>
    );
}

export default UserPage;