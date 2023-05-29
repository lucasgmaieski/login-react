import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Members } from "../pages/Members";
import { Contact } from "../pages/Contact";
import { Plans } from "../pages/Plans";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},
        { path: 'about', element: <About />},
        { path: 'members', element: <Members />},
        { path: 'plans', element: <Plans />},
        { path: 'contact', element: <Contact />}
    ]);
}