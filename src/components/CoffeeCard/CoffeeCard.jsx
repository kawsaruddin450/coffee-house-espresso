import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, details, category, imageUrl } = coffee;
    return (
        <div>
            <div className="card card-side items-center bg-[#F5F4F1] shadow-xl p-8">
                <figure>
                    <img
                        src={imageUrl}
                        alt="Coffee" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <h4>Quantity: {quantity}</h4>
                    <h4>Brand: {supplier}</h4>
                    <h4>Category: {category}</h4>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical gap-6">
                        <button className="btn btn-warning join-item">View</button>
                        <button className="btn btn-primary join-item">Edit</button>
                        <button className="btn btn-error join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;