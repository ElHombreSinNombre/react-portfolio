import ReactDOM from 'react-dom/client';
import './styles.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import About from './components/about';
import Timeline from './components/timeline';
import Header from './components/header';
import Projects from './components/projects/projects';

//Particles
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <Particles options={particlesOptions as ISourceOptions} />
        <Header></Header>
        <div className="grid place-items-center h-screen">
            <Routes>
                <Route path="/" element={<About />}></Route>
                <Route path="/timeline" element={<Timeline />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
        </div>
    </BrowserRouter>
);
