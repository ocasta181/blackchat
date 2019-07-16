import React from 'react'

const Message = (props) => {

    return(
        <div class="message">
            <div class="sender">
                {this.props.sender}:
            </div>
            <div class="content">
                {this.props.content}
            </div>
        </div>
    )
}

export default Message