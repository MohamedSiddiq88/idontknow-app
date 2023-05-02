import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const data1 = [
    {
      name: 'Rohit Sharma',
      age: 16,
      gender: 'Male',
      class: 'X',
      bloodGroup: 'B+'
    },
    {
      name: 'Sneha Singh',
      age: 15,
      gender: 'Female',
      class: 'X',
      bloodGroup: 'AB+'
    },
    {
      name: 'Ravi Kumar',
      age: 17,
      gender: 'Male',
      class: 'XI',
      bloodGroup: 'A+'
    },
    {
      name: 'Priya Gupta',
      age: 16,
      gender: 'Female',
      class: 'X',
      bloodGroup: 'O+'
    },
    {
      name: 'Amit Verma',
      age: 17,
      gender: 'Male',
      class: 'XI',
      bloodGroup: 'B-'
    },
    {
      name: 'Neha Singh',
      age: 16,
      gender: 'Female',
      class: 'X',
      bloodGroup: 'O+'
    },
    {
      name: 'Raj Kumar',
      age: 18,
      gender: 'Male',
      class: 'XII',
      bloodGroup: 'AB-'
    },
    {
      name: 'Sunita Yadav',
      age: 17,
      gender: 'Female',
      class: 'XI',
      bloodGroup: 'A-'
    },
    {
      name: 'Rajat Sharma',
      age: 16,
      gender: 'Male',
      class: 'X',
      bloodGroup: 'O+'
    },
    {
      name: 'Anjali Singh',
      age: 18,
      gender: 'Female',
      class: 'XII',
      bloodGroup: 'B+'
    }
  ]
  
  const [data,setData]=useState(data1);
  const[update,setUpdate]=useState(false);

function updating(){
  setUpdate(!update)
}

  return (
    <div className="App">
      <h1 id="heading">Student Profiles</h1>

      <div className='container-fluid'>
        <div className='row'>
         
        
        <AddData
        data={data}
        setData={setData}
        />
    {
      data.map((obj,index)=>(
        <Display
        key={index}
        ind={index}
        obj={obj}
        data={data}
        setData={setData}
        update={update}
        setUpdate={setUpdate}
        updating={updating}
        />
      ))
      
    }
    </div>
    </div>
   
    </div>
  );
}

export default App;

function AddData({data,setData}){

  const handelsubmit=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const age=event.target.age.value;
    const gender=event.target.gender.value;
    const clas=event.target.class.value;
    const bloodgroup=event.target.bloodgroup.value;

    setData([...data,{name,age,gender,class:clas,bloodGroup:bloodgroup}])
    
    // to claear all field after updating
    event.target.reset();
    
   


  }
  function isNumber(event,val){
    console.log(isNaN(val))
    let value=val;
   if(val==undefined){

   }else{
    if(isNaN(value)){
      value="please enter Number only";
      event.target.style="color:red; font-weight:bold;";
    }else{
      event.target.style="color:white; font-weight:normal;";
      value=val;
    }
    event.target.value=value;
   }
  }

  return(

    <div className='col col-md-3'>
      <div className='card'>
      
      {/* prevent from reloading the page on submiting */}
        <form onSubmit={handelsubmit}>
        <table>
          <tr>
            <th>Name:</th>
            <td><input placeholder='Enter Name' required name='name'></input></td>
          </tr>
          <tr>
            <th>Age:</th>
            <td><input placeholder='Enter Age' required name='age' onChange={(e)=>isNumber(e,e.target.value)}></input></td>
          </tr>
          <tr>
          <th>Gender:</th>
          <td><input placeholder='Enter Gender' required name='gender'></input></td>
          </tr>
          <tr>
          <th>Class:</th>
          <td><input placeholder='Enter Class' required name='class'></input></td>
          </tr>
          <tr>
          <th>Blood Group:</th>
          <td><input placeholder='Enter Blood Group' required name='bloodgroup'></input></td>
          </tr>
        </table>

        <button className='btn btn-success'>Add</button>

        </form>

        </div>
    </div>

  );

}

