import {Link} from 'react-router-dom'

export default function KartuItems({item}) {
    const {id,judul,kategori,tanggal,durasi,kalori}=item
    return (
        <article className="kartu">
            <h3>
                <Link to={`/koleksi/${id}`}>{judul}</Link>
            </h3>
            <p>
                {kategori} ·  Tanggal : {tanggal}
                
            </p>

            <p>
                Kalori Terbakar : {kalori}
            </p>
        </article>
    )
}