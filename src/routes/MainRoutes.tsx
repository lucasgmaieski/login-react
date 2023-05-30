import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Members } from "../pages/Members";
import { Contact } from "../pages/Contact";
import { Plans } from "../pages/Plans";
import { RequireAuth } from "../RequireAuth";
import { FormLogin } from "../components/FormLogin";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/about', element: <About />},
        { path: '/members', element: <RequireAuth>{ <Members />}</RequireAuth> },
        { path: '/plans', element: <Plans />},
        { path: '/contact', element: <Contact />},
        { path: '/login', element: <FormLogin />}
    ]);
}