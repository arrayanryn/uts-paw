import {link} from 'react-router-dom'

export default function KartuItems({item}) {
    const {id,judul,kategori,tenggat}=item
    return (
        <article classname="kartu">
            <h3>
                <Link to={'/koleksi/${id}'}>{judul}</Link>/
            </h3>
            <p>
                {kategori} ·  tenggtat{tenggat}
            </p>
        </article>
    )
}