import './Maze.css'
import Canva from '../../components/canvas/Canva'
import Headline from '../../components/texts/Headline'
import BodyText from '../../components/texts/BodyText'
import MazeField from '../../components/mazes/MazeField'
import Button from '../../components/buttons/Button'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import srSpeak from '../../components/aria/AriaLive'

export default function Maze({ mazeStatus }) {





    const [mazeCompleted, setMazeCompleted] = useState(false)

    const mazeStatusCopy = _.cloneDeep(mazeStatus)
    const [mazeCurrentStatus, setMazeCurrentStatus] = useState(mazeStatusCopy)

    const handleCompleteMaze = () => {
        srSpeak("You escaped the maze!")
        setMazeCompleted(true)
    }

    const navigate = useNavigate()

    const resetMazeStatus = () => {
        const mazeStatusCopy = _.cloneDeep(mazeStatus)
        setMazeCurrentStatus(mazeStatusCopy)
    }

    const backToHome = () => {
        resetMazeStatus()
        navigate('/')
    }

    return (
        <Canva>
            <Headline>MAZE</Headline>
            <MazeField
                mazeStatus={mazeStatus}
                mazeCurrentStatus={mazeCurrentStatus}
                setMazeCurrentStatus={setMazeCurrentStatus}
                handleCompleteMaze={handleCompleteMaze}
            />
            {mazeCompleted ? <Button onClick={backToHome}>
                Home
            </Button> : <BodyText>
                FINISH
            </BodyText>}
        </Canva>
    )
}