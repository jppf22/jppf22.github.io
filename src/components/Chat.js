import React from 'react';

export default function Chat({pastMessages = []}){
    return (
        <div className="Chat">
            <h1>Chat</h1>
            {pastMessages.map((message) => (<section>{message}</section>))}
            <form>
                <input></input>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}