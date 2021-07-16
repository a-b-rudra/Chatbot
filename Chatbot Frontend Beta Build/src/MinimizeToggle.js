import {useState} from 'react' 
import './MinimizeToggle.css'



const MinimizeToggle = props => {
    const [minimized, setMinimized] = useState(props.minimizeState)
    
    const buttonHandler = props => {
        setMinimized(!minimized)
    }
    
    return <button onClick={buttonHandler} className='MinimizeToggle'>
        {!minimized && <b>&#709;</b>}
        {minimized && <b>&#708;</b>}
    </button>
}


export default MinimizeToggle