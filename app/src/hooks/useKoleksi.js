import {useContext} from "react"
import {KoleksiContext} from "../context/KoleksiContext"

export default function useKoleksi(){   
    const konteks=useContext(KoleksiContext)
    if(!konteks) throw new error ('useKoleksi harus dipakai di dalam <KoleksuProvider> ')
    return konteks
}