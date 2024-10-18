import './Rules.css'
import Canva from '../../components/canvas/Canva'
import Holder from '../../components/holders/Holder'
import Button from '../../components/buttons/Button'
import Headline from '../../components/texts/Headline'
import SmallBodyText from '../../components/texts/SmallBodyText'
import HorizontalHolder from '../../components/holders/HorizontalHolder'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Rules() {

    const navigate = useNavigate()

    const goBack = () => navigate('/more')

    return (
        <Canva>
            <Headline>RULES</Headline>
            <SmallBodyText>
                <p>How to play?</p>
                <p>Drag the person through the maze to find the exit.</p>
                <p>Listen to the screen reader in which direction you should drag the person.</p>
                <p>Your device will vibrate if you hit a wall. Move into a different direction</p>
                <p>The game ends when your person is at the finish.</p>
            </SmallBodyText>
            <Holder>
                <Button onClick={goBack}>
                    Back
                </Button>
            </Holder>
        </Canva>
    )
}