import './Player.css'
import {useRef} from 'react';
import { useDrag } from '@use-gesture/react';

const statusToStyle = (x, y, length) => {
    const style = {};
    style["left"] = x;
    style["top"] = y;
    style["width"] = length;
    style["height"] = length;
    style["touchAction"] = "none";
    return style;
}


export default function Player({x, y, length, playerMove}) {
    const playerRef = useRef();
    const style = {...statusToStyle(x,y,length), touchAction: "none"}

    const bind = useDrag((state) => {
        const swipeX = state.swipe[0]
        const swipeY = state.swipe[1]
        if(!state.tap && swipeX * swipeY === 0) {
            if (swipeX === 1) {
                playerMove("east");
            } else if (swipeX === -1) {
                playerMove("west");
            } 
            
            if (swipeY === 1) {
                playerMove("south")
            } else if (swipeY === -1) {
                playerMove("north");
            }
        }
    }, {
        pointer : {
            touch : true,
        },
        // preventScroll : true,
        swipe : {
            duration: 500,
            distance: [40, 30],
            velocity: [0.1, 0.2]
        }
    })

    // useEffect(() => {
    
    //     let playerHammerManager = new Hammer.Manager(playerRef.current);
    //     console.log(playerRef.current);

    //     var tap = new Hammer.Tap({
    //         taps: 1
    //     });

    //     var swipe = new Hammer.Swipe({
    //         threshold: 100,
    //         velocity: 0.2
    //     })

    //     playerHammerManager.add(tap);
    //     playerHammerManager.add(swipe);


    //     playerHammerManager.on("tap", () => {
    //         console.log("tap");
    //     })
    
    //     playerHammerManager.on("swipe", (ev) => {
    //         const swipeDirection = ev.direction;
    
    //         switch (swipeDirection) {
    //             case Hammer.DIRECTION_LEFT:
    //                 playerMove("west");
    //                 break;
    //             case Hammer.DIRECTION_RIGHT:
    //                 playerMove("east");
    //                 break;
    //             case Hammer.DIRECTION_UP:
    //                 playerMove("north");
    //                 break;
    //             case Hammer.DIRECTION_DOWN:
    //                 playerMove("south");
    //                 break;
    //             default:
    //                 break;
    //         }
    //     })

    //     return () => {
    //         playerHammerManager.destroy();
    //     }
    // })

    return (
        <button id="player" style={style} ref={playerRef} {...bind()} aria-label="player. double-tap player and swipe to move"></button>
    )
}