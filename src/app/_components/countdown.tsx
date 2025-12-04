import { zeroPad } from "react-countdown";

type RendererProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
};

const Renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
}: RendererProps) => {
    if (completed) {
        return (
            <div className="flex justify-evenly">
                <div className="flex items-baseline font-semibold capitalize">
                    <p className="text-2xl">{zeroPad(0)}</p>
                    <p className="text-xs">hari</p>
                </div>
                <p></p>
                <div className="flex items-baseline font-semibold capitalize">
                    <p className="text-2xl">{zeroPad(0)}</p>
                    <p className="text-xs">jam</p>
                </div>
                <div className="flex items-baseline font-semibold capitalize">
                    <p className="text-2xl">{zeroPad(0)}</p>
                    <p className="text-xs">menit</p>
                </div>
                <div className="flex items-baseline font-semibold capitalize">
                    <p className="text-2xl">{zeroPad(0)}</p>
                    <p className="text-xs">detik</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-evenly gap-1">
                <div className="flex items-baseline font-semibold capitalize gap-1">
                    <p className="text-2xl">{zeroPad(days)}</p>
                    <p className="text-xs">hari</p>
                </div>
                <p></p>
                <div className="flex items-baseline font-semibold capitalize gap-1">
                    <p className="text-2xl">{zeroPad(hours)}</p>
                    <p className="text-xs">jam</p>
                </div>
                <div className="flex items-baseline font-semibold capitalize gap-1">
                    <p className="text-2xl">{zeroPad(minutes)}</p>
                    <p className="text-xs">menit</p>
                </div>
                <div className="flex items-baseline font-semibold capitalize gap-1">
                    <p className="text-2xl">{zeroPad(seconds)}</p>
                    <p className="text-xs">detik</p>
                </div>
            </div>
        );
    }
};

export default Renderer;
