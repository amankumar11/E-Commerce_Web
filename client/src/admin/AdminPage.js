import React, { useState } from "react";
import axios from "axios";
import "./admin.css";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [itemType, setType] = useState("");
  const [price, setPrice] = useState("");
  const [images, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !itemType || !price || !images) {
      alert("Please fill in all required fields.");
      return;
    }

    if (itemType !== "product" && itemType !== "service") {
      alert("Item Type must be either 'product' or 'service'.");
      return;
    }

    try {
      const newItem = {
        title,
        description,
        itemType,
        price: parseFloat(price),
        images,
      };

      const response = await axios.post("/api/item/add", newItem);

      console.log("Item added successfully:", response.data);

      setTitle("");
      setDescription("");
      setType("");
      setPrice("");
      setUrl("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <div className="admin-heading">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADy0lEQVR4nO2azUtVURDAf0YFkQVRLSQofUZGVPZBJRTVMpGgwrAsKOgPUGvXojRatOtjHbQJSu0/KDMs2kkrS1oUaYVSgWF+lOaLA2NcpvM+z7l6b94fHHi8+87cmbnnzsyZ8yAhISEhISEhISFhLtgFtAHdwBvghwzz+SnQCuzkP6MEqAf6gXSewzjkhMyNNRXAywIM1+MFsIGYsh8YdjB+dnwFDhMzDgI/LcZMAg+AU0AVsFxGlXz3MMu8A8Ro2X+xGNEOlOc5v8MyfzjP+fNKieWdnwaaipDVLHN1TIg0Jy1PrhjjZ7lokWeyQ2Sffr9l2bvSqWS+JqLsVoqaYJbyILdcgmBQ9g4iSJtS0kR7X7Qr2VeJIN1KSZPWfNGoZHcRQd4qJTd6lF2lZJtYEzlGlZKlHmWXKtnmXpFjIkQHrFSyvxNBPiklNy20V+CxUvK0R9lnlOwnRJBrSkmzsQkrDV4hgmyxFEKVHuRWWAqh7USU50pRs6tz5ZGS2UeEOQTMKIXNrq5YLlk2Q8eIOHct2+GWIneCejvcQwwoBXotT64zz81RyrLszRgC1hMTymTbmrYExnap7TeLs0rlc6Ncy9QSMz3GWLEaeGYxptAxFEfjZ1klUbtY43vitOyDrJBi5VuRhvcVEO313Ei0xN8XYOyonAR1idOqC7xfZBxQAlwHfmcwdAS4D1wA9gBrgSUFBFVXB2ST4cxi4F4Gw002OA8sK1K26QKPAw0ODmgQGaF0lBdlOMgYk5a4cU6xHAd+ibwp5YRKKbD0fVtUvdEgc9Miy8j0SqtFiUHpErtQJk8tKHdKnNphKbmDY0Z+0xQwfnaM+3wdjloU6fV4g+DT8zH0KnLCVHAf1Q0+A+vwS70nJ0xLY8UbNyzvvOuyz0STxSDTg7wJ7A2cMpvPtyz9Sdcjun8os9TsXm+g0EH2A7A1y++3AQMh9Cb+ctmS6lyifTYqVZyZyGF80AnBTtKMp6M6TNp7pxxwjvDQqc4s+3y57bE5k/EQdMShyLGRK5iZKjJInQRjk3pr1bV9echzDkimvPVJLoX1gctg4Jp57/WmzLsDOpQAU9svKAe8yrEkXcmlsEl1QWrFCcb4I+paTRgOGFAC1hAuzep+Js/ny50wguCYErqUcElZ0qBJcbmoDisNzge2QiibE7ZbVqqP/yvNG7ZSeFLyfE2gu1wjy14fpYVdqYb+1ztfm6GzLFDj03F0QpljQ6R9LhoiYZOtJZbK0BJrliP1OWuJhU2dpN5MzYx8Cpt6kRE742PTFp9PnEtbYo6TA/4AeIzS/gO7/ZcAAAAASUVORK5CYII="
          alt="admin img"
        ></img>
        <h1>Admin Portal</h1>
      </div>

      <div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <input
            type="text"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <input
            type="text"
            placeholder="Item Type(product/service)"
            onChange={(e) => setType(e.target.value)}
            value={itemType}
            required
          />
          <input
            type="text"
            placeholder="Item Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
          <input
            type="url"
            placeholder="Item Image URL"
            onChange={(e) => setUrl(e.target.value)}
            value={images}
            required
          />

          <button className="login-btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
