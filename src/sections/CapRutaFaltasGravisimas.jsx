const CATALOGO = [
  'Cometer o participar en actos sexuales abusivos con menores de 14 años o en su presencia dentro del colegio o con el uniforme.',
  'Porte, consumo, tenencia, tráfico, microtráfico o suministro a menores de sustancias psicoactivas (SPA), drogas ilícitas, alcohol o vapeadores.',
  'Falsedad documental: falsificar firmas de acudientes o docentes, adulterar notas, boletines o la ficha del observador del estudiante.',
  'Sustracción, hurto calificado o agravado de bienes muebles, equipos de cómputo o pertenencias ajenas.',
  'Chantaje, extorsión, soborno o exigencia de dinero a compañeros o docentes.',
  'Porte, ingreso o uso de armas de fuego, armas blancas o artefactos explosivos dentro del colegio o en actividades institucionales.',
  'Provocar o participar en mutilaciones corporales (cutting), autolesiones o inducir al suicidio a otros educandos.',
  'Utilizar o rociar sustancias químicas peligrosas (ácidos, polvos pica-pica, corrosivos) que atenten contra la salud de las personas.',
  'Ciberdelitos y violencia digital de género: uso de Inteligencia Artificial para generar o difundir imágenes de desnudos, contenidos pornográficos o denigrantes de compañeros o profesores.',
  'Inducción o constreñimiento al comercio carnal o a la prostitución infantil.',
  'Acoso escolar (bullying) o ciberacoso (ciberbullying) grave, sistemático e intimidatorio que conduzca a la víctima a crisis de salud mental o lesiones.',
  'Causar lesiones personales físicas con incapacidad médica a compañeros, docentes o funcionarios del colegio.',
  'Incendiar, destruir o causar estragos intencionales en la planta física o bienes del Estado.',
  'Practicar ritos satánicos, espiritismo o actividades que atenten contra la dignidad humana y la salud mental colectiva.',
  'Crear falsas alarmas que generen pánico colectivo (estallar fulminantes, provocar quemas u olores desagradables).',
  'Cualquier otra conducta tipificada como delito en la legislación penal colombiana vigente o la reincidencia en faltas graves con Matrícula en Observación.',
];

const SANCIONES = [
  'Atención médica inmediata de urgencia (EPS/IPS o Línea 123) si hay afección a la salud o integridad.',
  'Incautación de elementos o sustancias bajo estricta cadena de custodia en bolsa plástica transparente sellada.',
  'Denuncia e informe penal obligatorio ante la Fiscalía General de la Nación, la Policía de Infancia y Adolescencia, la Comisaría de Familia o el ICBF dentro de las 24 horas siguientes.',
  'Citación urgente de acudientes y reporte inmediato en la plataforma SIUCE.',
  'Adopción de medidas de protección e intangibilidad para la víctima (flexibilización académica, cambio de grupo y no confrontación con el agresor).',
  'Imposición de suspensión e interrupción académica temporal de hasta 5 días hábiles en biblioteca escolar.',
  'Juzgamiento disciplinario en el Consejo Directivo y expedición de Resolución Rectoral motivada de cancelación unilateral del contrato de matrícula.',
  'Garantía de trayectoria educativa completa en articulación con la Secretaría de Educación Municipal.',
  'Responsabilidad patrimonial e indemnizatoria de los padres de familia del estudiante agresor para reparar económicamente los daños causados a la víctima.',
];

export default function CapRutaFaltasGravisimas() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          4.2.5.3
        </span>
        <h2 className="section-title">
          Faltas gravísimas o muy graves
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          4.2.5.3
        </span>
        <h3 className="hz-head-title">
          Faltas gravísimas o muy graves
        </h3>
      </div>

      <p className="hz-p">
        <span className="hz-key">Definición:</span> Son faltas gravísimas o muy graves las conductas de
        extrema gravedad que vulneren los derechos fundamentales de los miembros de la comunidad
        educativa, constituyan presuntos delitos tipificados (Situaciones Tipo III) o comprometan la
        seguridad, la libertad e integridad sexual y la vida dentro o fuera del colegio:
      </p>

      <ol className="hz-ol">
        {CATALOGO.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ol>

      <h4 className="hz-sub">Procedimiento y sanciones para faltas gravísimas</h4>
      <ul className="hz-list">
        {SANCIONES.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
}