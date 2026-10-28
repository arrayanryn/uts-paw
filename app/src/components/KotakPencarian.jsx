export default function KotakPencarian({nilai,onUbah}) {
    return (
        <input
        type="search"
        placeholder="Cari Olahraga"
        aria-label="Cari Olahraga"
        value={nilai}
        onChange={(e)=>onUbah(e.target.value)}
        />
    )
}