const ITEMS = [
  {
    term: '1. Dirección y Ejecución del PEI',
    text: 'Orientar y liderar la formulación, ejecución, seguimiento y evaluación continua del Proyecto Educativo Institucional (PEI) en articulación con el Gobierno Escolar.',
  },
  {
    term: '2. Presidencia de Órganos Colegiados',
    text: 'Presidir y convocar las sesiones del Consejo Directivo, Consejo Académico y Comité Escolar de Convivencia.',
  },
  {
    term: '3. Representación Legal e Institucional',
    text: 'Representar legalmente a la Institución Educativa Antonio Lenis ante las autoridades educativas, administrativas, judiciales, policivas y la comunidad en general.',
  },
  {
    term: '4. Gestión del Talento Humano',
    text: 'Distribuir la asignación académica, organizar la jornada laboral, asignar funciones directivas y docentes, evaluar anualmente el desempeño laboral y ejercer la potestad disciplinaria interna.',
  },
  {
    term: '5. Ordenación del Gasto y Fondo FSE',
    text: 'Administrar los recursos del Fondo de Servicios Educativos (FSE), elaborar el presupuesto anual con el Consejo Directivo, ordenar el gasto y rendir cuentas públicas semestralmente.',
  },
  {
    term: '6. Liderazgo de la Ruta de Atención Integral',
    text: 'Presidir el Sistema Nacional de Convivencia Escolar al interior del colegio y realizar los reportes obligatorios e inmediatos en la plataforma SIUCE sobre Situaciones Tipo II y Tipo III.',
  },
  {
    term: '7. Obligación de Denuncia Penal en 24 Horas',
    text: 'Instaurar de forma obligatoria la denuncia penal e informe ante la Fiscalía General de la Nación, Policía de Infancia y Adolescencia, Comisaría de Familia o ICBF dentro de las 24 horas siguientes al conocimiento de indicios o casos de abuso sexual o violencias basadas en género.',
  },
  {
    term: '8. Sanción Disciplinaria y Cancelación de Matrícula',
    text: 'Tramitar el debido proceso convivencial y expedir las Resoluciones Rectorales motivadas para imponer sanciones proporcionales, Matrícula en Observación o la Cancelación Unilateral de la Matrícula previa recomendación del Comité de Convivencia y fallo del Consejo Directivo.',
  },
  {
    term: '9. Gestión de la Calidad y Cobertura',
    text: 'Garantizar la prestación eficiente del servicio educativo, liderar el Plan de Mejoramiento Institucional (PMI), promover la capacitación docente y gestionar la proyección de cupos con la Secretaría de Educación Municipal (SEM).',
  },
  {
    term: '10. Garantía de Trayectoria Educativa',
    text: 'Articular con la Secretaría de Educación Municipal la reubicación y continuidad en el sistema escolar de aquellos educandos que deban ser trasladados o excluidos por faltas gravísimas.',
  },
];

export default function Cap5FuncionesRector() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          5.6.1
        </span>
        <h2 className="section-title">
          Funciones de El Rector
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          5.6.1
        </span>
        <h3 className="hz-head-title">
          Funciones de El Rector
        </h3>
      </div>

      <p className="hz-p">
        A El Rector le corresponde ejercer la{" "}
        <span className="hz-key">primera autoridad ejecutiva y pedagógica</span> del plantel, con
        las siguientes funciones imperativas:
      </p>

      <ul className="hz-list">
        {ITEMS.map((i) => (
          <li key={i.term}>
            <span className="hz-term">{i.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{i.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}