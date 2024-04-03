import React, { useEffect} from 'react'
import Header from './components/Header'
import Auth from "./components/Auth";
import AddBlog from './components/AddBlog'
import Blogs from './components/Blogs'
import BlogDetail from './components/BlogDetail'
import UserBlogs from './components/UserBlogs'
import {Route,Routes} from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "./store";




function App() {
  const isLoggedIn= useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch()
  console.log(isLoggedIn);
  useEffect(() => {
    if ( localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  }, [])

  return(
        <React.Fragment>
<header>
  <Header/>
</header>
<main>
  

<Routes>
          { !isLoggedIn ? <Route path="/auth" element={<Auth />} ></Route>:
          <>
           <Route path="/blogs" element={<Blogs />} ></Route>
          <Route path="/blogs/add" element={<AddBlog />} ></Route>
          <Route path="/myBlogs" element={<UserBlogs />} ></Route>
          <Route path="/myBlogs/:id" element={<BlogDetail />} ></Route>
          </>}
        </Routes>
</main>
      </React.Fragment>
  )

}

export default App;
