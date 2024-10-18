import './MazeField.css'
import Grid from '@mui/material/Grid';
import MazeStep from './MazeStep';
import { useEffect, useState } from 'react';

/*
Maze design (`mazeStatus`):
{
    finishedStep: [2,0],
    width: 3,
    height: 3,
    steps: [
        {
            reached: true
            walls: ['west', 'south']
        },
        {
            reached: false
            walls: ['east', 'south']
        }
    ],
}
*/

export default function MazeField({ mazeStatus, mazeCurrentStatus, setMazeCurrentStatus, handleCompleteMaze }) {

    const calculateStepLength = (mazeWidth, fieldLength = 12) => {
        const stepLength = Math.floor(fieldLength / mazeWidth * 10) / 10 // round to nearest digit.
        return stepLength
    }

    const [playerPosition, setPlayerPosition] = useState([0, 0])

    const [mazeFinished, setMazeFinished] = useState(false)

    useEffect(() => {
        handleMazeStepChange()
        finishMaze()
    }, [playerPosition])

    const playerHitsWall = (moveDirection) => {
        if (mazeStatus
            .steps[playerPosition[0]][playerPosition[1]]
            .walls
            .includes(moveDirection)
        ) {
            // THIS IS WHERE VOICE FEEDBACK COULD BE INJECTED
            console.log('You hit a wall!')
            return true
        } else {
            return false
        }
    }

    const handleMazeStepChange = () => {
        const duplicatedStatus = { ...mazeCurrentStatus }
        duplicatedStatus.steps[playerPosition[0]][playerPosition[1]].reached = true
        setMazeCurrentStatus(duplicatedStatus)
    }

    const handlePlayerPositionChange = (positionIndex, moveValue) => {
        const duplicatedPosition = [...playerPosition]
        duplicatedPosition[positionIndex] += moveValue
        if (
            duplicatedPosition[0] < 0 ||
            duplicatedPosition[1] < 0 ||
            duplicatedPosition[0] > mazeStatus.height - 1 ||
            duplicatedPosition[1] > mazeStatus.width - 1
        ) return
        setPlayerPosition(duplicatedPosition)
    }

    const moveDirectionToActionOnPlayerPosition = {
        north: () => handlePlayerPositionChange(0, -1),
        east: () => handlePlayerPositionChange(1, 1),
        south: () => handlePlayerPositionChange(0, 1),
        west: () => handlePlayerPositionChange(1, -1),
    }

    const playerMove = (moveDirection) => {
        if (!mazeFinished && !playerHitsWall(moveDirection))
            moveDirectionToActionOnPlayerPosition[moveDirection]()
    }

    const finishMaze = () => {
        if (playerPosition[0] === mazeStatus.finishingStep[0] && playerPosition[1] === mazeStatus.finishingStep[1]) {
            setMazeFinished(true)
            handleCompleteMaze()
        }
    }

    // For testing on development
    const keysToDirections = {
        ArrowUp: 'north',
        ArrowRight: 'east',
        ArrowDown: 'south',
        ArrowLeft: 'west'
    }
    const handleKeyDown = (event) => playerMove(keysToDirections[event.key])
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    })

    return (
        <Grid
            container rowSpacing={0} columnSpacing={{ xs: 1 }}
            className='maze-field'>
            {mazeCurrentStatus.steps.flat().map(
                step => <MazeStep
                    key={step.key}
                    length={calculateStepLength(mazeStatus.width)}
                    walls={step.walls}
                    reached={step.reached}
                    steppedOnByPlayer={playerPosition[0] === step.key[0] && playerPosition[1] === step.key[1]}
                />
            )}
        </Grid>
    )
}