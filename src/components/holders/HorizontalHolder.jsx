import './HorizontalHolder.css'

export default function HorizontalHolder({ children }) {
    return (
        <div className='holder'>
            {children}
        </div>
    )
}