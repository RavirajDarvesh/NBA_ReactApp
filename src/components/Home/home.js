import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';
import Newslist from '../Widgets/NewsList/newsList';
const Home=()=>{
    return(
        <div>
            <NewsSlider
            type="featured"
            start= {3}
            amount={6}
            settings={{
                dots:false,
                arrows:false
            }}
            />
            <Newslist
            type="card"
            loadmore={true}
            start= {3}
            amount={3}
            />
        </div>
    )
}

export default Home;