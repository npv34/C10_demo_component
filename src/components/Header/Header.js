import Button from "../shares/Button/Button";
import Input from "../shares/Input/Input";

function Header(props) {
    
    return (
        <>
            <h2>Day la header</h2>
            <Button title="Click" bgcolor="red" color="white" width="100" radius="50"/>
            <Input type="text"/>
        </>
    )
}

export default Header;
