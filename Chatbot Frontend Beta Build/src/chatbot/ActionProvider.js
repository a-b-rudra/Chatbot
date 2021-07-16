class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
	}

	messageToBot = async function RASA(name, dialogue) {
		const required = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'charset': 'UTF-8'
			},
			body: JSON.stringify({"sender": name, "message": dialogue })
		}
	 const response = await fetch('/webhook', required)
	// console.log(response)
	 if(response.ok){
		const reply = await response.json()
		// console.log(reply)
		 const message = this.createChatBotMessage(reply[0].text)
		 this.addMessageToState(message)
	 }
	 else
	 {
		 const message = this.createChatBotMessage('Sorry, the chatbot is unavailable right now! Please try later.')
		 this.addMessageToState(message)
	 }
	
	};

	handleAPIrequest = () => {
		this.messageToBot("RASA", 'apis');
		// const message = this.createChatBotMessage(
		// 	"Great choice! Here's something about APIs"
		// );
		// this.addMessageToState(message);
	};

	handleUseCases = () => {
		this.messageToBot("RASA", 'use cases');
		// const message = this.createChatBotMessage(
		// 	"Alright! Here's some info about Use Cases"
		// );
		// this.addMessageToState(message);
	};

	handleContactLocation = () => {
		this.messageToBot("RASA", 'contact location');
		// const message = this.createChatBotMessage(
		// 	"Here's something about Contact Location"
		// );
		// this.addMessageToState(message);
	};

	handleMashups = () => {
		this.messageToBot("RASA", 'mashups');
		// const message = this.createChatBotMessage(
		// 	"Fantastic! Here is all you need to know about Mashups!"
		// );
		// this.addMessageToState(message);
	};

	handleDefault = () => {
		const message = this.createChatBotMessage(
			"Not sure how to help you with that right now! Sorry."
		);
		this.addMessageToState(message);
	};

	handleEmpty = () => {
		const message = this.createChatBotMessage("A few words would let me help you better")
		this.addMessageToState(message)
	}

	addMessageToState = (message) => {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message]
		}));
	};
}

export default ActionProvider;
