import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) ? <section style={{backgroundColor: hexToRgba(props.cor, '0.6'), backgroundImage: 'url(/imagens/fundo.png)'}} className='time'>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.idDoTime)} type='color' className='input-cor'></input>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return( 
                        <Colaborador 
                            key={colaborador.nome} 
                            idColaborador={colaborador.id} 
                            favorito={colaborador.favorito}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            corDeFundo={props.cor} 
                            aoDeletar={props.aoDeletar} 
                            aoFavoritar={props.aoFavoritar}/>)
                })}
            </div>
        </section>
        : ''
    )
}

export default Time