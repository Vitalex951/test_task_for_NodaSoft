import {memo} from "react";

interface ButtonProps {
    onClick?: () => void;
    text?: string
}


export const Button = memo(({onClick, text}: ButtonProps) => {
    const onClickHandler = () => {
        onClick?.()
    }
    return (
        <button type="button" onClick={onClickHandler}>
            {text}
        </button>
    );
})
