import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import Options from "../components/Options";
import Avatar from '../components/Avatar'
import MinimizeToggle from '../MinimizeToggle'
import './config.css'

const config = {
  initialMessages: [
    createChatBotMessage(`Hello! How may I help you?`, { widget: "options" })
  ],
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#7ca8e8",
          background: "linear-gradient(to right, #0072AA ,  #78ADD2)",
          padding: "5px",
          color: 'white',
          borderRadius: "3px",
          fontFamily: "Arial",
        }}>
        <strong>We are here to help</strong>
        <div style={{float: 'right', backgroundColor: 'transparent'}}>     
          <MinimizeToggle /> 
        </div>
        </div>
    ),
    botAvatar: (props) => <Avatar {...props} />,
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#21AA47",
      fontColor: 'black',
    },
    chatButton: {
      backgroundColor: "#0072AA",
    },
    userMessageBox: {
      backgroundColor: "#00B300",
    }
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />
    }
  ]
};

export default config;
