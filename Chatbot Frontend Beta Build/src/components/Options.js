import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "APIs",
      handler: props.actionProvider.handleAPIrequest,
      id: 1
    },
    { text: "Use Cases", handler: props.actionProvider.handleUseCases, id: 2 },
    {
      text: "Contact Location",
      handler: props.actionProvider.handleContactLocation,
      id: 3
    },
    { text: "Mashups", handler: props.actionProvider.handleMashups, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className={`option-button ${props.dark ? 'dark' : ''}`}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
