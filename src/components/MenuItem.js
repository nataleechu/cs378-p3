import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, img }) => {
    return (
        <div class="menuitem">
            <img class="menuimage" src={img} alt={description}></img>
            <div class="menutext">
          <div class="title">{title}</div>
          <div class="description">{description}</div>
          <div class="priceandbutton">
            <span class="price">{price}</span>
            <button class="add">Add</button>
          </div>
        </div>
        </div>
    );
};

export default MenuItem;
