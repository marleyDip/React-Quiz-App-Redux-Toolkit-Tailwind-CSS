import { Clock } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTimer } from "../store/quizSlice";

function Timer() {
  const dispatch = useDispatch();
  const { timeLeft, isTimeActive } = useSelector((state) => state.quiz);

  useEffect(() => {
    let interval;

    if (isTimeActive && timeLeft > 0) {
      interval = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [dispatch, isTimeActive, timeLeft]);

  //formate time
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${min.toString().padStart(2, 0)}:${secs.toString().padStart(2, 0)}`;
  };

  return (
    <div className={`flex items-center space-x-2`}>
      <Clock size={20} />

      <span className="font-mono text-lg font-semibold">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}

export default Timer;
