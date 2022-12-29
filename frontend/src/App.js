import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Vocabulary from "./views/pages/users/vocabulary/vocabulary"
import Home from "./views/pages/users/home/home";
import Login from "./views/pages/authentication/login";
import Profile from "./views/pages/users/profile/profile";
import ListOfText from "./views/pages/users/tests/list/listOfTest";
import Page404 from "./views/components/Page404";
import { Routes, Route } from "react-router-dom"
import Signup from "./views/pages/authentication/signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user">
          <Route index element={<ListOfText />} />
          <Route path="profile" element={<Profile />}/>
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
