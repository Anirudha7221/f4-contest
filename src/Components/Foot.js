import React from "react";

function Foot(){
    return(
        <div>
            <div id="footer">
                <div>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <span class="material-symbols-outlined"> attach_email </span>
                </div>
                <select>
                    <option value="Darken-black">Darken-black</option>
                    <option value="Coloured-grey">Coloured-Grey</option>
                    <option value="Coloured-pink">Coloured-Pink</option>
                    <option value="Coloured-green">Coloured-Green</option>
                    <option value="Coloured-blue">Coloured-Blue</option>
                    <option value="Lighten-white">Lighten-White</option>
                    <option value="Coloured-lightPurple">Coloured-LightPurple</option>
                </select>
            </div>
        </div>
    );
}

export default Foot;