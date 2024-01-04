import React from 'react';

const App = () => {
  return (
    <div>
        <div className="body-container">
            <div className="chat-list"></div>
            <div className="right-side">
                <header>
                    <h1>Groupchat Name</h1>
                    <div className="settings"></div>
                </header>
                <ul id="messages"></ul>
            </div>
        </div>
        <form id="messages-form" action="">
            <input id="messages-input" autocomplete="off" /><button>Send</button>
        </form>
    </div>
  )
}

export default App;