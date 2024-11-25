import './Player.css'
import {useRef, useEffect} from 'react';
import Hammer from 'hammerjs';

const statusToStyle = (x, y, length) => {
    const style = {};
    style["left"] = x;
    style["top"] = y;
    style["width"] = length;
    style["height"] = length;
    return style;
}

export default function Player({x, y, length, playerMove}) {
    const playerRef = useRef();
    const style = {...statusToStyle(x,y,length), touchAction: "none"}
    useEffect(() => {
    
        let playerHammerManager = new Hammer.Manager(playerRef.current);
        console.log(playerRef.current);

        var tap = new Hammer.Tap({
            taps: 1
        });

        var swipe = new Hammer.Swipe({
            threshold: 100,
            velocity: 0.2
        })

        playerHammerManager.add(tap);
        playerHammerManager.add(swipe);


        playerHammerManager.on("tap", () => {
            console.log("tap");
        })
    
        playerHammerManager.on("swipe", (ev) => {
            const swipeDirection = ev.direction;
    
            switch (swipeDirection) {
                case Hammer.DIRECTION_LEFT:
                    playerMove("west");
                    break;
                case Hammer.DIRECTION_RIGHT:
                    playerMove("east");
                    break;
                case Hammer.DIRECTION_UP:
                    playerMove("north");
                    break;
                case Hammer.DIRECTION_DOWN:
                    playerMove("south");
                    break;
                default:
                    break;
            }
        })

        return () => {
            playerHammerManager.destroy();
        }
    })

    return (
        <button id="player" style={style} ref={playerRef} aria-label="player. double-tap player and swipe to move"></button>
    )
}