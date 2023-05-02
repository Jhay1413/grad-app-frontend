import { Modal } from "antd";
import { deleteSpecificResearch } from "../../../api/research";
const WarningModal = ({isDeleteModalOpen,setIsDeleteModalOpen,recordToDelete,dataChange,setDataChange,showToast}) => {

    const cancelDelete = () =>{
        setIsDeleteModalOpen(!isDeleteModalOpen);
    }
    const confirmDeleteRecord = async () =>{
        try{
            const response = await deleteSpecificResearch(recordToDelete._id);
            showToast('success','Data Deleted Successfully !')
            setIsDeleteModalOpen(!isDeleteModalOpen);
            setDataChange(!dataChange);
            
        }catch(error){
            console.log(error);
            showToast('error','Data Deletion Failed !')
        }
       

    }
    const abortDelete = () =>{
        setIsDeleteModalOpen(!isDeleteModalOpen);
    }
    return ( 
        <>
            <Modal title="WARNING !" open = {isDeleteModalOpen} onCancel={cancelDelete} footer={null}>
                ARE YOU SURE YOU WANT TO DELETE THE DATA?
                <div className='flex flex-row justify-start'>
                    <button className="p-2 bg-green-500 my-2 text-white w-20 m-2 rounded-md" onClick={confirmDeleteRecord}>YES</button>
                    <button className="p-2 bg-red-500 my-2 text-white w-20 m-2 rounded-md" onClick={abortDelete}>NO</button>
                </div>
              
            </Modal>
        </>
     );
}
 
export default WarningModal;