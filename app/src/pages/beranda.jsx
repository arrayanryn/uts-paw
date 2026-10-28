import {link} from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.jsx'
import mahasiswa from '.../mahasiswa.json';
 
export default function Beranda() {
    const {items,loading}=useKoleksi()
    const jumlahKategori=new Set(items.map((item)=>item.kategori)).size
    
    return (
        <section>
            <h1>Jurnal Latihan Olahraga</h1>
            <p>Tema : {mahasiswa.tema}</p>
            {loading ? (
                <p>Memuat Ringkasan...</p>
            ) : (
                <p>ada {items.length} Tugas dalam {jumlahKategori} kategori.</p>
            )}
            <Link to="/koleksi">Lihat semua Ringkasan</Link>
        </section>
    )
}   