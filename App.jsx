import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: "319232",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/449ee9f8-c70d-4178-a49b-c477dfec308b_319232.jpg",
    locality: "City Walk Shopping Mall",
    areaName: "Lal Chowk",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.1,
    parentId: "721",
    avgRatingString: "4.1",
    totalRatingsString: "4.4K+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 7.9,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "7.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-03-06 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "FREE ITEM",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-2fddec04-a228-4cb1-8915-d9299cb9396d",
  },
  cta: {
    link: "https://www.swiggy.com/city/srinagar/pizza-hut-city-walk-shopping-mall-lal-chowk-rest319232",
    type: "WEBLINK",
  },
};
const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/449ee9f8-c70d-4178-a49b-c477dfec308b_319232.jpg"
        alt="logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search-container">Search</div>
      <div className="res-container">
        <ResCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
