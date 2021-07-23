import { menuItems } from "data/menu";
import NavbarItem from "./navbar-item";
import t from "i18n";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div>
          <span>{t("currency")}</span>
          <strong>{t("exchange")}</strong>
        </div>
        <div className="navbar__items">
          {menuItems.map((item) => (
            <NavbarItem
              key={item.path}
              className="navbar__item"
              activeClassName="navbar__item--active"
              {...item}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
