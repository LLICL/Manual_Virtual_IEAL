const PRINCIPIOS = [
  {
    term: 'Presunción de incapacidad volitiva',
    text: 'La ley presume que los menores de 14 años no cuentan con la madurez psicológica para disponer libremente de su sexualidad sin consecuencias para el desarrollo de su personalidad.',
  },
  {
    term: 'Prohibición de conductas erótico-sexuales en el ámbito escolar',
    text: 'Se prohíben las relaciones de noviazgo, caricias lúbricas o manifestaciones erótico-sexuales explícitas con menores de 14 años o en presencia de ellos dentro del plantel o portando el uniforme.',
  },
  {
    term: 'Responsabilidad legal y denuncias obligatorias',
    text: 'Las conductas que vulneren la esfera sexual de menores de 14 años se tipifican como Actos Sexuales Abusivos (Situación Tipo III). Los docentes y directivos tienen la obligación legal de denunciar el caso dentro de las 24 horas siguientes ante la Fiscalía o la Policía de Infancia y Adolescencia. Los estudiantes mayores de 14 años responderán bajo el Sistema de Responsabilidad Penal para Adolescentes y sus padres responderán civilmente por los daños y perjuicios ocasionados.',
  },
];

export default function CapRegIntangibilidad() {
  return (
    <>
      <div className="section-header">
        <span className="section-num">
          3.6.3
        </span>
        <h2 className="section-title">
          Del principio de intangibilidad e indemnidad sexual de la infancia
        </h2>
      </div>

      <div className="hz-head">
        <span className="hz-head-num">
          3.6.3
        </span>
        <h3 className="hz-head-title">
          Del principio de intangibilidad e indemnidad sexual de la infancia
        </h3>
      </div>

      <p className="hz-p">
        <span className="hz-key">Protección reforzada a menores de 14 años</span> e intangibilidad
        sexual: en estricto acato a la ley y a la doctrina de las Altas Cortes, la institución fija el
        principio de intangibilidad e indemnidad sexual de la infancia.
      </p>

      <ol className="hz-letras">
        {PRINCIPIOS.map((p) => (
          <li key={p.term}>
            <span className="hz-term">{p.term}:</span> {p.text}
          </li>
        ))}
      </ol>
    </>
  );
}
