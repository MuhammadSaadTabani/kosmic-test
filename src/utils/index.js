

// import {format} from 'date-fns'

import Toast from "react-native-toast-message";

// export const formatDate = (date) => {
//     const d = new Date(date)
//     return format(d, 'MM/dd/yyyy')+ " || " +d.toLocaleTimeString()
// }

export const toTitleCase = str => {
    if(str){
      return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    }
}


export const formValidation = data => {
    for(item in data){
        if(!data[item]) return false
    }
    return true;
}

export const getFilterDate = date => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`
}

export const showToast = (text) => {
    Toast.show({
        text1: text
    })
}



