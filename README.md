# Agenda Embed

Web component to browse, filter and search events; including a detail view.

## Usage

⚠️ **Work in progress**

Embed the web component directly in an HTML page:

```html
<!-- Customize the style -->
<style>
  agenda-embed {
    --agd-color-primary: #008c6f;
    --agd-color-accent: #005d95;
    --agd-headings-font-family: 'Playfair Display', serif;
    --agd-headings-font-weight: 500;
    /* ... */
  }
</style>

<!-- Render the component -->
<agenda-embed></agenda-embed>

<!-- Initialize the component -->
<script type="module" src="/path/to/agenda-embed.js"></script>
```

### Filter events displayed by domain

You can globally restrict the widget to events of a given domain by using the `domain` attribute on the component:

```html
<agenda-embed domain="sport"></agenda-embed>
```

To display events from all domains, don’t specify this attribute.

### Customize the API target

Specify the `api-base-url` attribute to use a different API target:

```html
<agenda-embed api-base-url="https://www.yourdomain.ch/api"></agenda-embed>
```

This parameter is optional, `https://geocity.ch/rest` is the default.

The end-points called by the widget are:

- GET `/agenda` for the list of events
- GET `/agenda/:id` for the event details
