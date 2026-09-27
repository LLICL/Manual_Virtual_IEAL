import { TabButton, TabPanel, Tabs } from '../components';

const MVP_IDS = ["horiz-mision", "horiz-vision"];

const CP = 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125';
const LEY115 = 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292';

export default function CapHorizonte() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          1.4
        </span>
        <h2 className="section-title">
          Horizonte e Identidad Institucional
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          1.4
        </span>
        <h3 className="hz-head-title">
          Horizonte e identidad institucional
        </h3>
      </div>

      <p className="hz-lead">
        Lema: “Democracia, gestión, trabajo y humanismo”
      </p>

      <Tabs ids={MVP_IDS} initial="horiz-mision">
        <div className="tipo-tabs-bar">
          <TabButton tab="horiz-mision" className="tipo-tab-btn">
            Misión
          </TabButton>
          {" "}
          <TabButton tab="horiz-vision" className="tipo-tab-btn">
            Visión
          </TabButton>
        </div>
        <TabPanel id="horiz-mision" className="tipo-tab-content">
          <p className="hz-p">
            La misión de la Institución Educativa Antonio Lenis es la{' '}
            <strong className="hz-key">formación integral del educando</strong>, fundamentada en el
            compromiso con la <strong className="hz-key">educación inclusiva</strong> y la{' '}
            <strong className="hz-key">atención a la diversidad</strong> como principios rectores.
            Este quehacer formativo se manifiesta a través de un alto y equilibrado desarrollo de sus{' '}
            <strong className="hz-key">
              competencias cognitivas, socioemocionales y praxiológicas
            </strong>
            , orientado al mejoramiento de la calidad de vida de su núcleo familiar y su entorno.
          </p>
        </TabPanel>
        <TabPanel id="horiz-vision" className="tipo-tab-content">
          <p className="hz-p">
            Para el año <strong className="hz-key">2036</strong>, la Institución Educativa Antonio
            Lenis se posicionará a nivel municipal, departamental y nacional como una{' '}
            <strong className="hz-key">institución líder</strong> en la formación de estudiantes
            íntegros y competitivos. Mediante un modelo de{' '}
            <strong className="hz-key">educación inclusiva</strong> que garantice el{' '}
            <strong className="hz-key">acceso, la permanencia y oportunidades educativas</strong>{' '}
            para todos los estudiantes, desarrollando competencias cognitivas, socioemocionales y
            praxiológicas desde preescolar hasta undécimo grado, promoviendo la{' '}
            <strong className="hz-key">
              empatía, la resiliencia, la autorregulación y la responsabilidad
            </strong>
            .
          </p>
        </TabPanel>
      </Tabs>

      <h4 className="hz-sub">
        Filosofía institucional
      </h4>
      <p className="hz-p">
        La filosofía de la Institución Educativa Antonio Lenis se enmarca en la política de la
        educación colombiana:{' '}
        <a className="hz-art" href={CP} target="_blank" rel="noreferrer" title="Ver Constitución Política de Colombia - Artículo 67 (fuente oficial)">
          Art. 67 C.P.
        </a>
        , los artículos 1 y 5 de la{' '}
        <a className="hz-art" href={LEY115} target="_blank" rel="noreferrer" title="Ver Ley 115 de 1994 - Artículos 1 y 5 (fuente oficial)">
          Ley 115 de 1994
        </a>
        {' '}y los fines 9, 11 y 13 de la educación en Colombia.
      </p>
      <p className="hz-p">
        La educación es un proceso formativo de construcción política, social y económica
        permanente, de crecimiento personal y cultural, fundamentado en la{' '}
        <strong className="hz-key">concepción integral de la persona humana</strong>, de su
        dignidad, de sus derechos y sus deberes. La comunidad educativa de la Institución Educativa
        Antonio Lenis de la ciudad de Sincelejo ofrece en sus niveles de Transición, Básica y Media
        la formación de un ser humano integral, apoyado en la Constitución Política, fines y
        principios de la educación colombiana, teniendo en cuenta los elementos formadores de su
        cultura, el desarrollo histórico y científico y su proyección en la calidad de vida, para
        atender las difíciles condiciones socioeconómicas y culturales del contexto social.
      </p>
      <p className="hz-p">
        Desde la perspectiva pedagógica, la labor se orienta a contribuir en la formación de un
        ciudadano capaz de gestionar sus derechos frente a un Estado garante de los mismos;
        reconocedor de la práctica del trabajo socialmente organizado, con el fundamento para
        satisfacer las necesidades y aspiraciones humanas y alcanzar los niveles de desarrollo
        deseados tanto individual como colectivamente; productivo en lo económico, respetuoso y
        defensor de los{' '}
        <strong className="hz-key">derechos humanos</strong> con elevado sentido de la
        responsabilidad social, fraternal, comprensivo y tolerante en sus relaciones con los demás,
        amante y orgulloso de su región y su cultura, consiente del deber de participar
        responsablemente en las decisiones que afectarán y transformarán su contexto, y conocedor del
        valor de la naturaleza y, por tanto, protector del{' '}
        <strong className="hz-key">medio ambiente</strong>.
      </p>
    </>
  );
}
