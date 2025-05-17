import { useState } from "react";
import './index.css'

function Card(){
    const [state,setState]=useState({montant:"$ 15,780.0",id:"****"+1810,date:"09/27"})

    return( <div className="border rounded-3xl w-80 bg-sky-700 text-white p-6 font-medium ">
                <div className="flex justify-end">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="flex flex-col gap-3 my-3">
                    <h2 className="text-3xl">{state.montant}</h2>
                    <div className="flex items-center gap-2">
                        <p>{state.id}</p>
                        <i class="fa-regular fa-eye-slash"></i>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p>{state.date}</p>
                    <i class="fa-brands fa-cc-visa "></i>
                </div>
            </div>
    )
}

export default Card