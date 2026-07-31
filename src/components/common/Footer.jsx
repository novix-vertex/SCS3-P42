const Footer = () => {
  return (
    <footer className="border-t border-white/15 bg-[#111111]">
      <div className="mx-auto flex h-36 max-w-7xl flex-col items-center justify-center px-6">

        <h2 className="text-4xl font-bold text-lime-400">
          SkyMart
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          © {new Date().getFullYear()} SkyMart • Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;