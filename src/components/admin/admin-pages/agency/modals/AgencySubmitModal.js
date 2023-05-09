import { Modal } from "antd";

const AgencySubmitModal = () => {
    return ( 
        <>
            <Modal title="Agency Form">
                <div className="">
                    <form>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <label className='col-span-2'>
                                    Research Title:
                                    <input type="text"  className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="ResearchName"/>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
     );
}
 
export default AgencySubmitModal;