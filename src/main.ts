import Editor from './Editor.svelte';

const app = new Editor({
  target: document.getElementById('app'),
  props: {
    clientId: '3455d2ae7653d9a8c27b',
    clientSecrets: 'fcb0ba37b5e31283b006234e00139da903a9f635'
  }
});

export default app;
