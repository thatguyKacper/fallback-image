function loadImage(url, fallbackUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.src = url

    image.addEventListener('load', () => {
      resolve(image)
    })

    image.addEventListener('error', (error) => {
      // Reject the Promise when: there is no fallback URL or fallback URL is the one that failed
      if (!fallbackUrl || image.src === fallbackUrl) {
        reject(error)
      } else {
        image.src = fallbackUrl
      }
    })
  })
}

loadImage('https://example.com/profile.jpg', 'https://example.com/fallback.jpg')
  .then((image) => {
    container.appendChild(image)
  })
  .catch((error) => {
    console.error('Image load failed')
  })
