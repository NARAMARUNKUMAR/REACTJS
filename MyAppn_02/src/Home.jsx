import React from "react";
function Home()
{
    return(
        <React.Fragment>
            <h1>Welcome To Home Page</h1>
            <h3>About</h3>
            <p>The render()function should be pure,maning that it does not modify component state,it returns the same result,each time its invoke and it does not directly interact with the browser</p>
        </React.Fragment>
    )
}
export default Home;