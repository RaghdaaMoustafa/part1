import { useState } from 'react'

const PropertyListing = ({ property }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <div className="card">
        <div className="imgHolder">
          <img src={property.images[0]} alt="Property" />
        </div>
        <div className="description">
          <div className="placeDetails">
            <h2>{property.address}</h2>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Price: ${property.price}</p>
            <div className="btnHolder">
              <button className="btnDetails" onClick={toggleDetails}>
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="moreDetails">
          <div className="d-more">
            <p>Square Footage: {property.squareFootage}</p>
            <p>Amenities: {property.amenities.join(', ')}</p>
          </div>
          <div className="gallery">
            {property.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default PropertyListing
