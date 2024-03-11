import {useDispatch, useSelector} from "react-redux";
import {updateUsername} from "../../features/auth/authSlice";

function Header(props) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const changeUsername = (evt) => {
        const username = evt.target.value;
        dispatch(updateUsername(username));
    }

    return (
        <>
            <p>Xin chao: {auth.username}</p>
            <h2>Day la header</h2>
            <input type="text" onChange={changeUsername}/>
        </>
    )
}

export default Header;
