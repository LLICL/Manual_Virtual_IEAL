// Estructura del menú lateral con tipado jerárquico por capítulos.
const navigation = [
  {
    "title": "Inicio",
    "collapsible": false,
    "items": [
      {
        "id": "cap-home",
        "label": "Inicio"
      }
    ]
  },
  {
    "title": "Bloque 1: Consensuado, operativo y pedagógico",
    "separator": true,
    "collapsible": false,
    "items": []
  },
  {
    "title": "Capítulo 1: Identificación, identidad, horizonte institucional y perfiles de los actores",
    "collapsible": true,
    "items": [
      {
        "id": "cap-1",
        "label": "Identificación institucional",
        "number": "1.1"
      },
      {
        "id": "cap-resena",
        "label": "Reseña histórica",
        "number": "1.2"
      },
      {
        "id": "cap-2",
        "label": "Símbolos e himno institucional",
        "number": "1.3"
      },
      {
        "id": "cap-horizonte",
        "label": "Horizonte e identidad institucional",
        "number": "1.4",
        "children": [
          {
            "id": "cap-horizonte-principios",
            "label": "Principios institucionales",
            "number": "1.4.1"
          },
          {
            "id": "cap-horizonte-valores",
            "label": "Valores institucionales",
            "number": "1.4.2"
          },
          {
            "id": "cap-horizonte-etico",
            "label": "Horizonte ético del cuidado",
            "number": "1.4.3"
          }
        ]
      },
      {
        "id": "cap-3",
        "label": "Perfiles de los actores",
        "number": "1.5",
        "children": [
          {
            "id": "cap-3-estudiante",
            "label": "Estudiante Lenista",
            "number": "1.5.1"
          },
          {
            "id": "cap-3-personero",
            "label": "Personero o personera estudiantil",
            "number": "1.5.2"
          },
          {
            "id": "cap-3-docente",
            "label": "Docente Lenista",
            "number": "1.5.3"
          },
          {
            "id": "cap-3-acudiente",
            "label": "Padre, madre y/o acudiente",
            "number": "1.5.4"
          },
          {
            "id": "cap-3-egresado",
            "label": "Egresado Lenista",
            "number": "1.5.5"
          }
        ]
      }
    ]
  },
  {
    "title": "Capítulo 2: Gobierno escolar y organización institucional",
    "collapsible": true,
    "items": [
      {
        "id": "cap-organigrama",
        "label": "Organigrama estructural de la institución",
        "number": "2.1"
      },
      {
        "id": "cap-gobierno",
        "label": "Estructura del gobierno escolar",
        "number": "2.2",
        "children": [
          {
            "id": "cap-gobierno-rector",
            "label": "El Rector",
            "number": "2.2.1"
          },
          {
            "id": "cap-gobierno-directivo",
            "label": "El Consejo Directivo",
            "number": "2.2.2"
          },
          {
            "id": "cap-gobierno-academico",
            "label": "El Consejo Académico",
            "number": "2.2.3"
          }
        ]
      },
      {
        "id": "cap-estamentos",
        "label": "Estamentos e instancias de participación y control",
        "number": "2.3",
        "children": [
          {
            "id": "cap-estamentos-consejo-estudiantes",
            "label": "Consejo de Estudiantes y VDI",
            "number": "2.3.1"
          },
          {
            "id": "cap-estamentos-personero",
            "label": "Personero(a) Estudiantil",
            "number": "2.3.2"
          },
          {
            "id": "cap-estamentos-contralor",
            "label": "Contralor(a) Estudiantil",
            "number": "2.3.3"
          },
          {
            "id": "cap-estamentos-ces",
            "label": "Comité Escolar de Convivencia",
            "number": "2.3.4"
          },
          {
            "id": "cap-estamentos-comisiones",
            "label": "Comisiones de Evaluación y Promoción",
            "number": "2.3.5"
          },
          {
            "id": "cap-estamentos-consejo-padres",
            "label": "Consejo de Padres de Familia",
            "number": "2.3.6"
          },
          {
            "id": "cap-estamentos-asociacion-padres",
            "label": "Asociación de Padres de Familia",
            "number": "2.3.7"
          },
          {
            "id": "cap-estamentos-exalumnos",
            "label": "Asociación de exalumnos y sector productivo",
            "number": "2.3.8"
          }
        ]
      }
    ]
  },
  {
    "title": "Capítulo 3: De los Estudiantes",
    "collapsible": true,
    "items": [
      {
        "id": "cap-11",
        "label": "Inscripción, admisión y matrícula",
        "number": "3.1"
      },
      {
        "id": "cap-4",
        "label": "Reglas de higiene, presentación personal y uniforme institucional",
        "number": "3.2",
        "collapsible": true,
        "children": [
          {
            "id": "cap-4-higiene",
            "label": "Pautas de higiene y riesgo epidemiológico",
            "number": "3.2.1"
          },
          {
            "id": "cap-4-presentacion",
            "label": "Marco de autonomía y presentación personal",
            "number": "3.2.2"
          },
          {
            "id": "cap-5",
            "label": "Uniforme oficial único y obligatorio",
            "number": "3.2.3"
          }
        ]
      },
      {
        "id": "cap-8",
        "label": "Jornadas escolares",
        "number": "3.3",
        "children": [
          {
            "id": "cap-8-horarios",
            "label": "Intensidad horaria y horarios oficiales",
            "number": "3.3.1"
          },
          {
            "id": "cap-8-retardos",
            "label": "Retardos",
            "number": "3.3.2"
          },
          {
            "id": "cap-8-inasistencias",
            "label": "Manejo de inasistencias, justificaciones y trámites",
            "number": "3.3.3"
          },
          {
            "id": "cap-8-permisos",
            "label": "Solicitud y trámite de permisos de salida de estudiantes",
            "number": "3.3.4"
          }
        ]
      },
      {
        "id": "cap-9",
        "label": "Derechos y sistema de estímulos de los estudiantes",
        "number": "3.4",
        "children": [
          {
            "id": "cap-9-derechos",
            "label": "Derechos de los estudiantes Lenistas",
            "number": "3.4.1"
          },
          {
            "id": "cap-9-estimulos",
            "label": "Sistema de estímulos y reconocimientos institucionales",
            "number": "3.4.2"
          }
        ]
      },
      {
        "id": "cap-10",
        "label": "Deberes y compromisos del estudiante Lenista",
        "number": "3.5",
        "children": [
          {
            "id": "cap-10-academicos",
            "label": "Compromisos académicos",
            "number": "3.5.1"
          },
          {
            "id": "cap-10-convivencia",
            "label": "Compromisos convivenciales y de relaciones interpersonales",
            "number": "3.5.2"
          },
          {
            "id": "cap-10-bienes",
            "label": "Compromisos sobre cuidado de bienes, instalaciones y entorno",
            "number": "3.5.3"
          },
          {
            "id": "cap-10-institucional",
            "label": "Compromisos institucionales, de autocuidado y cumplimiento legal",
            "number": "3.5.4"
          }
        ]
      },
      {
        "id": "cap-reg",
        "label": "Regulaciones especiales institucionales",
        "number": "3.6",
        "children": [
          {
            "id": "cap-reg-celulares",
            "label": "De los celulares",
            "number": "3.6.1"
          },
          {
            "id": "cap-reg-vapeadores",
            "label": "De vapeadores",
            "number": "3.6.2"
          },
          {
            "id": "cap-reg-intangibilidad",
            "label": "Del principio de intangibilidad e indemnidad sexual de la infancia",
            "number": "3.6.3"
          },
          {
            "id": "cap-reg-acoso",
            "label": "Del acoso escolar",
            "number": "3.6.4"
          },
          {
            "id": "cap-reg-servicio-social",
            "label": "Servicio social estudiantil obligatorio",
            "number": "3.6.5"
          },
          {
            "id": "cap-reg-decomiso",
            "label": "Decomiso de bienes ajenos o prohibidos y reposición de daños",
            "number": "3.6.6"
          },
          {
            "id": "cap-reg-alianza",
            "label": "Alianza Familia-Escuela",
            "number": "3.6.7"
          }
        ]
      }
    ]
  },
  {
    "title": "Capítulo 4: Gestión de la convivencia escolar, proceso y rutas",
    "collapsible": true,
    "id": "cap-convivencia",
    "items": [
      {
        "id": "cap-ruta-componentes",
        "label": "Componentes estructurales de la Ruta de Atención Integral",
        "number": "4.1",
        "children": [
          {
            "id": "cap-ruta-componentes-ruta",
            "label": "Componentes de la Ruta de Atención Integral",
            "number": "4.1.1"
          },
          {
            "id": "cap-ruta-semana",
            "label": "Semana de la Dignidad",
            "number": "4.1.2"
          },
          {
            "id": "cap-ruta-centros",
            "label": "Centros de Interés institucionales",
            "number": "4.1.3"
          }
        ]
      },
      {
        "id": "cap-ruta-situaciones",
        "label": "Clasificación de situaciones, faltas disciplinarias y garantías del debido proceso",
        "number": "4.2",
        "children": [
          {
            "id": "cap-ruta-situaciones-tipos",
            "label": "Definición y clasificación de las situaciones",
            "number": "4.2.1"
          },
          {
            "id": "cap-ruta-situaciones-tipo1",
            "label": "Protocolo para Situaciones Tipo I",
            "number": "4.2.2"
          },
          {
            "id": "cap-ruta-situaciones-tipo2",
            "label": "Protocolo para Situaciones Tipo II",
            "number": "4.2.3"
          },
          {
            "id": "cap-ruta-situaciones-tipo3",
            "label": "Protocolo para Situaciones Tipo III",
            "number": "4.2.4"
          },
{
        "id": "cap-ruta-faltas",
        "label": "De las faltas: sistema convivencial y formativo",
        "number": "4.2.5",
        "children": [
          {
            "id": "cap-ruta-faltas-leves",
            "label": "Faltas leves",
            "number": "4.2.5.1"
          },
          {
            "id": "cap-ruta-faltas-graves",
            "label": "Faltas graves",
            "number": "4.2.5.2"
          },
          {
            "id": "cap-ruta-faltas-gravisimas",
            "label": "Faltas gravísimas o muy graves",
            "number": "4.2.5.3"
          }
        ]
      },
      {
        "id": "cap-ruta-debido-proceso",
        "label": "Garantías del debido proceso convivencial y etapas procesales",
        "number": "4.2.6",
        "children": [
          {
            "id": "cap-ruta-debido-etapas",
            "label": "Etapas del proceso disciplinario",
            "number": "4.2.6.1"
          },
          {
            "id": "cap-ruta-debido-sanciones",
            "label": "Catálogo graduado de sanciones para faltas gravísimas",
            "number": "4.2.6.2"
          },
          {
            "id": "cap-ruta-debido-dosificacion",
            "label": "Criterios de dosificación y proporcionalidad",
            "number": "4.2.6.3"
          },
          {
            "id": "cap-ruta-debido-garantias",
            "label": "Debido proceso sancionatorio y doble instancia",
            "number": "4.2.6.4"
          },
          {
            "id": "cap-ruta-debido-prevalencia",
            "label": "Prevalencia penal y prohibición de retención judicial (Tipo III)",
            "number": "4.2.6.5"
          },
          {
            "id": "cap-ruta-debido-responsabilidad",
            "label": "Responsabilidad patrimonial y modelos virtuales",
            "number": "4.2.6.6"
          }
        ]
      },
      {
        "id": "cap-ruta-conducto",
        "label": "Conducto regular institucional y canales de atención",
        "number": "4.2.7",
        "children": [
          {
            "id": "cap-ruta-conducto-convivencial",
            "label": "Conducto regular para la mediación convivencial",
            "number": "4.2.7.1"
          },
          {
            "id": "cap-ruta-conducto-academico",
            "label": "Conducto regular para reclamaciones académicas (SIEE)",
            "number": "4.2.7.2"
          },
          {
            "id": "cap-ruta-conducto-pqrs",
            "label": "Conducto regular para PQR S(Peticiones, Quejas, Reclamos y Sugerencias)",
            "number": "4.2.7.3"
          },
          {
            "id": "cap-ruta-conducto-injerencias",
            "label": "Prohibición de injerencias exógenas y salto del conducto",
            "number": "4.2.7.4"
          },
          {
            "id": "cap-ruta-conducto-excepcion",
            "label": "Excepción justificada y protocolo para quejas contra docentes",
            "number": "4.2.7.5",
            "children": [
              {
                "id": "cap-ruta-conducto-protocolo-docente",
                "label": "Protocolo de atención, mediación y garantías del docente",
                "number": "4.2.7.5.1"
              }
            ]
          },
          {
            "id": "cap-ruta-conducto-evidencia",
            "label": "Obligatoriedad de evidencia escrita y registro documental",
            "number": "4.2.7.6"
          },
          {
            "id": "cap-ruta-clausula-remision",
            "label": "Cláusula de remisión al Bloque 2",
            "number": "4.2.7.7"
          }
        ]
      }
    ]
  },
      {
        "id": "cap-ruta-protocolos",
        "label": "Protocolos específicos de riesgo",
        "number": "4.3",
        "children": [
          {
            "id": "cap-ruta-protocolos-spa",
            "label": "SPA, Vapeadores y Alcohol",
            "number": "4.3.1"
          },
          {
            "id": "cap-ruta-protocolos-dorado",
            "label": "Código Dorado: salud mental y conducta suicida",
            "number": "4.3.2"
          },
          {
            "id": "cap-ruta-protocolos-vbg",
            "label": "Violencias basadas en género (VBG)",
            "number": "4.3.3"
          },
          {
            "id": "cap-ruta-protocolos-ciber",
            "label": "Cibersituaciones, ciberacoso y evidencia digital",
            "number": "4.3.4",
            "children": [
              {
                "id": "cap-ruta-protocolos-ciber-acoso",
                "label": "Protocolo de cibersituaciones y ciberacoso",
                "number": "4.3.4.1"
              },
              {
                "id": "cap-ruta-protocolos-ciber-evidencia",
                "label": "Aseguramiento de evidencia digital",
                "number": "4.3.4.2"
              },
              {
                "id": "cap-ruta-protocolos-ciber-salud",
                "label": "Violencia digital y salud mental",
                "number": "4.3.4.3"
              }
            ]
          },
          {
            "id": "cap-ruta-protocolos-asi",
            "label": "Abuso Sexual Infantil (ASI)",
            "number": "4.3.5"
          },
          {
            "id": "cap-ruta-protocolos-gestantes",
            "label": "Gestantes y lactantes",
            "number": "4.3.6"
          },
          {
            "id": "cap-ruta-protocolos-pap",
            "label": "Primeros Auxilios Psicológicos (PAP)",
            "number": "4.3.7",
            "children": [
              {
                "id": "cap-ruta-protocolos-pap-definicion",
                "label": "Definición y alcance no clínico de los PAP",
                "number": "4.3.7.1"
              },
              {
                "id": "cap-ruta-protocolos-pap-pasos",
                "label": "Pasos: comunicación empática y escucha activa",
                "number": "4.3.7.2"
              },
              {
                "id": "cap-ruta-protocolos-pap-calma",
                "label": "Zonas de calma y autorregulación",
                "number": "4.3.7.3"
              },
              {
                "id": "cap-ruta-protocolos-pap-niveles",
                "label": "Acompañamiento gradual en tres niveles",
                "number": "4.3.7.4"
              },
              {
                "id": "cap-ruta-protocolos-pap-guia",
                "label": "Qué hacer y qué no hacer en crisis + autocuidado docente",
                "number": "4.3.7.5"
              }
            ]
          }
]
      }
    ]
  },
{
    "title": "Capítulo 5: De los docentes y personal Administrativo",
    "collapsible": true,
    "items": [
      {
        "id": "cap-5-1",
        "label": "Clasificación y perfil del personal docente",
        "number": "5.1"
      },
      {
        "id": "cap-5-2",
        "label": "Derechos de los docentes Lenistas",
        "number": "5.2"
      },
      {
        "id": "cap-5-3",
        "label": "Deberes y obligaciones de los docentes",
        "number": "5.3",
        "children": [
          {
            "id": "cap-5-3-1",
            "label": "Deberes de protección, convivencia y reporte obligatorio",
            "number": "5.3.1"
          },
          {
            "id": "cap-5-3-2",
            "label": "Deberes académicos y pedagógicos",
            "number": "5.3.2"
          },
          {
            "id": "cap-5-3-3",
            "label": "Deberes de ética, ejemplo e integridad institucional",
            "number": "5.3.3"
          }
        ]
      },
      {
        "id": "cap-5-4",
        "label": "Prohibiciones explícitas a los docentes",
        "number": "5.4"
      },
      {
        "id": "cap-5-5",
        "label": "Funciones específicas del director(a) de grupo",
        "number": "5.5"
      },
      {
        "id": "cap-5-6",
        "label": "Funciones de los directivos docentes y equipo de apoyo especializado",
        "number": "5.6",
        "children": [
          {
            "id": "cap-5-6-1",
            "label": "Funciones de El Rector",
            "number": "5.6.1"
          },
          {
            "id": "cap-5-6-2",
            "label": "Funciones de la Coordinación Académica",
            "number": "5.6.2"
          },
          {
            "id": "cap-5-6-3",
            "label": "Funciones de la Coordinación de Convivencia",
            "number": "5.6.3"
          },
          {
            "id": "cap-5-6-4",
            "label": "Funciones específicas de las Coordinaciones de Sedes de Primaria",
            "number": "5.6.4"
          },
          {
            "id": "cap-5-6-5",
            "label": "Funciones de los jefes de Departamento / Coordinadores de Área",
            "number": "5.6.5"
          },
          {
            "id": "cap-5-6-6",
            "label": "Funciones del Docente Orientador",
            "number": "5.6.6"
          }
        ]
      },
      {
        "id": "cap-5-7",
        "label": "Del personal administrativo y de servicios generales",
        "number": "5.7",
        "children": [
          {
            "id": "cap-5-7-1",
            "label": "Derechos del personal administrativo y de servicios",
            "number": "5.7.1"
          },
          {
            "id": "cap-5-7-2",
            "label": "Deberes del personal administrativo y de servicios",
            "number": "5.7.2"
          },
          {
            "id": "cap-5-7-3",
            "label": "Faltas del personal administrativo y de servicio",
            "number": "5.7.3"
          },
          {
            "id": "cap-5-7-4",
            "label": "Sanciones del personal administrativo y de servicio",
            "number": "5.7.4"
          }
        ]
      }
    ]
  },
  {
    "title": "Capítulo 6: Padres de familia",
    "collapsible": true,
    "items": [
      {
        "id": "cap-31",
        "label": "Perfil de padres y acudientes",
        "number": "a"
      },
      {
        "id": "cap-32",
        "label": "Derechos de los padres",
        "number": "b"
      },
      {
        "id": "cap-33",
        "label": "Deberes de los padres",
        "number": "c"
      },
      {
        "id": "cap-34",
        "label": "Escuela de padres",
        "number": "d"
      },
      {
        "id": "cap-35",
        "label": "Talleres a padres de familia",
        "number": "e"
      },
      {
        "id": "cap-36",
        "label": "Manejo de inasistencias",
        "number": "f"
      },
      {
        "id": "cap-37",
        "label": "Procedimientos PQRS",
        "number": "g"
      }
    ]
  },
  {
    "title": "Capítulo 7: Personal administrativo",
    "collapsible": true,
    "items": [
      {
        "id": "cap-38",
        "label": "Personal administrativo",
        "number": "a"
      }
    ]
  },
  {
    "title": "Capítulo 8: Gobierno escolar y voceros",
    "collapsible": true,
    "items": [
      {
        "id": "cap-39",
        "label": "Información general / gobierno escolar",
        "number": "a"
      },
      {
        "id": "cap-40",
        "label": "Consejo académico",
        "number": "b"
      },
      {
        "id": "cap-41",
        "label": "Consejo de estudiantes",
        "number": "c"
      },
      {
        "id": "cap-42",
        "label": "Consejo de padres de familia",
        "number": "d"
      },
      {
        "id": "cap-43",
        "label": "Comisión de evaluación y promoción",
        "number": "e"
      },
      {
        "id": "cap-44",
        "label": "Personero estudiantil",
        "number": "f"
      },
      {
        "id": "cap-45",
        "label": "Asociación de exalumnos",
        "number": "g"
      },
      {
        "id": "cap-46",
        "label": "Contralor estudiantil",
        "number": "h"
      }
    ]
  },
  {
    "title": "Capítulo 9: Servicios y evaluación institucional",
    "collapsible": true,
    "items": [
      {
        "id": "cap-47",
        "label": "Servicios para educandos",
        "number": "a"
      },
      {
        "id": "cap-48",
        "label": "Normas de conducta",
        "number": "b"
      },
      {
        "id": "cap-49",
        "label": "Sistema de evaluación institucional - SIEE",
        "number": "c"
      },
      {
        "id": "cap-50",
        "label": "Criterios de evaluación y promoción",
        "number": "d"
      },
      {
        "id": "cap-51",
        "label": "Acciones de seguimiento",
        "number": "e"
      },
      {
        "id": "cap-52",
        "label": "Estrategias de apoyo",
        "number": "f"
      },
      {
        "id": "cap-53",
        "label": "Acciones para procesos educativos",
        "number": "g"
      },
      {
        "id": "cap-54",
        "label": "Definiciones de rutas de atención",
        "number": "h"
      },
      {
        "id": "cap-55",
        "label": "Directorio telefónico",
        "number": "i"
      }
    ]
  }
];

export default navigation;
