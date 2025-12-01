import React, { useEffect, useRef } from "react";
import "./Map.css";

let restaurant = [];
let markers = [];
let activeOverlay = null;

function Map({ activeCategories }) {
    const mapRef = useRef(null);
    const categoryRef = useRef(activeCategories);

    useEffect(() => {
        categoryRef.current = activeCategories;
        if (mapRef.current) {
            updateRecommendList(mapRef.current, categoryRef.current);
        }
    }, [activeCategories]);

    useEffect(() => {
        if (!window.kakao || !window.kakao.maps) return;

        const container = document.getElementById("map");
        const map = new window.kakao.maps.Map(container, {
            center: new window.kakao.maps.LatLng(37.530061, 126.996770),
            level: 3,
        });

        mapRef.current = map;

        loadRestaurants(map);

        window.kakao.maps.event.addListener(map, "idle", () => {
            updateRecommendList(map, categoryRef.current);
        });
    }, []);

    return <div id="map" style={{ width: 600, height: 400 }}></div>;
}

// ================================
// Load restaurant data + markers
// ================================
function loadRestaurants(map) {
    fetch("/db.json")
        .then((res) => res.json())
        .then((data) => {
            restaurant = data.restaurants;
            markers = [];

            restaurant.forEach((item) => {
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(item.lat, item.lng),
                    image: new window.kakao.maps.MarkerImage(
                        "/img/marker.png",
                        new window.kakao.maps.Size(35, 35),
                        { offset: new window.kakao.maps.Point(27, 69) }
                    ),
                    map,
                });

                marker.restaurantData = item;
                markers.push(marker);

                // ⭐ 오버레이 생성
                const overlayContent = document.createElement("div");
                overlayContent.innerHTML = createOverlayContent(item);

                const overlay = new window.kakao.maps.CustomOverlay({
                    content: overlayContent,
                    position: marker.getPosition(),
                    xAnchor: 0.5,
                    yAnchor: 1.2,
                });

                // 🔥 마커 hover 이벤트 다시 추가
                window.kakao.maps.event.addListener(marker, "mouseover", () => {
                    if (activeOverlay) activeOverlay.setMap(null);
                    overlay.setMap(map);
                    activeOverlay = overlay;
                });

                window.kakao.maps.event.addListener(marker, "mouseout", () => {
                    if (activeOverlay) {
                        activeOverlay.setMap(null);
                        activeOverlay = null;
                    }
                });
            });

            // 첫 필터 적용
            updateRecommendList(map, new Set());
        });
}

// ================================
// Filtering Logic
// ================================
function updateRecommendList(map, activeCategories) {
    const recommendList = document.getElementById("recommend-list");
    if (!recommendList) return;

    recommendList.innerHTML = "";

    markers.forEach((marker) => {
        const item = marker.restaurantData;
        const match =
            activeCategories.size === 0 ||
            activeCategories.has(item.category);

        marker.setMap(match ? map : null);

        if (match) {
            const card = document.createElement("div");
            card.className = "food-box";
            card.innerHTML = `
                <img src="${item.imageUrl}">
                <p>${item.name}<br>${item.summary}</p>
            `;
            recommendList.appendChild(card);
        }
    });
}

// ================================
// Overlay HTML
// ================================
function createOverlayContent(data) {
    return `
      <div style="
          width: 130px;
          height: 130px;
          border: 2px solid #2f5939;
          border-radius: 6px;
          overflow: hidden;
          background-color: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          text-align: center;
      ">
          <img src="${data.imageUrl}"
               style="width: 100%; height: 80px; object-fit: cover;">
          <div style="padding: 8px;">
              <p style="margin: 4px 0; font-weight: bold;">
                ${data.name}
              </p>
          </div>
      </div>
    `;
}

export default Map;
