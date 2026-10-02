const PROMOCION = [
  'No será de carácter obligatorio, es decir, su uso es discrecional por parte de los estudiantes y no dará lugar a discriminación alguna para quienes opten por no acogerlo.',
  'Deberá llevar impreso el escudo y nombre de la institución en parte visible.',
  'Es un Camisuéter, el cual deberá llevar cuello y mangas y el largo por debajo de la cintura; cuyo diseño y color deberá ser elegido por los estudiantes de grado undécimo.',
  'El complemento del Camisuéter puede ser sudadera o jean; si este último deberá ser clásico, de un solo color (no desteñido) y sin roturas.',
  'El proceso contractual para la confección de los uniformes estará a cargo de los padres y madres de familia y cuidadores que sean designados en reunión conjunta de los padres del grado en comento, en la cual se discuta y apruebe por parte de éstos.',
  'La Institución NO se encargará del recaudo de los dineros. Estos estarán bajo los términos y condiciones estipuladas por la reunión de los padres y madres de familia y cuidadores del grado undécimo.',
  'Los días para portar el suéter de la promoción serán los concertados entre la coordinación de convivencia y una comisión representativa de los cursos del grado undécimo.',
];

const PARAGRAFOS = [
  {
    titulo: 'Parágrafo 6',
    texto:
      'Toda solicitud del uso de esta indumentaria para actividades especiales deberá ser informada con antelación por el docente a cargo y contar con el visto bueno de la coordinación correspondiente. En ningún caso la no posesión de prendas temáticas opcionales impedirá el ingreso o participación del estudiante en la jornada académica.',
  },
  {
    titulo: 'Parágrafo 7',
    texto:
      'De la armonización entre el libre desarrollo de la personalidad, la identidad institucional y la especial protección de la infancia. Nuestra I.E. ANTONIO LENIS, reconoce y respeta plenamente, el derecho fundamental al libre desarrollo de la personalidad (artículo 16 de la Constitución Política) de todos sus educandos. En virtud de ello, se comprende que la adopción de estilos, accesorios particulares, modificaciones corporales, tendencias estéticas y modas individuales constituye una manifestación legítima de la autonomía personal de los estudiantes, la cual goza de amparo en sus espacios de vida privada, familiar y cotidiana, en coordinación con la orientación de sus padres de familia y acudientes. No obstante, en el marco de la jornada escolar y durante el porte del uniforme oficial, rige el principio de armonización de derechos y el deber de sujeción a las pautas institucionales. Esta directriz se fundamenta en la corresponsabilidad formativa y la protección integral de los niños, niñas y estudiantes de básica primaria y primera infancia (artículo 44 constitucional y Ley 1098 de 2006), quienes se encuentran en una etapa crucial de estructuración de su carácter, autoestima y criterio reflexivo. Con el fin de salvaguardar un entorno pedagógico equilibrado y prevenir dinámicas de presión social, influencia asimétrica o confrontación de modelos de conducta en los educandos de menor edad, la comunidad educativa preserva la sobriedad y neutralidad del espacio escolar, garantizando que el ejercicio de la individualidad no interfiera con el bienestar ni con el proceso formativo de los demás integrantes del plantel.',
  },
  {
    titulo: 'Parágrafo 8',
    texto:
      'Del uniforme institucional como símbolo de equidad, identidad y observancia del régimen escolar. El uniforme de nuestra Institución Educativa, constituye un símbolo de identidad colectiva, equidad social y sentido de pertenencia, estructurado en coherencia con los fines de la educación (artículo 5, numeral 4 de la Ley 115 de 1994). Su propósito esencial, es promover, la igualdad material, entre los educandos, y evitar distinciones socioeconómicas, o estéticas particulares, durante el proceso formativo. En consecuencia, el uniforme institucional, debe portarse en condiciones de pulcritud, dignidad y estricto apego, a los modelos adoptados oficialmente por el Consejo Directivo, sin alteraciones, aditamentos ajenos, intervenciones estilísticas, ni mixturas con indumentarias asociadas a tendencias externas, o culturas urbanas. Esta disposición responde, a la necesidad de mantener un clima escolar propicio, para el aprendizaje, el orden civilizado y la seguridad, en las prácticas académicas y técnicas del plantel (artículo 44, numeral 4 de la Ley 1098 de 2006). El derecho fundamental a la educación, ostenta un carácter inalienable, pero de conformidad con la doctrina constitucional reiterada, no es un derecho absoluto, sino un derecho-deber de doble vía, cuyo goce demanda el acatamiento de deberes correlativos (artículo 95 de la Constitución Política). La suscripción voluntaria, de la matrícula y el contrato educativo, perfecciona, un vínculo formal entre la familia y nuestra institución, que compromete, a estudiantes y acudientes, a respetar integralmente, el presente Manual de Convivencia. Quienes opten por este proyecto educativo, asumen formalmente, sus preceptos orientadores; en caso de discrepar sustancialmente, de la filosofía y normatividad del plantel, los padres de familia y/o acudientes, conservan intacta, su libertad, de elegir el modelo educativo y el establecimiento, que mejor responda, a sus convicciones formativas.',
  },
];

