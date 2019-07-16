import React, {useContext} from 'react'
import {ChatContext} from './ChatContext'
import Message from './Message'

const Messages = () => {
    const [messages, setMessages] = useContext(ChatContext)

    const componentDidMount = () => {
        this.scrollToBottom()
    }
    const componentDidUpdate = () => {
        this.scrollToBottom()
    }
    const scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <div class="messages">
            {messages.map(message => {
                return <Message sender={message.user} content={message.content}/>
            })}
            <div ref={this.messagesEndRef} />
        </div>
    )
}

export default Messages