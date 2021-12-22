import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        border: '1px solid red',
        height: '5vh'
    }
})

const Header = () => {
    const classes = useStyles()

    return(
        <div className={classes.root}>
            Header placeholder
        </div>
    )
}

export default Header