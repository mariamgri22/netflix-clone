import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from '../../assets/icons/ICON - Search.png'
import Home from '../../assets/icons/Group 46.png'
import TV from '../../assets/icons/Group 56.png'
import Film from '../../assets/icons/Group 54.png'
import Globe from '../../assets/icons/Group 53.png'
import Heart from '../../assets/icons/Group 47.png'

const navItems = [
  { icon: Search, label: "Search" },
  { icon: Home, label: "Home" },
  { icon: TV, label: "TV Shows" },
  { icon: Film, label: "Movies" },
  { icon: Globe, label: "Genres" },
  { icon: Heart, label: "Watch Later" },
];

const bottomItems = [
  { label: "Language" },
  { label: "Get Help" },
  { label: "Exit" },
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLabel, ] = useState("Home");

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.aside
        animate={{
          width: isHovered ? 260 : 80,
          backgroundColor: isHovered ? "#0a0a0a" : "#000",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`h-screen backdrop-blur-lg bg-black text-white flex flex-col ${isHovered ?"":"items-center"} justify-between overflow-hidden relative`}
      >
        <div
          className={`px-4 pt-6 flex items-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-80" : "opacity-0"
          }`}
        >
          <img
            src="https://i.pravatar.cc/300"
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm font-semibold">Mariam</div>
        </div>

        <nav className="flex flex-col mt-6 gap-1">
         {navItems.map(({ icon, label }, i) => (
          <motion.div
           key={label}
           initial={{ opacity: 0, x: -15 }}
           animate={{ opacity: 0.8, x: 0 }}
           transition={{ delay: isHovered ? 0.1 + i * 0.05 : 0 }}
           className={`flex items-center gap-2 p-2 rounded-2xl cursor-pointer transition-colors duration-200
           ${activeLabel === label ? ' bg-gray-800  text-white' : 'text-white/60 hover:bg-white/10'}`}    >
          
           <div className=" flex items-center justify-center ">
              <img src={icon} alt="" className="w-5 h-5 object-contain" />

           </div>

      <div
        className={`ml-3 overflow-hidden transition-all duration-300`}
        style={{
          width: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0,
          whiteSpace: "nowrap",
        }}
      >
        <span className="text-sm">{label}</span>
      </div>
    </motion.div>
  ))}
</nav>



        <div className="flex flex-col gap-2 px-4 pb-6">
          {bottomItems.map(({ label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ delay: isHovered ? 0.3 + i * 0.05 : 0 }}
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer"
            >
              <span
                className={`transition-all duration-300 origin-left ${
                  isHovered
                    ? "opacity-100 w-auto"
                    : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.aside>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-full h-full w-[50vw] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a99] to-transparent pointer-events-none z-0"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