export default function Cap5() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.2.3
        </span>
        <h2 className="section-title">
          Uniforme oficial único y obligatorio
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.2.3
        </span>
        <h3 className="hz-head-title">
          Uniforme oficial único y obligatorio
        </h3>
      </div>

      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <img src="images/Uniforme.jpeg" alt="Uniforme oficial único" style={{ maxWidth: "460px", width: "100%", borderRadius: "12px", boxShadow: "var(--shadow)" }} />
      </div>
      <div className="uniformes-block-title">
        <div className="uniformes-bar" />
        <span>
          UNIFORME INSTITUCIONAL
        </span>
      </div>
      <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "10px" }}>
        El uniforme de la Institución Educativa Antonio Lenis es uno solo para todos los niveles de primera infancia, básica primaria, secundaria y media. Está conformado por:
      </p>
      <div className="uniformes-prenda-row">
        <div className="uniformes-prenda-num">
          <div className="uniformes-circle">
            1
          </div>
          <div className="uniformes-line" />
        </div>
        <div className="uniformes-prenda-body">
          <div className="uniformes-prenda-head">
            Camisueter
          </div>
          <div className="uniformes-prenda-text">
            Tipo polo, tela cole plus de alta transpirabilidad y secado rápido; de color blanco con las letras "A" y "L" en marca de agua en tipo old english modificada. Cuello color rojo con siglas IEAL en la parte de atrás en color blanco y puños en rojo con siglas IEAL en blanco. Dos botones rojos y escudo bordado del lado izquierdo.
          </div>
        </div>
      </div>
      <div className="uniformes-prenda-row">
        <div className="uniformes-prenda-num">
          <div className="uniformes-circle">
            2
          </div>
          <div className="uniformes-line" />
        </div>
        <div className="uniformes-prenda-body">
          <div className="uniformes-prenda-head">
            Sudadera Pantalón
          </div>
          <div className="uniformes-prenda-text">
            Corte recto holgado de color rojo vivo (tela vioto) y bolsillos laterales, pretina gruesa con elástico ancho y cordón interno para ajuste. Franjas laterales verticales blancas de la cadera al tobillo de 3 cm; en la franja derecha en marca de agua "Antonio Lenis" y en la izquierda las letras "A" y "L".
          </div>
        </div>
      </div>
      <div className="uniformes-prenda-row">
        <div className="uniformes-prenda-num">
          <div className="uniformes-circle">
            3
          </div>
        </div>
        <div className="uniformes-prenda-body">
          <div className="uniformes-prenda-head">
            Zapatos y Medias
          </div>
          <div className="uniformes-prenda-text">
            Zapatos blancos deportivos colegiales, sin vivos de ningún color y medias blancas.
          </div>
        </div>
      </div>
      <div className="uniformes-info-strip">
        <span style={{ fontSize: "16px", color: "#3B6D11", flexShrink: "0", marginTop: "1px" }}>
          ⓘ
        </span>
        <p>
          El uniforme se puede usar encajado o desencajado.
        </p>
      </div>
      <div className="uniformes-sep" />
      <h4 className="uniformes-block-title uniformes-block-title--h">
        <span className="uniformes-bar green" />
        <span>
          Indumentaria de promoción para el grado undécimo (11°)
        </span>
      </h4>
      <p style={{ fontSize: "15px", lineHeight: "1.5", marginBottom: "10px" }}>
        La institución podrá autorizar, para los estudiantes del grado undécimo, la confección y porte, en fechas oportunamente concertadas, del suéter de promoción siempre que se observen las siguientes condiciones:
      </p>
      <div className="uniformes-promo-grid">
        {PROMOCION.map((texto, i) => (
          <div className="uniformes-promo-row" key={texto}>
            <div className="uniformes-promo-pill">
              {i + 1}
            </div>
            <p>{texto}</p>
          </div>
        ))}
      </div>
      <details className="hz-collapse">
        <summary>Indumentaria para actividades curriculares, cívicas o especiales</summary>
        <div className="hz-collapse-body">
          Cuando la institución o los docentes programen jornadas culturales, salidas pedagógicas, actos cívicos o actividades deportivas especiales (por ejemplo, el día de la afrocolombianidad, fechas patrias, partidos o proyectos transversales), se podrá solicitar el uso de prendas distintas, tales como suéter de Colombia o camisetas temáticas alegóricas, combinación de jean clásico con el suéter oficial del colegio, o ropa particular adecuada y decorosa para salidas de campo o convivencias.
        </div>
      </details>
      {PARAGRAFOS.map((p) => (
        <details className="hz-collapse" key={p.titulo}>
          <summary>{p.titulo}</summary>
          <div className="hz-collapse-body">{p.texto}</div>
        </details>
      ))}
      <div className="uniformes-sep" />
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <div className="uniformes-bar amber" />
        <span style={{ fontSize: "15px", fontWeight: "500" }}>
          BUZO INSTITUCIONAL
        </span>
        {" "}
        <span className="uniformes-buzo-pill">
          PRENDA OPCIONAL
        </span>
      </div>
      <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "14px" }}>
        <div style={{ flex: "1", minWidth: "280px" }}>
          <ul className="hz-list">
            <li>
              <span className="hz-term">Uso</span> — No es de carácter obligatorio. El estudiante
              Lenista podrá portarlo según su necesidad, dadas las condiciones de la temperatura.
            </li>
            <li>
              <span className="hz-term">Tipo</span> — Prenda de abrigo de una sola pieza, con capucha,
              que cubre todo excepto la cara y las manos.
            </li>
            <li>
              <span className="hz-term">Diseño</span> — Mangas largas y capucha de color rojo; cuerpo
              blanco con sierre de cremallera del mismo color.
            </li>
            <li>
              <span className="hz-term">Detalles</span> — Bandera institucional en la orilla de las
              mangas, cuello y la parte baja; bolsillos laterales con bis color rojo; iniciales
              "IEAL" bordadas en blanco en la manga; escudo institucional bordado del lado izquierdo
              y letras "AL" del lado derecho en color rojo.
            </li>
          </ul>
        </div>
        <div style={{ flexShrink: "0" }}>
          <img src="images/Buzo_IEAL.png" alt="Buzo Institucional" style={{ maxWidth: "320px", width: "100%", borderRadius: "10px", boxShadow: "var(--shadow)" }} />
        </div>
      </div>
      <div className="uniformes-sep" />
      <details className="hz-collapse">
        <summary>
          PARÁGRAFO SIETE
        </summary>
        <div className="hz-collapse-body">
          El periodo de transición del cambio al nuevo uniforme es de un (1) año para los niveles de
          básica primaria y secundaria (primero a noveno) y para el nivel de la media (décimo y
          undécimo) de dos años, garantizando que no haya sobrecostos para los padres de familia.
        </div>
      </details>
      <details className="hz-collapse">
        <summary>
          PARÁGRAFO OCHO
        </summary>
        <div className="hz-collapse-body">
          A partir del año 2026, mientras se da la transición solo se usará el uniforme nuevo y el de
          educación física. NO se admitirá estudiantes con el uniforme de diario.
        </div>
      </details>
      <details className="hz-collapse">
        <summary>
          PARÁGRAFO NUEVE
        </summary>
        <div className="hz-collapse-body">
          El tiempo máximo para cumplir con el uniforme institucional para estudiantes nuevos es el
          día 27 del mes febrero del año lectivo. Si los padres de familia tienen dificultades para la
          compra del uniforme deben presentar una solicitud a la coordinación de convivencia
          solicitando un tiempo extra. Los estudiantes antiguos desde el primer día deben cumplir con
          su uniforme.
        </div>
      </details>
    </>
  );
}
