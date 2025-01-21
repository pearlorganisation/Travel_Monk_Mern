import React from 'react'

function PrivacyPolicy() {
  return (
    <div>
         <div
        style={{
          backgroundImage: `url('/HeroImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-full h-80 justify-start items-center flex">
          <h1 className="text-5xl text-white font-semibold mx-auto">Privacy Policy</h1>
        </div>
      </div>
      <div className="px-2 py-10 bg-white">
  <div className="max-w-7xl mx-auto p-8">
    {/* Privacy Policy Statement */}
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-[#344154] mb-4">Privacy Policy Statement</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        RoutePerfect Ltd. ("we", "us" or "RoutePerfect") respects your right to privacy. Your ability to make informed
        choices about the use of your information is important to us. This Privacy Policy explains our policy regarding
        the collection, use, disclosure, and protection of personal information we receive.
      </p>
    </div>

    {/* Information We Collect */}
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-[#344154] mb-4">Information We Collect</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        In order to use our Services, you will be required to register and provide us with certain information, such as
        your name, e-mail address, credit card information, and information about your tastes and preferences in
        travel. You may also provide us with further optional information regarding your travel and destination
        preferences. Some of this information is Personal Information.
      </p>
    </div>

    {/* Definition of Personal Information */}
    <div>
      <p className="text-lg text-gray-600 leading-relaxed">
        "Personal Information" means information that can be directly associated with a specific person. If you use the
        Services by logging in through Facebook, we may also receive Personal Information about you as provided by
        Facebook. Please check Facebook's policies in order to understand what information we receive. We also collect
        Personal Information when you contact us for any reason. It is your voluntary decision whether to provide us
        with any such Personal Information, but if you refuse to provide such information, we may not be able to
        register you to use the Services, or your use of the Services may be limited.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mt-6">
        In addition, when you use the Services, certain information may be automatically gathered about your computer,
        browser, operating system, geo-location, IP address, or mobile device.
      </p>
    </div>
  </div>
</div>

  

    </div>
  )
}

export default PrivacyPolicy
