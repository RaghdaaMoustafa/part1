import PropertyListing from './components/PropertyListing' 
import './App.css' 

const App = () => {

  const property = {
    address: '123 Main St',
    bedrooms: 3,
    bathrooms: 2,
    price: 250000,
    squareFootage: 1500,
    amenities: ['Swimming Pool', 'Gym', 'Garage'],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTKUmsKphgEpcVmz7IY9bD9mfFVLzMnxrd6cR3mqAEA&s',
      'https://img2.storyblok.com/f/76838/900x788/60d35ab888/home-gym-garage-addition.jpg',
      'https://i.pinimg.com/736x/7d/6d/50/7d6d50e7c4b47c36755750c1951cbe1e.jpg',
    ],
  }

  return (
    <div className="app">
      <h1>Property Listing</h1>
      <PropertyListing property={property} />
    </div>
  )
}

export default App
