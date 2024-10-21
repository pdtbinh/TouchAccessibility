import './Maze.css'
import Canva from '../../components/canvas/Canva'
import Headline from '../../components/texts/Headline'
import BodyText from '../../components/texts/BodyText'
import MazeField from '../../components/mazes/MazeField'
import Button from '../../components/buttons/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import srSpeak from '../../components/aria/AriaLive'

const mazeStatus = {
    width: 3,
    height: 4,
    finishingStep: [3, 0],
    steps: [
        [
            {
                key: [0, 0],
                reached: false,
                walls: ['north', 'south']
            },
            {
                key: [0, 1],
                reached: false,
                walls: ['north', 'south']
            },
            {
                key: [0, 2],
                reached: false,
                walls: ['north', 'east']
            },
        ],
        [
            {
                key: [1, 0],
                reached: false,
                walls: ['north', 'east', 'west']
            },
            {
                key: [1, 1],
                reached: false,
                walls: ['north', 'west']
            },
            {
                key: [1, 2],
                reached: false,
                walls: ['east', 'south']
            },
        ],
        [
            {
                key: [2, 0],
                reached: false,
                walls: ['south', 'west']
            },
            {
                key: [2, 1],
                reached: false,
                walls: ['south']
            },
            {
                key: [2, 2],
                reached: false,
                walls: ['north', 'east']
            }
        ],
        [
            {
                key: [3, 0],
                reached: false,
                walls: ['north', 'west']
            },
            {
                key: [3, 1],
                reached: false,
                walls: ['north', 'south']
            },
            {
                key: [3, 2],
                reached: false,
                walls: ['east', 'south']
            }
        ],
    ]
}

export default function Maze() {
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