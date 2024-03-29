import { useState } from 'react'
import styles from './PropertyListing.module.css' // Import CSS module for styling

const PropertyListing = ({ property }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className={styles.propertyListing}>
      <img
        src={property.images[0]}
        alt="Property"
        className={styles.propertyImage}
      />
      <div className={styles.propertyInfo}>
        <h2>{property.address}</h2>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Price: ${property.price}</p>
        <button onClick={toggleDetails}>Details</button>
        {showDetails && (
          <div className={styles.details}>
            <p>Square Footage: {property.squareFootage}</p>
            <p>Amenities: {property.amenities.join(', ')}</p>
            <p>
              Images:
              {property.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className={styles.propertyImage}
                  />
                </div>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PropertyListing
