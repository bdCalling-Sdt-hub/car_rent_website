import React from 'react'

const TrustAndSafetyPage = () => {
    return (
        <div className='container mx-auto md:px-0 px-2'>
            <div className=" space-y-8">
                {/* Title Section */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-gray-900">Protection plans  In detail | UK hosts</h1>
                    <p className="text-gray-700">
                        Protection plans are provided to hosts to cover the costs related to damage (including a total loss) or theft of a vehicle less any deductible which applies (up to the lesser of the actual cash value of the vehicle or £100,000). The plans vary in terms of the benefits they provide. Hosts can choose plans with higher deductibles. Some plans limit reimbursement for certain costs such as loss of hosting income, reimbursement for loss of income while a vehicle is being repaired, and more.
                    </p>
                    <p className="text-gray-700">
                        Learn more about how we calculate loss of hosting income. Protection plans are not insurance; they are an agreement between Turo and hosts about who pays for what in case of an incident.
                    </p>
                </div>

                {/* Protection Plan Description */}
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Distinct from protection plans is the third-party auto liability insurance provided to all hosts by ERS (Syndicate 218 at Lloyds) managed by UKI Syndicate Management Limited and underwritten by Great Lakes Insurance SE, UK Branch. Policies are issued in your own name and are both authorised and regulated by the Financial Conduct Authority.
                    </p>
                    <p className="text-gray-700">
                        You can choose a plan for your vehicle when you create your listing and change the plan at any time. Changes will apply to future trips; we can't apply changes to pending trip requests or outside of the UK.
                    </p>
                    <p className="text-gray-700">
                        Protection plans described here arent available to Hosts whose vehicles are registered outside the UK. Nor are they available to Hosts who offer to begin a trip or deliver a vehicle outside of the UK.
                    </p>
                </div>

                {/* Summary Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Summary of UK host protection plans</h2>
                    <p className="text-gray-700">
                        There are two Vehicle protection plans for Hosts that share vehicles in the UK: 65 plan and 75 plan.
                    </p>
                    <p className="text-gray-700">
                        The plans offer varying levels of reimbursement for repairs or reimbursement for repairs from Turo for Physical Damage and theft. The level of available payment for repairs or reimbursement varies with the plan you choose. For Hosts to qualify for eligible Physical Damage reimbursement, Turo must have:
                    </p>
                    <ul className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>Clear photos of the areas the Host is seeking reimbursement or coverage for, taken within 24 hours of the start and end of the trip</li>
                        <li>Other evidence (e.g., a police report, third-party report) that confirms the damages took place during the Reservation Period.</li>
                    </ul>
                </div>

                {/* Protection Plan Comparison */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">UK Host protection</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2 text-left text-gray-900">Plan*</th>
                                <th className="border border-gray-300 p-2 text-left text-gray-900">65 plan</th>
                                <th className="border border-gray-300 p-2 text-left text-gray-900">75 plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2 text-gray-700">Host take rate</td>
                                <td className="border border-gray-300 p-2 text-gray-700">65% of the trip price</td>
                                <td className="border border-gray-300 p-2 text-gray-700">75% of the trip price</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-gray-700">Deductible**</td>
                                <td className="border border-gray-300 p-2 text-gray-700">None</td>
                                <td className="border border-gray-300 p-2 text-gray-700">£250 per claim of physical damage to your car</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-gray-700">Courtesy car</td>
                                <td className="border border-gray-300 p-2 text-gray-700">
                                    For Hosts with a single car listed on Turo when repairs take more than 3 days, maximum of £350 per claim
                                </td>
                                <td className="border border-gray-300 p-2 text-gray-700">Not included</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-gray-700">Loss of hosting income</td>
                                <td className="border border-gray-300 p-2 text-gray-700">
                                    Reimbursement for vehicle's potential earnings, based on the last 60 days' average earnings, up to a maximum of £300
                                </td>
                                <td className="border border-gray-300 p-2 text-gray-700">Not included</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer Notes */}
                <div className="space-y-4 text-gray-700">
                    <p>*Hosts must comply with the Turo Terms of service to be eligible for Turo to pay for repairs or reimburse for costs under a protection plan.</p>
                    <p>**Payment for the cost of repairs or reimbursement for physical damage to your vehicle is not insurance...</p>
                    <p>
                        Note: If you use a remote key exchange solution, like Turo Go or other third-party solutions...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TrustAndSafetyPage