import Header from "./views/components/header";
import Footer from "./views/components/footer";
import Vocabulary from "./views/pages/users/vocabulary/vocabulary"
import Home from "./views/pages/users/home/home";
import Login from "./views/pages/authentication/login";
import Profile from "./views/pages/users/profile/profile";
import ListOfText from "./views/pages/users/tests/list/listOfTest";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      {/* <Login /> */}
      {/* <Profile/> */}
      {/* <ListOfText/> */}
      <Footer />
    </div>
  );
}

export default App;
