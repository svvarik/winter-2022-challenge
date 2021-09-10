import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../../assets/images/logo.svg'
import { Typography } from '@material-ui/core'
import { Colors } from '../../constants/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: Colors.primary,
      paddingLeft: 10,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    appBar: {
      backgroundColor: Colors.offWhite,
    },
    navButton: {
      color: Colors.primary,
      fontWeight: 'bold',
    },
  })
)

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position='static' className={classes.appBar}>
        <Toolbar>
          <img src={logo} alt='' />
          <Typography variant='h6' className={classes.title}>
            Spacestagram Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
