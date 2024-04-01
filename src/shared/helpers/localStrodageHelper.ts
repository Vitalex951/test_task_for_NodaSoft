export const getValueLocalStorage = (key: string) => {
    const value = localStorage.getItem(key)
    if(value) {
        return JSON.parse(value)
    }
}

export const setValueLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key,  JSON.stringify(value))
}
