import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1>맛집상자</h1>
            <nav>
                <ul>
                    <li><a href="#" className="active">맛집소개</a></li>
                    <li><a href="#">추천메뉴</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

