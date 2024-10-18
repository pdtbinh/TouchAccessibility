import './Settings.css'
import Canva from '../../components/canvas/Canva'
import Holder from '../../components/holders/Holder'
import Button from '../../components/buttons/Button'
import Headline from '../../components/texts/Headline'
import { useNavigate } from 'react-router-dom'

export default function Settings() {

    const navigate = useNavigate()

    const goBack = () => navigate('/more')

    return (
        <Canva>
            <Headline>SETTINGS</Headline>
            <Holder>
                <Button onClick={goBack}>
                    Back
                </Button>
            </Holder>
        </Canva>
    )
}