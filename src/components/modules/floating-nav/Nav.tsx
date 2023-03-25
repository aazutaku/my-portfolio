import React from "react";
import { ItemType } from "./FloatingNav";

interface NavPropsTyle {
  className?: string;
  item: ItemType;
}

const Nav: React.FC<NavPropsTyle> = ({ className, item }) => {
  return (
    <li className={className}>
      <a href={item.link}>{item.icon}</a>
    </li>
  );
};

export default Nav;
