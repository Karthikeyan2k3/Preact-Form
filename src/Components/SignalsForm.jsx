import { signal } from "@preact/signals";

//declared signals to hold the values
const firstName=signal('');
const lastName=signal('');
const fullName=signal('');
const allowContact=signal(false);
const contactMethod=signal('');
const selectValue=signal('');
const showDetails=signal(false);

//function called when form is Submitted, will return fullname and clears the input field
const displayName = (e) => {
    e.preventDefault();
    showDetails.value = true;
    console.log('Form Submitted...');
    fullName.value = `${firstName.value} ${lastName.value}`.trim();
    firstName.value = '';
    lastName.value = '';
}

//component that renders the form
function SignalsForm(){

    const toggleContact=()=> allowContact.value = !allowContact.value;

    return(
        <form onSubmit={displayName}>
            <h1>Basic Form</h1>
            <label>Firstname :
                <input 
                    name="firstname" 
                    value={firstName} 
                    placeholder="Enter Firstname" 
                    onInput={e=>(firstName.value=e.currentTarget.value)}
                /><br/>
            </label> 
            <label>Lastname: 
                <input 
                    name="lastname" 
                    value={lastName} 
                    placeholder="Enter Lastname" 
                    onInput={e=>(lastName.value=e.currentTarget.value)}
                /><br/>
            </label>
            <label>Allow Contact : 
                <input 
                    type="checkbox" 
                    onClick={toggleContact}
                /><br/>
            </label>
            <label>Phone 
                <input 
                    type="radio" 
                    value={"Phone"} 
                    name={"contact"} 
                    onClick={e=> contactMethod.value = e.currentTarget.value } 
                    disabled={!allowContact.value}
                />
            </label>
            <label>E-Mail 
                <input 
                    type="radio" 
                    value={"Mail"} 
                    name={"contact"} 
                    onClick={e=> contactMethod.value = e.currentTarget.value } 
                    disabled={!allowContact.value}
                /><br/>
            </label>
            <label>Location :
                <select value={selectValue.value} onChange={e => selectValue.value=e.currentTarget.value}>
                    <option value="" disabled>Select</option> 
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Russia">Russia</option>
                </select><br/>
            </label> 
            <button type={"submit"}>Submit</button>
                {showDetails.value && (
                    <>
                        <h2>Form-Details</h2>
                        <p>Full Name : {fullName.value}</p>
                        <p>Location : {selectValue.value}</p>
                        <p>
				            You {allowContact.value ? 'have allowed' : 'have not allowed'} contact{' '}
				            {allowContact.value && ` via ${contactMethod.value}`}
			            </p>
                    </>
                )}
        </form>
    );
}

export default SignalsForm;