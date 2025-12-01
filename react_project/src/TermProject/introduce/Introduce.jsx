import React, { useState } from "react";
import Map from "./Map";
import Category from "./Category";
import Header from "../Header";
import Footer from "../Footer";
import "./Introduce.css";
import RestaurantCard from "./RestaurantCard";

function Introduce() {
    const [activeCategories, setActiveCategories] = useState(new Set());

    const toggleCategory = (category) => {
        const newSet = new Set(activeCategories);

        if (newSet.has(category)) newSet.delete(category);
        else newSet.add(category);

        setActiveCategories(newSet);
    };

    return (
        <div className="introduce-page">
            <Header />

            <div className="intro-container">
                <div className="map-and-filter">
                    <Map activeCategories={activeCategories} />
                    <Category
                        activeCategories={activeCategories}
                        toggleCategory={toggleCategory}
                    />
                </div>

                <RestaurantCard />
            </div>

            <Footer />
        </div>
    );
}

export default Introduce;
