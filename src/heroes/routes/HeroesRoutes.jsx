import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../../auth"
import { NavBar } from "../../design"
import { DcPage, HeroPage, HomePage, MarvelPage } from "../pages"


export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/inicio" element={<HomePage />} />

                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="heroe/:heroId" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/inicio" />} />

            </Routes>
        </>
    )
}
