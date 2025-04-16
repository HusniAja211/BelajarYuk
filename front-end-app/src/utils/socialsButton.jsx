const SocialButton = ({ icon, text }) => (
  <button className="w-full py-2 border rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
    <span className="text-lg">{icon}</span>
    {text}
  </button>
);

export default SocialButton;
