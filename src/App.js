import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Aside from "./shared/Aside";
import Chanel from "./pages/Chanel";

function App() {
    return (
        <div className="App">
            <Aside/>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/:id"} element={<Chanel/>}/>
            </Routes>
        </div>
    );
}

export default App;
