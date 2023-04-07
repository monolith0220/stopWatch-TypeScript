import React, { useState, useRef } from "react";

const App: React.FC = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);

	const intervalRef = useRef<number>();

	const start = () => {
		setIsRunning(true);
		intervalRef.current = window.setInterval(() => {
			setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
		}, 10);
	};

	const stop = () => {
		setIsRunning(false);
		window.clearInterval(intervalRef.current);
	};

	const reset = () => {
		setElapsedTime(0);
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60000);
		const seconds = Math.floor((time % 60000) / 1000);
		const milliseconds = Math.floor((time % 1000) / 10);
		return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
	};

	return (
		<div>
			<div>{formatTime(elapsedTime)}</div>
			{!isRunning && <button onClick={start}>Start</button>}
			{isRunning && <button onClick={stop}>Stop</button>}
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default App;
