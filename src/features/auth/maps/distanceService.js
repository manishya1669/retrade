import axios from "axios";

/**
 * @param {String} origin - Location to calculate distance from
 * @param {String} destination - Location to calculate distance to
 *
 * @return {String} distance - distance in km
 */

export default async function distance(origin, destination) {
  const distance = await axios.get(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${API_KEY}`);
  return distance;
}
