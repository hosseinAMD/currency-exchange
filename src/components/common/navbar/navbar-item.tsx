import { MenuItem } from "models/MenuItem";
import { NavLink } from "react-router-dom";

export interface NavbarItemProps extends MenuItem {
  className?: string;
  activeClassName?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  title,
  path,
  exact = false,
  className,
  activeClassName,
}) => {
  return (
    <NavLink
      to={path}
      exact={exact}
      className={className}
      activeClassName={activeClassName}
    >
      {title}
    </NavLink>
  );
};

export default NavbarItem;
