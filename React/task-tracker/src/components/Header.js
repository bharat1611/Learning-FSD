//Generating a component

// 1 - Function based
// 2 - Class Based

//1. Function - Based

const Header = (props) => {
    return (
        <div>
            <h1 className = "header">Heading</h1>
            <h1>{props.title}</h1>
        </div>
    );
}
export default Header;