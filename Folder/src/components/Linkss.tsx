import { useDashboardStore } from "../store/useStore";
import { BrowserRouter as Router,Link } from "react-router-dom";
import styled from "styled-components";
const Sidebar =styled.div`
  background-color: #3f3d56;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 30%;
  @media only screen and (max-width: 600px) {
    flex-direction:row;
}
`;

const ProfileImage =styled.img`
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  margin-top:50%;
  margin-bottom:20px;
    @media only screen and (max-width: 600px) {
    flex-direction:row;
      margin:0;
}
`;
const NavLink =styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    color:gold;
  }
`;
const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
   @media only screen and (max-width: 600px) {
    flex-direction:row;
}
`;
const LogoutButton = styled(NavLink)`
  margin-top: auto;
  padding: 30px;
  text-align: center;
`;
const Linkss=()=>{
    const {UserPhoto} =useDashboardStore();
    return(
        <Sidebar>
            <ProfileImage src={UserPhoto}></ProfileImage>
            <Router>
                <NavMenu>
                    <NavLink to="/">🏠Dashboard</NavLink>
                    <NavLink to="/pro">📦Products</NavLink>
                    <NavLink to="/customers">👥Customers</NavLink>
                    <NavLink to="/reviews">⭐Reviews</NavLink>
                    <NavLink to="/settings">⚙️Settings</NavLink>
                    </NavMenu>
                    <LogoutButton to="/logout">🚪Logout</LogoutButton>
            </Router>
        </Sidebar>
    )
}

export default Linkss;