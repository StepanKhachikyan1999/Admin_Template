import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {products} from '../../data/productsData'
import './products.css'

const Products = () => {
    
    // const [products,setProducts] = useState()
    // console.log(products);

    // useEffect(() => {
    //     const apiUrl = 'https://fakestoreapi.com/products';
    //     axios.get(apiUrl).then((resp) => {
    //       const allPersons = resp.data;
    //       setProducts(allPersons);
    //     });
    //   }, [setProducts]);
  

    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>;

    return (
        <div className="productsection">
        {
          products &&  products.map((product) => {
              return(
               
                <Card sx={{ minWidth: 275 }} className="myClass">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {product.title}
                    </Typography>
                    <img src={product.image} alt="image" style={{width:'100px'}} />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {product.category}
                    </Typography>
                    <Typography variant="body2">
                       {product.price}
                    </Typography>
                </CardContent>
    
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> 
            </Card>
    
              )
                
            })
        }
       
        </div>
    );
};

export default Products;
