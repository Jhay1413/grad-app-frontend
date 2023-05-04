import {Modal
  } from 'antd';
  import { useState,useRef, useEffect } from 'react';
  import { addResearch,UpdateResearch } from '../../../api/research';
import LoadingComponent from '../../common/loading/loading';

const AddResearch = ({isModalOpen,setIsModalOpen,updateData,setUpdatedata,dataChange,setDataChange,showToast}) => {
  const [loading,setLoading] = useState(false);
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
      Details:{
        published: 'No',
        yearStarted: '',
        yearCompleted: '',
        agency: '',
        region: '',
    }
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
        Details:{
          published: (updateData.Details && updateData.Details.published) || '',
          yearStarted: (updateData.Details && updateData.Details.yearStarted)  || '',
          yearCompleted: (updateData.Details && updateData.Details.yearCompleted) || '',
          agency: (updateData.Details && updateData.Details.agency) || '',
          region: (updateData.Details && updateData.Details.region) || '',
        }
      })
    }
    
  },[updateData])

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
   

    let inputValue;

    if (type === 'checkbox') {
      inputValue = checked ? 'Yes' : 'No'; // Replace 'CheckedValue' and 'UncheckedValue' with your desired strings
    } else {
      inputValue = value;
    }
  
    const keys = name.split('.');
  
    if (keys.length > 1) {
      setFormValues((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: inputValue,
        },
      }));
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: inputValue,
      }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if(updateData){
      try {
        setLoading(true);
        const response = await UpdateResearch(updateData._id,formValues);
        showToast('success','Data has been Updated !');
        setDataChange(!dataChange);

      } catch (error) {
        showToast('error','Data insertion Failed !');
        console.log(error);
      }
      setLoading(false);
      setIsModalOpen(!isModalOpen);
        
    }
    else{
      try {
        const response = await addResearch(formValues);
        console.log(response)
        showToast('success','Data has been Added !');
        setDataChange(!dataChange);
        setIsModalOpen(!isModalOpen);
      
      } catch (error) {
        showToast('error','Data insertion Failed !');
        console.log(error);
      }
    }
    resetForm();
   
     // do something with the form data object
  };
  const cancelUpdate = () =>{
    setUpdatedata('');
    resetForm();
    setIsModalOpen(!isModalOpen);
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
      Details:{
        published: '',
        yearStarted: '',
        yearCompleted: '',
        agency: '',
        region: '',
      }
    });
  }
  
    return ( 
        <>
          <Modal title="Research Form" open = {isModalOpen} onCancel={cancelUpdate} footer={null}>
            <div className="relative flex items-center">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-50 bg-gray-300">
                  <LoadingComponent />
                </div>
              )}
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className='flex flex-col'>
                  <div className='flex flex-col md:grid md:grid-cols-4 md:gap-2'>
                  <label htmlFor="option1" className="flex items-center col-span-4 ">
                     
                     <input
                       type="checkbox"
                       id="booleanValue"
                       name="Details.published"
                       checked={formValues.Details.published === 'Yes'}
                       onChange={handleInputChange}
                       className="form-checkbox text-blue-500 h-5 w-5"
                     />
                     <span className="ml-2 text-lg">Published</span>
                   
                   </label>
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
                      <textarea className="appearance-none  w-full h-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Abstract" value={formValues.Abstract} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-4 row-span-2'>
                      Remarks
                      <input type="text" className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Remarks" value={formValues.Remarks} onChange={handleInputChange} />
                    </label>
                    <label className='col-span-1'>
                      Year Started
                      <input 
                        type="number" 
                        className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        name="Details.yearStarted" 
                        value={formValues.Details.yearStarted} onChange={handleInputChange} />
                        
                    </label>
                    <label className='col-span-1'>
                      Year Completed
                      <input 
                        type="number" 
                        className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        name="Details.yearCompleted" 
                        value={formValues.Details.yearCompleted} onChange={handleInputChange} />
                        
                    </label>
                    <label className='col-span-1'>
                      Region
                      <input 
                        type="text" 
                        className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        name="Details.region" 
                        value={formValues.Details.region} onChange={handleInputChange} />
  
                    </label>
                    <label className='col-span-1'>
                      Agency
                      <input 
                        type="text" 
                        className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        name="Details.agency" 
                        value={formValues.Details.agency} onChange={handleInputChange} />
  
                    </label>
                   
                  </div>
                </div>
                  {updateData ?(
                     <button className='p-2 bg-green-500 my-2 text-white'>Update</button>
                  ):(
                    <button className='p-2 bg-blue-500 my-2 text-white rounded-md'>Submit</button>
                  )}
                
                </form>
            </div>
            </Modal>
        </>
     );
}
 
export default AddResearch;