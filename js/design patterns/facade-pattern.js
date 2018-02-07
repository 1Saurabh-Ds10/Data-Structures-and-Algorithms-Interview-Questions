/*
Facade Pattern

Simplified interface of a complicated System

Facade hides the complexity (i.e. jQuery is in facade pattern)
*/

const Name = {
  firstName: 'Bebu',
  lastName: 'Ds',
  middleName: 'Sa'
};
const ValidateName = (function(nameObj) {
  let publicAPI;

  function validateFirstName() {
    if (nameObj.firstName) {
      return true;
    }
  }
  function validateLastName() {
    if (nameObj.lastName) {
      return true;
    }
  }
  function validateMiddleName() {
    if (nameObj.middleName) {
      return true;
    }
  }

  return (publicAPI = {
    validateFirstName,
    validateLastName,
    validateMiddleName
  });
})(Name);

const ValidateNameWrapper = (function() {
  function validateName() {
    if (ValidateName.validateFirstName() && ValidateName.validateLastName() && ValidateName.validateMiddleName()) {
      return true;
    }
  }

  return {
    validateName
  };
})();
