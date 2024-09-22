import validationr from 'is_js';

const checkEmpty = (val, key) => {
  if (validationr.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `Please enter${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  const {userName, email, password} = data;

  if (userName !== undefined) {
    let emptyValidationText = checkEmpty(
      userName,
      'Please enter your user name ',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(userName, 3, ' at least 3 characters');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, 'Please enter your email');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validationr.email(email)) {
        return 'Please enter valid email ';
      }
    }
  }

  if (password !== undefined) {
    let emptyValidationText = checkEmpty(
      password,
      'Please enter your password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 6, ' at least 6 characters ');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }
}
