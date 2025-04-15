import React from "react";
import bgImage from "../assets/bg-1.png";  // import background image
import logos from "../sharedVar/logos"; // Import logo dari sharedVar
import SocialButton from "../utils/socialsButton"; // Import komponen SocialButton dari utils
import LogoWeb from "../sharedVar/LogoWeb";


// Komponen utama login
function Register() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl bg-white shadow-lg rounded-xl overflow-hidden">
    
        {/* Kiri - Branding */}
        <aside className="bg-gradient-to-tr from-gray-700 to-gray-900 text-white p-6 flex flex-col justify-center">
          <div className="mb-4">
            <LogoWeb />
            <h2 className="text-2xl font-semibold mb-1 leading-snug">
              Buat impianmu jadi <br /> nyata...
            </h2>
            <p className="text-xs text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </aside>

        {/* Kanan - Form Login */}
        <section className="p-6 flex flex-col justify-center">
          <header className="mb-4">
            <h3 className="text-xs text-gray-500">LET'S GET YOU STARTED</h3>
            <h1 className="text-xl font-semibold text-gray-800">Create an Account</h1>
          </header>

          <form className="space-y-3">

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jhons Doe"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnsondoe@nomail.com"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**************"
                className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <button type="submit" className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800">
              GET STARTED
            </button>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm my-4">
              <hr className="w-1/5 border-gray-300" /> Or <hr className="w-1/5 border-gray-300" />
            </div>

            <div className="space-y-2">
              {/* Pass path logo yang benar dari objek logos */}
              <SocialButton icon={logos.google} text="Log In with Google" />
              <SocialButton icon={logos.facebook} text="Log In with Facebook" />
              <SocialButton icon={logos.apple} text="Log In with Apple" />
            </div>
          </form>

          <footer className="mt-6 text-center text-sm text-gray-600">
            ALREADY HAVE AN ACCOUNT? <a href="/login" className="text-black font-medium hover:underline">LOGIN HERE</a>
          </footer>
        </section>
      </section>
    </main>
  );
}

export default Register;
