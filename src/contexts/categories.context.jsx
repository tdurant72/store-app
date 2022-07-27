import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";
export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // added collections to firebase db
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  //get docs from firebase db
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categroyMap = await getCategoriesAndDocuments();
      // console.log("categroyMap", categroyMap);
      setCategoriesMap(categroyMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
