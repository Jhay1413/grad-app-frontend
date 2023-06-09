import {Modal
  } from 'antd';
  import { useState,useRef, useEffect } from 'react';
  import { addResearch,UpdateResearch } from '../../../api/research';
import LoadingComponent from '../../common/loading/loading';

const AddResearch = ({isModalOpen,setIsModalOpen,updateData,setUpdateData,dataChange,setDataChange,handleCancel,showToast,subCategory}) => {
  const [loading,setLoading] = useState(false);
  const inputStyle = "appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
  const renderInput = (type,name,value,placeholder = null )=>(
    <input
      type={type}
      className={inputStyle}
      name={name}
      value={value? value : ''}
      onChange={handleInputChange}
      placeholder={placeholder || name}
    />
  );
  const renderTextArea = (name,value,placeholder='')=>(
    <textarea
      className={inputStyle}
      name={name}
      value={value? value : ''}
      onChange={handleInputChange}
      placeholder={placeholder || name}
    />
  );
  const renderSelect = (name,value)=>(
    <select 
      className={inputStyle}
      name={name}
      value={value? value : ''}
      onChange={handleInputChange}

    >
    {subCategory.map(sub => (
      <option key = {sub._id} value={sub._id}>{sub.name}</option>
    ))}

    </select>
  )

  const [formValues, setFormValues] = useState({
    ResearchName: '',
      Beneficiaries: '',
      Abstract: '',
      Proponents:'',
      FundSource: '',
      NoOfPatents: '',
      Cite: '',
      NoOfUtilModel: '',
      Adviser: '',
      Remarks: '',
      Details:{
        published: 'No',
        yearStarted: '',
        yearCompleted: '',
        agency: '',
        region: '',
        subCategory: ''
    }
  });
  useEffect(()=>{
    
    if(updateData){
      setFormValues(updateData);
    }
    else{
      setFormValues({
        ResearchName: '',
          Beneficiaries: '',
          Abstract: '',
          Proponents:'',
          FundSource: '',
          NoOfPatents: '',
          Cite: '',
          NoOfUtilModel: '',
          Adviser: '',
          Remarks: '',
          Details:{
            published: 'No',
            yearStarted: '',
            yearCompleted: '',
            agency: '',
            region: '',
            subCategory: '',
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
      setUpdateData(null)
      handleCancel();
      setLoading(false);
     
    }
    else{
      try {
        const response = await addResearch(formValues);
        showToast('success','Data has been Added !');
        setIsModalOpen(!isModalOpen);
        setDataChange(!dataChange);
      
      } catch (error) {
        showToast('error','Data insertion Failed !');
        console.log(error);
      }
      setFormValues({
        ResearchName: '',
          Beneficiaries: '',
          Abstract: '',
          Proponents:'',
          FundSource: '',
          NoOfPatents: '',
          Cite: '',
          NoOfUtilModel: '',
          Adviser: '',
          Remarks: '',
          Details:{
            published: 'No',
            yearStarted: '',
            yearCompleted: '',
            agency: '',
            region: '',
            subCategory: '',
        }
      })
      setUpdateData(null);
      handleCancel();
      setLoading(false);
    }
  };

  
    return ( 
        <>
          <Modal title="Research Form" open = {isModalOpen} onCancel={handleCancel} footer={null}>
            <div className="relative flex items-center">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-50 bg-gray-300">
                  <LoadingComponent />
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                  <div className='flex flex-col md:grid md:grid-cols-4 md:gap-2'>
                    <div className='flex justify-between col-span-4'>
                      <label htmlFor="option1" className="flex items-center col-span-4 ">                     
                        <input
                          type="checkbox"
                          id="booleanValue"
                          name="Details.published"
                          checked={formValues.Details.published === 'Yes' || !formValues.Details.published || !formValues.Details}
                          onChange={handleInputChange}
                          className="form-checkbox text-blue-500 h-5 w-5"
                        />
                        <span className="ml-2 text-lg">Published</span>                   
                      </label>
                      
                    </div>
                    <label className='col-span-2'>
                      Research Name:                     
                      {renderInput("text","ResearchName",formValues.ResearchName || '')}
                    </label>
                    <label className='col-span-2'>
                      Beneficiaries:
                      {renderInput("text","Beneficiaries",formValues.Beneficiaries || '')}
                    </label>
                    <label className='col-span-2'>
                      Proponents:
                      {renderInput("text","Proponents",formValues.Proponents || '')}
                    </label>
                    <label className='col-span-2'>
                      Adviser
                      {renderInput("text","Adviser",formValues.Adviser || '')}
                    </label>
                    <label className='col-span-2'>
                      FundSource:
                      {renderInput("text","FundSource",formValues.FundSource || '')}
                    </label>
                    <label className='col-span-2'>
                      SubCategory:
                      {renderSelect("Details.subCategory",formValues.Details.subCategory || '')}
                    </label>
                    <label className='col-span-1'>
                      No. of Patents:
                      {renderInput("number","NoOfPatents",formValues.NoOfPatents || '')}
                    </label>
                    <label className='col-span-1 text-sm'>
                      No. of Util Model
                      {renderInput("number","NoOfUtilModel",formValues.NoOfUtilModel || '')}
                    </label>
                    <label className='col-span-1'>
                      Year Started:
                      {renderInput("number","Details.yearStarted",formValues.Details.yearStarted || '',"Year Started")}  
                    </label>
                    <label className='col-span-1'>
                      Year Completed:
                      {renderInput("number","Details.yearCompleted",formValues.Details.yearCompleted || '',"Year Completed")} 
                    </label>
                    <label className='col-span-1'>
                      Region
                      {renderInput("number","Details.region",formValues.Details.region || '',"Region")} 
                    </label>
                    <label className='col-span-1'>
                      Agency:
                      {renderInput("text","Details.agency",formValues.Details.agency || '',"Agency")} 
                    </label>
                    <label className='col-span-4'>
                      How to Cite
                      {renderInput("text","Cite",formValues.Cite || '')}
                    </label>
                    <label className='col-span-4 row-span-2'>
                      Remarks:
                      {renderInput("text","Remarks",formValues.Remarks || '')}
                    </label>
                    <label className='col-span-4'>
                      Abstarct:
                      {renderTextArea("Abstract",formValues.Abstract || '')}
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