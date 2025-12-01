import React, { forwardRef, useEffect, useRef } from "react";

const WheelCanvas = forwardRef(({ restaurants }, ref) => {
    const canvasRef = useRef(null);
    const anglePerSegmentRef = useRef(0);
    const currentAngleRef = useRef(0);

    useEffect(() => {
        if (restaurants.length > 0) drawWheel();
    }, [restaurants]);

    const drawWheel = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const radius = canvas.width / 2;

        anglePerSegmentRef.current = (2 * Math.PI) / restaurants.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        restaurants.forEach((item, i) => {
            const angle = i * anglePerSegmentRef.current;

            // slice
            ctx.beginPath();
            ctx.moveTo(radius, radius);
            ctx.arc(
                radius,
                radius,
                radius - 10,
                angle,
                angle + anglePerSegmentRef.current
            );
            ctx.closePath();
            ctx.fillStyle = getColor(i);
            ctx.fill();

            // text
            ctx.save();
            ctx.translate(radius, radius);
            ctx.rotate(angle + anglePerSegmentRef.current / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "white";
            ctx.font = "bold 16px sans-serif";
            ctx.fillText(item.name, radius - 20, 10);
            ctx.restore();
        });
    };

    const getColor = (i) => {
        const colors = [
            "#f44336", "#ff9800", "#4caf50", "#2196f3", "#9c27b0",
            "#009688", "#795548", "#607d8b", "#e91e63", "#3f51b5"
        ];
        return colors[i % colors.length];
    };

    const spin = (index, callback) => {
        const canvas = canvasRef.current;
        const anglePerSegment = anglePerSegmentRef.current;

        const rotateTo =
            360 * 5 +
            (360 -
                (index * anglePerSegment * 180) / Math.PI -
                (anglePerSegment * 90) / Math.PI);

        canvas.style.transition = "transform 4s ease-out";
        canvas.style.transform = `rotate(${rotateTo + currentAngleRef.current}deg)`;

        currentAngleRef.current += rotateTo;

        setTimeout(() => {
            callback();
        }, 4000);
    };

    React.useImperativeHandle(ref, () => ({
        spin,
    }));

    return (
        <canvas
            ref={canvasRef}
            id="wheelCanvas"
            width="400"
            height="400"
            style={{
                border: "10px solid black",
                borderRadius: "50%",
                backgroundColor: "white",
            }}
        ></canvas>
    );
});

export default WheelCanvas;
