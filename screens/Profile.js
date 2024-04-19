import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { COLORS, FONTWEIGHT, SIZES, BORDER } from '../constants/theme';
import NavModal from '../components/NavModal/NavModal';
import ToDoStat from '../components/ToDoStat/ToDoStat';
import HabitStat from '../components/HabitStat/HabitStat';
import { useProfile } from '../hooks/ProfileContext';
import { useTheme } from '../hooks/ThemeContext';

const Profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useTheme();
  const { profileImage } = useProfile();
  const dynamicStyles = getDynamicStyles(theme);

  return (
    <ScrollView>
      <SafeAreaView style={dynamicStyles.container}>
        <View style={dynamicStyles.avatarUsername}>
          <Image
            source={profileImage}
            style={dynamicStyles.image}
          />
          <Text style={dynamicStyles.text}>Username</Text>
        </View>
        <View style={dynamicStyles.headerPosition}>
          <Text style={dynamicStyles.text}>Statistics:</Text>
        </View>
        <View style={dynamicStyles.todochart}>
          <ToDoStat />
        </View>
        <View style={dynamicStyles.habitchart}>
          <HabitStat />
        </View>
        <NavModal
          navigation={navigation}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const getDynamicStyles = (theme) => {
  const { width } = Dimensions.get('window');
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS[theme].background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarUsername: {
      paddingTop: 50,
      paddingBottom: 70,
      alignItems: 'center'
    },
    text: {
      fontSize: SIZES.medium,
      fontWeight: FONTWEIGHT.bold,
      color: COLORS[theme].text,
      paddingTop: 10
    },
    headerPosition: {
      width: '100%',
      alignItems: 'center',
      paddingBottom: 20
    },
    image: {
      backgroundColor: COLORS[theme].secondary,
      width: 150,
      height: 150,
    },
    todochart: {
      paddingRight: 40,
      paddingBottom: 20
    },
    habitchart: {
      paddingRight: 40,
      paddingBottom: 20
    }
  });
};

export default Profile;
