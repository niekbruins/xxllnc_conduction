import * as React from "react";

export default function ActionMenu() {

  return (
    <nav className="utrecht-sidenav">
      <ul className="utrecht-sidenav__list">
        <li className="utrecht-sidenav__item">
          <a className="utrecht-sidenav__link" href="/products">Diensten</a><span></span>
        </li>
        <li className="utrecht-sidenav__item">
          <a className="utrecht-sidenav__link" href="/cases">Mijn aanvragen</a><span></span>
        </li>
        <li className="utrecht-sidenav__item">
          <a className="utrecht-sidenav__link" href="/data">Mijn gegevens</a><span></span>
        </li>
        <li className="utrecht-sidenav__item">
          <a className="utrecht-sidenav__link" href="/vault">Mijn kluis</a><span></span>
        </li>

      </ul>
    </nav>
  );
}
