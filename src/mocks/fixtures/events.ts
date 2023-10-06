import { type RawEvent } from '../../models/Event';
import { EventStatus } from '../../models/EventLight';

const events: RawEvent[] = [
  {
    type: 'Feature',
    properties: {
      id: 1,
      title: 'Castrum Festival',
      poster: {
        src: '/uploads/castrum.jpg',
        width: 1365,
        height: 2048,
      },
      starts_at: '2023-08-24',
      ends_at: '2023-08-24',
      location: 'Centre ville d’Yverdon',
      location_details:
        'Centre-ville d’Yverdon-les-Bains\nThéâtre Benno Besson',
      status: null,
      featured: true,
      summary:
        'Découvrez la première édition de festival hip-hop Source Concept, le 15 septembre à la salle de La Marive. Au programme, les rappeurs français Coelho et Warend, ainsi que les artistes helvètes VVS Panther, Antoino, Ymyk & Amoor & Soliloquio qui mettront en avant la scène hip-hop suisse. Pour clôturer la soirée, le talentueux Santo sera aux platines pour l’after Party.\n\nDe la découverte de nouveaux·elles talents aux artistes confirmé·e·s, chaque moment de cette soirée vous fera découvrir sa richesse artistique.',
      pricing:
        'À l’exception du concert de Niklas Paschburg au Temple et du brunch du dimanche, les événements du festival sont gratuits.',
      website: 'https://infomaniak.events/shop/EKGwwgxiNR/',
      schedule:
        '14.08: Apéritif de bienvenue dès 18h\n15.08: 11h à 04h du matin\n16.08: 12h à 04h du matin\n17.08: 11h à 5h du matin\n18.08: 12h à 17h',
      organizer_name: 'Association Castrum & Cie',
      organizer_address: 'Avenue des Sports 5\n1400 Yverdon-les-Bains',
      organizer_phone: '+41 24 423 64 20',
      organizer_email: 'info@le-castrum.ch',
      organizer_website: 'https://www.le-castrum.ch/',
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 1,
              label: 'Tous publics',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 1,
              label: 'Concert',
            },
            {
              id: 2,
              label: 'Spectacle',
            },
            {
              id: 4,
              label: 'Festival',
            },
            {
              id: 5,
              label: 'Atelier, Animation & Médiation',
            },
            {
              id: 6,
              label: 'Performance',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 1,
              label: 'Art vivant',
            },
            {
              id: 3,
              label: 'Audiovisuel',
            },
            {
              id: 5,
              label: 'Musique',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 2,
      title: 'La dérivée',
      poster: {
        src: '/uploads/9213ae_73526b7040ff4d4db1ecd4a01370cf93~mv2_d_4557_5197_s_4_2.webp',
        width: 1260,
        height: 1134,
      },
      starts_at: '2023-06-16',
      ends_at: '2023-08-18',
      location: 'Au bord du lac',
      location_details: 'Au bord du lac',
      status: EventStatus.SOLDOUT,
      featured: false,
      summary:
        'À cheval entre lieu culturel et buvette estivale, La Dérivée anime le bord du lac de Neuchâtel à Yverdon-les-Bains, en journée comme en soirée, du jeudi au dimanche, de juin à août. Concerts, ateliers découvertes, sports, cinéma open-air, expositions, ateliers enfants, arts-vivants, DJ-set… La Dérivée c’est plus d’une centaine d’activités et d’événements proposés en collaboration avec une multitude d’associations, institutions et collectifs.',
      pricing: 'Gratuit',
      website: 'https://www.laderivee.ch/',
      schedule: null,
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 1,
              label: 'Tous publics',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 1,
              label: 'Concert',
            },
            {
              id: 2,
              label: 'Spectacle',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 3,
              label: 'Audiovisuel',
            },
            {
              id: 5,
              label: 'Musique',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 3,
      title: 'Actyv Été',
      poster: {
        src: '/uploads/serena-repice-lentini-9rwxZcJPdpI-unsplash.jpg',
        width: 1000,
        height: 1333,
      },
      starts_at: '2023-09-03',
      ends_at: '2023-09-03',
      location: 'Parcs et infrastructures de la ville',
      location_details: 'Parcs et infrastructures de la ville',
      status: null,
      featured: false,
      summary: null,
      pricing: null,
      website: null,
      schedule: null,
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 1,
              label: 'Tous publics',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 5,
              label: 'Atelier, Animation & Médiation',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 8,
              label: 'Sport',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 4,
      title: 'Triathlon d’Yverdon-les-Bains',
      poster: {
        src: '/uploads/5b81b6_8c794085478745ed872e4410c2020914~mv2.webp',
        width: 1000,
        height: 532,
      },
      starts_at: '2023-09-10',
      ends_at: '2023-09-11',
      location: 'Plage et ville',
      location_details: 'Plage et ville',
      status: EventStatus.CANCELLED,
      featured: false,
      summary:
        'Organisé par la Ville depuis 2011, le Triathlon d’Yverdon-les-Bains figure en bonne place, comme chaque année, au calendrier national du triathlon. L’évènement n’a cessé d’évoluer et son affluence d’augmenter au fil des années pour atteindre près de 1’000 participantes et participants lors des dernières éditions. Le Triathlon met cependant un point d’honneur à préserver les valeurs populaires et inclusives qu’il défend, avec des catégories « Distance Olympique » et « Short Distance » ouvertes à toutes et tous, ainsi que des formats plus courts et non-compétitifs pour les plus jeunes et les familles.',
      pricing: null,
      website: null,
      schedule: null,
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 1,
              label: 'Tous publics',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 8,
              label: 'Compétition',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 8,
              label: 'Sport',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 5,
      title: 'Tour de Romandie Féminin',
      poster: {
        src: '/uploads/AffichesA3A4Definitives.SANSMARGES.jpg',
        width: 841,
        height: 1190,
      },
      starts_at: '2023-09-27',
      ends_at: '2023-10-10',
      location: 'Ville d’Yverdon-les-Bains et alentours',
      location_details: 'Ville d’Yverdon-les-Bains et alentours',
      status: null,
      featured: false,
      summary:
        'Pour sa deuxième édition, le Tour de Romandie Féminin proposera une étape en boucles à Yverdon-les-Bains. Faisant partie de l’UCI Women’s WorldTour, label le plus important du calendrier UCI, le TDR Féminin accentuera son intérêt auprès des meilleures cyclistes du monde ainsi que des médias. Les 15 meilleures équipes féminines seront invitées.\n\nLe Tour de Romandie Féminin a été lancé dans le cadre du 75e anniversaire du Tour de Romandie et a pour but la promotion et le développement du cyclisme féminin en Suisse et dans le monde, en rejoignant les valeurs de l’Union Cycliste Internationale.\n\nL’expérience de l’organisation du Tour de Romandie permettra de créer une course de qualité et d’un niveau professionnel sur 3 jours en gardant le côté convivial et rassembleur de l’événement. Le Tour de Romandie et le Tour de Romandie Féminin représenteront alors un vecteur de promotion pour la Suisse romande, son tourisme, son économie et offriront un spectacle fascinant pour le public et de superbes images aux téléspectatrices et téléspectateurs.',
      pricing: null,
      website: null,
      schedule: null,
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: null,
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 6,
      title: 'Sensibilisation aux plantes invasives',
      poster: {
        src: '/uploads/erda-estremera-0ZxdAGG4aWU-unsplash.jpg',
        width: 1000,
        height: 1498,
      },
      starts_at: '2023-12-24',
      ends_at: '2024-01-15',
      location: null,
      location_details: null,
      status: null,
      featured: false,
      summary:
        'La Ville d’Yverdon-les-Bains met en place pour la première fois une action participative de lutte contre les plantes néophytes invasives sur son territoire, en sollicitant l’aide de la population. Le principe est simple: pour une plante néophyte arrachée, la Commune offre une plante indigène en échange afin de favoriser la biodiversité.',
      pricing: null,
      website: null,
      schedule: null,
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: null,
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 7,
      title: 'Blaise Bersinger - Pain Surprise',
      poster: {
        src: '/uploads/Blaise-Bersinger_Pain-surprise_cA-la-Volette-1365x2048.jpg',
        width: 1365,
        height: 2048,
      },
      starts_at: '2023-09-22',
      ends_at: '2023-09-22',
      location: 'L’Échandole',
      location_details: 'Théâtre L’Échandole',
      status: EventStatus.SOLDOUT,
      featured: false,
      summary:
        'Un spectacle de et avec (mais pas écrit par) Blaise Bersinger\n\nBlaise Bersinger entre sur scène sans la moindre idée de ce qu’il s’apprête à jouer et ceci volontairement. Pendant environ une heure, humour et improvisation fricotent joyeusement dans une performance haletante, culottée et sempiternellement inédite.\n\nPain Surprise peut contenir des traces de gluten et potentiellement de toutes les autres choses qui existent dans le monde.',
      pricing: '32.- / 25.- / 15.- / 10.- / 5.-',
      website: 'https://echandole.ch/spectacles/blaise-bersinger/',
      schedule: '20h30',
      organizer_name: 'L’Échandole',
      organizer_address: 'Le Château\n1401 Yverdon-les-Bains',
      organizer_email: 'echandole@yverdon-les-bains.ch',
      organizer_phone: '+41 (0)24 423 65 78',
      organizer_website: 'https://echandole.ch/',
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 1,
              label: 'Tous publics',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 2,
              label: 'Spectacle',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 3,
              label: 'Audiovisuel',
            },
            {
              id: 5,
              label: 'Musique',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 8,
      title: 'Spark 1400',
      poster: {
        src: '/uploads/spark1400.jpg',
        width: 730,
        height: 410,
      },
      starts_at: '2023-09-13',
      ends_at: '2023-10-21',
      location: 'Centre sportif des Isles',
      location_details: null,
      status: null,
      featured: false,
      summary:
        'SPARK, c’est LE projet sympa, convivial et novateur de cet été qui s’adresse à tous les jeunes des villes et des régions partenaires !\n\nDu 13 septembre au 21 octobre, 1400-SPARK prend ses quartiers au Centre Sportif des Isles à Yverdon-les-Bains. Comme à Renens cet été, le dispositif éphémère proposera un programme d’activités variées : jeux, initiations sportives, danse urbaine, musique, art, culture, spectacles, animations sont au programme du lundi au dimanche, dès midi.\n\nIl y en aura pour tous les goûts ! Il sera aussi possible de venir entre ami.e.s pour simplement découvrir le lieu et profiter de l’ambiance de fin de journée en buvant un verre ou en musique.\n\nCe sera une occasion unique de découvrir de nouvelles activités, de faire des rencontres et de passer un bon moment gratuitement.',
      pricing: 'Gratuit',
      website: 'https://spark-vaud.ch/',
      schedule: 'Dès 12h, 7 jours sur 7',
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 3,
              label: 'Jeunes',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 5,
              label: 'Atelier, Animation & Médiation',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 8,
              label: 'Sport',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 9,
      title: 'Festival Source Concept',
      poster: {
        src: '/uploads/source-concept.jpg',
        width: 1000,
        height: 1412,
      },
      starts_at: '2023-09-15',
      ends_at: '2023-09-15',
      location: 'Salle de la Marive',
      location_details:
        'Salle de la Marive\nQuai de Nogent 1\n1400 Yverdon-les-Bains',
      status: null,
      featured: false,
      summary:
        'Découvrez la première édition d’un festival hip-hop à Yverdon-les-Bains ! Rejoignez Source Concept, le 15 septembre à la salle de La Marive pour une expérience unique. L’union de la diversité de la culture Hip-Hop et le partage de ces valeurs fondamentales : Peace, Love, Unity & having fun, seront au centre de l’ambiance de la soirée.\n\nNous retrouvons au programme les rappeurs français Coelho et Warend, ainsi que les artistes helvètes VVS Panther, Antoino, Ymyk & Amoor & Soliloquio afin de mettre en avant la scène hip-hop suisse. De plus, nous pourrons compter sur le talentueux Santo aux platines pour l’after Party.\n\nDe la découverte de nouveaux·elles talents aux artistes confirmé·e·s, chaque moment de cette soirée vous fera découvrir sa richesse artistique.',
      pricing: 'Dès 10.-',
      website:
        'https://www.petzi.ch/fr/events/53057-y-music-source-concept-coelho-warend-vvs-panther-antoino/',
      schedule: 'Dès 19h00',
      organizer_name: 'Y Music',
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: {
        publics: {
          label: 'Publics',
          values: [
            {
              id: 1,
              label: 'Tous publics',
            },
          ],
        },
        regions: {
          label: 'Régions',
          values: [
            {
              id: 7,
              label: 'Yverdon',
            },
          ],
        },
        types: {
          label: 'Types',
          values: [
            {
              id: 1,
              label: 'Concert',
            },
            {
              id: 4,
              label: 'Festival',
            },
          ],
        },
        domains: {
          label: 'Domaines',
          values: [
            {
              id: 5,
              label: 'Musique',
            },
          ],
        },
      },
    },
  },
  {
    type: 'Feature',
    properties: {
      id: 10,
      title:
        'Soirée d’information TRAVYS – renouvellement des voies en Chamard',
      poster: null,
      starts_at: '2023-09-14',
      ends_at: '2023-09-14',
      location: null,
      location_details: null,
      status: null,
      featured: false,
      summary:
        'TRAVYS convie la population des communes d’Yverdon-les-Bains et Montagny-près-Yverdon à une soirée d’information à propos du projet de renouvellement des voies et des passages à niveau du Marché de Gros et Le Bey dans le cadre de la mise à l’enquête publique des plans.',
      pricing: null,
      website: null,
      schedule: null,
      organizer_name: null,
      organizer_address: null,
      organizer_phone: null,
      organizer_email: null,
      organizer_website: null,
      categories: null,
    },
  },
];

export default events;
