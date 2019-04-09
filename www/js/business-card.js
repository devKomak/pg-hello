const personalInformation = {
    name: 'Konrad',
    surname: 'Marszalek',
    email: 'konrad.marszalek1@gmail.com',
    deansGroupNumber: 'WZISS2-1212',
    fieldOfStudy: 'Applied Informatics'
}

function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
    navigator.notification.beep(1);
    document.getElementById('name').innerHTML = personalInformation.name;
    document.getElementById('surname').innerHTML = personalInformation.surname;
    document.getElementById('email').innerHTML = personalInformation.email;
    document.getElementById('deansGroupNumber').innerHTML = personalInformation.deansGroupNumber;
    document.getElementById('fieldOfStudy').innerHTML = personalInformation.fieldOfStudy;

}

function deviceInfo() {

	info =  'Hi';

	navigator.notification.alert(info);
	
}