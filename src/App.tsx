import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Navbar';
import { MenuItemProps, MenuItem } from './components/MenuItem';

const App: React.FC = () => {

  let menuItems : MenuItemProps[] = [
    { name: 'Cheese Pizza', price: '$10', description: 'Mozzarella cheese, tomato sauce', imageUrl: 'src/assets/cheese-pizza.jpg' },
    { name: 'Meat Pizza', price: '$12', description: 'Pepperoni, sausage, bacon, mozzarella cheese, tomato sauce', imageUrl: 'src/assets/meat-pizza.jpg' },
    { name: 'Supreme Pizza', price: '$15', description: 'Pepperoni, sausage, bell peppers, onions, mushrooms, mozzarella cheese, tomato sauce', imageUrl: 'src/assets/supreme-pizza.jpg' },
    { name: 'Big Mike', price: '$15', description: 'Fresh Mozzerella, Basil, Olive Oil, Blue Cheese, and Extra Crispy Bacon... No Red Sauce', imageUrl: 'src/assets/supreme-pizza.jpg' },
    { name: 'Little Jo', price: '$12', description: 'Green Olives, Canadian Bacon, Sausage, and Fresh Basil', imageUrl: 'src/assets/supreme-pizza.jpg' },
   ]

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <Navbar />
      </nav>
      <div className="flex-grow">
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(src/assets/pizza-image.jpg)' }}>
          {/* Full page picture content */}
        </div>
        <div className="w-full max-w-screen-lg mx-auto p-8">
          {/* Content section */}
          <section id="menu" className="mb-8 max-w-full">
            <div className="max-w-full">
              <h2 className="text-3xl max-w-full font-bold mb-4 text-red-500 text-center">Menu</h2>
              <div className="grid grid-cols-2">
                {
                  menuItems.map((item, index) => {
                    return <MenuItem key={index} name={item.name} price={item.price} description={item.description} imageUrl={item.imageUrl} />
                  })
                }
              </div>

            </div>
          </section>

          {/* <section id="about" className="mb-8 max-w-full">
            <h1 className="text-4xl font-bold mb-4">Welcome to Pizza Shop!</h1>
            <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper consectetur consectetur.</p>
            <p className="text-lg mb-6">Nulla facilisi. Sed eu felis auctor, porta nisi vitae, semper tortor. Nam pulvinar lectus eu mauris fringilla, eu lacinia orci eleifend.</p>
          </section>
          More content */}
          

          <section id="contact">
            <h2 className="text-3xl font-bold mb-4 text-red-500 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Address</h3>
                <p>123 Pizza Street</p>
                <p>Cityville, ABC 12345</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p>Email: info@pizzashop.com</p>
                <p>Phone: 123-456-7890</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
