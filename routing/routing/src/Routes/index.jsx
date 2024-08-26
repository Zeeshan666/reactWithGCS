import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout.jsx";
import Home from "../components/Home/Home.js";
import About from "../components/About/index.jsx";
import Contact from "../components/Contact/index.jsx";
import User from "../components/User/index.jsx";
import Github, { githubInfoLoader } from "../components/Github/Github.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

export default router;
