import { Container } from "@material-ui/core";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "./HeaderStyles";
import SidebarOption from "./SidebarOption";
function Sidebar({ toggle, setToggle }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setToggle(!toggle);
    navigate("/auth");
  };

  return (
    <Container
      className={
        !toggle ? `${classes.sidebar}` : `${classes.toggle} ${classes.sidebar}`
      }
    >
      <SidebarOption
        text="Profile"
        Icon={<PersonIcon />}
        action={() => {
          navigate("/profile");
          setToggle(!toggle);
        }}
      />
      <SidebarOption
        text="Products"
        Icon={<StorefrontIcon />}
        action={() => {
          navigate("/products");
          setToggle(!toggle);
        }}
      />
      <SidebarOption
        text="Admin Panel"
        Icon={<SupervisorAccountIcon />}
        action={() => navigate("/admin")}
      />
      <SidebarOption
        text="Logout"
        Icon={<PowerSettingsNew />}
        action={logout}
      />
    </Container>
  );
}

export default Sidebar;
