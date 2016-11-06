//Verify validCPF
function cpfValidation(cpfValidation) {


    var total, remainder = 0;

    if ((cpfValidation === "00000000000") || (cpfValidation.length !== 11)) {
        return false;
    }
    //Validation of the first digit, distribuiting the first nine cpf's number
    for (i = 1; i <= 9; i++) {
        total = total + parseInt(cpfValidation.substring(i - 1, i)) * (11 - i);
    }

    remainder = (total * 10) % 11;

    if ((remainder === 10) || (remainder === 11)){
        remainder = 0;
    }

    if (remainder != parseInt(cpfValidation.substring(9, 10))) {
        return false;
    }

    total = 0;

    //now including the first verified digit (e.g - 01)
    for (i = 1; i <= 10; i++) {
        total = total + parseInt(cpfValidation.substring(i - 1, i)) * (12 - i);
    }
    remainer = (total * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    else if (remainder != parseInt(cpfValidation.substring(10, 11)))
    {
        return false;
    }
    else
    {
        return true;
    }

}
