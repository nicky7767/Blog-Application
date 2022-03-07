import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

// const useStyles 

const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  > *': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    },
    Link : {
        textDecoration:'none',
        color : 'inherite'
    }
})

const Header = () => {
    const classes = useStyle();
    return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to = '/'>
        <Typography>HOME</Typography>
        </Link>
        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
    )
}

export default Header;