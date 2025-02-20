import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: `${process.env.PUBLIC_URL}/images/gyoza.png`,
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: `${process.env.PUBLIC_URL}/images/sushi.png`,
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: `${process.env.PUBLIC_URL}/images/ramen.png`,
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: `${process.env.PUBLIC_URL}/images/matcha-cake.png`,
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: `${process.env.PUBLIC_URL}/images/mochi.png`,
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: `${process.env.PUBLIC_URL}/images/yakitori.png`,
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: `${process.env.PUBLIC_URL}/images/takoyaki.png`,
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: `${process.env.PUBLIC_URL}/images/sashimi.png`,
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: `${process.env.PUBLIC_URL}/images/okonomiyaki.png`,
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: `${process.env.PUBLIC_URL}/images/katsu-curry.png`,
    price: 9.99,
  }
];

function App() {
  const [subtotal, setSubtotal] = React.useState(0);
  const [counts, setCounts] = React.useState(
    menuItems.map(() => 0)
  );
  const updateCount = (index, newCount) => {
    setCounts(prevCounts =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    );
  };
  return (
    <div>
      <Header title="Japanese Restaurant" description="Delicious mmm" logo={`${process.env.PUBLIC_URL}/images/Elefante_Full_exterior.jpg`}/>
      <div className="menu">
        {menuItems.map((item, index) => (
          <MenuItem title={item.title} description={item.description} price={item.price} img={item.imageName} updateSubtotal={setSubtotal} count={counts[index]} updateCount={newCount => updateCount(index, newCount)} />
        ))}
      </div>
      <div>
        <div class="bottombuttons">
          <div class="subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
          <button class="clearAll" onClick={() => {
            setSubtotal(0);
            setCounts(menuItems.map(() => 0));
          }}> Clear All</button>
          <button class="order" onClick={() => {
            var items = 0;
            var text = 'Order placed!\n';
            counts.forEach((count, index) => {
              if (count !== 0) {
                items += 1;
                text += `${count} ${menuItems[index].title}\n`;
              }
            });
            if (items === 0) {
              text = 'No items in cart';
            }
            alert(text);
          }}>Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
