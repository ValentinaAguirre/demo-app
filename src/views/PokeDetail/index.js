import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokemonContext from "../../context/pokemons";

//import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage";
//import usePokemonStore from "../../zustand/stores/pokemons";

export default function PokeDetail() {
    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);
    //const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = usePokemonStore(state => ({ getPokemonDetail: state.getPokemonDetail, pokemonDetail: state.pokemonDetail, isLoading: state.isLoading, hasError: state.hasError, errorMessage: state.errorMessage }));

    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);

    if (isLoading) return <Loading title="Cargando pokemon..." />;

    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <h3 style={{ marginTop: 15, marginBottom: 15 }}>Info General</h3>
                    <p>{`Name: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
                    <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>

                </>
            )}
        </div>
    );
}
/*export default function PokeDetail() {
    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);

    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);
    console.log(pokemonDetail)
    return (<div>
        PokeDetail
    </div>)
}*/