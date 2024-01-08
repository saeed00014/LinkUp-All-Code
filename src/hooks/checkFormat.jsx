const checkFormat = ({acceptedFiles, setFormat, setIsFormatError}) => {
  switch(acceptedFiles[0].name.split(".")[acceptedFiles[0].name.split(".").length - 1].toLowerCase()){
    case "m4v": 
      setFormat("video") 
      setIsFormatError(false)
      break;
    case "avi": 
      setFormat("video")
      setIsFormatError(false)
      break;
    case "mp4": 
      setFormat("video")
      setIsFormatError(false)
      break;
    case "mov": 
      setFormat("video")
      setIsFormatError(false)
      break;
    case "mpg": 
      setFormat("video")         
      setIsFormatError(false)
      break;
    case "mpeg": 
      setFormat("video")
      setIsFormatError(false)
      break;
    case "png" : 
      setFormat("image")
      setIsFormatError(false)
      break;
    case "svg" : 
      setFormat("image")
      setIsFormatError(false)
      break;
    case "gif" : 
      setFormat("image")
      setIsFormatError(false)
      break;
    case "jpg" : 
      setFormat("image")
      setIsFormatError(false)
      break;
    default:
      setIsFormatError(true)
    }
}

export default checkFormat