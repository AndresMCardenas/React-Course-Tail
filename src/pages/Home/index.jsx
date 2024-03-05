import { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';

export default function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  
  }, [])
  return (
    <Layout>
      Home
      {
        items && items?.map(item => (
          <Card key={item.id} {...item} />          
        ))
      }
      <Card />
    </Layout>    
  )
}