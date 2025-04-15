// Fungsi kecil untuk menghindari pengulangan
const SocialButton = ({ icon, text }) => (
    <button className="w-full py-2 border rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
      <img src={icon} alt={text} className="w-5 h-5" />
      {text}
    </button>
  );
  
  export default SocialButton;
  