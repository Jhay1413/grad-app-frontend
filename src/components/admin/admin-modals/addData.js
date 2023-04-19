import {Modal ,Button
  } from 'antd';
  import { useState,useRef, useEffect } from 'react';
  import { addResearch,UpdateResearch } from '../../../api/research';

const AddResearch = ({isModalOpen,handleCancel,updateData,setUpdatedata,dataChange,setDataChange}) => {
   
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState({
    ResearchName: '',
    Beneficiaries: '',
    Abstract: '',
    Proponents:'',
    FundSource: '',
    NoOfPatents: '',
    Cite: '',
    NoOfUtilModel: '',
    Remarks: '',
  });
  useEffect(()=>{
    
    if(updateData){
      setFormValues({
        ResearchName: updateData.ResearchName || '',
        Beneficiaries: updateData.Beneficiaries || '',
        Abstract: updateData.Abstract || '',
        Proponents:updateData.Proponents || '',
        FundSource: updateData.FundSource|| '',
        NoOfPatents: updateData.NoOfPatents|| '',
        Cite: updateData.Cite|| '',
        NoOfUtilModel: updateData.NoOfUtilModel|| '',
        Remarks: updateData.Remarks || '',
      })
    }
    
  },[updateData])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
   
    if(updateData){
      try {
        const response = await UpdateResearch(updateData._id,formValues);
       
        setDataChange(!dataChange);
      } catch (error) {
      }
        
    }
    else{
      try {
        const response = await addResearch(formValues);
        setDataChange(!dataChange);
      
      } catch (error) {
        
      }
    }
    resetForm();
   
     // do something with the form data object
  };
  const cancleUpdate =() =>{
    setUpdatedata('');
    resetForm();
    handleCancel();
  }

  const resetForm = () =>{
    formRef.current.reset();
    setFormValues({
      ResearchName: '',
    Beneficiaries: '',
    Abstract: '',
    Proponents:'',
    FundSource: '',
    NoOfPatents: '',
    Cite: '',
    NoOfUtilModel: '',
    Remarks: '',
    });
  }
  
    return ( 
        <>
             <Modal title="Research Form" open = {isModalOpen} onCancel={cancleUpdate} footer={null}>
               <form onSubmit={handleSubmit} ref={formRef}>
                <div className='flex flex-col'>
                  <div className='flex flex-col md:grid md:grid-cols-4 md:gap-2'>
                    <label className='col-span-2'>
                      Research Title:
                      <input type="text"  className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ResearchName" value={formValues.ResearchName} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-2'>
                      Beneficiaries:
                      <input type="text" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Beneficiaries" value={formValues.Beneficiaries} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-1'>
                      Fund Source:
                      <input type="text"  className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="FundSource" value={formValues.FundSource} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-1'>
                      No. of Patents:
                      <input type="number" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Numbers" name="NoOfPatents" value={formValues.NoOfPatents} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-1 text-sm'>
                      Utility Models
                      <input type="number" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Numbers" name="NoOfUtilModel" value={formValues.NoOfUtilModel} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-1'>
                      Proponents
                      <input type="text" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  name="Proponents" value={formValues.Proponents} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-4'>
                      How to Cite 
                      <input type="text" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Cite" value={formValues.Cite} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-4'>
                      Research Abstract
                      <input type="text" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Abstract" value={formValues.Abstract} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-4 row-span-2'>
                      Remarks
                      <input type="text" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Remarks" value={formValues.Remarks} onChange={handleInputChange} />
                    </label>
                  </div>
                </div>
                  {updateData ?(
                     <button className='p-2 bg-green-500 my-2 text-white'>Update</button>
                  ):(
                    <button className='p-2 bg-blue-500 my-2 text-white rounded-md'>submit</button>
                  )}
                  
                </form>
            </Modal>
        </>
     );
}
 
export default AddResearch;