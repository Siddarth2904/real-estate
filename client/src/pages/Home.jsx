import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
    const [offerListings, setOfferListing] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    SwiperCore.use([Navigation]);
    // console.log(offerListings);
    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch('/server/listing/get?offer=true&limit=4');
                const data = await res.json();
                setOfferListing(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        }
        const fetchRentListings = async () => {
            try {
                const res = await fetch('/server/listing/get?type=rent&limit=4');
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        }
        const fetchSaleListings = async () => {
            try {
                const res = await fetch('/server/listing/get?type=sale&limit=4');
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOfferListings();
    }, []);
    return (
        <div>
            <div className="flex flex-col gap-6 p-28 px-20 max-4-6xl mx-auto">
                <h1 className="text-slate-700 text-4xl font-bold lg:text-6xl">
                    The Evolution of <span className='text-slate-500'>Luxury</span>
                    <br />Starts Here.
                </h1>
                <div className='text-gray-400 text-xs sm:text-sm'>
                    The best place to find your next perfect place to live.
                    <br />
                    Choose from the wide range of properties.
                </div>
                <Link to={'/search'} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>Find now...</Link>
            </div>
            <Swiper navigation>
                {
                    offerListings && offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide>
                            <div style={{ backgroundImage: `url(${listing.imageUrls[0]}) center no-repeat `, backgroundSize: 'cover' }} className='h-[500px]' key={listing._id}>

                            </div>head
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="max-w-6xl mx-auto p-3 flex flex-col gap-6 my-10">
                {
                    offerListings && offerListings.length > 0 && (
                        <div className='flex justify-center'>
                            <div className='my-3'>
                                <h2 className='text-2xl font-semibold text-slate-600'>
                                    Recent offers
                                </h2>
                                <Link to={'/search?offer=true'} className='text-sm  text-blue-800 hover:underline'>
                                    Show more offers..
                                </Link>
                                <div className='flex flex-wrap gap-8'>
                                    {
                                        offerListings.map((listing) => (
                                            <ListingItem listing={listing} key={listing._id} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    rentListings && rentListings.length > 0 && (
                        <div className='flex justify-center'>
                            <div className='my-3'>
                                <h2 className='text-2xl font-semibold text-slate-600'>
                                    Recent places for rent
                                </h2>
                                <Link to={'/search?type=rent'} className='text-sm  text-blue-800 hover:underline'>
                                    Show more places..
                                </Link>
                                <div className='flex flex-wrap gap-8'>
                                    {
                                        rentListings.map((listing) => (
                                            <ListingItem listing={listing} key={listing._id} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    saleListings && saleListings.length > 0 && (
                        <div className='flex justify-center'>
                            <div className='my-3'>
                                <h2 className='text-2xl font-semibold text-slate-600'>
                                    Recent places for sale
                                </h2>
                                <Link to={'/search?type=sell'} className='text-sm  text-blue-800 hover:underline'>
                                    Show more places..
                                </Link>
                                <div className='flex flex-wrap gap-8'>
                                    {
                                        saleListings.map((listing) => (
                                            <ListingItem listing={listing} key={listing._id} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className=""></div>
        </div>

    )
}