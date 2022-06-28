export default function Aleatorio(props) {
    // const { min, max} = props

    const n_rand = Math.trunc((Math.random() * (props.max - props.min)) + props.min );
    return (
        <>
            <h3>O número sorteado foi: <strong>{n_rand}</strong> </h3>
        </>
    )
}