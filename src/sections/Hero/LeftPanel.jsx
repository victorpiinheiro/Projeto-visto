import styles from './LeftPanel.module.css';
import NavBar from '../../components/Header/NavBar';
import Button from '../../components/Button/Button';
import { FaArrowRightLong } from "react-icons/fa6";

import logo from '../../images/S01/logo1.png';
import PrintVideo from '../../images/S01/printVideo.png';


export default function LeftPanel() {
  const dados = [
    {
      descricao: 'Vistos Tirados',
      qtde: 509,
    },
    {
      descricao: 'Passaportes Tirados',
      qtde: 602,
    },
    {
      descricao: 'Famílias Felizes',
      qtde: 634,
    },
  ]

  return (
    <div className={styles.container}>
      <NavBar src={logo} />
      <div className={styles.textContainer}>
        <h1>Tire seu Visto conosco e não tenha nenhuma surpresa negativa!</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.description}>

          <p>Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.
            Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.</p>

          <Button
            color={'blue'}
            size={'lg'}
          >
            Saiba Mais <FaArrowRightLong size={22} />
          </Button>

        </div>

        <div className={styles.imageContainer}>
          <img src={PrintVideo} alt="Video info" />
          <div className={styles.videoSection}>

            <div className={styles.videoInfo}>
              <h4>Conheça a Bruna</h4>
              <p><a href="">Ver video</a></p>
            </div>

            <div className={styles.arrow}>
              <FaArrowRightLong size={20} />
            </div>
          </div>
        </div>
      </div>


      <div className={styles.dadosContainer}>
        {dados.map((item, index) => (
          <div key={index} className={styles.dadosItem}>
            <h3 className={styles.qtde}>{item.qtde}</h3>
            <p className={styles.descricao}>{item.descricao}</p>
          </div>
        ))}
      </div>

    </div>
  )
}