import React from "react";
import "./CategoryBtn.css";

function CategoryBtn(props) {
    return (
        <button
            className={`filter-btn ${props.isActive ? "active" : ""}`}
            data-category={props.foodId}
            onClick={() => props.onClick(props.foodId)}
        >
            {props.emoji} {props.foodCategory}
        </button>
    );
}

export default CategoryBtn;