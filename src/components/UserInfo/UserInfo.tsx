import React, {memo} from "react";
import {IUser} from "../../api/types/types";

interface UserInfoProps {
    user: IUser
}

export const UserInfo = memo(({user}: UserInfoProps) => {
    const {name, phone} = user
    return (
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>Phone number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
            </tr>
            </tbody>
        </table>
    );
})
