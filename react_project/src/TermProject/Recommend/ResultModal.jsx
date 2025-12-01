import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "./ResultModal.css";

function ResultModal({ data, onClose }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        launchConfetti();
    }, []);

    const launchConfetti = () => {
        const duration = 2000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
            if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-box">
                <img
                    src={data.imageUrl}
                    alt={data.name}
                    className="modal-image"
                />
                <h3 className="modal-title">{data.name}</h3>

                <button className="modal-close" onClick={onClose}>
                    닫기
                </button>

                <canvas ref={canvasRef} id="confettiCanvas" />
            </div>
        </div>
    );
}

export default ResultModal;
