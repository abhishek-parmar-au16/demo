import React from 'react'
import { Box, Typography, Grid, CircularProgress } from '@mui/material'
import CommonHeader from '../ContactUs/Header'
import SectionContainer from '../CommonTemplates/SectionContainer';
import { useSelector } from 'react-redux'
import { getCartState } from '../../app/modules/cart/slice'
import CartCard from './CartCard'
import SummaryCard from './SummaryCard'

function Cart() {
    const cartState = useSelector(getCartState)
    const { items, status } = cartState
    let itemCount = items.reduce((acc, curr) => acc + parseFloat(curr.localQuantity), 0)
    return <Box>
        <CommonHeader>
            <Typography variant='h1' color='white' sx={{ maxWidth: "50%" }}>
                Cart
            </Typography>
        </CommonHeader>
        <SectionContainer containerBackground='white'>
            {
                status === 'loading' ?
                    <CircularProgress />
                    :
                    status === 'error' ?
                        <Typography variant='h3' >Error loading cart!</Typography>
                        :
                        <>
                            {
                                !!itemCount ?
                                    <Grid container spacing={4}>
                                        <Grid item xs={12}>
                                            <Typography variant='h3'>Items ({itemCount})</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Grid container spacing={3}>
                                                {
                                                    items.map(cartItem => {
                                                        return <Grid item key={cartItem.id} xs={12}>
                                                            <CartCard
                                                                {...cartItem}
                                                            />
                                                        </Grid>
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SummaryCard
                                                items={items}
                                            />
                                        </Grid>
                                    </Grid>
                                    :
                                    <Typography variant='h3' >No Items In Cart!</Typography>

                            }
                        </>
            }

        </SectionContainer>
    </Box>
}

export default Cart;