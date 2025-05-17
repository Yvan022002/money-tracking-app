import{useState} from "react";
import statChat from "./assets/statChart.jpg"

function Record(){
    const [state,setState]=useState({nom:"Spotify",temps:"32 minutes ago",categorie:"payement at the store",montant:"321$"})

    return(<div className="flex gap-3 items-center">
            <span className="bg-[#84a6fc] rounded-xl size-10 flex items-center justify-center">
                <i class="fa-brands fa-spotify text-white"></i>
            </span>
            <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                     <span className="font-medium">{state.nom}</span>
                     <span className="text-xs opacity-50">{state.categorie}</span>
                </div>
                 <span className="text-xs opacity-50">{state.temps}</span>
            </div>
            <span className='font-medium'>-{state.montant}</span>
    </div>
    )

}

function StatView(){
    return(
        <div className="rounded-4xl bg-white-500 shadow-md w-80 p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <span className="font-medium text-xl">Statistic</span>
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div className="flex items-center gap-x-2 border border-gray-300/50 rounded-xl p-2 text-xs text-gray-400">
                    <span>This week</span>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            <div className="self-center">
                <img src={statChat} alt="" />
            </div>
            <div className="flex gap-x-4">
                <div className="flex gap-x-2">
                    <span className="bg-[#84a6fc] size-5 rounded-md"></span>
                    <span className="text-xs">Payment at the store</span>
                </div>
                <div className="flex gap-x-2">
                    <span className="bg-[#1A1A1A] size-5 rounded-md"></span>
                    <span className="text-xs">Money transaction</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 my-4">
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
            </div>
        </div>
    )
}

export default StatView