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
import { ReactSession } from "react-client-session"
import PasserTest from "./views/pages/tests/PasserTest";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import FtHdFilter from "./views/components/FtHdFilter";
import { DyAdmin } from "dinyad-admin";
import { Dashboard } from "./admin/Dashboard";
import Test from "./views/pages/tests/PrintTest/Test";
import PasserTest2 from "./views/pages/tests/PasserTest2";
import PartieCreator from "./views/pages/tests/PartieCreator";
//Test de mon packqge

function App() {
  ReactSession.setStoreType("localStorage");
  return (
    <>
      
      <Routes>
     
        <Route path="/" element={ <FtHdFilter component={<Home />}/> } />
        <Route path="/login" element={<FtHdFilter component={<Login />}/>} />
        <Route path="/signup" element={<FtHdFilter component={<Signup />}/>} />
        <Route path="/user">
          <Route index element={<FtHdFilter component={<ListOfText />}/>} />
          <Route path="profile" element={<FtHdFilter component={<Profile />}/>}/>
        </Route>
        <Route path="/teststart" element={<FtHdFilter component={<PasserTest/>}/>}/>
        <Route path="*" element={<FtHdFilter component={<Page404/>} fh={false}/> }/>
       <Route path="/admin" element={<FtHdFilter component={<DyAdmin dashboard={new Dashboard()} title="Toeic Box"/>} fh={false}/>}/>
      <Route path="/passertest" element={<FtHdFilter component={<PasserTest2/>} fh={false}/>}/>  
      <Route path="/creerpartie" element={<FtHdFilter component={<PartieCreator/>} fh={false}/>}/>  
      </Routes>
     
     
    </>
  );
}

export default App;

//https://reactjs.org/warnings/invalid-hook-call-warning.html