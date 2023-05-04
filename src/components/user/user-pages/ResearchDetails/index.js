import { useLocation } from 'react-router-dom';

const ResearchDetails = () => {
    const location = useLocation();
    const passedData = location.state?.record;

   
    return ( 
        <>
            <div className='w-11/12 bg-white mx-auto '>
                <div className='flex flex-col'>
                    <div className='w-full text-2xl p-5 bg-gray-300'>
                        Project Information
                    </div>
                    <div className='flex flex-col p-5 space-y-5'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>
                                {passedData.ResearchName}
                            </div>
                            <div className='text-slate-700'>
                                Conducted by:{passedData.Details.agency} Completed on:{passedData.Details.yearCompleted}
                            </div>
                        </div>
                        <div className='text-sm'>
                            {passedData.Abstract}
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='flex-col'>
                                Proponents
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.Proponents}
                                </div>
                            </div>
                            <div className='flex-col'>
                                Beneficiaries
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.Beneficiaries}
                                </div>
                            </div>
                            <div className='flex-col'>
                                FundSource
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.FundSource === null ? 'N/A': passedData.FundSource}
                                </div>
                            </div>
                            <div className='flex-col'>
                                No.Of Patents
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.NoOfPatents === null ? 'N/A': passedData.NoOfPatents}
                                </div>
                            </div>
                            <div className='flex-col'>
                                No.Of Utilility Model
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.NoOfUtilModel === null ? 'N/A': passedData.NoOfUtilModel}
                                </div>
                            </div>
                            <div className='flex-col'>
                                How to Cite
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.Cite === null ? 'N/A': passedData.Cite}
                                </div>
                            </div>
                            <div className='flex-col'>
                               Remarks
                                <div className='w-full bg-neutral-300 p-2 text-sm'>
                                    {passedData.Remarks === null ? 'N/A': passedData.Remarks}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>
     );
}
 
export default ResearchDetails;