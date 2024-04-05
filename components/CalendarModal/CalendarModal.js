import { View, Text, Modal, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const CalendarModal = ({calendarModalVisible, setCalendarModalVisible}) => {
    const [date, setDate] = useState('')
    const [show, setShow] = useState(false)
    return (
    <Modal
      animationType="none"
      transparent={false}
      visible={calendarModalVisible}
      onRequestClose={() => {
        setCalendarModalVisible(!calendarModalVisible);
      }}
    >
        <View style={styles2.calendar}>
            <Text >Hello</Text>
            <Button title="Close" onPress={() => setCalendarModalVisible(!calendarModalVisible)} />
        </View>
    </Modal>
  )
}

const styles2 = StyleSheet.create({
    calendar: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default CalendarModal;