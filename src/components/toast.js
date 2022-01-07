import Toast from 'react-native-toast-message';

const toastMessage = (type, title, description) => {
    Toast.show({
        type, //'success | error | info'
        position: 'bottom', //top | bottom
        text1: title || type.toUpperCase(),
        text2: description || '',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40
    });
}

export default toastMessage;