import React, {useState} from 'react'
import socket from './Socket'

const Input = () => {
    const [text, setText] = useState('')

    const updateText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', {'user': socket.id, 'content': text})
    }

    return(
        <div class="input">
            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Type here..." onChange={updateText}/>
                <input type="submit"/> 
            </form>
        </div>
    )
}

export default Input