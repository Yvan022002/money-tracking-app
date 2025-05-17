import profilImg from "./assets/665fe22b-4c34-4690-b4a2-35ef0b1a3788.jpg"
import StatView from "./statView.jsx"
import Card from "./card.jsx"
import TransferRecord from "./transferRecord.jsx"

function OverView(){
    return(
        <div className="rounded-4xl bg-gray-100 h-200 w-265 p-8">
            <div className="flex items-center mb-8">
                    <div className="basis-2/3 flex gap-2 items-center">
                        <img src={profilImg} alt="" className="size-10 rounded-full"/>
                        <div className="flex flex-col gap-0">
                            <div className="flex font-medium text-md items-center gap-2">
                                <span>Greetings!</span>
                                <i class="fa-solid fa-hand text-yellow-400"></i>
                            </div>
                            <span className="text-xs text-gray-400">Start your day with myAPP</span>
                        </div>
                    </div>

                    <div className="basis-2/3">
                        <div className="search-bar flex gap-2 items-center text-gray-400 bg-gray-500/10 rounded-4xl px-2 py-1">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input 
                            type="text" placeholder="Rechercher..." 
                            class="border-none focus:outline-none focus:ring-2 focus:ring-sky-500"/> 
                        </div>
                    </div>

                    <div className="btn-account basis-1/3 flex justify-end">
                        <div className="rounded-3xl bg-black/70 flex gap-2 text-white text-sm justify-center items-center py-2 px-4">
                            <i class="fa-solid fa-user"></i>
                            <span>My account</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        
                    </div>
            </div>


            <div className="flex justify-between">
                <div className="">
                    <div className="section-card my-8">
                        <div className="flex justify-between items-center my-2">
                            <span className="text-black/50 font-bold">Cards</span>
                            <span className="text-xs text-black/30">See all</span>
                        </div>

                        <div className="flex justify-between">
                            <Card/>
                            <Card/>
                        </div>
                    </div>

                    <div className="flex gap-4 my-6">
                        <div className="basis-1/4">
                            <div className="rounded-2xl flex gap-2 items-center bg-white p-2 hover:bg-sky-300">
                                <span className="rounded-full bg-black/75 text-white size-10 flex items-center justify-center hover:bg-white hover:text-black/75"><i class="fa-solid fa-right-left"></i></span>
                                <span>Transfer</span>
                            </div>
                        </div>

                        <div className="basis-1/4">
                            <div className="rounded-2xl flex gap-2 items-center bg-white p-2 hover:bg-sky-300">
                                    <span className="rounded-full bg-black/75 text-white size-10 flex items-center justify-center hover:bg-white hover:text-black/75"><i class="fa-solid fa-right-left"></i></span>
                                    <span>Transfer</span>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="rounded-2xl flex gap-2 items-center bg-white p-2 hover:bg-sky-300">
                                <span className="rounded-full bg-black/75 text-white size-10 flex items-center justify-center hover:bg-white hover:text-black/75"><i class="fa-solid fa-right-left"></i></span>
                                <span>Transfer</span>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="rounded-2xl flex gap-2 items-center bg-white p-2 hover:bg-sky-300">
                                <span className="rounded-full bg-black/75 text-white size-10 flex items-center justify-center hover:bg-white hover:text-black/75"><i class="fa-solid fa-right-left"></i></span>
                                <span>Transfer</span>
                            </div>
                        </div>
                    </div>

                    <div className="table-section ">
                        <span className="font-medium">Recent Sales</span>
                        <div className="overflow-x-auto h-70">
                            <TransferRecord/>
                        </div>
                        
                    </div>

                </div>

                <div className="flex justify-end ">
                    <StatView />
                </div>
            </div>

        </div>
    )
}
export default OverView