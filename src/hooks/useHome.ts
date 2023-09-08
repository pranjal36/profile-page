import {useState} from 'react';

export const useHome = () => {
  const [selectedTab, setSelectedTab] = useState('Posts');
  const [postData, setPostData] = useState([
    {
      name: 'Dragin_Ballz',
      time: '35 mins',
      status: 'OFFLINE',
      postContent:
        'Hi guys, my new video is out on my YouTube channel. Please view, like, share and comment.\nhttps://youtu.be/jQcfgoESwyk?si=Y5G_757ooweX336W',
      likes: 5275,
      comments: [
        {
          by: 'Heading',
          comment: 'this is a placeholder',
        },
        {
          by: 'Dragon_Ballz',
          comment: 'user placeholder',
        },
      ],
    },
    {
      name: 'Dragin_Ballz',
      time: '35 mins',
      status: 'OFFLINE',
      postContent:
        'Hi guys, my new video is out on my YouTube channel. Please view, like, share and comment.\nhttps://youtu.be/jQcfgoESwyk?si=Y5G_757ooweX336W',
      likes: 5275,
      comments: [
        {
          by: 'Heading',
          comment: 'this is a placeholder',
        },
        {
          by: 'Dragon_Ballz',
          comment: 'user placeholder',
        },
      ],
    },
  ]);
  const [follow, setFollow] = useState(false);

  return {selectedTab, setSelectedTab, follow, setFollow, postData};
};
