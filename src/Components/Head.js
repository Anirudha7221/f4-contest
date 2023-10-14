import React from 'react';

function Head(){
    return(
        <div>
            <div id="title">
                <div>
                <h1>typecat</h1>
                <span class="material-symbols-outlined"> keyboard_alt </span>
                </div>
                <span class="material-symbols-outlined"> person </span>
            </div>
            <div id="timer">
                <p>0</p>
                <div>
                <p>15s</p>
                <p>30s</p>
                <p>60s</p>
                </div>
            </div>
        </div>
    );
}

export default Head;