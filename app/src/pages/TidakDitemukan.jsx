import {Link}from "react-router-dom"

export default function TidakDitemukan() {
    return (
        <section>
            <h1>Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
            <Link to="/">Kembali ke Beranda</Link>
        </section>
    )
}