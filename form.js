function validateInputs()
  {
    //declaration of variables
    var SubmitForm;
    var FormErrors;

    //Initially set SubmitForm to true. 
    SubmitForm = true;

    //Retrieve variables to be validated and sanitized
    //Assume they are dangerous for now
    var fullname = new String(document.MyForm.fullname.value);
    var email = new String(document.MyForm.email.value);
    var number = new String(document.MyForm.number.value)

    //Check that the user inputs are not blank
    //JavaScript logical operator for OR : ||
    if ( fullname.length<1 || email.length<1 || number.length<1 )
    {
    FormErrors = "All fields are mandatory. Please complete the form.";
    SubmitForm = false;
    } else {
//Set up a filter for the pattern of an email
//Learn more about referencing characters:          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var filterNumber = /^[0-9]+$/
    
    //Use test() method to check user email against the filter
    //test() method: https://www.w3schools.com/jsref/jsref_regexp_test.asp     
    if (!filter.test(email) || !filterNumber.test(number))
    {
        FormErrors = "Your form contains invalid field entries. Please correct your form before submitting";
        SubmitForm = false;
     }
    }
    
    if (SubmitForm == false)
    {
        //The form cannot be submitted.
        alert(FormErrors);
        return false;
    } 
    else {
        //SANITIZE user inputs by allowing only [a-z 0-9 _ - . @] 
        //strip forbidden characters
        fullname = fullname.replace(/[^a-z0-9\s\-]/gim,"");
        fullname = fullname.trim();
        email = email.replace(/[^a-z0-9_@.-]/gim,"");
        email = email.trim();
        number = number.replace(/\D/gim, "");
        number = number.trim();

        //ready to submit
        document.MyForm.submit();
    }
}
