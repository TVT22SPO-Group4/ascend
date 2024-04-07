import React, { useState } from 'react';
import { View, Button, Modal, Text, SafeAreaView, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from "../../hooks/ThemeContext";
import getDynamicStyles from './ToDoModal.styles';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ToDoModal = ({ todoModalVisible, setToDoModalVisible }) => {

  const { theme } = useTheme();
  const styles = getDynamicStyles(theme);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dateText, setDateText] = useState('')

  const toDoSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    difficulty: yup.string().required('Difficulty is required'),
    date: yup.string().required('Date is required'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(toDoSchema),
    defaultValues: {
      title: '',
      notes: '',
      difficulty: '',
      dueDate: ''

    },
  })
  
  const calendarAction = (e, selectedDate) => {
    if (e.type === "dismissed") { 
      setCalendarVisible(false); 
    } else {
      setCalendarVisible(false);
      setSelectedDate(selectedDate);
      let tempDate = new Date(selectedDate);
      let choppedDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
      setDateText(choppedDate);
      setValue('dueDate', choppedDate);
    }
  }
    
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
          <TouchableOpacity
            style={styles.text}
            onPress={handleSubmit(onSubmit)}>
              <Text>CREATE</Text>
          </TouchableOpacity>
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
                <View>
                  <TextInput
                  placeholder=''
                  onChangeText={onChange}
                  value={value}
                />
                {errors.title && (
                  <Text style={styles2.errorText}>{errors.title.message}</Text>
                )}
                </View>
              )}
              name="title"
            />
          </View>
          <View style={styles.cont}>
            <Text style={styles.text}>NOTES</Text>
            <Controller
              control={control}
              rules={{
                required: false,
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
              {errors.difficulty && (
                <Text style={styles2.errorText}>{errors.difficulty.message}</Text>
              )}
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                <View style={styles.difficultyOption}>
                  <View style={styles.difficultyBox}>
                    <TouchableOpacity
                    style={styles.difficultyBox}
                    onPress={() => {
                      onChange('easy')
                    }}
                    >
                    <Text>EASY</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.difficultyBox}>
                    <TouchableOpacity
                      style={styles.difficultyBox}
                      onPress={() => {
                        onChange('medium')
                      }}
                    >
                    <Text>MEDIUM</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.difficultyBox}>
                    <TouchableOpacity
                      style={styles.difficultyBox}
                      onPress={() => {
                        onChange('hard')
                      }}
                    >
                    <Text>HARD</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                )}
                name="difficulty"
              />
              
          <View style={styles.cont}>
            <TouchableOpacity onPress={() => setCalendarVisible(true)}>
              <Text style={styles.text}>Due Date: </Text>
            </TouchableOpacity>
            {calendarVisible && (
              <DateTimePicker 
                value={selectedDate}
                mode='date'
                is24Hour={true}
                locale="fi-FI"
                timeZoneName={'Europe/Helsinki'}
                display='default'
                onChange={calendarAction}
              />
              )}
              {errors.date && !dateText ? (
                <Text style={styles2.errorText}>{errors.date.message}</Text>
              ) : (
                <Text>{dateText}</Text>
              )}
              
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles2 =  StyleSheet.create ({
    errorText: {
      color: '#AE0000'
    }
});

export default ToDoModal;