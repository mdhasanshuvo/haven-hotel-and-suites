import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import 'react-datepicker/dist/react-datepicker.css';  // Ensure correct path for styles
import DatePicker from 'react-datepicker';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [bookingData, setBookingData] = useState({
        roomId: '',
        userEmail: '',
        startDate: '',
        endDate: '',
        price: 0,
        roomName: '',
    });

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/rooms/${id}`)
            .then(response => {
                setRoom(response.data);
            })
            .catch(error => {
                console.error('Error fetching room data:', error);
            });
    }, [id]);

    const handleBookingClick = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to log in to book a room.',
            });
            navigate('/auth/login');
        } else {
            setModalOpen(true);
            setBookingData({
                ...bookingData,
                userEmail: user.email,
                roomId: room._id,
                roomName: room.name,
                price: room.price,
            });
        }
    };

    const handleConfirmBooking = () => {
        if (!selectedStartDate || !selectedEndDate) {
            Swal.fire('Error', 'Please select both start and end dates.', 'error');
            return;
        }

        const bookingDetails = {
            ...bookingData,
            startDate: selectedStartDate.toISOString().split('T')[0],
            endDate: selectedEndDate.toISOString().split('T')[0],
        };

        axios.post('http://localhost:5000/bookings', bookingDetails)
            .then(response => {
                Swal.fire('Success', 'Your room has been booked!', 'success');
                setModalOpen(false);
                navigate('/my-bookings');
            })
            .catch(error => {
                Swal.fire('Error', 'Booking failed. Please try again.', 'error');
                console.error(error);
            });
    };

    return (
        <div>
            <main className="min-h-screen py-12 px-6 bg-base-200">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-6">
                            <img
                                src={room?.images[0]}
                                alt={room?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-6">
                            <h1 className="text-3xl font-bold text-primary mb-4">{room?.name}</h1>
                            <p className="text-lg mb-4">{room?.description}</p>
                            <ul className="space-y-2 mb-4">
                                <li className="text-lg">
                                    <strong>Type:</strong> {room?.type}
                                </li>
                                <li className="text-lg">
                                    <strong>Price:</strong> ${room?.price} per night
                                </li>
                                <li className="text-lg">
                                    <strong>Amenities:</strong> {room?.amenities.join(', ')}
                                </li>
                                <li className="text-lg">
                                    <strong>Capacity:</strong> {room?.capacity} people
                                </li>
                            </ul>
                            <button
                                className="btn btn-primary w-full mt-6"
                                onClick={handleBookingClick}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                    {room?.totalReviews === 0 ? (
                        <p className="text-center mt-6">No reviews available for this room yet.</p>
                    ) : (
                        <div className="mt-6">
                            {/* Render reviews here */}
                        </div>
                    )}
                </div>
            </main>

            {/* Booking Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
                    <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-lg transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Room Booking Summary</h2>
                            <p className="text-lg text-gray-800 mb-4"><strong>Room:</strong> {bookingData.roomName}</p>
                            <p className="text-lg text-gray-800 mb-6"><strong>Price:</strong> ${bookingData.price}</p>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Booking Date Range</label>
                                <div className="flex space-x-4">
                                    <DatePicker
                                        selected={selectedStartDate}
                                        onChange={date => setSelectedStartDate(date)}  // Start date handler
                                        dateFormat="yyyy/MM/dd"
                                        className="input input-bordered w-full border-2 border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        minDate={new Date()}  // Disable past dates
                                        placeholderText="Start Date"
                                    />
                                    <DatePicker
                                        selected={selectedEndDate}
                                        onChange={date => setSelectedEndDate(date)}  // End date handler
                                        dateFormat="yyyy/MM/dd"
                                        className="input input-bordered w-full border-2 border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        minDate={selectedStartDate ? selectedStartDate : new Date()}  // Disable dates before the start date
                                        placeholderText="End Date"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between mt-8">
                                <button
                                    type="button"
                                    className="btn btn-primary w-1/2 py-3 rounded-lg text-white font-semibold text-lg hover:bg-primary-dark transition duration-300"
                                    onClick={handleConfirmBooking}
                                >
                                    Confirm Booking
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline w-1/2 py-3 rounded-lg text-gray-700 font-semibold text-lg hover:bg-gray-100 border-2 border-gray-300 transition duration-300"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomDetails;
