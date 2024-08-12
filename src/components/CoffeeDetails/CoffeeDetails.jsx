import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, details, taste, supplier, imageUrl, category } = coffee;
    return (
        <div className='lg:container mx-auto'>
            <div className="card card-side bg-[#F4F3F0] shadow-xl py-20 px-36 my-28">
                <figure>
                    <img
                        src={imageUrl}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <h4 className='text-xl'><span className='font-semibold'>Name: </span>{name}</h4>
                    <h4 className='text-xl'><span className='font-semibold'>Supplier: </span>{supplier}</h4>
                    <h4 className='text-xl'><span className='font-semibold'>Taste: </span>{taste}</h4>
                    <h4 className='text-xl'><span className='font-semibold'>Quantity: </span>{quantity}</h4>
                    <h4 className='text-xl'><span className='font-semibold'>Category: </span>{category}</h4>
                    <h4 className='text-xl'><span className='font-semibold'>Details: </span>{details}</h4>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;