import './Spots.css'

export default function Spots() {

    const generateRandomStyle = () => {
        const min = 100
        const max = 800
        const top = Math.random() * (max - min) + min;
        const left = Math.random() * (max - min) + min;
        return { top, left }
    }

    const indices = Array.from({ length: 10 }, (_, index) => index);

    return (
        indices.map(
            index => <div
                key={index}
                className='spot'
                style={generateRandomStyle()}
            />
        )
    )
}