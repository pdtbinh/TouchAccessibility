import Canva from '../../components/canvas/Canva'
import Headline from '../../components/texts/Headline'
import Holder from '../../components/holders/Holder'
import Button from '../../components/buttons/Button'
import { useNavigate } from 'react-router-dom'

export default function More() {

    const navigate = useNavigate()

    const goTo3x3 = () => navigate('/maze/3x3')

    const goTo5x5 = () => navigate('/maze/5x5')

    const goBack = () => navigate('/')

    return (
        <Canva>
            <Headline>CHOOSE LEVEL</Headline>
            <Holder>
                <Button onClick={goTo3x3}>
                    3X3
                </Button>
                <Button onClick={goTo5x5}>
                    5X5
                </Button>
                <Button onClick={goBack}>
                    Back
                </Button>
            </Holder>
        </Canva>
    )
}