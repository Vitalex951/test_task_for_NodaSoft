import {useCallback, useState} from "react";
import {Button} from "../Button/Button";
import {UserInfo} from "../UserInfo/UserInfo";
import {IUser} from "../../api/types/types";
import {useCachedData} from "../../shared/hooks/useCacheData";
import {useThrottle} from "../../shared/hooks/useThrottle";
import {_URL} from "../../api/api";


export const User = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchRandomUser = useCallback(async (id: number) => {
        const response = await fetch(`${_URL}/${id}`)
        const data: IUser = await response.json()
        return data
    }, [])

    const fetchUserCache = useCachedData(fetchRandomUser)

    const onClickReceiveRandomUser = useThrottle(async () => {
        setUser(null)
        setIsLoading(true)
        const id = Math.floor(Math.random() * (10 - 1)) + 1;
        try {
            const _user = await fetchUserCache(id)
            if (_user) {
                setUser(_user)
            }
        } catch (e) {
            console.log('Error', e)
            setError('An error occurred while trying to get a user')
        } finally {
            setIsLoading(false)
        }

    }, 500)

    const shouldRenderError = !user && !!error && !isLoading
    const shouldRenderRandomUserMessage = !user && !error && !isLoading


    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={onClickReceiveRandomUser} text={'get random user'}/>
            {user && (
                <UserInfo user={user}/>
            )}

            {shouldRenderRandomUserMessage && (
                <div>Click the button to get a random user</div>
            )}

            {shouldRenderError && (
                <p style={{color: 'red'}}>{error}</p>
            )}

            {isLoading && (
                <div>...Loading</div>
            )}
        </div>
    );
};
