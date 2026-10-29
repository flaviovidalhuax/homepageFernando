<template>
  <header class="top">
    <div class="wrap">
      <RouterLink class="brand" to="/" aria-label="365° Pro Pools Inc., inicio">
        <img src="/img/emblem.png" width="42" height="42" alt="">
        <span>365° Pro Pools</span>
      </RouterLink>
      <div class="tools">
        <button class="icon-btn" type="button" aria-label="Cambiar entre tema claro y oscuro" @click="toggleTheme">
          <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>
          <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        </button>
        <RouterLink class="btn small" :to="{ path: '/', hash: '#contacto' }">Cotizar</RouterLink>
      </div>
      <nav class="nav" aria-label="Secciones">
        <RouterLink :to="{ path: '/', hash: '#servicios' }">Servicios</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#proyectos' }">Proyectos</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#proceso' }">Cómo trabajamos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="wrap">
      <RouterLink class="brand" to="/">
        <img src="/img/emblem.png" width="42" height="42" alt="">
        <span>365° Pro Pools Inc.</span>
      </RouterLink>
      <span class="meta">pool.360.inc@gmail.com</span>
      <span class="meta">661 313 0870</span>
      <p class="legal">© {{ year }} 365° Pro Pools Inc. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

function toggleTheme() {
  const root = document.documentElement
  const current = root.getAttribute('data-theme')
  const dark = current ? current === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  root.setAttribute('data-theme', dark ? 'light' : 'dark')
}
</script>
