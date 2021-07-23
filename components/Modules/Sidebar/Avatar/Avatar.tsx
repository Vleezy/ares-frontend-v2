import { CircularProgressbar } from 'react-circular-progressbar';


import s from './avatar.module.scss';
import "react-circular-progressbar/dist/styles.css";

export function Avatar() {

    return (

        <>
            <div id={s.xp_progress}>
                <CircularProgressbar value={3} text="3" />
            </div>
        </>
    )
}