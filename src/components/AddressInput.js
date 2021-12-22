import React from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        border: '2px solid red',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    textField: {
        width: '35%',
    }
})


const AddressInput = () => {
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <TextField 
                id='address-input'
                className={classes.textField}
                size='small'
                label={'Enter Wallet Address'}
            />
        </div>
    )
}

export default AddressInput