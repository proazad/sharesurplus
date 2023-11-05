const FoodRequstForm = () => {
  const handleFoodRequest = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const foodname = form.get("foodname");
    const foodid = form.get("foodid");
    const foodimage = form.get("foodimage");
    const donoremail = form.get("donoremail");
    const donorname = form.get("donorname");
    const useremail = form.get("useremail");
    const requesttime = form.get("requesttime");
    const pickuplocation = form.get("pickuplocation");
    const expiredate = form.get("expiredate");
    const additionalnotes = form.get("additionalnotes");
    const donationmoney = form.get("donationmoney");

    const foodRequest = {
      foodid,
      foodname,
      foodimage,
      donoremail,
      donorname,
      useremail,
      requesttime,
      pickuplocation,
      expiredate,
      additionalnotes,
      donationmoney,
    };
    console.log(foodRequest);
  };
  return (
    <form onSubmit={handleFoodRequest}>
      {/* Food Id  */}
      <div className="form-control mt-5">
        <label htmlFor="foodid">
          <span className="label-text">Food ID</span>
        </label>
        <input
          type="text"
          name="foodid"
          id="foodid"
          className="input input-bordered input-error"
          readOnly
          defaultValue="8923"
        />
      </div>
      {/* Food Name  */}
      <div className="form-control mt-5">
        <label htmlFor="foodname">
          <span className="label-text">Food Name</span>
        </label>
        <input
          type="text"
          name="foodname"
          id="foodname"
          className="input input-bordered input-error"
          readOnly
          defaultValue="Kacci Biriyani"
        />
      </div>
      {/* Food Image  */}
      <div className="form-control mt-5">
        <label htmlFor="foodimage">
          <span className="label-text">Food Image</span>
        </label>
        <input
          type="url"
          name="foodimage"
          id="foodimage"
          className="input input-bordered input-error"
          defaultValue="https://jofiesj.coklkfs/sfjjs"
          readOnly
        />
      </div>

      {/* Food Donor Email  */}
      <div className="form-control mt-5">
        <label htmlFor="donoremail">
          <span className="label-text">Food Donator Email</span>
        </label>
        <input
          type="email"
          name="donoremail"
          id="donoremail"
          className="input input-bordered input-error"
          defaultValue="donor@gmail.com"
          readOnly
        />
      </div>
      {/* Food Donor Name  */}
      <div className="form-control mt-5">
        <label htmlFor="donorname">
          <span className="label-text">Food Donator Name</span>
        </label>
        <input
          type="text"
          name="donorname"
          id="donorname"
          className="input input-bordered input-error"
          defaultValue="Azad Hossain"
          readOnly
        />
      </div>
      {/* Current user email  */}
      <div className="form-control mt-5">
        <label htmlFor="useremail">
          <span className="label-text">User Email</span>
        </label>
        <input
          type="email"
          name="useremail"
          id="useremail"
          className="input input-bordered input-error"
          defaultValue="user@gmail.com"
          readOnly
        />
      </div>
      {/* Request Time/data  */}
      <div className="form-control mt-5">
        <label htmlFor="requesttime">
          <span className="label-text">Request Time</span>
        </label>
        <input
          type="text"
          id="requesttime"
          name="requesttime"
          className="input input-bordered input-error"
          defaultValue="10/11/2023 4:25:40 pm"
          readOnly
        />
      </div>
      {/* Pickup Location  */}
      <div className="form-control mt-5">
        <label htmlFor="pickuplocation">
          <span className="label-text">Pickup Location</span>
        </label>
        <input
          type="text"
          id="pickuplocation"
          name="pickuplocation"
          className="input input-bordered input-error"
          defaultValue="Notun Bazar, Badda, Dhaka"
          readOnly
        />
      </div>
      {/* Expire Date  */}
      <div className="form-control mt-5">
        <label htmlFor="expiredate">
          <span className="label-text">Expire Date</span>
        </label>
        <input
          type="text"
          id="expiredate"
          name="expiredate"
          className="input input-bordered input-error"
          defaultValue="10/11/2023 2.30 pm"
          readOnly
        />
      </div>
      {/* Additional Notes  */}
      <div className="form-control mt-5">
        <label htmlFor="additionalnotes">
          <span className="label-text">Additional Notes</span>
        </label>
        <textarea
          name="additionalnotes"
          id="additionalnotes"
          className="textarea textarea-bordered textarea-error"
        ></textarea>
      </div>
      {/* Donation Money  */}
      <div className="form-control mt-5">
        <label htmlFor="donationmoney">
          <span className="label-text">Donation Money</span>
        </label>
        <input
          type="text"
          name="donationmoney"
          id="donationmoney"
          className="input input-bordered input-error"
        />
      </div>
      <div className="form-control mt-5">
        <input type="submit" className="btn btn-error" />
      </div>
    </form>
  );
};

export default FoodRequstForm;
