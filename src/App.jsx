import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParamentro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from './components/layout/Card'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Cards'>

                <Card titulo="Desafio Aleatório">
                    <Aleatorio min={1} max={10} />
                </Card>

                <Card titulo="Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="Segundo Componente">
                    <ComParamentro titulo="Segundo Componente" subtitulo="Muito Legal!!" />
                </Card>

            </div>


            <hr></hr>
            <Primeiro></Primeiro>
            <hr></hr>
        </div>
    )
}