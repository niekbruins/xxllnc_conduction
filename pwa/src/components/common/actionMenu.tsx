import * as React from "react";

export const menuItems = [
  {href: '/data', label: 'Mijn gegevens'},
  {href: '/cases', label: 'Mijn aanvragen'},
  {href: '/vault', label: 'Mijn kluis'},
  {href: '/taxes', label: 'Mijn belastinggegevens'},
  {href: '/products', label: 'Diensten'},
]

const ActionMenu = () => (
  <nav className="utrecht-sidenav">
    <ul className="utrecht-sidenav__list">
      {menuItems.map(menuItem => (
        <li className="utrecht-sidenav__item">
          <a className="utrecht-sidenav__link" href={menuItem.href}>{menuItem.label}</a><span></span>
        </li>        
      ))}
    </ul>
  </nav>
);

export default ActionMenu