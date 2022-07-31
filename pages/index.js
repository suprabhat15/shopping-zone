import Layout from '../components/Layout'
import { Card, CardActionArea, CardMedia, Grid, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import data from '../utils/data'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1>Product</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.name}>
            <Card>
              <Link href={`/product/${product.id}`}>
                <a>
                  <CardActionArea>  {/* This is the area that will be clickable */}
                    <CardMedia 
                      component="img"
                      image={product.image}
                      title={product.title}
                    />
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
              </Link>
              <CardActions>
                <Typography>$ {product.price}</Typography>
                <Button size="small" color="primary">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
