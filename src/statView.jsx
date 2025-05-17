import{useState} from "react";

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

export default Record