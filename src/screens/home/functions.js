const isImageUrl = ({inputText}) => {
  if ((inputText.startsWith('http://') || inputText.startsWith('https://')) && (inputText.endsWith('.jpg') || inputText.endsWith('.png') || inputText.endsWith('.jpeg'))) {
    return true;
  } else {
    return false;
  }
}

export { isImageUrl }