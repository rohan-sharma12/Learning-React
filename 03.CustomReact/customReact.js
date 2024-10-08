const mainContainer = document.getElementById('root');

const reactElement = {  //How React sees each JSX element
    type: 'a',  //For anchor tag
    props: {    //Attributes of anchor tag
        href: 'https://www.google.com',
        target: '_blank'
    },
    chlidren : 'Click me to visit Google'
}  

function customRenderer(reactElement, container){
    
    /* Version 1:
    
    const DOMElement = document.createElement(reactElement.type); //Creating a DOM Element of a given type
    DOMElement.innerHTML = reactElement.chlidren; 
    DOMElement.setAttribute('href', reactElement.props.href); //Setting attributes of the DOM Element
    DOMElement.setAttribute('target', reactElement.props.target);
    container.appendChild(DOMElement); //Injecting the created element into the DOM  
    */


    //Version 2:
    const DOMElement = document.createElement(reactElement.type); 
    DOMElement.innerHTML = reactElement.chlidren;
    for(const prop in reactElement.props){
    if(prop == 'chlidren') continue;
    DOMElement.setAttribute(prop, reactElement.props[prop])    
    }
    container.appendChild(DOMElement);
}

customRenderer(reactElement, mainContainer) //Function to inject a react element into the DOM at a particular point
