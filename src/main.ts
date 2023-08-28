import { defineCustomElement } from 'vue';

import AgendaEmbed from './AgendaEmbed.ce.vue';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

customElements.define('agenda-embed', defineCustomElement(AgendaEmbed));
