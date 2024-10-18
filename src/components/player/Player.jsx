import './Player.css'

const statusToStyle = (x, y, length) => {
    const style = {};
    style["left"] = x;
    style["top"] = y;
    style["width"] = length;
    style["height"] = length;
    return style;
}

export default function Player({x, y, length, innerRef}) {
    return (
        <div id="player" style={statusToStyle(x,y,length)} ref={innerRef}></div>
    )
}