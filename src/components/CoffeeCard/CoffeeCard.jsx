import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, details, category, imageUrl } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    }
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
                        <button onClick={() => handleDelete(_id)} className="btn btn-error join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;