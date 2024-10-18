import './BodyText.css'

export default function BodyText({ children }) {
    return (
        <h1 className='bodytext'>
            {children}
        </h1>
    )
}