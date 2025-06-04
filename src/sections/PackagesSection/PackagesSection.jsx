import styles from './PackagesSection.module.css';
import Button from '../../components/Button/Button';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import Card from '../../components/Card/Card';

import CardPhoto01 from '../../images/S05/card01.png'
import CardPhoto02 from '../../images/S05/card02.png'
import CardPhoto03 from '../../images/S05/card03.png'



export default function PackagesSection() {
  const planos = [
  {
    image: CardPhoto01,
    planBasic: {
      titulo: 'Passaporte',
      atendimento: 'On-line',
      tempo: '45 dias',
      preco: 'R$ 890,00'
    },
    planPremium: {
      titulo: 'Passaporte Premium',
      atendimento: 'Presencial + Online',
      tempo: '30 dias',
      preco: 'R$ 1.290,00'
    },
  },
  {
    image: CardPhoto02,
    planBasic: {
      titulo: 'Passaporte + Visto',
      atendimento: 'On-line',
      tempo: '25 dias',
      preco: 'R$ 1.190,00'
    },
    planPremium: {
      titulo: 'Passaporte + Visto Premium',
      atendimento: 'Presencial + Assessoria Completa',
      tempo: '15 dias',
      preco: 'R$ 1.790,00'
    },
  },
  {
    image: CardPhoto03,
    planBasic: {
      titulo: 'Consultoria Completa',
      atendimento: 'On-line',
      tempo: '10 dias',
      preco: 'R$ 1.490,00'
    },
    planPremium: {
      titulo: 'Consultoria Completa Premium',
      atendimento: 'Presencial Completo',
      tempo: '05 dias',
      preco: 'R$ 2.190,00'
    },
  },
];


  return (
    <div className={styles.container}>

      <Button
        color={'yellow'}
        children={'Pacotes'}
      />

      <div className={styles['title-top']}>
        <div className={styles['text-top']}>
          <h1>Confira nosso pacotes</h1>
        </div>

        <div className={styles.buttons}>
          <Button color={'white'}>
            <FaArrowLeftLong />
          </Button>
          <Button color={'blue'}>
            <FaArrowRightLong />
          </Button>
        </div>
      </div>


      <div className={styles.cardContainer}>

        {planos.map((plano, index) => (
          <Card key={index} planos={plano} />
        ))}
      </div>



    </div>

  );
}