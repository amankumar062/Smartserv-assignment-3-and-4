import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "../style/App.sass";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/dashboard" element={<Dashboard/>} />
                <Route exact path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
