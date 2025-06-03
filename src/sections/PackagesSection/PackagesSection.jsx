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
    plan1: 'Basic',
    plan2: 'Premium',
    titulo: 'Passaporte',
    atendimento: 'On-line',
    tempo: '45 dias',
    preco: 'R$ 890,00'
  },
  {
    image: CardPhoto02,
    plan1: 'Basic',
    plan2: 'Premium',
    titulo: 'Passaporte + Visto',
    atendimento: 'On-line',
    tempo: '25 dias',
    preco: 'R$ 1.290,00'
  },
{
    image: CardPhoto03,
    plan1: 'Basic',
    plan2: 'Premium',
    titulo: 'Consultoria Completa',
    atendimento: 'Presencial Completo',
    tempo: '10 dias',
    preco: 'R$ 1.890,00'
  }


]

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
        <Card  key={index} {...plano} />
      ))}
      </div>

      

    </div>

  );
}