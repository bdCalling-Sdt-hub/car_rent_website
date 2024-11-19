import React from 'react'

const TipsAndTricksPage = () => {
  return (
    <div className='container mx-auto  my-5 md:my-10 md:px-0 px-2 '>
        <div className=" space-y-8">
      {/* Title Section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Hosting standards and tips</h1>
        <p className="text-gray-700">
          As a Turo host, providing exceptional service is key to your success. Below we provide a set of standards and insightful tips to help you optimize the experience for both you and your guests.
        </p>
      </div>

      {/* Host Standards Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Host standards</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-bold">Be responsive.</span> Respond to trip requests and changes as soon as you can. Guests count on hearing from you, and quick responses inspire confidence.
          </li>
          <li>
            <span className="font-bold">Avoid cancellations.</span> Refrain from canceling trips. It can ruin guests plans and result in a violation for other consequences.
          </li>
          <li>
            <span className="font-bold">Clean and refuel your vehicle.</span> Give yourself enough buffer time to clean the vehicle inside and out as required by our cleaning policy, and provide a full tank of fully charged battery at the start of each trip.
          </li>
          <li>
            <span className="font-bold">Maintain good ratings.</span> Provide a five-star experience to keep guests coming back. We track host performance and pay special attention to your ratings and reviews. If you fall below our standards, well provide you with a warning and an opportunity to improve.
          </li>
        </ul>
      </div>

      {/* Performance Pointers Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Performance pointers</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-bold">Create an attractive listing:</span> Share vehicle details. Highlight your vehicles unique features and let your personality shine through.
          </li>
          <li>
            <span className="font-bold">Upload high-quality photos:</span> To make a good first impression, upload high-quality photos of your listing.
          </li>
          <li>
            <span className="font-bold">Use dynamic pricing to stay competitive:</span> All US, Canada, and UK listings use dynamic pricing, which adjusts daily to help your car earn more.
          </li>
          <li>
            <span className="font-bold">Other discounts:</span> To encourage rebooking, send guests a discount code after their trip has ended.
          </li>
        </ul>
      </div>

      {/* Give Guests What They Want Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Give guests what they want</h2>
        <p className="text-gray-700">
          Make your vehicle available often. Get more bookings by making your vehicle as available as possible, especially on weekends and when demand is high.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-bold">Offer delivery:</span> Add convenience and make your listing stand out by offering delivery.
          </li>
          <li>
            <span className="font-bold">Consider offering unlimited mileage:</span> Many guests filter out vehicles with inadequate distance limits.
          </li>
        </ul>
      </div>

      {/* Keep Up to Date Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Keep up to date</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Stay in touch. Opt into push and text notifications to avoid missing out on important messages from your guests.
          </li>
          <li>
            <span className="font-bold">Stay current and avoid canceling reservations:</span> Its an emergency. Cancellations can negatively impact your search results.
          </li>
          <li>
            <span className="font-bold">Set the right rates for your area:</span> Ensure you re setting a price that reflects market value.
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default TipsAndTricksPage