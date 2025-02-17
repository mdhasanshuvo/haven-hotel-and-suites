import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import Rating from 'react-rating'; // For implementing rating input
import DatePicker from 'react-datepicker';
import useAxios from '../Hook/useAxios';
import moment from 'moment';
import { Helmet } from 'react-helmet';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [updatingBookingId, setUpdatingBookingId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewModalOpen, setReviewModalOpen] = useState(false);
    const [reviewData, setReviewData] = useState({
        rating: 0,
        comment: '',
    });
    const [reviewBookingId, setReviewBookingId] = useState(null);
    const [reviewRoomId, setReviewRoomId] = useState(null);
    const [isTableView, setIsTableView] = useState(false);

    const axiosSecure = useAxios();

    useEffect(() => {
        if (user) {
            axiosSecure
                .get(`/bookings/${user.email}`)
                .then((response) => {
                    setBookings(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching bookings:', error);
                });
        }
    }, [user]);


    const handleCancelBooking = (bookingId, bookingStartDate) => {
        const currentDate = moment().startOf('day');  // Set to start of the day
        const bookingDate = moment(bookingStartDate, 'YYYY-MM-DD').startOf('day');  // Set to start of the day
        const oneDayBeforeBooking = bookingDate.clone().subtract(1, 'days');

        console.log('heyyyyy', currentDate, bookingDate, oneDayBeforeBooking, bookingStartDate)

        if (!currentDate.isBefore(oneDayBeforeBooking)) {
            Swal.fire({
                icon: 'error',
                title: 'Cancellation Not Allowed',
                text: 'You can only cancel your booking at least 1 day before the booking date.',
                confirmButtonText: 'OK',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to cancel this booking?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://hotel-booking-server-two.vercel.app/bookings/${bookingId}`)
                    .then(() => {
                        setBookings(bookings.filter((booking) => booking._id !== bookingId));
                        Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire('Error', 'There was an issue cancelling your booking.', 'error');
                    });
            }
        });
    };




    const handleUpdateDate = (bookingId) => {
        setUpdatingBookingId(bookingId);
        const booking = bookings.find((b) => b._id === bookingId);
        if (booking) {
            setStartDate(new Date(booking.startDate));
            setEndDate(new Date(booking.endDate));
        }
        setIsModalOpen(true);
    };

    const handleConfirmUpdate = () => {
        if (!startDate || !endDate) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Dates',
                text: 'Please select both start and end dates.',
                confirmButtonText: 'OK'
            });
            return;
        }

        const updatedDate = {
            start: startDate.toISOString().split('T')[0],
            end: endDate.toISOString().split('T')[0],
        };

        axios.put(`https://hotel-booking-server-two.vercel.app/bookings/${updatingBookingId}`, updatedDate)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Booking updated successfully!',
                    confirmButtonText: 'OK'
                });

                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === updatingBookingId
                            ? { ...booking, startDate: updatedDate.start, endDate: updatedDate.end }
                            : booking
                    )
                );

                setIsModalOpen(false);
                setUpdatingBookingId(null);
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Error updating booking. Please try again.',
                    confirmButtonText: 'OK'
                });
            });
    };


    const openReviewModal = (bookingId, reviewRoomId) => {
        setReviewBookingId(bookingId);
        setReviewRoomId(reviewRoomId);
        setReviewModalOpen(true);
    };

    const handleReviewSubmit = () => {
        if (!reviewData.rating || !reviewData.comment) {
            Swal.fire('Error', 'Please provide a rating and a comment.', 'error');
            return;
        }

        axios
            .post('https://hotel-booking-server-two.vercel.app/reviews', {
                bookingId: reviewBookingId,
                roomId: reviewRoomId,
                review: {
                    username: user.displayName,
                    userPhoto: user.photoURL,
                    rating: reviewData.rating,
                    comment: reviewData.comment,
                    timestamp: new Date(),
                },
            })
            .then(() => {
                Swal.fire('Success', 'Your review has been submitted!', 'success');
                setReviewModalOpen(false);
                setReviewData({ rating: 0, comment: '' });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire('Error', 'There was an issue submitting your review.', 'error');
            });
    };

    return (
        <div className='bg-base-300'>
            <div className="container mx-auto px-4 py-8 min-h-[73vh]">
                <Helmet>
                    <title>Bookings | Haven Hotel & Suites</title>
                </Helmet>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-primary">My Bookings</h1>
                    <div className="flex items-center space-x-2">
                        <button
                            className={`p-2 rounded-md ${isTableView ? 'bg-gray-200 text-black' : 'bg-primary text-white'
                                }`}
                            onClick={() => setIsTableView(false)}
                        >
                            Card View
                        </button>
                        <button
                            className={`p-2 rounded-md ${isTableView ? 'bg-primary text-white' : 'bg-gray-200 text-black'
                                }`}
                            onClick={() => setIsTableView(true)}
                        >
                            Table View
                        </button>
                    </div>
                </div>

                {isTableView ? (
                    <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600">
                                <th className="px-3 py-2 sm:px-6 sm:py-4">Image</th>
                                <th className="px-3 py-2 sm:px-6 sm:py-4">Name</th>
                                <th className="px-3 py-2 sm:px-6 sm:py-4">Price</th>
                                <th className="px-3 py-2 sm:px-6 sm:py-4">Booking Date</th>
                                <th className="px-3 py-2 sm:px-6 sm:py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {bookings.map((booking) => (
                                <tr key={booking._id} className="border-t hover:bg-gray-50">
                                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                                        <img
                                            src={booking?.roomImage}
                                            alt={`${booking?.roomName} Image`}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                    </td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4">{booking?.roomName}</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4">${booking?.price}</td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4">
                                        {booking?.startDate} to {booking?.endDate}
                                    </td>
                                    <td className="px-3 py-2 sm:px-6 sm:py-4 space-x-2 flex flex-col sm:flex-row items-center gap-1">
                                        <button
                                            onClick={() => handleCancelBooking(booking?._id, booking?.startDate)}
                                            className="px-2 sm:px-4 py-1 sm:py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => openReviewModal(booking?._id, booking?.roomId)}
                                            className="px-2 sm:px-4 py-1 sm:py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-200"
                                        >
                                            Review
                                        </button>
                                        <button
                                            onClick={() => handleUpdateDate(booking._id)}
                                            className="px-2 sm:px-4 py-1 sm:py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-all duration-200"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
                            >
                                <img
                                    src={booking?.roomImage}
                                    alt={`${booking?.roomName} Image`}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-lg font-semibold text-gray-600">{booking?.roomName}</h2>
                                <p className="text-sm text-gray-600">
                                    Price: <span className="font-medium">${booking?.price}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Booking Date: {booking?.startDate} to {booking?.endDate}
                                </p>
                                <div className="mt-4 space-x-2">
                                    <button
                                        onClick={() => handleCancelBooking(booking?._id, booking?.startDate)}
                                        className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => openReviewModal(booking?._id, booking?.roomId)}
                                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-200"
                                    >
                                        Review
                                    </button>
                                    <button
                                        onClick={() => handleUpdateDate(booking._id)}
                                        className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-all duration-200"
                                    >
                                        Update Date
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}



                {/* Modal for updating booking date */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                        <div className="bg-base-100 p-6 rounded-md shadow-lg w-full max-w-md">
                            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Update Booking Dates</h2>

                            <div className="flex flex-col space-y-4">
                                <label className="text-sm font-medium text-gray-500">Start Date</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={setStartDate}
                                    dateFormat="yyyy/MM/dd"
                                    minDate={new Date()}
                                    className="input input-bordered w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <label className="text-sm font-medium text-gray-500">End Date</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={setEndDate}
                                    dateFormat="yyyy/MM/dd"
                                    minDate={startDate || new Date()}
                                    className="input input-bordered w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn btn-outline py-2 px-4 rounded-lg text-gray-500 font-semibold hover:bg-gray-100 transition duration-300 border-2 border-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmUpdate}
                                    className="btn btn-primary py-2 px-4 rounded-lg text-white font-semibold bg-primary hover:bg-primary-dark transition duration-300"
                                >
                                    Confirm Update
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for posting a review */}
                {reviewModalOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-base-100 p-6 rounded-md shadow-lg w-full max-w-md">
                            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Submit Your Review</h2>

                            <div className="flex flex-col space-y-4">
                                <label className="text-sm font-medium text-gray-400">Username</label>
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    readOnly
                                    className="input input-bordered w-full border-2 border-gray-300 rounded-md p-2 bg-gray-100"
                                />
                                <label className="text-sm font-medium text-gray-400">Rating</label>
                                <Rating
                                    fractions={2}
                                    initialRating={reviewData.rating}
                                    onChange={(value) => setReviewData({ ...reviewData, rating: value })}
                                    className="text-yellow-400"
                                />
                                <label className="text-sm font-medium text-gray-400">Comment</label>
                                <textarea
                                    value={reviewData.comment}
                                    onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
                                    className="textarea textarea-bordered w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your review..."
                                ></textarea>
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={() => setReviewModalOpen(false)}
                                    className="btn btn-outline py-2 px-4 rounded-lg text-gray-500 font-semibold hover:bg-gray-100 transition duration-300 border-2 border-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleReviewSubmit}
                                    className="btn btn-primary py-2 px-4 rounded-lg text-white font-semibold bg-primary hover:bg-primary-dark transition duration-300"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default MyBookings;
