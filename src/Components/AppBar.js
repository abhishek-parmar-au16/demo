import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Logo from '../images/ecofood-footer-logo.png'
import LogoScrolled from '../images/logo-sticky.png'
import AboutUs from './About'
function AppBarComponents() {
    const [scrolled, setScrolled] = React.useState(false)
    React.useEffect(() => {
        const onScroll = (e) => {
            let scrolled = window.scrollY
            setScrolled(scrolled > 80)
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    let routes = [
        { id: "home", title: "Home", route: "/" },
        { id: "about-us", title: "About Us", route: "/AboutUs" },
        { id: "products", title: "Products", route: '/products' },
        { id: 'contact-us', title: "Contact Us", route: "/contact" }
    ]
    return <AppBar color="primary" elevation={0}
        color={scrolled ? 'primary' : "transparent"}
        // sx={{ backgroundColor: scrolled ? (theme) => theme.palette.secondary.main : 'transparent' }}
        >
        <Toolbar sx={{
            maxWidth: '1100px',
            width: '100%',
            margin: 'auto',
            padding: '0px'
        }}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <Grid item>
                    <img alt="Logo" src={scrolled ? LogoScrolled : Logo} style={{
                        maxHeight: "120px",
                        padding: '20px 0px',
                        boxSizing: 'border-box'
                    }} />
                </Grid>
                <Grid item>
                    <Grid container spacing={3} alignItems='center'>
                        {
                            routes.map(item => {
                                return <Grid item key={item.id}>
                                    <Typography sx={{
                                        color: "white"
                                    }}>{item.title}</Typography>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
}

export default AppBarComponents;