import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const saveUser = () => {
        alert('user have been saved')
    }
    const onNameChanged = () => {
        console.log("name changed");
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed :" + e.currentTarget.value);
    }
    const focusLostHandler = () => {
        console.log("focus lost");
    }
    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>delete</button>
        <button name="save" onClick={saveUser}>save</button>
    </div>
}

