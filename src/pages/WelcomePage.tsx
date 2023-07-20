import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
}

function WelcomePage(props: IProps) {
  return (
    <div className="welcomeContainer">
      <Link to='/map'>
        <button className="button">Start</button>
      </Link>
    </div>
  );
}

export default WelcomePage;
