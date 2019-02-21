var PersonManager = function (){
  return {
    $get: function (person){
      return {
        getPersonFirstName: function (){
          return person.firstName;
        },getPersonLastName: function (){
          return person.lastName;
        },getPersonFullName: function (separator){
          return person.firstName + separator + person.lastName;
        }
      };
    }
  };
};

angular.module("mainModule", []).value("person", {
    firstName: "",
    lastName: ""
}).provider("personManager", PersonManager).controller(
  "mainController", function ($scope, person, personManager){
    person.firstName = "山田";
    person.lastName = "太郎";
    $scope.personInstance = person;
    $scope.personManagerInstance = personManager;
  }
);