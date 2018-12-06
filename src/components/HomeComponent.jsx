import * as React from 'react';

const HomeComponent = (props) => {
    return(
        <div> 
            <p> It works on Express and MongoDb as a backend DB </p>
            <p> Id runs on express server, to start it run 'nodemon server/server' command on another terminal</p>
            <p> <a href="https://appdividend.com/2018/04/05/react-express-tutorial-example/">Link to Project Source </a></p>
        </div>
    );
}

export default HomeComponent;