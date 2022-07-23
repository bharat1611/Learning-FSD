import PropTypes from 'prop-types';

//Generating a component

// 1 - Function based
// 2 - Class Based

//1. Function - Based

const Header = (props) => {
    return (
        <div>
            <h1>Task Tracker</h1>
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

