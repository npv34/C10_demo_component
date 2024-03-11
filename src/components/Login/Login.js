import Button from "../shares/Button/Button";
import Input from "../shares/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import axios from "axios";
import {setUsername} from "../../features/auth/authSlice";
import {useNavigate, useNavigation} from "react-router-dom";

function Login(props) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            axios.post("https://fakestoreapi.com/auth/login", {
                username: loginForm.values.username,
                password: loginForm.values.password
            }).then(response => {
                console.log(response);
                // update state auth trong redux
                dispatch(setUsername(loginForm.values.username))
                navigate("/weather")
            }).catch(err => {
                alert(err.response.data)
            })
        }
    })

    return (
        <form onSubmit={loginForm.handleSubmit}>
            <input type="text" name="username" onChange={loginForm.handleChange}/>
            <input type="password" name="password" onChange={loginForm.handleChange}/>
            <input type="checkbox"/>Remember me
            <Button title="login" type="submit" bgcolor="green" radius="50" width="100"/>
        </form>
    )
}

export default Login;