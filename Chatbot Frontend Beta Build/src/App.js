
import './App.css';
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import Header from "./components/Header/Header";
import { useState } from "react";
import ToggleButton from "./components/ToggleDarkMode"
import MinimizeToggle from './MinimizeToggle'

export default function App() {
	const [verified, setVerified] = useState(false);
	const [defaultChecked, setDefaultChecked] = useState(false);
	const [minimized, setMinimized] = useState(false)

	const verificationHandler = (value) => {
		setTimeout(() => {
			setVerified(value);
		}, 1500);
	};
	
	const onChange =  props => {
		 setDefaultChecked(defaultChecked => {return !defaultChecked})
	}

	const buttonHandler = props => {
        setMinimized(prev => {return !prev})
    }

	return (

			<div className={`App ${defaultChecked ? 'dark' : ''}`}>
				
			<div style={{ maxWidth: "380px" }}>
				 {!verified && <Header onSubmit={verificationHandler} dark={!defaultChecked} />} 
				<div className='botPosition'>
				{!minimized && verified && (
					
					<Chatbot
						config={config}
						messageParser={MessageParser}
						actionProvider={ActionProvider}
						placeholderText="Write your query here"
					/>
					
				)}
				
				{verified && minimized && (<div className={`minimized ${defaultChecked ? 'dark' : ''}`}>
					<b>We are here to help     </b>
					<div className='toggleButton'><MinimizeToggle onTouch={buttonHandler} minimizeState={minimized}/></div>
				</div>) }
				
				<ToggleButton defaultChecked={defaultChecked} onChange={onChange}/>
				</div>
			
			</div>
			</div>
	);
}
