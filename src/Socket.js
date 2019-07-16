import {ChatContext} from './ChatContext'
import {useContext} from 'react'
import io from 'socket.io-client'

const [messages, setMessages] = useContext(ChatContext)

const socket = io.connect("http://localhost:3002")

socket.on('message', (new_message) => {
    setMessages(prevMessages => [prevMessages, new_message])
})

export default socket