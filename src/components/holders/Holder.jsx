import './Holder.css'

export default function Holder({ children }) {
    return (
        <div className='holder'>
            {children}
        </div>
    )
}