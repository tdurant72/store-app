import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { motion } from "framer-motion";
// import "./shop.styles.scss";

const Shop = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Routes>
        <Route
          index
          element={
            <motion.div variants={item}>
              <CategoriesPreview />
            </motion.div>
          }
        />
        <Route path=":category" element={<Category />} />
      </Routes>
    </motion.div>
  );
};

export default Shop;
