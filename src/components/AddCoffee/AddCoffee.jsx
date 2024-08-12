import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const imageUrl = form.imageUrl.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, imageUrl };
        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="bg-slate-200 p-28">
            <h1 className="text-3xl font-bold text-center mb-12">Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* Form name and quantity row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" placeholder="coffee name" name="name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" name="quantity" className="input input-bordered w-full" required />
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
                            <input type="text" placeholder="supplier name" name="supplier" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full" required />
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
                            <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                {/* Form  image url row */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" name="imageUrl" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* Submit Button */}
                <div className="">
                    <div className="form-control">
                        <input type="submit" className="btn btn-warning w-full" value="Add Coffee" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;