import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {windowDimensions} from '../constants/Dimensions';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';

const data = {
  data: 'Hi guys, my new video is out on my YouTube channel. Please view, like, share and comment.\nhttps://youtu.be/jQcfgoESwyk?si=Y5G_757ooweX336W',
};

type IPostData = {
  name: string;
  time: string;
  status: string;
  postContent: string;
  likes: number;
  comments: {
    by: string;
    comment: string;
  }[];
};

export default function Post({
  name,
  comments,
  likes,
  postContent,
  status,
  time,
}: IPostData) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.profilePicContainer}>
        <Image
          style={styles.profilePicStyles}
          source={{
            uri: 'https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png',
          }}
        />
        <View>
          <View style={{position: 'absolute', zIndex: 5}}>
            <Text style={styles.usernameStyle}>{name}</Text>
            <Text style={styles.timeLeft}>{time}</Text>
          </View>
          <View style={styles.orangeBGStyle} />
          <Text style={styles.statusText}>{status}</Text>
          <View style={{flexGrow: 1}} />
        </View>
        <View style={{flexGrow: 1}} />
        <TouchableOpacity>
          <Text>Follow</Text>
        </TouchableOpacity>
        <View style={{flexGrow: 1}} />
        <TouchableOpacity>
          <Text style={styles.setButtonStyles}>::</Text>
        </TouchableOpacity>
        <View style={{flexGrow: 1}} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          <Text style={styles.postContent}>{postContent}</Text>
        </View>
      </View>
      <View style={styles.postBtnContainer}>
        <TouchableOpacity style={styles.likesContainer}>
          <FontAwesomeIcon color={Colors.WHITE} size={16} name={'heart'} />
          <Text style={styles.likeText}>{likes} Likes</Text>
        </TouchableOpacity>
        <View style={[styles.orangeBGStyle, {width: 150}]} />
        <TouchableOpacity style={styles.postBtn}>
          <FontAwesomeIcon size={16} name="comment-o" />
          <Text style={styles.postBtnText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postBtn}>
          <FontAwesomeIcon size={16} name="comment-o" />
          <Text style={styles.postBtnText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postBtn}>
          <FontAwesomeIcon size={16} name="comment-o" />
          <Text style={styles.postBtnText}>Share</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={comments}
        renderItem={({item, index}) => {
          return (
            <>
              <Text style={styles.commentHeading}>
                {item.by}{' '}
                <Text style={{fontWeight: '400'}}>{item.comment}</Text>
              </Text>
              <Text style={styles.commentCount}>200 comments</Text>
            </>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  postContainer: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.DARK_ORANGE,
    borderRadius: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  profilePicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePicStyles: {
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  orangeBGStyle: {
    backgroundColor: 'transparent',
    width: windowDimensions.windowWidth / 1.95,
    borderRightWidth: 30,
    borderTopWidth: 45,
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    borderTopColor: Colors.DARK_ORANGE,
  },
  usernameStyle: {
    marginLeft: 10,
    color: Colors.WHITE,
    fontWeight: '600',
    fontSize: 16,
  },
  timeLeft: {
    fontSize: 12,
    color: Colors.WHITE,
    marginLeft: 10,
  },
  statusText: {
    fontSize: 8,
    letterSpacing: 10,
  },
  setButtonStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  postContent: {
    margin: 10,
    lineHeight: 20,
    marginBottom: 20,
  },
  contentWrapper: {
    backgroundColor: Colors.DARK_ORANGE,
  },
  contentContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 15,
  },
  postBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  likesContainer: {
    position: 'absolute',
    zIndex: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  likeText: {
    marginLeft: 5,
    color: Colors.WHITE,
    fontSize: 12,
  },
  postBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postBtnText: {
    marginLeft: 5,
  },
  commentHeading: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '900',
  },
  commentCount: {
    marginLeft: 20,
    fontSize: 12,
  },
});
