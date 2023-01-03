import UserSession from "../pages/authentication/UserSession";
import axios from 'axios'
import { useState } from "react";
import {Navigate} from 'react-router-dom'
export default function Header() {
  const [redirect, setRedirect] = useState({ state: false, to: "/" })

  const user = UserSession.getUser()
  const logout= async (e)=>{
      e.preventDefault();
      const r = await axios.post("http://localhost:8000/auth/logout")
      if(!r.data.auth){
        UserSession.removeUser()
        setRedirect({state:true,to:"/",})
      }
  }

  if (redirect.state) {
    console.log("yes")
    return <Navigate to={redirect.to} replace={true}/>
  }
  return (
    <header class="site_header header_style_2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col col-lg-3 col-6">
            <div class="site_logo">
              <a class="site_link" href="/">
                <img
                  src="/assets/images/logo/site_logo.png"
                  alt="TOEICBox"
                />
              </a>
            </div>
          </div>
          <div class="col col-lg-3">
            <div class="header_search">
              <input type="search" name="search" placeholder="Recherche..." />
              <button type="submit">
                <img
                  src="/assets/images/icons/icon_search.svg"
                  alt="Icon Search"
                />
              </button>
            </div>
          </div>
          <div class="col col-lg-6 col-6">
            <nav class="main_menu navbar navbar-expand-lg">
              <div
                class="main_menu_inner collapse navbar-collapse justify-content-center"
                id="main_menu_dropdown"
              >
                <ul class="main_menu_list unordered_list_center">
                  <li class="active">
                    <a class="nav-link" href="/">
                      Accueil
                    </a>
                  </li>
                  <li class="dropdown">
                    <a
                      class="nav-link"
                      href="#"
                      id="pages_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Modules
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="pages_submenu">
                      <li>
                        <a href="#">PART 1 : Photos</a>
                      </li>
                      <li>
                        <a href="#">PART 2 : /R</a>
                      </li>
                      <li>
                        <a href="#">PART 3 : Conversations</a>
                      </li>
                      <li>
                        <a href="#">PART 4 : Shorts Talks</a>
                      </li>
                      <li>
                        <a href="#">
                          PART 5 : Incomplete Sentences
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          PART 6 : Text completion
                        </a>
                      </li>
                      <li class="dropdown">
                        <a
                          class="nav-link"
                          href="#"
                          id="register_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          PART 7 : Passages
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="register_submenu"
                        >
                          <li>
                            <a href="#!">Single passages</a>
                          </li>
                          <li>
                            <a href="#!">Double passages</a>
                          </li>
                          <li>
                            <a href="#!">Triple passages</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      class="nav-link"
                      href="#"
                      id="pages_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Astuces
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="pages_submenu">
                      <li>
                        <a href="">TOEIC Listening Tips</a>
                      </li>
                      <li>
                        <a href="">TOEIC Reading Tips</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <a class="nav-link" href="#!">
                      Test
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="header_btns_group unordered_list_end">
                <li>
                  <button
                    data-magnetic
                    data-cursor="-opaque"
                    class="mobile_menu_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-controls="main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="far fa-bars"></i>
                  </button>
                </li>
                <li class="dropdown">
                  <a
                    data-magnetic
                    data-cursor="-opaque"
                    class="nav-link login_btn"
                    href=""
                    id="pages_submenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="far fa-user"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="pages_submenu">
                    { user &&
                    <div>
                    <li>
                      <a href="/user">Compte</a>
                    </li>
                    <li>
                      <a href="/user/profile">Profil</a>
                    </li>
                    <li>
                      <a href="" onClick={logout}>Logout</a>
                    </li> 
                    </div>
                    }
                    { !user &&
                    <li>
                      <a href="/login">Login</a>
                      <a href="/signup">Signup</a>
                    </li>}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
