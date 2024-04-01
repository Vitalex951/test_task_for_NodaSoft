import {useMemo} from "react";
import {getValueLocalStorage, setValueLocalStorage} from "../helpers/localStrodageHelper";

export const useCachedData = (callback: (...args: any[]) => Promise<any>) => {
    return useMemo(() => async (id: number) => {
        const usersCacheFormLocalStorage = getValueLocalStorage(id.toString())

        if (usersCacheFormLocalStorage) {
            console.log('The data is taken from the cache by id', id)
            return usersCacheFormLocalStorage
        }

        const value = await callback(id)
        if (!!value) {
            setValueLocalStorage(id.toString(), value)
        }
        return value
    }, [callback])
}
