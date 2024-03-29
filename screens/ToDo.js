import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';
import { COLORS, FONTWEIGHT, SIZES, BORDER } from '../constants/theme';
import NavModal from '../components/NavModal/NavModal';
import BottomNav from '../components/BottomNav/BottomNav';
import ToDoModal from '../components/ToDoModal/ToDoModal';

const ToDo = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todoModalVisible, setToDoModalVisible] = useState(false);
  const { theme } = useTheme();

  const dynamicStyles = getDynamicStyles(theme);

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.text}>To Do's</Text>
      <Button title="Nav" onPress={() => setModalVisible(true)} />
      <NavModal
        navigation={navigation}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <BottomNav
        navigation={navigation}
      />
      <Button
        title="Add To Do"
        onPress={() => setToDoModalVisible(true)}
      />
      <ToDoModal
        todoModalVisible={todoModalVisible}
        setToDoModalVisible={setToDoModalVisible}
      />
    </View>
  );
};


const getDynamicStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS[theme].background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: SIZES.medium,
      fontWeight: FONTWEIGHT.bold,
      color: COLORS[theme].text,
    },
  });
};

export default ToDo;
