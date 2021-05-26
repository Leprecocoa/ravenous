const apiKey =
  "boIY9sjQkcBL5qjArtK7T1njv7D_F9q7mzBONNYtMU49vYlKIt7t8T0Lh0Wgai3xZ4WWtQY7WTufko8_4ReKlhvZJZ15YY-VAKLr1Huz5wRyu3CmHDvDJZgcR05CYHYx";

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        } else {
        }
      });
  },
};
