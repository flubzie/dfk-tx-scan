import React from 'react'
import { makeStyles } from '@mui/styles'
import AddressInput from './AddressInput'

const useStyles = makeStyles({
    root: {
        border: '5px solid green',
        minHeight: '95vh', 
    }
})

const MainView = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AddressInput />
        </div>
    )
}

export default MainView