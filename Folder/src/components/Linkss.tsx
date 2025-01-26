import { useState } from "react";
import { useDashboardStore } from "../store/useStore";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavMenuProps {
  isOpen: boolean;
}

const Sidebar = styled.div`
  background-color: #3f3d56;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 30%;

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  
    border-radius: 0;
=
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-top: 50%;
  margin-bottom: 20px;
  width: 80px;
  height: 80px;

  @media only screen and (max-width: 1024px) {
    margin: 0;
    padding: 20px;
      width: 420px;
  height: 500px;
  }
`;

const NavMenu = styled.nav<NavMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    left:150%;
    top:50%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background-color: #3f3d56;
    width: 90%;
    text-align: center;
    padding: 20px;
    border-radius: 0 0 20px 20px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    color: gold;
  }
    @media only screen and (max-width: 1024px) {
    margin-right: -200px;
    padding: 30px;
    align-items:center;
   justify-content:center;
   gap:30px;

  }
`;

const LogoutButton = styled(NavLink)`
  margin-top: auto;
  padding: 20px;
  text-align: center;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
  display:flex;
  width:100%;
  margin-left:55%;
    }
`;

const Linkss = () => {
  const { UserPhoto } = useDashboardStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Sidebar>
      <ProfileImage src={UserPhoto} />
      <Router>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <NavMenu isOpen={menuOpen}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>🏠 Dashboard</NavLink>
          <NavLink to="/pro" onClick={() => setMenuOpen(false)}>📦 Products</NavLink>
          <NavLink to="/customers" onClick={() => setMenuOpen(false)}>👥 Customers</NavLink>
          <NavLink to="/reviews" onClick={() => setMenuOpen(false)}>⭐ Reviews</NavLink>
          <NavLink to="/settings" onClick={() => setMenuOpen(false)}>⚙️ Settings</NavLink>
          <LogoutButton to="/logout" onClick={() => setMenuOpen(false)}>🚪 Logout</LogoutButton>
        </NavMenu>
      </Router>
    </Sidebar>
  );
};

export default Linkss;
