export const degToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
}

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const earthRadius = 6371;

  const latRad1 = degToRad(lat1);
  const lonRad1 = degToRad(lon1);
  const latRad2 = degToRad(lat2);
  const lonRad2 = degToRad(lon2);

  const latDiff = latRad2 - latRad1;
  const lonDiff = lonRad2 - lonRad1;

  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  return distance.toFixed(4);
}