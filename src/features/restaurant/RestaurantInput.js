import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch } from "react-redux";
function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   location: "",
  // });

  // function handleFormChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  const dispatch = useDispatch();
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // add missing code
    dispatch(addRestaurant({ name, location }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          name="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          name="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
