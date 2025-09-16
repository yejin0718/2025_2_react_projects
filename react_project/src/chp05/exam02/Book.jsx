import React from "react";
import './Book.css';

function Book(props) {
    return(
        <div className={"wrapper"}>
            <img className="image"
                src={props.coverImage}
            />
            <div className={"contentContainer"}>
                <span className={"titleText"}>{props.title}</span>
                <span className={"authorText"}>{props.author}</span>
            </div>
        </div>
    );
}

export default Book;