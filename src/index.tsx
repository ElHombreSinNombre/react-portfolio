import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import About from './components/about';
import Timeline from './components/timeline';
//import Projects from './components/timeline';

//Particles
import Particles from "react-tsparticles";
import particlesOptions from "./components/particles/particles.json";
import { ISourceOptions } from "tsparticles";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <div className="App">
        <Particles options={particlesOptions as ISourceOptions} />
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<About />}></Route>
                <Route path="/timeline" element={<Timeline />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
);
