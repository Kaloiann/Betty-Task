export const calculateAbsoluteIndex = (index, items) => {
  const totalImages = items?.length;
  const normalizedIndex = ((index % totalImages) + totalImages) % totalImages;

  return normalizedIndex < 0 ? totalImages - 1 : normalizedIndex;
}