import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.5, ease: "easeIn", staggerChildren: 0.5 },
      }}
    >
      <Directory />
      <Outlet />
    </motion.div>
  );
};

export default Home;