function Display({ind,obj,data,setData,update,setUpdate,updating}){

const [ind1,setInd1]=useState();

function onUpdate(ind){
  
  updating(update,setUpdate);
  setInd1(ind);

  console.log(ind);
}


  return(

    <>
    {(update&&ind==ind1)?
    
    <EditData
    data={data}
    setData={setData}
    ind={ind}
    update={update}
    setUpdate={setUpdate}
    updating={updating}
    onUpdate={onUpdate}
    />

    :
  
    <div className='col col-md-3'>
      <div className='card'>

        <table>
          <tr>
            <th>Name:</th>
            <td>{obj.name}</td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>{obj.age}</td>
          </tr>
          <tr>
          <th>Gender:</th>
            <td>{obj.gender}</td>
          </tr>
          <tr>
          <th>Class:</th>
            <td>{obj.class}</td>
          </tr>
          <tr>
          <th>Blood Group:</th>
            <td>{obj.bloodGroup}</td>
          </tr>
        </table>
        
        <div className='button-section'>
        <button className='btn btn-primary' 
        
        

        onClick={
          ()=>(
            onUpdate(ind)
            
          
          
        )
        
        }>Edit</button>

        
        <button className='btn btn-danger' onClick={()=>(
          // delte
          setData(data.filter((ele,index)=>index!=ind))
          // console.log(key1)

        )}>Delete</button>
        </div>

        </div>
    </div>
  
  }
   </>    

  );

}


function EditData({data,setData,ind,update,setUpdate,updating,onUpdate}){

const [ind1,setInd1]=useState();

const [name,setName]=useState("")
const [age,setAge]=useState("")
const [gender,setGender]=useState("")
const [clas,setClas]=useState("")
const [bloodgroup,setBloodGroup]=useState("")





  function onUpdate1(ind){
    onUpdate();
    updating(update,setUpdate);


    
    data[ind].name=name
    data[ind].age=age
    data[ind].gender=gender
    data[ind].class=clas
    data[ind].bloodGroup=bloodgroup

    setInd1();
    


  }
  


   console.log((data[ind])+" data")

  useEffect(()=>{
    const editStudent=data[ind]
    setName(editStudent.name)
    setAge(editStudent.age)
    setGender(editStudent.gender)
    setClas(editStudent.class)
    setBloodGroup(editStudent.bloodGroup)
  },[data,ind])

 
 
  const handelsubmit=(event,int)=>{
  
    event.preventDefault();
    
    
    if (event.target.checkValidity()) {
          onUpdate1(ind);
      
  } else {
      // Form is invalid, show error messages
      console.log("pleas fill the fild")
  }


    

  
    
  }

  return(

    <div className='col col-md-3'>
      <div className='card'>
      
      {/* prevent from reloading the page on submiting */}
        <form onSubmit={(e,int)=>handelsubmit(e,int)}>
        <table>
          <tr>
            <th>Name:</th>
            <td><input placeholder='Enter Name'  name='name' value={name} onChange={(e)=>setName(e.target.value)} autoFocus required></input></td>
          </tr>
          <tr>
            <th>Age:</th>
            <td><input type="number" placeholder='Enter Age' required name='age'value={age} onChange={(e)=>setAge(e.target.value)}></input></td>
          </tr>
          <tr>
          <th>Gender:</th>
          <td><input  placeholder='Enter Gender' required name='gender' value={gender} onChange={(e)=>setGender(e.target.value)}></input></td>
          </tr>
          <tr>
          <th>Class:</th>
          <td><input placeholder='Enter Class' required name='class' value={clas} onChange={(e)=>setClas(e.target.value)}></input></td>
          </tr>
          <tr>
          <th>Blood Group:</th>
          <td><input placeholder='Enter Blood Group' required name='bloodgroup' value={bloodgroup} onChange={(e)=>setBloodGroup(e.target.value)}></input></td>
          </tr>
        </table>

        <button className='btn btn-success'
        
     

        >Upadat</button>

        </form>

        </div>
    </div>

  );

}