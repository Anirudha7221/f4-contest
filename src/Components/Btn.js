import React from "react";

function Btn(){
    return(
        <div>
            <div id="refresh-btn">
                <span class="material-symbols-outlined"> refresh </span>
            </div>
            <div id="reset-btn">
                <button>esc</button>
                <p>- reset</p>
            </div>
            <div id="words-btn">
                <button>10</button>
                <button>50</button>
                <button>80</button>
                <button>100</button>
                <p>- no. of words</p>
            </div>
        </div>
    );
}

export default Btn;