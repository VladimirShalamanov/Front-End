import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// var headingElement = React.createElement('h1', {}, 'Hello World!');

// var secondHeadingElement = React.createElement('h2', {}, 'This is a React syntax!');

// var header = React.createElement('header', { className: 'site-header' }, headingElement, secondHeadingElement);

// root.render(header);

var styleButtonApply = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    border: '1px solid black',
    'border-radius': '15px',
    'text-decoration': 'none',
    margin: '20px'
};

var styleButtonDelete = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    border: '1px solid black',
    'border-radius': '15px',
    'text-decoration': 'none',
    margin: '20px'
};

var headerJSX = React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
        'h1',
        null,
        'Hello World!'
    ),
    React.createElement(
        'h2',
        null,
        'This is a React syntax!'
    ),
    React.createElement(
        'p',
        null,
        'Im ready for write ReactJS'
    ),
    React.createElement(
        'section',
        { className: 'site-buttons' },
        React.createElement(
            'a',
            { style: styleButtonApply, href: '#' },
            'Apply'
        ),
        React.createElement(
            'a',
            { style: styleButtonDelete, href: '#' },
            'Delete'
        )
    )
);

root.render(headerJSX);