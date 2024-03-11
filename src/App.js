import './App.css';
import Weather from './components/Weather/Weather';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";

function App() {
    const auth = useSelector(state => state.auth);

    return (
     <>
       <Routes>
           <Route path={"/login"} element={<Login/>} />
           { auth.isLogin && (
               <>
                   <Route path={"/weather"} element={<Weather/>} />
               </>
           )}
       </Routes>
     </>
  );
}

export default App;
