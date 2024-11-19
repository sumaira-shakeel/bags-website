import React from 'react'

const Bags = () => {

  const bagsData = [
    {id:1,name:'Chanel',price: 6000,description:"Stylish bag",image:'/1mage1.jpg'},
    {id:2,name:'Prada',price: 5000,description:"Stylish bag",image:'/image8.jpg'},
    {id:3,name:'Gucci',price: 3000,description:"Stylish bag",image:'/image10.jpg'},
    {id:4,name:'Hermès',price: 7500,description:"Stylish bag",image:'/image4.jpg'},
    {id:5,name:'Goyard',price: 8000,description:"Stylish bag",image:'/image11.jpg'},
    {id:6,name:'Louis Vuitton',price: 9000,description:"Stylish bag",image:'/image9.jpg'}
  ]

  return (
    <div>
      <div className='bages'>
        {bagsData.map((bags)=>(
          <div key={bags.id} className='bag-card'>
            <img src={bags.image} alt={bags.name} className='img-size' />
            <h3>{bags.name}</h3>
            <p>{bags.description}</p>
            <div className='price'>${bags.price}</div>
            <button className='btn'>Add to Cart</button>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Bags