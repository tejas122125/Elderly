import MapElder from '@/components/shared/MapElder'
import React from 'react'

const Home = () => {
  fetch('http://localhost:3000/test')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
  return (
    <div className='w-screen h-screen flex flex-col'>
        <MapElder/>
    </div>
  )
}

export default Home