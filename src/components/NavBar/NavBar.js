import React from "react";
// import Scrollspy from "react-scrollspy";
// import Links from "../Links";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./NavBar.css";

const NavBar = (props) => (
  <header className="NavBar">
    <nav className="NavBar__navigation">
      <div className="drawertogglebtn-div">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="NavBar__logo">
        <a href="#home">Home</a>
      </div>
      <div className="spacer"></div>
      <div className="NavBar_navigation-items">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* <Links /> */}
      </div>
    </nav>
  </header>
);

// function NavBar() {
//   return (
//     <div className="App-nav">
//       <Scrollspy
//         items={["home", "about", "projects", "contact"]}
//         currentClassName="is-current"
//         offset={0}
//         className="nav-list"
//       >
//         <div className="nav-item">
//           <li>
//             <a className="nav-link" href="#home">
//               Home
//             </a>
//           </li>
//         </div>
//         <div className="nav-item">
//           <li>
//             <a className="nav-link" href="#about">
//               About
//             </a>
//           </li>
//         </div>
//         <div className="nav-item">
//           <li>
//             <a className="nav-link" href="#projects">
//               Projects
//             </a>
//           </li>
//         </div>
//         <div className="nav-item">
//           <li>
//             <a className="nav-link" href="#contact">
//               Contact
//             </a>
//           </li>
//         </div>
//         <Links />
//       </Scrollspy>
//     </div>
//   );
// }

export default NavBar;
