import React, {useState} from "react";

// custom hook(사용자 정의 훅)
function useCounter(initalValue) {
    // 컴포넌트가 마운트되었을 때, 업데이트 되었을 때
    const [count, setCount] = useState(initalValue);

    const increaseCount = () => setCount((count)=> count +1);
    const decreaseCount = () => setCount((count)=> Math.max(count -1, 0));

    return [count, increaseCount, decreaseCount]

}

export default useCounter;