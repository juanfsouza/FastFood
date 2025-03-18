"use client";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all">
        
        {/* Logo e Informações da Empresa */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400 font-display">PROMECTS</h2>
          <p className="text-sm text-gray-300">2972 Westh Rd. Santa Monica,<br /> Illinois 8542</p>
          <p className="text-sm text-gray-300 font-display-main">fastfood@demo.com</p>
          <p className="text-xl font-bold text-red-700 font-display-main">012-345-5678</p>
        </div>

        {/* Links Rápidos */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-display-main">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:text-red-500 transition-colors">Home</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Menu</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">About Us</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Contacts</li>
          </ul>
        </div>

        {/* Produtos */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-display-main">Products</h2>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:text-red-500 transition-colors">Burgers King</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Delight Products</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Crispy Flavors</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Breakfast Products</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Kids Menus</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Desserts</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Beverages</li>
            <li className="cursor-pointer hover:text-red-500 transition-colors">Sauces</li>
          </ul>
        </div>

        {/* Horário de Funcionamento */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Opening Hours</h2>
          <p className="text-sm text-gray-300 font-display-main">Monday – Friday: <span className="text-red-700 text-bold"> 8am – 4pm </span> </p>
          <p className="text-sm text-gray-300 font-display-main">Saturday: <span className="text-red-700 text-bold"> 08:00 - 12:00 Uhr </span></p>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
        <p className="text-gray-400">Copyright © 2025 Creative Makes Agents. All rights reserved.</p>
      </div>
    </footer>
  );
}