import styles from './RigthPanel.module.css'
import rigthPhoto from '../../images/S01/rigthFoto.png'


import Button from '../../components/Button/Button'
export default function RigthPanel(){
  return (
    <div className={styles['image-container']}>
      <img src={rigthPhoto}
      alt="imagem decorativa" 
      className={styles['responsive-image']}
      />

      <Button children={'Quero meu visto!'} color='yellow' isAbsolute={true}/>

      <div className={styles['text-image']}>
      <h1>Realize o seu sonho com a ajuda da Tirar Visto!</h1>
      <p>Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entevietar no consulado</p>
      </div>
    </div>
  )
}