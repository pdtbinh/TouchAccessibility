import './Headline.css'

export default function Headline({ children }) {
    return (
        <h1 className='headline'>
            {children}
        </h1>
    )
}