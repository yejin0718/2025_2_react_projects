import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import WheelCanvas from "./WheelCanvas";
import ResultModal from "./ResultModal";
import "./Recommend.css";

function Recommend() {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const wheelRef = useRef(null);

    useEffect(() => {
        fetch("/db.json")
            .then((res) => res.json())
            .then((data) => {
                setRestaurants(data.restaurants);
            });
    }, []);

    const handleSpin = () => {
        if (restaurants.length === 0) return;

        const index = Math.floor(Math.random() * restaurants.length);
        setSelectedRestaurant(null);

        wheelRef.current.spin(index, () => {
            setSelectedRestaurant(restaurants[index]);
        });
    };

    return (
        <div className="recommend-page">
            <Header activePage={"recommend"} />

            <main>
                <h2>오늘 뭐 먹지?</h2>

                <WheelCanvas
                    ref={wheelRef}
                    restaurants={restaurants}
                />

                <button className="spin-btn" onClick={handleSpin}>
                    돌리기
                </button>

                {selectedRestaurant && (
                    <ResultModal
                        data={selectedRestaurant}
                        onClose={() => setSelectedRestaurant(null)}
                    />
                )}
            </main>

            <Footer />
        </div>
    );
}

export default Recommend;
