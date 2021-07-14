
import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){

    const favoritessCtx =useContext(FavoritesContext);
    let content;
    if(favoritessCtx.totalFavorites===0){
        content=<p>you got no favorites yet</p>
    }else{
        content=<MeetupList meetups={favoritessCtx.favorites} />
    }

    return(
        <section>
        <h1>My favorites</h1>
        
        {content}
        
        
        
        </section>
        
        
        
        );
    
}

export default FavoritesPage;
