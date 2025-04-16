import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa"; // Tambahkan ini
import bgImage from "../assets/bg-1.png";  // Pastikan path ini benar
import SocialButton from "../utils/socialsButton"; // Import komponen SocialButton dari utils
import LogoWeb from "../sharedVar/LogoWeb"; // Import logo dari sharedVar


// Komponen utama login
function Login() {
  return (
    <main
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl bg-white shadow-lg rounded-xl overflow-hidden">
    
    {/* Kiri - Branding */}
    <aside className="bg-gradient-to-tr from-gray-700 to-gray-900 text-white p-6 flex flex-col justify-center">
      <div className="mb-4">
        <LogoWeb />
        <h2 className="text-2xl font-semibold mb-1 leading-snug">
          Buat impianmu jadi <br /> nyata...
        </h2>
        <p className="text-xs text-gray-300">
        Belajar Lebih Mudah, Sesuai Gaya Kamu!
        </p>
      </div>
    </aside>

    {/* Kanan - Form Login */}
    <section className="p-6 flex flex-col justify-center">
      <header className="mb-4">
        <h3 className="text-xs text-gray-500">WELCOME BACK</h3>
        <h1 className="text-xl font-semibold text-gray-800">Log In to Your Account</h1>
      </header>

      <form className="space-y-3">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johnsondoe@nomail.com"
            className="mt-1 w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="**************"
            className="mt-1 w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800">
          CONTINUE
        </button>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs my-3">
          <hr className="w-1/4 border-gray-300" /> Or <hr className="w-1/4 border-gray-300" />
        </div>

        <div className="space-y-2">
        <SocialButton icon={<FaGoogle />} text="Log In with Google" />
        <SocialButton icon={<FaFacebookF />} text="Log In with Facebook" />
        <SocialButton icon={<FaApple />} text="Log In with Apple" />
        </div>
      </form>

      <footer className="mt-4 text-center text-xs text-gray-600">
        New User? <a href="/register" className="text-black font-medium hover:underline">SIGN UP HERE</a>
      </footer>
    </section>
  </section>
</main>

  );
}

export default Login;
