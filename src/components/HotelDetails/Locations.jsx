import Star from "../../assets/logos/star.png";

const popularLandmarks = [
  {
    id: 1,
    logo: Star,
    name: "Bidar Airport",
    distance: "104.0 km",
  },
  {
    id: 2,
    logo: Star,
    name: "Surya Airport",
    distance: "42.0 km",
  },
  {
    id: 3,
    logo: Star,
    name: "Nayan Airport",
    distance: "10.6 km",
  },
  {
    id: 4,
    logo: Star,
    name: "Aparn Airport",
    distance: "35.2 km",
  },
];

const nearbyLandmarks = [
  {
    id: 1,
    logo: Star,
    name: "Lingampally",
    distance: "6.5 km",
  },
  {
    id: 2,
    logo: Star,
    name: "Suryapally",
    distance: "8.5 km",
  },
  {
    id: 3,
    logo: Star,
    name: "Durgampally",
    distance: "1.8 km",
  },
];
const airports = [
  {
    id: 1,
    name: "Bidar Airport",
    logo: Star,
    distance: "135.0 km",
  },
  {
    id: 2,
    name: "Saksham Airport",
    logo: Star,
    distance: " 36.9 km",
  },
];

const publicTransportations = [
  {
    id: 1,
    name: "Chandan Nagar",
    logo: Star,
    distnace: "35.8 km",
  },
  {
    id: 2,
    name: "Lingampally",
    logo: Star,
    distance: " 14.9 km",
  },
];

const hospitalClinics = [
  {
    id: 1,
    name: "Indresh Hospital",
    logo: Star,
    distnace: "13.8 km",
  },
  {
    id: 2,
    name: "Max Hospital",
    logo: Star,
    distance: " 6.9 km",
  },
];

const shoppingMalls = [
  {
    id: 1,
    name: "Jio Mart",
    logo: Star,
    distnace: "13.8 km",
  },
  {
    id: 2,
    name: "Centrio",
    logo: Star,
    distance: " 6.9 km",
  },
];

const Locations = () => {
  return (
    <div className="">
      <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
        <div>
          <div className="">
            <h1 className="text-bold text-2xl"> Location</h1>
            <p className="text-gray-700 mt-3 text-sm">
              H.No -3 Oppsoite Fiasca, Hyderabad, India 5000075
            </p>

            <div className="grid grid-cols-4 gap-6 justify-start mt-8 w-[80%]">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold"> Airports</h1>

                {airports.map((airport) => (
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <img src={Star} className="w-3 h-3 mt-2" />

                    <div>
                      <h3> {airport.name} </h3>
                      <h3> {airport.distance}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-bold"> Public Transportation</h1>

                {publicTransportations.map((publicTransportation) => (
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <img src={Star} className="w-3 h-3 mt-2" />

                    <div>
                      <h3> {publicTransportation.name} </h3>
                      <h3> {publicTransportation.distance}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-bold"> Hospital and Clinic </h1>

                {hospitalClinics.map((hospitalClinic) => (
                  <div
                    key={hospitalClinic.id}
                    className="flex flex-row gap-2 items-start justify-start"
                  >
                    <img src={Star} className="w-3 h-3 mt-2" />

                    <div>
                      <h3> {hospitalClinic.name} </h3>
                      <h3> {hospitalClinic.distance}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-bold"> Shoping</h1>

                {shoppingMalls.map((shoppingMall) => (
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <img src={Star} className="w-3 h-3 mt-2" />

                    <div>
                      <h3> {shoppingMall.name}</h3>
                      <h3> {shoppingMall.distance}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr />

          <div className="mt-12">
            <h1 className="text-bold text-2xl"> Whats Nearby</h1>

            <div className="grid grid-cols-2 gap-6 justify-start w-[60%] mt-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold"> Popular Landmarks</h1>

                {popularLandmarks.map((popularLandmark) => (
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <img src={Star} className="w-3 h-3 mt-2" />

                    <div>
                      <h3> {popularLandmark.name} </h3>
                      <h3> {popularLandmark.distance}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-bold"> Nearby landmarks</h1>

                {nearbyLandmarks.map((nearbyLandmark) => (
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <img src={Star} className="w-3 h-3 mt-2" />

                    <div>
                      <h3> {nearbyLandmark.name} </h3>
                      <h3> {nearbyLandmark.distance}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
