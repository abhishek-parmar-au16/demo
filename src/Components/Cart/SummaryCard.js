import React from 'react'
import { Typography, Grid, Card, Button } from '@mui/material'

function SummaryCard({ items }) {
    let totalAmount = items.reduce((acc, curr) => acc + (parseFloat(curr.quantity) * parseFloat(curr.item.price)), 0).toFixed(2)
    return <Card elevation={3} sx={{ padding: "20px", borderRadius: '20px', backgroundColor: 'white' }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h4' >Summary</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item>
                        <Typography variant='h6' component='p' >Total Amount</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='h6' component='p' sx={{
                            color: "#77a464",
                            fontWeight: 500
                        }}>
                            £{totalAmount}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth={false} sx={{ borderRadius: '30px' }}>
                    Place Order
                </Button>
            </Grid>
        </Grid>
    </Card>
}

export default SummaryCard;