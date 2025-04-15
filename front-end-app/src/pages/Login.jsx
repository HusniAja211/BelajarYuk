import React from "react";
import bgImage from "../assets/bg-1.png";  // Pastikan path ini benar

// Base URL untuk assets
const baseAssetURL = "/assets/";

// Daftar logo dengan path relatif
const logos = {
  google: baseAssetURL + "icons8-google.svg",
  apple: baseAssetURL + "icons8-apple.svg",
  facebook: baseAssetURL + "icons8-facebook.svg",
};

// Komponen utama login
function Login() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Kiri - Branding */}
        <aside className="bg-gradient-to-tr from-gray-700 to-gray-900 text-white p-10 flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center text-2xl font-bold mb-2">
              <span className="bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center mr-2 font-bold">B</span>
              BelajarYuk
            </div>
            <h2 className="text-3xl font-semibold mb-2">Buat impianmu menjadi nyata...</h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </aside>

        {/* Kanan - Form Login */}
        <section className="p-10 flex flex-col justify-center">
          <header className="mb-6">
            <h3 className="text-sm text-gray-500">WELCOME BACK</h3>
            <h1 className="text-2xl font-semibold text-gray-800">Log In to your Account</h1>
          </header>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnsondoe@nomail.com"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**************"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800">
              CONTINUE
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
            New User? <a href="#" className="text-black font-medium hover:underline">SIGN UP HERE</a>
          </footer>
        </section>
      </section>
    </main>
  );
}

// Fungsi kecil untuk menghindari pengulangan
const SocialButton = ({ icon, text }) => (
  <button className="w-full py-2 border rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
    <img src={icon} alt={text} className="w-5 h-5" />
    {text}
  </button>
);

export default Login;
