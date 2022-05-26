import React from 'react'
import { productsApi, BASE_URL } from '../endPoints'
import Axios from 'axios'

import { Grid, Typography, Box, CircularProgress, Button, TextField } from "@mui/material"
import CommonHeader from './FormikForm'
import SectionContainer from './SectionContainer.js'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const params = useParams()
    const productId = params?.id
    const [product, setProduct] = React.useState({})
    const [loaded, setLoaded] = React.useState(false) // if needed to show any loading spinner
    const [value, setValue] = React.useState(1)

    React.useEffect(() => {
        let unmounted = false
        const getData = async () => {
            try {
                if (!!productId) {
                    const productResponse = await Axios.get(`${productsApi}/${productId}`)
                    const productData = productResponse.data.data
                    if (!unmounted) {
                        setProduct(!!productData._id ? { ...productData, id: productData._id, image: `${BASE_URL}/${productData.image}` } : {})
                    }
                } else {
                    if (!unmounted) {
                        setProduct({})
                    }
                }

            } catch (err) {
                if (!unmounted) {
                    setProduct({})
                }
            }
            setLoaded(true)
        }
        getData()
        return () => {
            unmounted = true
            setLoaded(false)
            setValue(1)
        }
    }, [productId])
    if (!loaded) {
        return <div style={{
            width: "1000vw", height: "100vh", display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <CircularProgress />
        </div>
    } else {
        if (!product.id) {
            return <CommonHeader>
                <Typography variant='h1' color='white' sx={{ maxWidth: "50%" }}>
                    Product Not Found!
                </Typography>
            </CommonHeader>
        }
        return <Box>
            <CommonHeader>
                <Typography variant='h1' color='white' sx={{ maxWidth: "50%" }}>
                    Products
                </Typography>
            </CommonHeader>
            <SectionContainer containerBackground='white'>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src={product.image} alt={product.name}
                            style={{
                                objectFit: "contain",
                                width: '100%', height: '100%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant='h3' component='h2'>{product.name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant='h3' component='p'
                                    color='primary'
                                >£{!isNaN(parseFloat(product.price)) ? parseFloat(product.price).toFixed(2) : product.price}</Typography>
                            </Grid>
                            {
                                product.description &&
                                <Grid item xs={12}>
                                    <Typography sx={{ color: "#626262" }}>{product.description}</Typography>
                                </Grid>
                            }
                            <Grid item xs={12}>
                                <Grid container alignItems='center' spacing={2}>
                                    <Grid item xs={3}>
                                        <TextField value={value} onChange={(e) => setValue(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Button sx={{ borderRadius: "30px", textTransform: 'none' }} fullWidth={false}
                                        >Add To Cart</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SectionContainer>
        </Box>
    }


}

export default ProductDetail;