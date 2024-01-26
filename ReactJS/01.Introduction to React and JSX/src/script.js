import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

// const headingElement = React.createElement(
//     'h1',
//     {},
//     'Hello World!'
// );

// const secondHeadingElement = React.createElement(
//     'h2',
//     {},
//     'This is a React syntax!'
// );

// const header = React.createElement(
//     'header',
//     { className: 'site-header' },
//     headingElement, secondHeadingElement
// );

// root.render(header);

const styleButtonApply = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    border: '1px solid black',
    'border-radius': '15px',
    'text-decoration': 'none',
    margin: '20px'
};

const styleButtonDelete = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    border: '1px solid black',
    'border-radius': '15px',
    'text-decoration': 'none',
    margin: '20px'
};

const Footer = () => (
    <div className='site-footer'>
        <p>All rights reserved &copy;</p>
    </div>
);

const headerJSX = (
    <div>
        <header className='site-header'>
            <h1>Hello World!</h1>
            <h2>This is a React syntax!</h2>

            <p>Im ready for write ReactJS</p>

            <section className='site-buttons'>
                <a style={styleButtonApply} href="#">Apply</a>
                <a style={styleButtonDelete} href="#">Delete</a>
            </section>
        </header>

        <Footer />
    </div >
)

root.render(headerJSX);