const MAX_LENGTH = 20;

export const stringMaxLength = (input) => {
    return (null !=  input && input.length > MAX_LENGTH )? input.toString().substr(0, 20) + '...': input.toString();
}

//si input es null, return ""
export const stringToNotNull = (input) => {
    return (null != input && 0 != input.toString().length)?input.toString().trim():"";
}


//si input es null, return null
export const stringToNull = (input) => {
    return (null != input && 0 != input.toString().length)?input.toString().trim():null;
}

//construye numero telefonico
export const stringPhoneNumber = (phone,country='+52') => {
    if(null!=stringToNull(phone) && 10 ===phone.toString().length ){
      return `${country}${phone}`.toString().trim();
    }
    return null;
}



export const stringCountryCodeClean = (phone='')=> {
    if(null == phone || phone.isEmpty) return '+52';
    if(phone.includes('+52')) return '+52';
    if(phone.includes('+54')) return '+54';
    if(phone.includes('+1')) return '+1';
    
}

export const stringPhoneClean = (phone='')=> {
    if(null == phone || phone.isEmpty) return '';
    return phone.replace(stringCountryCodeClean(phone),"")+"";
}

//manejo de cantidades
export const stringAmountOfMoney = (amount='') => {
    let strOut=  Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(amount);
    return strOut.replace('$','');
}


//formatea y suma cantidad y comision, en pago de servicios
export const stringFormatAmount = (cant, comm) => {
  const totalP = parseFloat(cant) + comm;
  if (totalP.toString().includes(".")) {
    let dec = totalP.toString().split(".")[1].length;
    if (dec >= 2) {
      return "$ " + totalP.toFixed(2);
    }
    if (dec == 1) {
      return "$ " + totalP + "0";
    }
  } else {
    return "$ " + totalP + ".00";
  }
};

export const stringFormatComm = (comm) => {
  if (comm.toString().includes(".")) {
    let dec = comm.toString().split(".")[1].length;
    if (dec >= 2) {
      return "$ " + comm.toFixed(2);
    }
    if (dec == 1) {
      return "$ " + comm + "0";
    }
  } else {
    return "$ " + comm + ".00";
  }
};

//Saldo de tarjetas corporativas
export const stringFormatMoney = (comm) => {
  let format = Number(comm).toLocaleString('es-MX')
  if (comm.toString().includes(".")) {
    let dec = comm.toString().split(".")[1].length;
    if (dec == 2) {
      return format;
    }
    if (dec == 1) {
      return format + "0";
    }
  } 
  else {
    return format + ".00";
  }
};


