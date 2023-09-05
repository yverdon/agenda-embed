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
      website: 'https://www.le-castrum.ch/',
      schedule:
        '14.08: Apéritif de bienvenue dès 18h\n15.08: 11h à 04h du matin\n16.08: 12h à 04h du matin\n17.08: 11h à 5h du matin\n18.08: 12h à 17h',
      organizer: {
        address:
          'Association Castrum & Cie\nAvenue des Sports 5\n1400 Yverdon-les-Bains',
        phone: '+41 24 423 64 20',
        email: 'info@le-castrum.ch',
        website: 'https://www.le-castrum.ch/',
      },
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
      starts_at: '2023-08-30',
      ends_at: '2023-08-31',
      location: 'Théâtre Benno Besson',
      location_details:
        'Théâtre Benno Besson\nRue du Casino 9\n1400 Yverdon-les-Bains',
      status: EventStatus.SOLDOUT,
      featured: false,
      summary: null,
      pricing: null,
      website: null,
      schedule: null,
      organizer: null,
      categories: null,
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
      organizer: null,
      categories: null,
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
      organizer: null,
      categories: null,
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
      organizer: null,
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
      organizer: null,
      categories: null,
    },
  },
];

export default events;
