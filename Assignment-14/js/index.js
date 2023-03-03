const formButton = document.querySelector("#formButton");
formButton.addEventListener("click", (event) => {

    event.preventDefault();

    const FirstName = document.querySelector("#FirstName");
    const LastName = document.querySelector("#LastName");
    const EmailName = document.querySelector("#EmailName");
    const ContactNumber = document.querySelector("#ContactNumber");
    const Pincode = document.querySelector("#Pincode");
    const CardNumber = document.querySelector("#CardNumber");
    const CardE = document.querySelector("#CardE");
    const CVV = document.querySelector("#CVV");

    const fnameError = document.querySelector(".fname-error");
    const lnameError = document.querySelector(".lname-error");
    const emailError = document.querySelector(".email-error");
    const contactError = document.querySelector(".contact-error");
    const PcodeError = document.querySelector(".Pcode-error");
    const CNumError = document.querySelector(".CNum-error");
    const CardError = document.querySelector(".CardE-error");
    const CVVerror = document.querySelector(".CVV-error");
    // regular expression 
    let regName = /^[a-zA-Z]{1,30}$/;
    let emailreg = /^\w+([\.-]?\w+)*\@w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let contactreg = /^\d{10}$/;
    let Pcodereg = /^\d{6}$/;
    let Cnumreg = /^\d{16}$/;
    let Cardexreg = /^(?:20(?:2[3-9]|[3-9][0-9])|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])$/;
    let CVVreg = /^\d{3}$/;
    //    First Name
    if (FirstName.value == "") {
        FirstName.classList.add('error');
        fnameError.innerHTML = "First Name is required";
    }
    else if (!regName.test(FirstName.value)) {
        FirstName.classList.add('error');
        fnameError.innerHTML = "First Name is not valid";
    }
    else {
        FirstName.classList.remove('error');
        fnameError.innerHTML = "";
    }
    //email
    if (EmailName.value == "") {
        EmailName.classList.add('error');
        emailError.innerHTML = "Email Address is required";
    }
    else if (!emailreg.test(EmailName.value)) {
        EmailName.classList.add('error');
        emailError.innerHTML = "Email Address is not valid";
    }
    else {
        EmailName.classList.remove('error');
        emailError.innerHTML = "";
    }
    // Last Name 
    if (LastName.value == "") {
        LastName.classList.add('error');
        lnameError.innerHTML = "Last Name is required";
    }
    else if (!regName.test(FirstName.value)) {
        LastName.classList.add('error');
        lnameError.innerHTML = "Last Name is not valid";
    }
    else {
        LastName.classList.remove('error');
        lnameError.innerHTML = "";
    }
    //ContactNumer
    if (ContactNumber.value == "") {
        ContactNumber.classList.add('error');
        contactError.innerHTML = "Contact Number is required";
    }
    else if (!contactreg.test(ContactNumber.value)) {
        ContactNumber.classList.remove('error');
        contactError.innerHTML = "Contact Number is not valid";
    }
    else {
        ContactNumber.classList.remove('error');
        contactError.innerHTML = "";
    }
    // Pincode  
    if (Pincode.value == "") {
        Pincode.classList.add('error');
        PcodeError.innerHTML = "PIN Code is required";
    }
    else if (!Pcodereg.test(Pincode.value)) {
        Pincode.classList.add('error');
        PcodeError.innerHTML = "PIN Code is not valid";
    }
    else {
        Pincode.classList.remove('error');
        PcodeError.innerHTML = "";
    }
    // Card Number 
    if (CardNumber.value == "") {
        CardNumber.classList.add('error');
        CNumError.innerHTML = "Card Number is required";
    }
    else if (!Cnumreg.test(CardNumber.value)) {
        CardNumber.classList.add('error');
        CNumError.innerHTML = "Card Number is not valid";
    }
    else {
        CardNumber.classList.remove('error');
        CNumError.innerHTML = "";
    }
    //CardExpiry
    if (CardE.value == "") {
        CardE.classList.add('error');
        CardError.innerHTML = "Card Expiry is required";
    } else if (!Cardexreg.test(CardE.value)) {
        CardE.classList.add('error');
        CardError.innerHTML = "Card Expiry is not valid";
    }
    else {
        CardE.classList.remove('error');
        CardError.innerHTML = "";
    }
    //    CvV 
    if (CVV.value == "") {
        CVV.classList.add('error');
        CVVerror.innerHTML = "CVV is required ";

    }
    else if (!CVVreg.test(CVV.value)) {
        CVV.classList.add('error');
        CVVerror.innerHTML = "CVV is not valid ";
    }
    else {
        CVV.classList.remove('error');
        CVVerror.innerHTML = "";
    }
})