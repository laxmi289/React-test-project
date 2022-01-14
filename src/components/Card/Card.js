import React from "react";

import './Card.styles.css';

const Card = (props) => {
    return(
        <div id="card-div">
            <div id="card-img">
                <img alt="" src="https://media.istockphoto.com/illustrations/watercolor-flower-white-background-illustration-id1194734674?k=20&m=1194734674&s=170667a&w=0&h=i13P4DsieUGHgqEXzt5tDkB-ZF5HIdaWvwf-w4PsYrg=" />
            </div>
            <div id="card-content">
                <h4>{props.user.name}</h4>
                <p>{props.user.email}</p>
                <p>{props.user.phone}</p>
            </div>
        </div>
    );
}

export default Card;