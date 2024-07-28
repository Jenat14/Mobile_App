import { Route, Routes } from "react-router";
import Signup from "../screens/Signup";
export default function Navigator(){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Signup />}></Route>
            </Routes>
        </>
    )
}