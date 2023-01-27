import './Botao.css'

const Botao = (props) => {
    return(
        <button className='botao'>{props.children}</button> // pega algo escrito dentro do componente botão, qnd chamado
    )
}

export default Botao