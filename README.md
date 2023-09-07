# Agenda Embed

Web component to browse, filter and search events; including a detail view.

## Usage

⚠️ **Work in progress**

Embed the web component directly in an HTML page:

```html
<!-- Render the component -->
<agenda-embed></agenda-embed>

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

<!-- Initialize the component -->
<script type="module" src="/path/to/agenda-embed.js"></script>
```

### Domain: filter the events displayed

You can globally restrict the widget to events of a given domain by using the `domain` attribute on the component:

```html
<agenda-embed domain="sport"></agenda-embed>
```

To display events from all domains, don’t specify this attribute.
