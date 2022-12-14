import { React } from "react";
import ReactDOM from "react-dom/client";
import { AddTask } from "./components/index";

const App = () => {
    return (
        <div>
            
        <AddTask />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)