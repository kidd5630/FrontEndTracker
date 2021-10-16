import React, {useState} from 'react';
import {
    createActivity, 
    BASE_URL
} from '../api'
const MakeActivities = ({userToken, allActivities, setAllActivities}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    function resetForm(){
        setName('');
        setDescription('');
    }
    async function post(e) {
        e.preventDefault();
        try {
            const results = await createActivity(BASE_URL, userToken, name, description);
            if(results.id){
                setAllActivities([...allActivities, results])
                alert("Your Activity Has Been Made")
                resetForm();
            }else{
                alert(results.error)
            }
        } catch(error) {
            console.error(error)
        }
    }
    return (
    <section className="makeActAside">
        <h1 className="makeActTitle">Create Your New Activity</h1>
        <form className="makeActForm"onSubmit={post}>
            <div className="makeActContent">
                <div>
                    <label className="makeActLabel">Activity Name</label>
                </div>  
                <div>
                    <input className="makeActInput" 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        required
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>        
            </div>
            <div className="makeActContent">
                <div>
                    <label className="makeActLabel">Activity Description</label>
                </div>
                <div>
                    <input className="makeActInput" 
                        type="text" 
                        placeholder="Description" 
                        value={description}
                        required
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                </div>    
            </div>
                <button className="makeActSubmit"
                type="submit">Create Activity!
                </button>
        </form>
    </section>
    )
}
export default MakeActivities;