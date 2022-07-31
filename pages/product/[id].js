import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const product = data.products.find(product => product.id === id); // Find the product with the id that matches the url's id.

  if(!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}
