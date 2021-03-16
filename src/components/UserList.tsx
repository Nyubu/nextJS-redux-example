import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from '../redux/selectors';
import NextLink from "next/link"
import { Link, Text } from '@chakra-ui/react';

interface userListProps {

}

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users
}));

export const UserList: React.FC<userListProps> = ({}) => {

    const { users } = useSelector(stateSelector);

    const isEmptyUsers = !users || (users && users.length === 0);

    if (isEmptyUsers)
        return null;
  
    return (
        users.map( (user, index) => (
            <React.Fragment key={index}>
                <img src={user.avatar} />
                <p>{user.first_name} {user.last_name}</p>
                <NextLink href="/user/[id]" as={`/user/${user.id}`}>
                    <Link>
                        <Text>Go to User Page {user.id}</Text>
                    </Link>
                </NextLink>
            </React.Fragment>
        ))
    )
}