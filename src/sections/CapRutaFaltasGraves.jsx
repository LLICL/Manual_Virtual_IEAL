const CATALOGO = [
  'Reincidencia en tres (3) o más faltas leves durante el año lectivo.',
  'Presentarse de forma continua con el uniforme en mal estado, incompleto o alterado.',
  'No comunicar o esconder a los padres de familia las citaciones, circulares o reportes institucionales.',
  'Perturbar e impedir sistemáticamente el normal desarrollo de las clases o actividades comunitarias.',
  'Portar el uniforme institucional en casas de juego, casas de lenocinio, discotecas o sitios de dudosa reputación.',
  'Promover o realizar ventas, rifas o negocios informales dentro del colegio sin autorización del Consejo Directivo.',
  'Faltar al respeto, desacatar o mostrar indiferencia reiterada ante las orientaciones de docentes o directivos.',
  'Utilizar la biblioteca u otras dependencias para evadirse de las clases asignadas.',
  'Fraude académico comprobado (copia en evaluaciones, plagio de trabajos, suplantación, alteración de documentos o uso no autorizado de Inteligencia Artificial).',
  'Propiciar o participar en escándalos públicos dentro o fuera de la institución portando el uniforme.',
  'Apropiarse o esconder pertenencias, útiles o materiales de compañeros o de la institución.',
  'Traer a la institución a un tercero para hacerse pasar por su acudiente sin autorización.',
  'Faltar al respeto verbal o gestual a cualquier miembro de la comunidad educativa o vecinos del sector.',
  'Emplear útiles de trabajo escolar (tijeras, compases, reglas) como elementos de agresión o amenaza.',
  'Ingresar o salir del plantel por lugares no autorizados (brincar paredes o cerramientos).',
  'Retardos reiterados al inicio de la jornada escolar (más de 3 veces en un mes).',
  'Manifestaciones erótico-sexuales explícitas o exageradas en el colegio o portando el uniforme.',
  'Permitir el ingreso de personas ajenas al colegio para entorpecer la jornada escolar.',
  'Hacer mal uso o causar deterioro a los muebles, pupitres, equipos de cómputo o comedor escolar.',
  'Dañar, rayar o escribir grafitis u ofensas en paredes, puertas, tableros o baños del colegio.',
  'Recolectar dineros a nombre del colegio sin autorización escrita de Rectoría.',
  'Confabularse para intimidar, amenazar, insultar o acosar a cualquier miembro de la comunidad de forma presencial o virtual.',
  'Portar, consumir o inducir al consumo de cigarrillos tradicionales o vapeadores dentro del colegio o en sus alrededores.',
  'Portar o difundir material pornográfico físico o digital dentro del colegio.',
  'Portar armas blancas, de fogueo, de aire comprimido, sprays de pimienta o elementos cortopunzantes.',
  'Portar, manipular o usar pólvora, artefactos pirotécnicos o sustancias peligrosas.',
  'Participar o promover juegos de azar o apuestas dentro del plantel.',
  'Cualquier acto de discriminación o maltrato por motivos de etnia, género, credo, orientación sexual o discapacidad.',
  'Grabar o difundir videos obscenos, bailes eróticos o contenidos denigrantes con el uniforme en redes sociales (TikTok, Instagram, Facebook).',
  'Fugarse de la institución durante el desarrollo de la jornada escolar.',
  'Organizar o participar en retos virales (challenges) de redes sociales que pongan en riesgo la integridad física o la salud.',
  'Utilizar o manipular teléfonos celulares o dispositivos móviles durante las clases o actos de comunidad sin autorización del docente.',
];

const SANCIONES = [
  'Citación presencial e inmediata del padre de familia o acudiente (con denuncia al ICBF/Comisaría en caso de inasistencia sin excusa).',
  'Anotación formal en el observador del estudiante y firma de Acta de Compromiso Pedagógico y Convivencial.',
  'Trabajo escrito de investigación de cinco (5) páginas manuscritas con elaboración de cartelera preventiva y exposición ante el grupo.',
  'Reparación económica o restitución del bien dañado en un plazo no mayor a diez (10) días hábiles.',
  'Suspensión e interrupción académica temporal de 1 a 5 días hábiles con desarrollo de trabajo pedagógico restaurativo dentro de la biblioteca escolar.',
  'Imposición de Matrícula en Observación por parte de la Coordinación de Convivencia o el Comité Escolar de Convivencia.',
];

export default function CapRutaFaltasGraves() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.5.2
        </span>
        <h2 className="section-title">
          Faltas graves
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.5.2
        </span>
        <h3 className="hz-head-title">
          Faltas graves
        </h3>
      </div>

      <p className="hz-p">
        <span className="hz-key">Definición:</span> Son faltas graves las transgresiones sistemáticas a
        los deberes, la reincidencia en faltas leves, o las conductas que alteren de forma significativa
        el orden institucional, el ambiente escolar, los derechos de terceros o el buen nombre de la
        Institución Educativa Antonio Lenis.
      </p>

      <p className="hz-p">
        <span className="hz-key">Regla de acumulación:</span> la reincidencia en{' '}
        <span className="hz-key">tres (3) faltas leves</span> consecutivas o discontinuas se tipifica y
        sanciona automáticamente como una falta grave. Las siguientes conductas constituyen faltas
        graves:
      </p>

      <ol className="hz-ol">
        {CATALOGO.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ol>

      <h4 className="hz-sub">Procedimiento de atención y sanciones restaurativas para faltas graves</h4>
      <ul className="hz-list">
        {SANCIONES.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
}