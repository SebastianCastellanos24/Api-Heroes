import marvel from '../../assets/marvel.png'
import dc from '../../assets/dc.png'
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {
    const navigate = useNavigate();

    const onMarvel = () => {
        navigate('/marvel');
    }

    const onDc = () => {
        navigate('/dc');
    }

    return (
        <>
            <h1 className="text-center font-bols text-6xl uppercase mt-12 animate__animated animated__zoomInDown">
                ¿Qué <span className="text-yellow-500"> Team </span> eres?
            </h1>
            <div className="flex flex-col justify-center items-center mt-20">
                <img src={marvel} onClick={onMarvel} className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse" alt="" />
                <img src={dc} onClick={onDc} className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse" alt="" />
            </div>
        </>
    )
}
