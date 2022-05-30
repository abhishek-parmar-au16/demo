import React from 'react'
import { Typography, Grid, Card, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeFromCartById, addToCartById, addToCartState } from '../../app/modules/cart/slice'
import debounce from 'lodash.debounce'


function CartCard({ id, item, localQuantity }) {
    const dispatch = useDispatch()

    const debouncedFunction = React.useCallback(debounce(() => {
        dispatch(addToCartState())
    }, 2000), [])


    return <Card elevation={3} sx={{ backgroundColor: 'white', borderRadius: "20px", padding: "20px" }}>
        <Grid container alignItems='center' spacing={2}>
            <Grid item xs={2}>
                <img src={item.image} alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: 'contain' }}
                />
            </Grid>
            <Grid item xs={10}>
                <Grid container alignItems='center' spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant='h4'>{item.name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        color: "#77a464"
                                    }}
                                >£{!isNaN(parseFloat(item.price)) ? parseFloat(item.price).toFixed(2) : item.price}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent='flex-end' alignItems='center' spacing={1}>
                            <Grid item>
                                <Button sx={{ padding: "5px 10px", borderRadius: "5px", minWidth: "0px", color: 'white' }} disabled={localQuantity === 0}
                                    onClick={() => {
                                        dispatch(removeFromCartById({ id: id }))
                                        debouncedFunction()
                                    }}
                                >-</Button>
                            </Grid>
                            <Grid item>
                                <Typography>{localQuantity}</Typography>
                            </Grid>
                            <Grid item >
                                <Button sx={{ padding: "5px 10px", borderRadius: "5px", minWidth: "0px", color: 'white' }}
                                    onClick={() => {
                                        dispatch(addToCartById({ id: id }))
                                        debouncedFunction()
                                    }}
                                >+</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Card >
}

export default CartCard;