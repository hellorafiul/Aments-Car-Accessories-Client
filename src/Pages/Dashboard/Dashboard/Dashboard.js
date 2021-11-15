import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ReviewsIcon from '@mui/icons-material/Reviews';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PaymentsIcon from '@mui/icons-material/Payments';
import Reviews from './../Reviews/Reviews';
import MyOrders from './../MyOrders/MyOrders';
import PayNow from './../PayNow/PayNow';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddAProduct from './../AddAProduct/AddAProduct';
import ManageAllOrders from './../ManageAllOrders/ManageAllOrders';
import ManageProducts from './../ManageProducts/ManageProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import logo from '../../../images/Aments.png'


const drawerWidth = 250;

function Dashboard(props) {
  const { admin, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!admin ? <Box>
          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}`}>
            <ListItem button>
              <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/myOrders`}>
            <ListItem button>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>
          </Link>
          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/reviews`}>
            <ListItem button>
              <ListItemIcon>
                <ReviewsIcon />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItem>
          </Link>
          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/payNow`}>
            <ListItem button>
              <ListItemIcon>
                <PaymentsIcon />
              </ListItemIcon>
              <ListItemText primary="Pay Now" />
            </ListItem>
          </Link>
        </Box> : <Box>
          <Divider />
          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/manageAllOrders`}>
            <ListItem button>
              <ListItemIcon>
                <LocalConvenienceStoreIcon />
              </ListItemIcon>
              <ListItemText primary="Manage All Orders" />
            </ListItem>
          </Link>

          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/addAProduct`}>
            <ListItem button>
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Add A Product" />
            </ListItem>
          </Link>

          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/manageProducts`}>
            <ListItem button>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItem>
          </Link>

          <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/makeAdmin`}>
            <ListItem button>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItem>
          </Link>
        </Box>
        }

        {/* Dashboard logout */}

        <Link onClick={logout} style={{ display: "flex", textDecoration: "none", color: "#333" }} to='/'>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>

      </List>
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: "700px" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: '#333333',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/"><img src={logo} alt="" /></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/payNow`}>
            <PayNow></PayNow>
          </Route>

          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addAProduct`}>
            <AddAProduct></AddAProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
