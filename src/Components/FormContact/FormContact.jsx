import React, { useState } from 'react';
import './form.css';
const FormContact = () => {

    const [name ,setname ] = useState("");
    const [show , setshow] = useState (true);

    const changename = (event) =>{
        setname(event.target.value)
    }

    const FormHandelar = (event) =>{
        event.preventDefault();
        // validation
        if( name.length === ""){
            setshow(false);
            return;
        }
        setshow(true);
    }
    return (
        <div>
            <form action="" onSubmit={FormHandelar}>
                    <div className="form-control">
                        <input type="text" placeholder='Your Name' onChange={changename} />
                        {!show &&<p>not empty</p>}
                    </div> 
                    <div className="form-control">
                        <input type="email" placeholder='Your Mail' />
                    </div>   
                    <div className="form-control">
                        <input type="text" placeholder='Your Phone' />
                    </div>
                    <select name="" id="">
                        <option value="">Select Department</option>
                        <option value="">Select Department</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                        <option value="">Three</option>
                    </select>
                    <div className="form-control">
                        <textarea type="text" placeholder='Massage' />
                    </div>  
                    <button type="submit">Submit</button>        
            </form>
        </div>
    );
}

export default FormContact;
