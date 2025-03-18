"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { ShoppingCart, Search, Menu, Phone, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-opacity-50 relative z-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Image 
            src="/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="mr-2"
          />
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex gap-10 font-display-main xl:ml-20">
          {["Home", "Menu", "Shop", "Pages", "Blog", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-orange-500 before:transition-all before:duration-300 hover:text-orange-500 before:hover:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Ícones e Menu Mobile */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Search className="cursor-pointer text-white hover:text-orange-500 transition-all duration-300"/>
            <p className="ml-2 mr-3 text-white">Search</p>
          </div>
          <ShoppingCart className="cursor-pointer text-white hover:text-orange-500 transition-all duration-300" />
          
          {/* Botão de contato */}
          <div className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 xl:px-2 xl:h-10 md:h-10 text-white px-4 py-2 rounded-lg transition-all duration-300">
            <Phone />
            <Button className="text-white" asChild>
              <a href="https://wa.me/12991999999" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-transparent border-transparent font-display-main">
                (12) 99199-9999
              </a>
            </Button>
          </div>

          {/* Botão de Menu Mobile */}
          <Menu 
            className="md:hidden cursor-pointer text-white hover:text-orange-500 transition-all duration-300" 
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Menu Mobile (Drawer) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-red-900 p-6 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden z-50`}>
        {/* Fechar Menu */}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-white">
          <X size={24} />
        </button>

        {/* Logo no Menu */}
        <div className="text-center mb-6">
          <Image 
            src="/logo.png"
            width={80}
            height={80}
            alt="Logo"
          />
        </div>

        {/* Links do Menu */}
        <div className="flex flex-col space-y-4">
          {["Home", "Menu", "Shop", "Pages", "Blog", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white text-lg font-semibold hover:text-orange-500 transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Botão de Contato no Mobile */}
        <div className="mt-6 flex items-center gap-2 bg-green-700 hover:bg-green-600 px-4 py-4 text-white rounded-lg transition-all duration-300">
          <Phone />
          <a href="https://wa.me/12991999999" target="_blank" rel="noopener noreferrer" className="font-display-main">
            (12) 99199-9999
          </a>
        </div>
      </div>

      {/* Fundo escuro ao abrir o menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 md:hidden z-20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
