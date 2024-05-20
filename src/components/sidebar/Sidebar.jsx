import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "../../assets/logo.svg";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo"></img>
        <button className="close-btn" onClick={closeSidebar}>
          {/* <FaTimes /> */}
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum
        ipsam labore laborum assumenda minima, voluptas hic odit. Voluptatem
        magni, voluptatum eaque eveniet, reprehenderit ipsa quae corporis harum
        inventore repellat enim distinctio iusto ea ratione aliquam adipisci et.
        Odit doloribus molestiae voluptatum repellat illum tempora accusantium
        fuga neque, laborum maiores excepturi beatae, voluptas esse magnam ex
        facilis quod a culpa atque asperiores. Nesciunt architecto obcaecati
        quidem laboriosam amet modi natus ipsam corrupti officiis iure quas,
        distinctio sit ducimus iste minima tempore ab! Voluptatibus
        exercitationem esse asperiores consequuntur itaque perspiciatis dolorem,
        sit maiores eius doloremque quo enim praesentium odit cumque quibusdam?
      </h1>
      ;
    </aside>
  );
};
export default Sidebar;
