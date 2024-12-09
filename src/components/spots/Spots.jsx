import './Spots.css'

export default function Spots() {

    const generateRandomStyle = () => {
        const min = -200
        const max = 200
        const top = Math.random() * (max - min) + min;
        const left = Math.random() * (max - min) + min;
        return { top, left }
    }

    const indices = Array.from({ length: 10 }, (_, index) => index);

    return (
        <div style={{position: "fixed", width: "100vw", height: "100vh", zIndex: 10000, display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none", backgroundColor: "transparent"}}>

        {    indices.map(
                index => <div
                    key={index}
                    className='spot'
                    style={generateRandomStyle()}
                    />
            )}
        </div>
    )
}