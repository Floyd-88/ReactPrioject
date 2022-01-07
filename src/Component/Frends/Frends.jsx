
import s from "./Frends.module.css";

const Frends = (props) => {

    let frendsElements = props.variable.avaData.map(l => <Frends ava={l.ava} />)
    return (
        <div className={s.frends}>
            {frendsElements}
        </div>
    )
}
export default Frends;