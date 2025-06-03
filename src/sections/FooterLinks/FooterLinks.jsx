import styles from './FooterLinks.module.css';
import Button from '../../components/Button/Button';




export default function FooterLinks() {
  const redes = ['Instagram', 'X', 'Facebook', 'Youtube']
  const links = [
    {
      title: 'Empresa',
      links: ['Home', 'Quem somos', 'Serviços', 'Contato']
    },
    {
      title: 'Novidades',
      links: ['Passaporte', 'Visto', 'Entrevista', 'Polícia Federal']
    },
    {
      title: 'Suporte',
      links: ['FAQ', 'Contato', 'Dúvidas Frequentes']
    }
  ];


  return (
    <div className={styles.container}>
      <div className={styles.leftLinks}>
        <div className={styles.textLink}>
          <h4>Siga nossas Redes</h4>
        </div>

        <div className={styles.links}>
          {redes.map((rede, index) => (
            <a href="" key={index}>
              <Button
                children={rede}
                color={'white'}
              />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.rigthLinks}>
        {links.map((section, index) => (
          <div className={styles.titleLink}>
            <h4 key={index}>{section.title}</h4>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>




    </div>

  );
}