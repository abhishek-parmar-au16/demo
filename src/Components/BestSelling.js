import React from 'react'
import Axios from 'axios'
import { BASE_URL, productsApi } from './endPoints.js'
import { Box, Grid, Typography } from '@mui/material'

function BestSelling() {
    const [products, setProducts] = React.useState([])
    const [loaded, setLoaded] = React.useState(false) // if needed to show any loading spinner

    React.useEffect(() => {
        let unmounted = false
        const getData = async () => {
            try {
                const productResponse = await Axios.get(productsApi)
                const productData = productResponse.data.data
                setProducts(productData.map(item => ({
                    ...item,
                    id: item._id,
                    image: `${BASE_URL}/${item.image}`
                })))
            } catch (err) {
                setProducts([])
            }
            setLoaded(true)
        }
        getData()
        return () => {
            unmounted = true
        }
    }, [])

    return <Box component='section' sx={{
        padding: "120px 0px 0px",
        backgroundColor: 'white'
    }}>
        <Box>
            <Typography variant='h2' align='center' sx={{ marginBottom: "50px" }}  >Best-selling Products</Typography>
            <Typography align='center'>Some subtitles</Typography>
        </Box>
        <Box>
            <Grid container spacing={2} alignItems='center'>
                {
                    products.map(product => {
                        return <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Box sx={{
                                "& > img": {
                                    transition: "transform .3s ease-in-out",
                                    "&:hover": {
                                        transform: 'scale(1.1)'
                                    }
                                },
                                overflow: 'hidden',
                                padding: "5%"
                            }}>
                                <img src={product.image} alt={product.name} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: "cover"
                                }} />
                            </Box>
                            <Box>
                                <Typography variant='h4' >{product.name}</Typography>
                            </Box>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    </Box>
}

export default BestSelling;