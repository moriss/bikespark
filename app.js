//https://www.youtube.com/watch?v=-HgdzYCi2nI
//constants to stop warning loading after user 
alert('hello');

const storageType = localStorage;
//local storage works with key value pairs
const consentPropertyName = 'bs_consent';

//booleans to check if we need to display the pop up
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
//if consentPropertyName holds no value, then pop up is displayed

const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    if(shouldShowPopup())
    const consent = confirm('Agree to the terms and conditions of the site');
        if(consent) {
            saveToStorage();
        }
}