// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import person from './person';

//  the baseData and clean functions from the utility module
import { baseData, clean } from './utility';

// Import the CSS file
import './style.css';

// Define a style object with some properties and values

// Define a function that returns some text for the button
function getButtonText() {
    return 'Click on me!';
}

// Create a React component using an arrow function
const App = () => {
    // Use JSX syntax to return a div element with some content
    return (
        <div>
            {/*  label element with a htmlFor attribute to link it to the input element */}
            <label className="label" htmlFor="name">Enter name:</label>
            {/*  input element with an id attribute that matches the label's htmlFor attribute */}
            <input id="name" type="text" /><br/>
            {/* button element with some text from the getButtonText function */}
            <button>{getButtonText()}</button>
            {/* Display the person's name from the person module */}
            <p>{person.name}</p>
            {/* Display the baseData array from the utility module */}
            <p>{baseData}</p>
            {/* Call the clean function from the utility module and display its result */}
            <p>{clean()}</p>
        </div>
    );
}

// Render the App component to the root element in the HTML document
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
