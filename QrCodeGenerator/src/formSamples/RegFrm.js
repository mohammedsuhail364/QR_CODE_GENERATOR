import {useState} from 'react'
import './dummy.css';
export const RegFrm = () => {
    const [user,setUser]=useState({
        name:'suhail',
        age:23,
        gender:'male',
        ismarried:true,
        country:'India',
        bio:'Write Something About You',
    })
    function changehandler(e){
        const name=e.target.name;
        const value=e.target.type==='checkbox'?e.target.checked:e.target.value;
        setUser({...user,[name]:value});
         
    }
  return (
   <>
   <table>
    <tbody>
        <tr>
            <td>Name</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{user.age}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <td>Marital Status</td>
            <td>{user.ismarried ? 'Married':'Not Married'}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>{user.country}</td>
        </tr>
        <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
        </tr>
    </tbody>
    
   </table>
   <form>
    <input type='text' placeholder='Full name' value={user.name} name='name' onChange={changehandler} />
    <input type='number' placeholder='Age' name='age' value={user.age} onChange={changehandler} />
    <div className='gender'>
        <label htmlFor='male'>
            <input type='radio' value='male' name='gender'  id='male' checked={user.gender=='male'} onChange={changehandler}/>
            Male
        </label>
        <label htmlFor='female'>
            <input type='radio' name='gender' id='female' checked={user.gender=='female'} value='female' onChange={changehandler} />Female
        </label>
    </div>
    <label htmlFor='ismarried'>
        <input type='checkbox' id='ismarried' name='ismarried' onChange={changehandler} checked={user.ismarried} />
        Is Married
    </label>
    <div className='select-div' >
    <label htmlFor='country'>Select Country</label>
        <select name='country' id='country' value={user.country} onChange={changehandler}>
            <option value='India'>India</option>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
        </select>

    </div>
    <textarea name='bio' id='bio' cols='30' rows='5' value={user.bio} placeholder='Write About You' onChange={changehandler}  ></textarea>
        
   </form>
   </>
  )
}
