import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, logo }) => {
    return (
        <div>
            <div class="logo-container">
                <img class="logo" src={logo} alt="Logo"></img>
            </div>
            <h3>{description}</h3>
            <h1>{title}</h1>
        </div>
    );
};

export default MenuItem;
