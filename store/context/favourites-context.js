import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { },
});

function FavouritesContextProvider({ children }) {
    
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    function addFavourite(id) {
        setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavourite(id) {
        setFavouriteMealIds((currentFavIds) => currentFavIds.filter((mealId)=> mealId!==id))
    }

    const values = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return (
        <FavouritesContext.Provider value={values}>{children}</FavouritesContext.Provider>
    )
}

export default FavouritesContextProvider;