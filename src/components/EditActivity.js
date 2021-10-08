import React, {useState} from 'react';
import {
    editThisActivity, 
    BASE_URL
} from '../api'


const EditActivity = ({allActivities, setAllActivities, userToken, selectedAct, ToggleClass}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    
    function resetForm() {
        setName('');
        setDescription('');
    }

    async function edit(e) {
        e.preventDefault();
            try {
                const results = await editThisActivity(BASE_URL, selectedAct, userToken, name, description);
                if(results.id) {
                    setAllActivities([...allActivities]);
                    ToggleClass();
                    resetForm();
                }
            } catch(error) {
                console.error(error)
        }
    }
    
    return (
        <section className="editActivityAside">
            <h1 className="editActivity">Edit Here</h1>
                <form className="editActivityForm" onSubmit={edit}>
                    <div className="editActivityContent">
                        <label className="editActivityLabel">Name</label>
                    </div>
                    <div className="editActivityContent">
                        <input className="editActivityInput" type="text" 
                            placeholder="Name" value={name} 
                            onChange={(event) => {
                                setName(event.target.value);
                        }}/>
                    </div>
                    <div className="editActivityContent">
                        <label className="editActivityLabel">Description</label>
                    </div>
                    <div className="editPostContent">
                        <input className="editPostInput" type="text" 
                            placeholder="Description" value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                        }}/>
                    </div>
                    <button className="editPostSubmit" type="submit">Update Post!</button>
                </form>
        </section>
    )
}


export default EditActivity;