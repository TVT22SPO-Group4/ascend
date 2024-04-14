import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/theme';


const getDynamicStyles = (theme) => {
  const { height, width } = Dimensions.get('window');
  return StyleSheet.create({
    modalView: {
      position: 'absolute',
      width: width,
      height: height,
      backgroundColor: COLORS[theme].background,
      padding: 35,
      justifyContent: 'center',
    },
    main: {
      width: width,
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: width * 0.8,
    },
    cont: {
      backgroundColor: COLORS[theme].primary,
      padding: 20,
      height: 100,
      borderRadius: 5,
      marginBottom: 20,
    },
    circle: {
      backgroundColor: COLORS[theme].primary,
      height: 50,
      width: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    difficultyBox: {
      backgroundColor: COLORS[theme].primary,
      height: 70,
      width: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    top: {
      padding: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
    },
    topButtons: {
      flexDirection: 'column',
      gap: 5
    },
    PosCircle: {
      backgroundColor: COLORS[theme].green,
      height: 50,
      width: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    NegCircle: {
      backgroundColor: COLORS[theme].red,
      height: 50,
      width: 50,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    easyDifficultyBox: {
      backgroundColor: COLORS[theme].green,
      height: 70,
      width: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mediumDifficultyBox: {
      backgroundColor: COLORS[theme].orange,
      height: 70,
      width: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    HardDifficultyBox: {
      backgroundColor: COLORS[theme].red,
      height: 70,
      width: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centeredView: {
      flex: 1,
      backgroundColor: COLORS[theme].background,
      alignItems: 'center',
    },
    backdrop: {
      position: 'absolute',
      width: width,
      height: height,
    },
    text: {
      color: COLORS[theme].text,
      fontSize: 15,
      fontWeight: 'bold',
    },
    delete: {
      color: COLORS[theme].red,
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 10,
    },
    modify: {
      color: COLORS[theme].accent,
      fontSize: 15,
      fontWeight: 'bold',
    },
    difficultyOption: {
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    errorText: {
      color: '#AE0000'
    }
  });
}

export default getDynamicStyles;