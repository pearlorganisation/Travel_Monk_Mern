import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from "../../hooks/image-tabs";

const tabs = [
  {
    title: "Expertise & Experience ",
    id: "1",
    description:
      "With years of experience in the travel industry, our team brings a wealth of expertise to every aspect of your journey. We are passionate about crafting personalized, unforgettable travel experiences, backed by in-depth knowledge of destinations, local cultures, and the latest travel trends. Trust us to guide you with insider tips and insider access to make your travels smoother, smarter, and more enriching.",
    imageUrl:
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Comprehensive Travel Packages",
    id: "2",
    description:
      "Our comprehensive travel packages are designed to cater to every type of traveler, from adventure seekers to those looking for relaxation. We offer all-inclusive itineraries that cover flights, accommodations, guided tours, and more—ensuring a hassle-free, well-rounded experience. Whether you're planning a quick getaway or an extended vacation, we’ve got a package that fits your needs and preferences perfectly.",
    imageUrl:
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Safety & Reliability",
    id: "3",
    description:
      "Your safety and peace of mind are our top priorities. We work with trusted partners and follow rigorous standards to ensure every aspect of your travel experience is reliable, secure, and seamless. Whether it’s booking accommodations, arranging transportation, or organizing tours, we make sure everything is handled with the utmost care and attention to detail, so you can focus on enjoying your journey with confidence.",
    imageUrl:
      "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  },
  {
    title: "Unique and Authentic Experiences",
    id: "4",
    description:
      "We specialize in creating unique and authentic travel experiences that go beyond typical tourist attractions. From hidden gems to local cultural immersions, we connect you with real, meaningful encounters that allow you to truly experience a destination. Whether it’s dining with locals, exploring off-the-beaten-path adventures, or engaging in hands-on activities, we make sure your journey is one-of-a-kind.",
    imageUrl:
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Exceptional Value",
    id: "5",
    description:
      "We believe in offering exceptional value without compromising on quality. Our carefully curated travel packages are designed to give you the best experiences at competitive prices, ensuring you get the most out of every dollar spent. Whether it’s premium accommodations, exclusive activities, or seamless service, we work hard to provide you with unforgettable trips that deliver outstanding value.",
    imageUrl:
      "https://images.pexels.com/photos/590029/pexels-photo-590029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
function AnimatedImageTabs() {
  return (
    <div className="px-20 py-10">
      <div className=" w-full  h-full">
        <TabsProvider
          defaultValue="1"
          className="md:grid md:grid-cols-12 items-center justify-center"
        >
          <TabImageContainer className="md:col-span-7">
            {tabs.map((tab, index) => (
              <TabImage key={index} value={tab.id}>
                <img
                  src={tab.imageUrl}
                  alt={tab.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </TabImage>
            ))}
          </TabImageContainer>
          <TabList className="md:col-span-5">
            {tabs.map((tab, index) => (
              <TabItem key={index} value={tab.id}>
                <TabHeader value={tab.id}>{tab.title}</TabHeader>
                <TabDes value={tab.id}>
                  {" "}
                  <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                    {tab.description}
                  </p>
                  <img
                    src={tab.imageUrl}
                    alt={tab.title}
                    className="md:hidden block rounded-md"
                  />
                </TabDes>
              </TabItem>
            ))}
          </TabList>
        </TabsProvider>
      </div>
    </div>
  );
}
export default AnimatedImageTabs;
