import { React, useContext } from "react";
import { TokenContext } from "../App";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// custom components
import ButtonPrimary from "./ButtonPrimary";
import SpotifyWhite from "../assets/spotify-white.png";

export default function SideNav({ login, logout }) {
  const token = useContext(TokenContext);
  return (
    <div className="flex h-full flex-col items-center justify-between">
      <SideNavLink
        title={<img src={SpotifyWhite} alt="" width={150} className="mt-5" />}
        pathname="/"
      />
      {token && (
        <div className="mt-16 flex w-full flex-1 flex-col gap-7 pl-8">
          <SideNavLink title="Home" icon="house" pathname="/" />
          <SideNavLink
            title="Search"
            icon="magnifying-glass"
            pathname="/search"
          />
          <SideNavLink title="Library" icon="book" pathname="/library" />
          <SideNavLink title="Profile" icon="user" pathname="/profile" />
        </div>
      )}
      <div className="mb-5">
        {token ? (
          <ButtonPrimary title="Log out" clickAction={logout} />
        ) : (
          <ButtonPrimary title="Log in" clickAction={login} />
        )}
      </div>
    </div>
  );
}

export function SideNavLink({ icon, title, pathname }) {
  return (
    <NavLink
      to={pathname}
      className={({ isActive }) =>
        isActive
          ? "text-neutral-50"
          : "text-neutral-50 opacity-70 transition-all duration-200 hover:opacity-100 active:scale-95"
      }
    >
      {icon && <FontAwesomeIcon icon={["fas", icon]} className="mr-3" />}
      {title}
    </NavLink>
  );
}
