import React, { useState } from 'react';
import { View, Button, Modal, Text, SafeAreaView, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from "../../hooks/ThemeContext";
import getDynamicStyles from './ToDoModal.styles';
import { useForm, Controller } from 'react-hook-form';
import CalendarModal from '../CalendarModal/CalendarModal';

const ToDoModal = ({ todoModalVisible, setToDoModalVisible }) => {

  const { theme } = useTheme();
  const styles = getDynamicStyles(theme);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      notes: '',
      difficulty: '',
      date: ''

    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={todoModalVisible}
      onRequestClose={() => {
        setToDoModalVisible(!todoModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.backdrop} onTouchEnd={() => setHabitModalVisible(false)} />
        <View style={styles.modalView}>
        </View>
        <View style={styles.top}>
          <Button title="Back" onPress={() => setToDoModalVisible(!todoModalVisible)} />
          <Pressable 
            style={styles.text}
            onPress={handleSubmit(onSubmit)}>
              <Text>CREATE</Text>
            </Pressable>
        </View>
        <View style={styles.main}>
          <View style={styles.cont}>
            <Text style={styles.text}>TITLE</Text>
            <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder=''
                onChangeText={onChange}
                value={value}
              />
            )}
            name="title"
            />
          </View>
          <View style={styles.cont}>
            <Text style={styles.text}>NOTES</Text>
            <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder=''
                onChangeText={onChange}
                value={value}
              />
            )}
            name="notes"
            />
          </View>
          <Text style={styles.text}>DIFFICULTY</Text>
          <View style={styles.difficultyOption}>
            <View style={styles.difficultyBox}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                <TouchableOpacity
                  style={styles.difficultyBox}
                  onPress={() => {
                    onChange('easy')
                  }}
                >
                <Text>EASY</Text>
                </TouchableOpacity>
                )}
                name="difficulty"
              />
            </View>
            <View style={styles.difficultyBox}>
              <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                  <TouchableOpacity
                    style={styles.difficultyBox}
                    onPress={() => {
                      onChange('medium')
                    }}
                  >
                  <Text>MEDIUM</Text>
                  </TouchableOpacity>
                  )}
                  name="difficulty"
              />
            </View>
            <View style={styles.difficultyBox}>
              <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                    <TouchableOpacity
                      style={styles.difficultyBox}
                      onPress={() => {
                        onChange('hard')
                      }}
                    >
                    <Text>HARD</Text>
                    </TouchableOpacity>
                    )}
                    name="difficulty"
                />
            </View>
          </View>
          <View style={styles.cont}>
            <TouchableOpacity onPress={() => setCalendarModalVisible(true)}>
              <Text style={styles.text}>Due Date:</Text>
            </TouchableOpacity> 
                <CalendarModal
                calendarModalVisible={calendarModalVisible}
                setCalendarModalVisible={setCalendarModalVisible}
                />               
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ToDoModal;