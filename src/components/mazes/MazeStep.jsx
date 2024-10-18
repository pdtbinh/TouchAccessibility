import './MazeStep.css'
import Grid from '@mui/material/Grid';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const directionToBorder = {
    north: 'borderTop',
    east: 'borderRight',
    south: 'borderBottom',
    west: 'borderLeft'
}

const statusToStyle = (walls, reached, steppedOnByPlayer) => {
    const style = {}
    // Add walls
    for (let wall of walls) {
        style[directionToBorder[wall]] = '5px solid black'
    }
    // Mark reached
    const stepColor = steppedOnByPlayer ? 'red' : reached ? 'blue' : 'yellow'
    style['backgroundColor'] = stepColor
    // Fill borders
    const allDirections = ['north', 'east', 'south', 'west']
    for (let direction of allDirections) {
        if (!walls.includes(direction)) {
            style[directionToBorder[direction]] = `5px solid ${stepColor}`
        }
    }
    return style
}

export default function MazeStep({ length, walls, reached, steppedOnByPlayer }) {
    return (
        <Grid item xs={length}>
            <div className='maze-step' style={statusToStyle(walls, reached, steppedOnByPlayer)}>
                {steppedOnByPlayer ? <DirectionsRunIcon className='user-icon' /> : null}
            </div>
        </Grid>
    )
}