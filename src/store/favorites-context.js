import { func } from "prop-types";
import { createContext, useState } from "react";




 const FavoritesContext= createContext({
     favorites:[],
     totalFavorites:0,
     addFavorite:(favoriteMeetup)=>{},
     removeFavorite:(meetupId)=>{},
     itemIsFavorite:(meetupId)=>{},
     
 });


export function FavoritesContextProvider(props){
     const [userFavorites,setuserFavorites]=useState([]);
    function addFavoriteHandler(favoriteMeetup){

        setuserFavorites((prevuserFavorites) =>{return prevuserFavorites.concat(favoriteMeetup);});
    }

    function removeFavoriteHandler(meetupId){
        setuserFavorites(prevuserFavorites=>{
            return prevuserFavorites.filter(meetup=>meetup.id !==meetupId);
        });

    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=>meetup.id===meetupId);

    }


     const context={
         favorites:userFavorites,
         totalFavorites:userFavorites.length,
         addFavorite:addFavoriteHandler,
         removeFavorite:removeFavoriteHandler,
         itemIsFavorite:itemIsFavoriteHandler
     };
     return(
        <FavoritesContext.Provider value={context}>
       
       {props.children}
       
        </FavoritesContext.Provider>



     );

 }

export default FavoritesContext;
