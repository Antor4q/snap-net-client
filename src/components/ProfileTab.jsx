import { Tab, TabContent, TabItem, TabList,  } from 'keep-react'
import Post from '../pages/Home/Post/Post';



const ProfileTab = () => {
    return (
        <div className='px-5'>
                <Tab activeLabel="posts" itemType="link">
      <TabList>
        <TabItem label="posts">Posts</TabItem>
        <TabItem label="likes">Likes</TabItem>
        <TabItem label="articles">Articles</TabItem>
      </TabList>
      <TabContent className='max-w-2xl' value="posts">
        <Post/>
      </TabContent>
      <TabContent value="likes">
        All my liked posts is coming soon
      </TabContent>
      
      <TabContent value="articles">
         All articles is coming soon here
      </TabContent>
    </Tab>
        </div>
    );
};

export default ProfileTab;