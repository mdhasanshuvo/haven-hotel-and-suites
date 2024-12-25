import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'https://hotel-booking-server-two.vercel.app',
    withCredentials: true
})

const useAxios = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api error', error.status)
            if (error.status === 401 || error.status === 403) {
                logout()
                    .then(() => {
                        navigate('/auth/login')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    }, []);

    return axiosInstance;
};

export default useAxios;