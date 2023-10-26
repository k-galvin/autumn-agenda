import { useState } from 'react'

const LoadingImage = ({ src, alt, imgClassName, containerClassName }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={containerClassName}>
      {isLoading && <div className="loading-image">Loading...</div>}
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
