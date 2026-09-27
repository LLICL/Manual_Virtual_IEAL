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
      },
      {
        "id": "cap-12",
        "label": "Orientación sexual e identidad",
        "number": "c"
      },
      {
        "id": "cap-15",
        "label": "Faltas: leves, graves y gravísimas",
        "number": "f"
      }
    ]
  },
  {
    "title": "Capítulo 4: Procedimientos de concertación",
    "collapsible": true,
    "items": [
      {
        "id": "cap-16",
        "label": "Solución de conflictos",
        "number": "a"
      },
      {
        "id": "cap-17",
        "label": "Protocolo de atención",
        "number": "b"
      },
      {
        "id": "cap-18",
        "label": "Uso de dispositivos móviles",
        "number": "c"
      },
      {
        "id": "cap-19",
        "label": "Prevención del abuso sexual",
        "number": "d"
      },
      {
        "id": "cap-20",
        "label": "Protocolo de sustancias prohibidas",
        "number": "e"
      },
      {
        "id": "cap-21",
        "label": "Comité de convivencia",
        "number": "f"
      },
      {
        "id": "cap-22",
        "label": "Rutas de atención",
        "number": "g"
      },
      {
        "id": "cap-23",
        "label": "Infracciones administrativas",
        "number": "h"
      }
    ]
  },
  {
    "title": "Capítulo 5: Docentes",
    "collapsible": true,
    "items": [
      {
        "id": "cap-24",
        "label": "Derechos de docentes",
        "number": "a"
      },
      {
        "id": "cap-25",
        "label": "Deberes de docentes",
        "number": "b"
      },
      {
        "id": "cap-26",
        "label": "Deberes del director de grupo",
        "number": "c"
      },
      {
        "id": "cap-27",
        "label": "El rector",
        "number": "d"
      },
      {
        "id": "cap-28",
        "label": "Coordinador académico",
        "number": "e"
      },
      {
        "id": "cap-29",
        "label": "Coordinador de área",
        "number": "f"
      },
      {
        "id": "cap-30",
        "label": "Orientador escolar",
        "number": "g"
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
