import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import Logo from '../../public/Gokulogo.png'

const drawerWidth = 240
const navItems = ['Home', 'About', 'contect']

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', color: 'white' }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={Logo} className="w-20 bg-cover" alt="Logo" />
        ABC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              sx={{
                textAlign: 'center',
                '&:hover': {
                  boxShadow: '0 2px 0 white', // White bottom shadow on hover
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: 'rgba(15, 15, 15, 0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 0px 5px rgba(246,79,49,1)',
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

          {/* Logo and name for small screens */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <img src={Logo} className="w-10 h-10 object-contain" alt="Logo" />
            <Typography variant="h6" noWrap component="div">
              ABC
            </Typography>
          </Box>

          {/* Logo for medium and up */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={Logo} className="w-20 bg-cover" alt="Logo" />
          </Typography>

          {/* Desktop nav items */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  '&.active': {
                    fontWeight: 'bold',
                    borderBottom: '2px solid white',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: '100vh', // Full height
              backgroundColor: '#000',
              color: '#fff',
              borderRight: '2px solid white', // Right border
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
}

export default DrawerAppBar
