const imageSizeReducer = ({file, setImage, edition}) => {
  const MAX_WIDTH = edition == "profile" ? 125 : 1000
  const MAX_HEIGHT = edition == "profile" ? 125 : 1600
  const MIME_TYPE = "image/jpeg"
  const QUALITY = 1

  function calculateSize(img, maxWidth, maxHeight) {
    let width = img.width
    let height = img.height
  
    if (width > height) {
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width)
        width = maxWidth
      }
    } else {
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height)
        height = maxHeight
      }
    }
    return [width, height]
  }

  const img = new Image()
  img.src = file;
  img.onload = function () {
    URL.revokeObjectURL(this.src)
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT)
    const canvas = document.createElement("canvas")
    canvas.width = newWidth
    canvas.height = newHeight
    const ctx = canvas.getContext("2d")
    ctx.drawImage(img, 0, 0, newWidth, newHeight)
    canvas.toBlob(
      (blob) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          setImage(reader.result)
        }
      },
      MIME_TYPE,
      QUALITY
    )
  }
}

export default imageSizeReducer