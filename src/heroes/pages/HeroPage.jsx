import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import heroesApi from "../../api/HeroesApi";

export const HeroPage = () => {

    const navigate = useNavigate();

    const onNavigationBack = () => {
        navigate(-1);
    }
    const [getHeroes, setGetHeroes] = useState([])

    const { heroId } = useParams();

    useEffect(() => {
        obtenerHeroes();
    }, [])


    const obtenerHeroes = async () => {
        try {
            const respuesta = await heroesApi.get(`/superheroes/${heroId}`);
            setGetHeroes(respuesta.data);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div key={getHeroes.id} className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 mb-8 animate__animated animated__fadeInLeft">
                <img className="rounded-t-2xl w-full" src={getHeroes.imagen} alt={getHeroes.nombre} />
                <div className="px-6 py-4">
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-500">Nombre:</span>
                        {' '}{getHeroes.nombre}
                    </div>
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-500">Editorial:</span>
                        {' '}{getHeroes.editorial}
                    </div>
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-500">Estreno:</span>
                        {' '}{getHeroes.estreno}
                    </div>
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-500">Deescripción:</span>
                        <p className="text-gray-500 text-base text-justify">
                            {getHeroes.descripcion}
                        </p>
                    </div>
                    <div className="text-xl mb-2">
                        <span className="font-bold text-yellow-500">Poderes:</span>
                        {' '}{getHeroes.poderes}
                    </div>
                    <button onClick={onNavigationBack} className="w-full  bg-indigo-500  px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-indigo-900">
                        Regresar
                    </button>
                </div>
            </div>
        </>
    )
}
