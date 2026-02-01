import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Car, Clock, Map, Calendar, Clock3, Percent, User } from "lucide-react";

const PinPoint = {
  lat: 31.5204,
  lng: 74.3587,
}
const mapStyle = {
  width: '100%',
  height: '365px',
  borderRadius: '16px'
}

const Booking = () => {

  const [activeTab, setActiveTab] = useState("Rides");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Summary:
      Mode: ${activeTab}
      Pickup: ${pickup}
      Dropoff: ${dropoff}
      Date: ${pickupDate}
      Time: ${pickupTime}
      Passengers: ${passengers}`
    );
  };

  return (
    <section>
      <div className='flex justify-center flex-col items-center text-center w-full text-white bg-black border border-[#D4C5A0] pt-10'>
        <div className='flex flex-col gap-8 justify-center items-center px-3 mt-20 max-sm:mt-10 min-w-sm max-w-3xl'>
          <h1 className='text-5xl font-semibold max-sm:text-4xl py-2'>Book You <span className='font-Script text-[#D4C5A0]'>Comfort</span></h1>
          <p className='primary-secondary px-3'>Book your premium ride now and discover transportation that truly understands your needs.</p>
        </div>
        <div className='w-[77%] bg-white mx-auto rounded-2xl my-10'>
          <div className='p-10'>
            <LoadScript googleMapsApiKey='AIzaSyACdlvsNi3mOu7RFR9XWUTLTwX1rgUzTnc'>
              <GoogleMap mapContainerStyle={mapStyle} center={PinPoint} zoom={12}>
                <Marker position={PinPoint} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className='p-10'>
            <div className=" flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className=" py-6 md:py-8 rounded-3xl w-full"
              >
                {/* Top Tabs */}
                <div className="flex justify-between mb-6">
                  {[
                    { name: "Rides", icon: <Car className="w-5 h-5" /> },
                    { name: "Book Hourly", icon: <Clock className="w-5 h-5" /> },
                    { name: "City Tour", icon: <Map className="w-5 h-5" /> },
                  ].map((tab) => (
                    <button
                      key={tab.name}
                      type="button"
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-2xl w-1/3 transition-all duration-200 cursor-pointer ${activeTab === tab.name
                        ? "bg-white shadow-md text-black"
                        : "bg-transparent text-gray-600 hover:text-black"
                        }`}
                    >
                      {tab.icon}
                      <span className="font-medium max-sm:hidden">{tab.name}</span>
                    </button>
                  ))}
                </div>


                <div className="space-y-4 mb-4">
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                    <Map className="w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      placeholder="Enter Pick Up Location"
                      className="flex-1 bg-transparent outline-none text-gray-700"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                    <Map className="w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      placeholder="Enter Drop Off Location"
                      className="flex-1 bg-transparent outline-none text-gray-700"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      required
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h2 className='text-gray-600 flex font-Roboto justify-start'>PickUp Date</h2>
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <input
                        type="date"
                        className="flex-1 bg-transparent outline-none text-gray-700"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className='text-gray-600 flex font-Roboto justify-start'>PickUp Time</h2>
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm">
                      <Clock3 className="w-5 h-5 text-gray-600" />
                      <input
                        type="time"
                        className="flex-1 bg-transparent outline-none text-gray-700"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>


                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl shadow-sm mb-4">
                  <Percent className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">GET 25% OFF ON RETURN RIDE!</span>
                </div>


                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl shadow-sm mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5" />
                    <span>Select Passengers</span>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-16 text-black text-center rounded-xl border border-gray-300 outline-none"
                  />
                </div>


                <button
                  type="submit"
                  className="w-full bg-[#d5c6a0] text-white font-medium py-3 cursor-pointer rounded-2xl hover:bg-[#c3b38f] transition"
                >
                  CHECK FARE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking