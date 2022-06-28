import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from './components/layout/Card'

export default function App(props) {
    return (
        <div id="App">
            <h1>Fundamentos React</h1>

            <Card titulo="Desafio Aleatório">
                <Aleatorio min={1} max={10} />
            </Card>
            
            <Fragmento />
            <hr></hr>
            <ComParamentro
                titulo="Segundo Componente"
                subtitulo="Muito Legal!!"
            />
            <hr></hr>
            <Primeiro></Primeiro>
            <hr></hr>
        </div>
    )
}