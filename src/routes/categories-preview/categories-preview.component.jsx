import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { motion } from "framer-motion";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </motion.div>
  );
};

export default CategoriesPreview;
