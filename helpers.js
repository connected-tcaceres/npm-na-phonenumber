const isValidNANumber = (phoneNum = "") => {
  let modPhoneNum = typeof phoneNum === "string" ? phoneNum : phoneNum.toString();
  modPhoneNum = modPhoneNum.replace(/\D/g, "");
  if (modPhoneNum.length > 11 || modPhoneNum.length < 10) {
    return false;
  }
  if (modPhoneNum.length === 11 && modPhoneNum.charAt(0) === "1") {
    modPhoneNum = modPhoneNum.substr(1, 10);
  }
  if (/^[2-9][0-9]{2}[2-9][1]{2}[0-9]{4}/.test(modPhoneNum)) {
    return false;
  }
  if (/^[2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4}/.test(modPhoneNum)) {
    return true;
  }
  return false;
};

module.exports = isValidNANumber;
