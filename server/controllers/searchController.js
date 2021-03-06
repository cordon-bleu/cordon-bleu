const axios = require("axios");

module.exports = {
  searchRestaurants: async (req, res) => {
    const { lat, lng } = req.body.obj;
    let timeDist = [];
    let miles = [];
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=8000&type=restaurant&key=AIzaSyCV8IYAG1nDtoLnqYAwFHZsd-zpT9GKQyE`
    );

    response.data.results.map(async item => {
      const time = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${lng}&destinations=place_id:${
          item.place_id
        }&departure_time=now&key=AIzaSyCV8IYAG1nDtoLnqYAwFHZsd-zpT9GKQyE`
      );

      for (let i = 0; i < time.data.rows.length; i++) {
        for (let j = 0; j < time.data.rows[i].elements.length; j++) {
          timeDist.push(time.data.rows[i].elements[j].duration_in_traffic.text);
          miles.push(time.data.rows[i].elements[j].distance.text);
        }
      }

      let restaurantAndDistance = [
        {
          driving: timeDist,
          gpsTime: miles,
          restaurantName: response.data.results.map(item => item.name),
          price: response.data.results.map(item => item.price_level),
          type: response.data.results.map(item => item.types),
          rating: response.data.results.map(item => item.rating),
          totalRatings: response.data.results.map(
            item => item.user_ratings_total
          ),
          openStatus: response.data.results.map(item => item.opening_hours)
        }
      ];

      if (timeDist.length === 20 && miles.length === 20) {
        res.status(200).json(restaurantAndDistance);
      }
    });
  }
};
