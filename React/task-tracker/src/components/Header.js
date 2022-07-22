import PropTypes from 'prop-types';

//Generating a component

// 1 - Function based
// 2 - Class Based

//1. Function - Based

const Header = (props) => {
    return (
        <div>
            <h1 className = "header">Heading</h1>
            {props.id}
            <h1>{props.title}</h1>

        </div>
    );
}

Header.defaultProps = {
    title: 'Default Props',
    id: -1
}

Header.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number
}


export default Header;

