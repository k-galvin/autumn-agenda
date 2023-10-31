import { useState } from 'react'

const LoadingImage = ({ src, alt, imgClassName, containerClassName }) => {
  const [isLoading, setIsLoading] = useState(true)

  // Updates when image finishes loading
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={containerClassName}>
      {/* Loading message */}
      {isLoading && <div className="loading-image">Loading...</div>}

      {/* Image */}
      <img
        className={imgClassName}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  )
}

export default LoadingImage
