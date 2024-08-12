import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, details, category, supplier, taste, imageUrl, quantity } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const imageUrl = form.imageUrl.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, imageUrl };
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="bg-slate-200 p-28">
            <h1 className="text-3xl font-bold text-center mb-12">Update a Coffee: {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* Form name and quantity row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" defaultValue={name} name="name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" defaultValue={quantity} name="quantity" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                {/* Form supplier and quantity row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" defaultValue={supplier} name="supplier" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" defaultValue={taste} name="taste" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                {/* Form category and details row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" defaultValue={category} name="category" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" defaultValue={details} name="details" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                {/* Form  image url row */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" defaultValue={imageUrl} name="imageUrl" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* Submit Button */}
                <div className="">
                    <div className="form-control">
                        <input type="submit" className="btn btn-warning w-full" value="Update Coffee" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;