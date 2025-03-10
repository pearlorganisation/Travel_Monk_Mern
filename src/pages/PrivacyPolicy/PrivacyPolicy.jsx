import React from "react";

const policies = [
  "Account creation for our future records",
  "To improve our services further with the help of surveys attended by you ",
  "We might in the future contact you for market research so as to develop a fine relationship by putting your interest as priority",
  "We might contact you for better offers, discounts and information about new treks and expeditions and other promotional activities. We will   contact you via email, fax or phone.",
  "At any given time, if you feel not to receive any promotional mails other than what interests you, you can unsubscribe for the same",
];

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
          <h1 className="text-5xl text-white font-semibold mx-auto">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="px-2 py-10 bg-white">
        <div className="max-w-7xl mx-auto p-8">
          {/* Privacy Policy Statement */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#344154] mb-4">
              Website Privacy
            </h1>
            <p className="text-lg leading-relaxed">
              This policy is effective from 14/04/2021.{" "}
              <a
                href="https://www.thetravelmonk.com/"
                className="text-[#007E8F] hover:text-[#439ca8]"
              >
                Travel Monk Adventures
              </a>{" "}
              is dedicated to protect any kind of information provided by you to
              the website. Thereby, if we ask you to provide certain personal
              information, then be assured that the information are protected
              and governed by the privacy policy and will be used in accordance
              to it. Travel Monk Adventures may change the policy guidelines
              time to time for better understanding and for having a healthy
              relationship with you. The following information might be obtained
              from you: 1. Name and Address 2. Phone number and email address 3.
              Postal code and Gender 4. Your interests, and other personal
              information related to the web content
            </p>
            <h1 className="text-2xl font-bold text-[#344154] mb-4 mt-6">
              Why the above Information?
            </h1>
            <p className="text-lg  leading-relaxed">
              We gather the mentioned information from you to provide you with
              better services like :
            </p>
            <div className="mb-8 ml-8 flex flex-col items-start justify-start mt-4">
              {policies.map((policy, index) => (
                <div className="flex flex-row gap-3 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full px-1 py-1 mt-2.5"></div>
                  <h1 className="text-lg">{policy}</h1>
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-bold text-[#344154] mb-4 mt-6">
              Security
            </h1>
            <p className="text-lg leading-relaxed">
              Our first priority is to secure your information such as personal
              data and transactions made with us. This is accomplished by
              installing hi – tech electronic device and bestowing proper
              managerial system. All your monetary transactions and card details
              is processed and secured fully.
            </p>
            <h1 className="text-2xl font-bold text-[#344154] mb-4 mt-6">
              Information about Cookies
            </h1>
            <p className="text-lg leading-relaxed">
              Cookies are small files posted in your web browser with your
              approval. The information on the cookie moves back and forth
              between your browser and the website your browser visits
              (thetravelmonk.com). Cookies have many benefits; it helps you to
              have a better online experience and serves as storage to the
              websites you have visited. We also allow cookies to place in your
              hard drive so as to know the web traffic and the preferences of
              yours to improve the health of our website considerably.
              Furthermore, cookies do not have access to your personal
              information or have access to your computer. It does not store
              passwords and codes. Moreover, for your benefit, you can accept
              and decline a cookie at any given point. You can also change your
              settings to accept no cookies in your browser.
            </p>
            <h1 className="text-2xl font-bold text-[#344154] mb-4 mt-6">
              Website links
            </h1>
            <p className="text-lg leading-relaxed">
              We provide links of other websites in our website. It should also
              be kept in mind that once you enter the linked website, you
              technically leave our site. Which means, if any damage or loss is
              caused by the other website, we will not be in control of the
              website and would not take any kind of responsibility. Therefore,
              we will not be able to protect any information you provide in the
              website and are advised to check their privacy policy before
              giving any personal info.
            </p>
            <h1 className="text-2xl font-bold text-[#344154] mb-4 mt-6">
              Your Personal Information
            </h1>
            <p className="text-lg leading-relaxed">
              You can safeguard your personal information in the following ways
              1. Whenever you enter personal information, look for an option in
              the corner which indicates that you can decline any form of
              marketing message and mails to reach you. 2. You can unsubscribe
              from any promotional marketing option by writing a mail to us at
              info@thetravelmonk.com We will not misuse the information given by
              you. We shall safeguard your information from getting leaked to
              any third party. We will not reveal any data about you without
              gaining permission. Under the Data Protection Act 1998, you can
              request to provide the information we have withhold about you. You
              can send a mail to us at info@thetravelmonk.com and a small amount
              has to be paid to obtain the details. If you find any detail
              furnished by us incorrect, then you can mail us, we would
              immediately rectify the error. You can now contact us any time
              with your queries and doubts at the following:
            </p>
            <a
              href="mailto:info@thetravelmonk.com"
              className="text-[#007E8F] hover:text-[#439ca8]"
            >
              E-mail: info@thetravelmonk.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
