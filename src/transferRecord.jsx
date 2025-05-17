import{use, useState} from 'react'
import senderImg from "./assets/Happy millennial african american man in glasses….jpg"


function BtnStatus({type}){
   const statusStyles = {
        Success: "bg-green-200 text-green-700",
        Process: "bg-gray-200 text-gray-500",
        Failed: "bg-red-200 text-red-500"
    };
    return( 
        <div className={`${statusStyles[type]} font-medium flex justify-between items-center rounded-2xl py-2 px-6 inline`}>
            <span>{type}</span>
        </div>
    )
}
function Row({sender,date,status,amount}){
    return(
             <div className="table-row text-left bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="table-cell">
                        <div className="flex flex-row gap-2 items-center m-2">
                        <img src={senderImg} alt="" className='size-12 rounded-full'/>
                        <span>{sender}</span>
                    </div>
                    </div>
                    <div className="table-cell align-middle">
                        <div className="m-2">{date}</div>
                    </div>
                    <div className="table-cell align-middle"><div className="m-2"><BtnStatus type={status}/></div> </div>
                    <div className="table-cell align-middle"><div className="m-2">{amount}</div></div>
             </div>
    )
}

function TransferRecord(){
    return(
        <div className="table w-[100%] border-spacing-y-1">
            <div className="table-header-group">
                <div className="table-row opacity-50">
                    <div className="table-cell"><div className="m-4">Sender</div></div>
                    <div className="table-cell"><div className="m-4">Date</div></div>
                    <div className="table-cell"><div className="m-4">Status</div></div>
                    <div className="table-cell"><div className="m-4">Amount</div></div>
                </div>
            </div>
            <div className="table-row-group ">
                <Row sender="James Smith" date="Mar 18, 2023" status="Failed" amount="$1,980.0"/>
                <Row sender="James Smith" date="Mar 18, 2023" status="Success" amount="$1,980.0"/>
                <Row sender="James Smith" date="Mar 18, 2023" status="Process" amount="$1,980.0"/>
            </div>
        </div>
           
    )
}

export default TransferRecord