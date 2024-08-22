import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import ParamsTest from './components/ParamsTest/ParamsTest.jsx'
import DummyData from './components/DummyData/DummyData.jsx'

/*
  Hamnay aik base url sett ki ha '/' se => us ma jo dekhna ha wo layout ka render honay sa ayega
  Liken hamaray pass # of pages hain jo alag content dikhatay hain is liya children use kerna ha, unka routes batana aur kiya render kerna 
  children ka array ma pass hoga (phir in child ka apnay path and element hounga)

  1. / => Layout
  2. /about => About
  3. /contact => Contact
  4. /github => Github

*/

const router = createBrowserRouter (
  [{
    path : '/',
    element : <Layout />,
    children: [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "github",
        element : <Github />
      },
      {
        path : "params/:testID",
        element : <ParamsTest />
      }
      
    ]
  },
  {
    path : '/dummy',
    element : <DummyData />
  }
    ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

/*
  Another way to initialize routes

  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="params/:testID" element={<ParamsTest />} />
        <Route path="github" 
               element={<Github />} 
               loader = {githubInfoLoader} />
      </Route>

    )
  )


  IMP => Jo name :params ka ha wohi exact same name component ma milay ga using useParams hook sa
*/