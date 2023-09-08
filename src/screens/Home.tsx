import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Logo from '../Assets/Svg/Logo';
import LogoComponent from '../Components/LogoComponent';
import {windowDimensions} from '../constants/Dimensions';
import EditIcon from '../Assets/Svg/EditIcon';
import SocialMedia from '../Components/SocialMedia';
import {useHome} from '../hooks/useHome';
import Post from '../Components/Post';

const Home = () => {
  const {selectedTab, setSelectedTab, follow, setFollow, postData} = useHome();

  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <View style={styles.orangeTopContainer} />
            <View style={styles.topRightContainer}>
              <LogoComponent />
            </View>
          </View>
          <View>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
              }}
            />
            <TouchableOpacity style={styles.editBtnContainer}>
              <EditIcon height={20} width={20} />
            </TouchableOpacity>
            <View style={styles.profilePicContainer}>
              <Image
                style={styles.profilePicStyles}
                source={{
                  uri: 'https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png',
                }}
              />
              <TouchableOpacity style={styles.profileEditBtn}>
                <EditIcon height={20} width={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameOfUser}>Dragon_Ballz</Text>
            <Text style={styles.subTitle}>@UID007</Text>
            <Text style={styles.subTitle}>Game Designation</Text>
          </View>
          <TouchableOpacity onPress={() => setFollow(!follow)}>
            <Text style={[follow ? styles.unfollow : styles.followBtn]}>
              {follow ? 'UNFOLLOW' : 'FOLLOW'}
            </Text>
          </TouchableOpacity>
          <SocialMedia />
          <View style={styles.followCountContainer}>
            <View>
              <Text style={styles.followHeading}>500</Text>
              <Text style={styles.followSubtitle}>Followers</Text>
            </View>
            <Text>|</Text>
            <View>
              <Text style={styles.followHeading}>200</Text>
              <Text style={styles.followSubtitle}>Following</Text>
            </View>
            <Text>|</Text>
            <View>
              <Text style={styles.followHeading}>10</Text>
              <Text style={styles.followSubtitle}>Posts</Text>
            </View>
          </View>
          <View style={styles.navContainer}>
            {['Posts', 'Social', 'About', 'Gallery', 'Device'].map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedTab(item)}
                    key={index}>
                    <Text
                      style={[
                        styles.navButton,
                        selectedTab === item && styles.navButtonSelected,
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
          {selectedTab === 'Posts' && (
            <View style={styles.postContainer}>
              <FlatList
                scrollEnabled={false}
                data={postData}
                renderItem={({item, index}) => {
                  return (
                    <Post
                      comments={item.comments}
                      likes={item.likes}
                      name={item.name}
                      postContent={item.postContent}
                      status={item.status}
                      time={item.time}
                    />
                  );
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.orangeBottomContainer} />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.WHITE,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    paddingBottom: 20,
  },
  topContainer: {
    height: 45,
    flexDirection: 'row',
  },
  orangeTopContainer: {
    backgroundColor: Colors.BG_GREY,
    width: windowDimensions.windowWidth / 1.95,
    borderRightWidth: 30,
    borderTopWidth: 45,
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    borderTopColor: Colors.DARK_ORANGE,
  },
  topRightContainer: {
    backgroundColor: Colors.BG_GREY,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowDimensions.windowWidth,
    height: 220,
    marginTop: 10,
  },
  editBtnContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  profilePicContainer: {
    height: 82,
    width: 82,
    backgroundColor: 'red',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    position: 'absolute',
    bottom: -30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicStyles: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
  profileEditBtn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 2,
  },
  detailsContainer: {
    alignSelf: 'center',
    marginTop: 35,
  },
  nameOfUser: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.DARK_ORANGE,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 12,
  },
  followBtn: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.DARK_ORANGE,
    color: Colors.WHITE,
    fontWeight: '500',
    borderRadius: 5,
  },
  unfollow: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.BG_GREY,
    color: Colors.DARK_ORANGE,
    fontWeight: '500',
    borderRadius: 5,
  },
  followCountContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '15%',
    alignItems: 'center',
  },
  followHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.BLACK,
    textAlign: 'center',
  },
  followSubtitle: {
    fontSize: 12,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: '2%',
    marginTop: 15,
    marginBottom: 20,
  },
  navButton: {
    color: 'orange',
    fontWeight: '500',
    fontSize: 16,
  },
  navButtonSelected: {
    color: Colors.DARK_ORANGE,
    lineHeight: 25,
    borderBottomWidth: 2,
    borderBottomColor: Colors.DARK_ORANGE,
    fontWeight: '800',
  },
  postContainer: {
    backgroundColor: Colors.BG_GREY,
    flexGrow: 1,
    padding: 5,
  },
  orangeBottomContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: windowDimensions.windowWidth / 2.1,
    borderLeftWidth: 40,
    borderBottomWidth: 30,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderBottomColor: Colors.DARK_ORANGE,
    bottom: 0,
    right: 0,
  },
});
export default Home;
