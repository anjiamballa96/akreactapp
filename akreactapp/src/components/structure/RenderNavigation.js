import { Link, Route, Routes } from "react-router-dom"
import { nav } from "./Navigation"

export const RenderRoutes = () => {
    return (
        <>
        <Routes>
            {nav?.map((r,i) => {
                // if(r.isPrivate){
                    return <Route key={i} path={r.path} element={r.element}/>
                // }else{
                //     return <Route key={i} path={r.path} element={r.element}/>
                // }
            })}
        </Routes>
        </>
    )
}

export const RenderMenu = () => {
    return (
        <>
        <div>
            {nav.map((r,i) => {
                // if(r.isPrivate){
                    return <Link to={r.path}>{r.name}</Link>
                // }else{
                //     return <Route key={i} path={r.path} element={r.element}/>
                // }
            })}
            {}
        </div>
        </>
    )
}