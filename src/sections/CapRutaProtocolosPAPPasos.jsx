const PASOS = [
  {
    term: '1. Escucha sensible sin juzgar',
    text: 'Ofrecer un espacio seguro y tranquilo, usar un tono de voz pausado, controlar impulsos y acallar la voz interna para centrar la atención en la persona afectada.',
  },
  {
    term: '2. Validación emocional y apoyo',
    text: 'Reconocer y validar los sentimientos sin descalificarlos (prohibido usar frases como "no deberías sentirte así" o "hay que ser fuertes"). Si el educando presenta alta alteración, guiarlo en ejercicios de respiración consciente.',
  },
  {
    term: '3. Proscripción de interrogatorios',
    text: 'Queda estrictamente prohibido interrogar, buscar culpables, calificar emociones o exponer públicamente la intimidad del estudiante o docente.',
  },
];

export default function CapRutaProtocolosPAPPasos() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.3.7.2
        </span>
        <h2 className="section-title">
          Pasos para la atención con comunicación empática
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.3.7.2
        </span>
        <h3 className="hz-head-title">
          Pasos para la atención con comunicación empática y escucha activa
        </h3>
      </div>

      <ol className="hz-ol">
        {PASOS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}</span>
            <details className="hz-collapse hz-collapse--mini">
              <summary>Ver descripción</summary>
              <div className="hz-collapse-body">
                <p>{p.text}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}