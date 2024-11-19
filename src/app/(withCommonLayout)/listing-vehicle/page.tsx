import React from 'react'

const ListingVehiclePage = () => {
    return (
        <div className='container mx-auto'>
            <div className=" p-6 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-gray-900">Listing a vehicle</h1>
                    <p className="text-gray-700">
                        Take some pre-listing steps and gather the necessary information to enjoy a smooth, successful listing process. Hosts in France should follow these guidelines for
                        <a href="#" className="text-blue-500 underline">listing a vehicle in France.</a>
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Sign up</h2>
                    <p className="text-gray-700">
                        Start by
                        <a href="#" className="text-blue-500 underline">creating a Turo account.</a> Once you do, get approved to use Turo by going to your
                        <a href="#" className="text-blue-500 underline">Account page,</a> tapping “Get Approved to Drive,” and completing the information. Be sure to confirm you meet the age requirements to list your vehicle.
                        <span className="font-bold">US, Australia and Canada hosts</span> must be at least 21 years old, and
                        <span className="font-bold">UK hosts</span> must be at least 18 years old to list in ABI 1-50. In addition, hosts in all countries must have a valid driver's license.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Meet requirements</h2>
                    <p className="text-gray-700">
                        You must meet the following requirements to be eligible to list your vehicle:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Have <a href="#" className="text-blue-500 underline">valid car insurance</a></li>
                        <li>Meet legal and insurance standards and requirements for your region</li>
                        <li>Follow our <a href="#" className="text-blue-500 underline">Exclusivity policy</a> (US and Australia hosts only)</li>
                        <li>Check vehicle eligibility requirements</li>
                        <li>Complete Turo host orientation</li>
                        <li>Submit a vehicle safety inspection completed within 12 months of the listing date, if requested (US only)</li>
                        <li>Set up a Stripe account for payouts and tax information</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ListingVehiclePage