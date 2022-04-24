import react from "react";
import App from "./App";

function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <>
            <aside>
                <img src = { image } alt="blog logo"/>
            </aside> 
            <p>{ about }</p>
        </>
    )
}

export default About;