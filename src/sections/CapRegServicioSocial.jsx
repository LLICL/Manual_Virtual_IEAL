const OBJETIVOS = [
  'Sensibilizar al educando frente a las necesidades, intereses, problemas y potencialidades de la comunidad, para que adquiera y desarrolle compromisos y actitudes en relación con su mejoramiento.',
  'Contribuir al desarrollo de la solidaridad, tolerancia, cooperación, respeto a los demás, la responsabilidad y el compromiso con su entorno social.',
  'Promover acciones educativas orientadas a la construcción de un espíritu de servicio para el mejoramiento permanente de la comunidad y a la prevención integral de problemas socialmente relevantes.',
  'Promover la aplicación de conocimientos y habilidades logrados en áreas obligatorias y optativas definidas en el plan de estudios, que favorezcan el desarrollo social y cultural de las comunidades.',
  'Fomentar la práctica del trabajo y el aprovechamiento del tiempo libre, como derechos que permiten la dignificación de la persona y el mejoramiento de su nivel de vida.',
];

const MATERIALES = [
  'prevención del abuso sexual infantil',
  'prevención del consumo de drogas',
  'prevención del embarazo adolescente',
  'prevención del acoso y el matoneo escolar',
  'prevención del suicidio y la depresión',
  'orientación sexual',
];

export default function CapRegServicioSocial() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.6.5
        </span>
        <h2 className="section-title">
          Servicio social estudiantil obligatorio
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.6.5
        </span>
        <h3 className="hz-head-title">
          Servicio social estudiantil obligatorio
        </h3>
      </div>

      <p className="hz-p">
        El servicio social pretende que el educando se integre a la comunidad, contribuyendo a su
        mejoramiento social, cultural y económico, colaborando en los proyectos y trabajos que lleva a
        cabo y desarrollando en él el valor de la solidaridad y el conocimiento frente a su entorno
        social. En consonancia con la formación integral del educando, emerge lo que está enmarcado y
        definido en el Proyecto Educativo Institucional (PEI) y es ejecutado por la institución, en forma
        conjunta y sistemática, con entidades gubernamentales y no gubernamentales especializadas en la
        atención a las familias y comunidades.
      </p>

      <p className="hz-p">
        El Ministerio de Educación Nacional estableció las reglas generales para la organización y el
        funcionamiento del servicio social estudiantil obligatorio, disponiendo los siguientes{' '}
        <span className="hz-key">objetivos principales</span>:
      </p>

      <ul className="hz-list">
        {OBJETIVOS.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>

      <details className="hz-collapse">
        <summary>Parágrafo</summary>
        <div className="hz-collapse-body">
          Los educandos deberán prestar su Servicio Social en el desarrollo de los diferentes proyectos
          concertados para tal fin, dentro de nuestra Institución educativa y en los demás proyectos
          transversales que se determinen mediante convenios con las diferentes autoridades o entes
          públicos, previo acuerdo con nuestra Institución educativa.
        </div>
      </details>

      <details className="hz-collapse">
        <summary>Nota</summary>
        <div className="hz-collapse-body">
          Si el educando falta a sus deberes de trabajo social, mediante engaño o inducción mintiendo y,
          señalando que se encuentra en dichas actividades cuando en verdad se evade y se encuentra en
          otras actuaciones diferentes, el colegio NO tendrá responsabilidad alguna, civil, penal,
          disciplinaria o contractual. El educando se ha puesto en riesgo a sí mismo, y ha mentido. Será
          tipificada como falta grave o muy grave según criterio de la coordinación de convivencia.
        </div>
      </details>

      <h4 className="hz-sub">Desarrollo del servicio social desde grado noveno</h4>
      <p className="hz-p">
        El educando, desde grado <span className="hz-key">noveno (9)</span>, puede desarrollar su
        servicio social realizando sus <span className="hz-key">80 horas</span> en la elaboración de
        material de {MATERIALES.join(', ')}.
      </p>
      <p className="hz-p">
        Entiéndase por material: archivos PDF, presentaciones de PowerPoint, presentaciones animadas,
        videos, filminutos, canciones, poemas, videografías, cuñas radiales, comerciales u otro
        material visual, audiovisual o similar.
      </p>
    </>
  );
}
