import './More.css'
import Canva from '../../components/canvas/Canva'
import Headline from '../../components/texts/Headline'
import Holder from '../../components/holders/Holder'
import Button from '../../components/buttons/Button'
import { useNavigate } from 'react-router-dom'

export default function More() {

    const navigate = useNavigate()

    const goToRules = () => navigate('/more/rules')

    const goToSettings = () => navigate('/more/settings')

    const goBack = () => navigate('/')

    return (
        <Canva>
            <Headline>MORE</Headline>
            <Holder>
                <Button onClick={goToRules}>
                    Rules
                </Button>
                <Button onClick={goToSettings}>
                    Settings
                </Button>
                <Button onClick={goBack}>
                    Back
                </Button>
            </Holder>
        </Canva>
    )
}