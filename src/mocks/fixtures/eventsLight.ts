import type {
  EventFilter,
  EventsCollection,
} from '../../services/eventsService';

import { EventStatus, type RawEventLight } from '../../models/EventLight';

const features: RawEventLight[] = [
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
      status: null,
      featured: true,
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
      status: EventStatus.SOLDOUT,
      featured: false,
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
      status: null,
      featured: false,
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
      location: 'L’Échandole',
      status: EventStatus.CANCELLED,
      featured: false,
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
      status: null,
      featured: false,
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
      status: null,
      featured: false,
    },
  },
];

const filters: EventFilter[] = [
  {
    label: 'Publics',
    slug: 'publics',
    options: [
      {
        id: 1,
        label: 'Tous publics',
      },
      {
        id: 2,
        label: 'Familles',
      },
      {
        id: 3,
        label: 'Jeunes',
      },
      {
        id: 4,
        label: 'Seniors',
      },
    ],
  },
  {
    label: 'Régions',
    slug: 'regions',
    options: [
      {
        id: 1,
        label: 'Grandson',
      },
      {
        id: 2,
        label: 'Orbe',
      },
      {
        id: 3,
        label: 'Romainmôtier',
      },
      {
        id: 4,
        label: 'Sainte-Croix',
      },
      {
        id: 5,
        label: 'Vallée de Joux',
      },
      {
        id: 6,
        label: 'Vallorbe',
      },
      {
        id: 7,
        label: 'Yverdon',
      },
      {
        id: 8,
        label: 'Yvonand',
      },
    ],
  },
  {
    label: 'Types',
    slug: 'types',
    options: [
      {
        id: 1,
        label: 'Concert',
      },
      {
        id: 2,
        label: 'Spectacle',
      },
      {
        id: 3,
        label: 'Exposition',
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
      {
        id: 7,
        label: 'Installation',
      },
    ],
  },
  {
    label: 'Domaines',
    slug: 'domains',
    options: [
      {
        id: 1,
        label: 'Art vivant',
      },
      {
        id: 2,
        label: 'Art visuel',
      },
      {
        id: 3,
        label: 'Audiovisuel',
      },
      {
        id: 4,
        label: 'Patrimoine & Architecture',
      },
      {
        id: 5,
        label: 'Musique',
      },
      {
        id: 6,
        label: 'Littérature',
      },
      {
        id: 7,
        label: 'Artisanat & Tradition',
      },
    ],
  },
];

const eventsLight: EventsCollection = {
  type: 'FeatureCollection',
  count: features.length,
  next: null,
  previous: null,
  features,
  filters,
};

export default eventsLight;
