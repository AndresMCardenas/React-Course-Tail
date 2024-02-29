import { useState } from 'react';
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';

export default function Home() {
  const [items, setItems] = useState([

  ]);
  return (
    <Layout>
      Home
      <Card />
    </Layout>    
  )
}