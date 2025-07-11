import { signal } from "@preact/signals";

//declared signals to hold the values
const firstName=signal('');
const lastName=signal('');
const fullName=signal('');

//function called when form is Submitted, will return fullname and clears the input field
const displayName = (e) => {
    e.preventDefault();
    console.log('Form Submitted...');
    fullName.value = `${firstName.value} ${lastName.value}`.trim();
    firstName.value = '';
    lastName.value = '';
}

//component that renders the form
function SignalsForm(){

    return(
        <form onSubmit={displayName}>
            <h1>Basic Form</h1>
            <label />Firstname : <input name="firstname" value={firstName} placeholder="Enter Firstname" onInput={e=>(firstName.value=e.currentTarget.value)}/><br />
            <label />Lastname  : <input name="lastname" value={lastName} placeholder="Enter Lastname" onInput={e=>(lastName.value=e.currentTarget.value)}/><br />
            <p>Full Name : {fullName.value}</p>
            <button type={"submit"}>Submit</button>
        </form>
    );
}

export default SignalsForm;