export default function PokemonListItem({ name, url }) {

    return (
        <>
            <p>{name}</p>
            <button type="button">
                Ver detalle
            </button>
        </>
    )
}