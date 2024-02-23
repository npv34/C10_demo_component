import Button from "../shares/Button/Button";
import Input from "../shares/Input/Input";

function Login(props) {
    return (
        <form>
            <Input type="email" label="Email"/>
            <Input type="password" label="Password"/>
            <Input type="checkbox"/>Remember me
            <Button title="login" type="submit" bgcolor="green" radius="50" width="100"/>
        </form>
    )
}

export default Login;