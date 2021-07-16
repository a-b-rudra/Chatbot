class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse(message) {
		const lowercase = message.toLowerCase();
        if(lowercase.trim().length === 0) this.actionProvider.handleEmpty()
		// if (lowercase.includes("api")) {
		// 	this.actionProvider.handleAPIrequest();
		// } else if (lowercase.includes("use cases")) {
		// 	this.actionProvider.handleUseCases();
		// } else if (lowercase.includes("mashups")) {
		// 	this.actionProvider.handleMashups();
		// } else if (lowercase.includes("contact location")) {
		// 	this.actionProvider.handleContactLocation();
		// }
		else
		this.actionProvider.messageToBot("RASA", lowercase);
  }
}


export default MessageParser;
