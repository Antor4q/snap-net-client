import Posts from "../Posts/Posts";
import Story from "../Story/Story";
import TopPost from "../TopPost/TopPost";


const Home = () => {
    return (
     <div>
        <Story/>
        <TopPost/>
        <Posts/>
     </div>  
    );
};

export default Home;