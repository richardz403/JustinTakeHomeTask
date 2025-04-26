const BJ = `ChIJM75zpLa1j4ARd8IiWxkW30g`;
const HDL = 'ChIJK5B_3Z21j4ARuIABkYGEC-8';
const QQN = 'ChIJA0G9Rw61j4AR435CQh9ikyI';
const API_KEY = `AIzaSyAgU2TfnXR1jMnnWKr3AZzTDK_TkPO0u40`;

async function fetchPlaceDetails(ID) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${ID}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error('Error fetching place details:', error);
  }
}

fetchPlaceDetails(BJ);