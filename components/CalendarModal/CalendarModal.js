import { View, Text, Modal, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarModal = ({calendarModalVisible, setCalendarModalVisible}) => {
    const [date, setDate] = useState(new Date()) //Tulee todomodaalista sit

    const onChange = (e, selectedDate) => {
      console.log(selectedDate);
      console.log(e)
      if (e.type === "dismissed") { 
        setCalendarModalVisible(false); 
    } else {
        setDate(selectedDate);
        setCalendarModalVisible(false);
    }
      setCalendarModalVisible(false)
      console.log("Calendar Modal Visible: ", calendarModalVisible);
    }

    return (
    <SafeAreaView>
      <Modal
      animationType="none"
      transparent={true}
      visible={calendarModalVisible}
      onRequestClose={() => {
        setCalendarModalVisible(false);
      }}
      >
        <View >
            <DateTimePicker 
            value={new Date()}
            mode="date"
            is24Hour={true}
            locale="fi-FI"
            timeZoneName={'Europe/Helsinki'}
            dateFormat="day month year"
            onChange={onChange}
          />
          <Button title="Close" onPress={() => setCalendarModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
    
  )
}

/* const styles2 = StyleSheet.create({
    calendar: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }) */

export default CalendarModal;