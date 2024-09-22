import { showMessage } from "react-native-flash-message";
import Toast from 'react-native-toast-message';


const showError=(message)=>{
    showMessage({
        type:'danger',
        icon:'danger',
        message
    })
}

const showSuccess=(message)=>{
    showMessage({
        type:'success',
        icon:'success',
        message
    })
}

const showToastError = (message) => {
    Toast.show({
      type: 'error',
      text1: 'error',
      text2: message
    });
  }
  const showToastSuccess = (message) => {
    Toast.show({
      type: 'success',
      text1: 'success',
      text2: message
    });
  }
export {
    showError,
    showSuccess,
    showToastError,
    showToastSuccess
}