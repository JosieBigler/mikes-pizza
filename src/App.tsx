import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        Test
      </nav>
      <div className="flex-grow">
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'src/assets/pizza-image.jpg' }}>
          {/* Full page picture content */}
        </div>
        <div className="w-full max-w-screen-lg mx-auto p-8">
          {/* Content section */}
          <h1 className="text-4xl font-bold mb-4">Welcome to Pizza Shop!</h1>
          <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper consectetur consectetur.</p>
          <p className="text-lg mb-6">Nulla facilisi. Sed eu felis auctor, porta nisi vitae, semper tortor. Nam pulvinar lectus eu mauris fringilla, eu lacinia orci eleifend.</p>
          {/* More content */}
        </div>
      </div>
    </div>
  );
};

export default App;
