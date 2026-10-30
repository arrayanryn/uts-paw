import {Link}from "react-router-dom"

export default function TidakDitemukan() {
    return (
        <section>
            <h1>404 page not found</h1>
            <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
            <Link to="/" className="tombol-notfound">
                Kembali ke Beranda
            </Link>
        </section>
    )
}