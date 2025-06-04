import { useState } from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';

export default function Card({planos}) {
  const [planoSelecionado, setPlanoSelecionado] = useState('Basic');


  function handleClick(e) {
    const value = e.target.textContent;
    setPlanoSelecionado(value)

  }

  const plano = planoSelecionado === 'Basic' ? planos.planBasic : planos.planPremium;


  return (

    
    <div className={styles.card}>
      <img src={planos.image} alt="card" />

      <div className={styles.planButtons}>
        <Button size={'lm'} 
        color={planoSelecionado === 'Basic' ? 'white' : 'gray'}
        children={'Basic'}
        onClick={handleClick}
        />
        
        <Button
         size={'lm'} 
         color={planoSelecionado === 'Basic' ? 'gray' : 'white'}
          children={'Premium'} 
          onClick={handleClick}
          />
      </div>

      <div className={styles.descriptionCard}>
        <h2>{plano.titulo}</h2>
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.infoAtendimento}>
          <h3>Atendimento</h3>
          <p>{plano.atendimento}</p>
        </div>
        <div className={styles.infoTempo}>
          <h3>Tempo</h3>
          <p>{plano.tempo}</p>
        </div>
      </div>

      <div className={styles.cardValores}>
        <div>
          <p>A partir de</p>
          <h3>{plano.preco}</h3>
        </div>
        <div className={styles.cardContratar}>
          <Button size={'lg'} color="blue">Contratar</Button>
        </div>
      </div>
    </div>
  );
}
