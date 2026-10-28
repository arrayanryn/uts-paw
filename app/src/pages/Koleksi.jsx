import useKoleksi from '.../hooks/useKoleksi.jsx'
import KartuItem from '../components/KartuItem.jsx'

export default function Koleksi() {
    const {items,loading,eror}= useKoleksi()

    if (loading) return <p>Memuat Data...</p>
    if (eror) return <p role="aleort">gagal memuat : {error}</p>

    return (
        <section>
            <h1>Koleksi</h1>
            <div classname="daftar-kartu">
                {items.map((item )=> (
                    < Kartuitem key={item.id} item={item}/>
                ))}
            </div>
        </section>
    )
}