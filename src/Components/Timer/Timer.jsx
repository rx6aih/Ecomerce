import React, {useEffect} from 'react';

const Timer = ({deadline}) => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const addZero = (num) => num < 10 ? '0' + num : num;

    const getTime = () =>{
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(addZero(Math.floor((time / (1000 * 60 * 60)) % 24)));
        setMinutes(addZero(Math.floor((time / 1000 / 60) % 60)));
        setSeconds(addZero(Math.floor((time / 1000) % 60)));

    }
    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    },[])
    return (
        <div className={"flex flex-row gap-3 items-end"}>
            <div className={"flex flex-col gap-1"}>
                <p className={"text-sm font-medium"}>Days</p>
                <h1 className={"text-4xl font-bold"}>{days}</h1>
            </div>
            <h2 className={"text-red-500 text-3xl"}>:</h2>

            <div className={"flex flex-col gap-1"}>
                <p className={"text-sm font-medium"}>Hours</p>
                <h1 className={"text-4xl font-bold"}>{hours}</h1>
            </div>
            <h2 className={"text-red-500 text-3xl"}>:</h2>

            <div className={"flex flex-col gap-1"}>
                <p className={"text-sm font-medium"}>Minutes</p>
                <h1 className={"text-4xl font-bold"}>{minutes}</h1>
            </div>
            <h2 className={"text-red-500 text-3xl"}>:</h2>

            <div className={"flex flex-col gap-1"}>
                <p className={"text-sm font-medium"}>Seconds</p>
                <h1 className={"text-4xl font-bold"}>{seconds}</h1>
            </div>
        </div>
    );
};

export default Timer;