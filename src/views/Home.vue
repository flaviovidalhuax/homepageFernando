<template>
  <main>
    <section id="inicio" class="hero">
      <img
        src="/img/hero.jpg"
        width="1800"
        height="1013"
        alt="Alberca de forma libre con cascada de piedra, rodeada de jardín y piso de cantera"
      >
      <div class="wrap">
        <div>
          <h1>Tu alberca, diseñada a tu gusto.</h1>
          <p>
            Diseñamos, construimos, reparamos y damos mantenimiento a albercas.
            Cuéntanos cómo la imaginas y la hacemos realidad.
          </p>
          <div class="actions">
            <RouterLink class="btn" :to="{ path: '/', hash: '#contacto' }">Cotizar mi alberca</RouterLink>
            <RouterLink class="btn ghost" :to="{ path: '/', hash: '#proyectos' }">Ver proyectos</RouterLink>
          </div>
        </div>
        <div class="badge" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#ring" textLength="484" lengthAdjust="spacing">INTEGRIDAD · EFICIENCIA · CALIDAD · </textPath>
            </text>
          </svg>
          <img src="/img/emblem.png" width="320" height="320" alt="">
        </div>
      </div>
    </section>

    <section id="servicios" class="section">
      <div class="wrap services">
        <div class="intro">
          <h2>Todo lo que necesita tu alberca</h2>
          <p class="lede">
            Desde el primer trazo hasta la limpieza de cada semana.
            Elige un servicio y te preparamos una cotización.
          </p>
        </div>
        <ul class="svc-list">
          <li v-for="s in services" :key="s.name">
            <RouterLink :to="{ path: '/', hash: '#contacto' }" @click="servicio = s.name">
              <h3>{{ s.name }}</h3>
              <p>{{ s.text }}</p>
              <span class="go">
                Cotizar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <section id="proyectos" class="section projects">
      <div class="wrap">
        <div class="head">
          <h2>Proyectos</h2>
          <p class="lede">Albercas con cascadas, spas y bordes de piedra. Toca una foto para verla más grande.</p>
        </div>
        <ul class="shots">
          <li v-for="p in projects" :key="p.src">
            <button class="shot" type="button" @click="openPhoto(p)">
              <span class="ph"><img :src="p.src" width="900" height="1200" loading="lazy" :alt="p.alt"></span>
              <span class="cap">{{ p.short }}</span>
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section id="proceso" class="section">
      <div class="wrap">
        <h2>Cómo trabajamos</h2>
        <ol class="steps">
          <li v-for="(st, i) in steps" :key="st.title">
            <div class="n">{{ i + 1 }}</div>
            <h3>{{ st.title }}</h3>
            <p>{{ st.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section values" aria-labelledby="valores-t">
      <div class="wrap grid">
        <img
          class="logo"
          src="/img/logo.jpg"
          width="640"
          height="640"
          loading="lazy"
          alt="Logotipo de 365° Pro Pools Inc.: espiral azul dentro de un anillo dorado con las palabras Integrity, Efficiency y Quality"
        >
        <div>
          <h2 id="valores-t">Lo que prometemos en cada obra</h2>
          <dl>
            <div v-for="v in values" :key="v.name">
              <dt>{{ v.name }}</dt>
              <dd>{{ v.text }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section id="contacto" class="section">
      <div class="wrap contact">
        <div>
          <h2>Cuéntanos de tu alberca</h2>
          <p class="lede">Escríbenos qué necesitas. Te respondemos con una propuesta o con las dudas que tengamos.</p>
          <dl class="direct">
            <div>
              <dt>Correo</dt>
              <dd>
                <span>{{ EMAIL }}</span>
                <button class="copy" type="button" @click="copy('mail', EMAIL)">{{ copyLabel('mail') }}</button>
              </dd>
            </div>
            <div>
              <dt>Teléfono y WhatsApp</dt>
              <dd>
                <span>{{ PHONE_DISPLAY }}</span>
                <button class="copy" type="button" @click="copy('tel', PHONE_LOCAL)">{{ copyLabel('tel') }}</button>
              </dd>
            </div>
          </dl>
        </div>

        <form class="card" novalidate @submit.prevent>
          <div class="field">
            <label for="f-nombre">Nombre</label>
            <input
              id="f-nombre"
              ref="nombreEl"
              v-model="nombre"
              type="text"
              autocomplete="name"
              placeholder="Tu nombre"
              :aria-invalid="tried && !nombre.trim() ? 'true' : 'false'"
            >
          </div>
          <div class="field">
            <label for="f-servicio">Servicio</label>
            <select id="f-servicio" v-model="servicio">
              <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div class="field">
            <label for="f-mensaje">Mensaje</label>
            <textarea
              id="f-mensaje"
              ref="mensajeEl"
              v-model="mensaje"
              placeholder="Cuéntanos el tamaño del patio, lo que te gustaría o el problema que tiene tu alberca."
              :aria-invalid="tried && !mensaje.trim() ? 'true' : 'false'"
            />
          </div>
          <p class="err" role="alert">{{ error }}</p>
          <a class="btn" :href="waLink" target="_blank" rel="noopener" @click="onSend">Enviar por WhatsApp</a>
          <p class="hint">Se abre WhatsApp con tu mensaje listo para enviar.</p>
        </form>
      </div>
    </section>

    <dialog ref="lb" class="lb" aria-label="Foto del proyecto" @click="onDialogClick">
      <figure>
        <button class="x" type="button" aria-label="Cerrar" @click="closePhoto">×</button>
        <img :src="photo.src" :alt="photo.alt">
        <figcaption>{{ photo.alt }}</figcaption>
      </figure>
    </dialog>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

// Datos de contacto: cámbialos aquí
const EMAIL = 'pool.360.inc@gmail.com'
const PHONE_LOCAL = '6613130870'
const PHONE_DISPLAY = '661 313 0870'
const WHATSAPP_NUMBER = '526613130870' // código de país + número

const services = [
  { name: 'Diseño y construcción', text: 'Albercas a la medida de tu patio: forma, profundidad, cascadas, spa y acabados.' },
  { name: 'Limpieza', text: 'Agua clara todo el año: cepillado, aspirado y revisión de filtros.' },
  { name: 'Reparación', text: 'Fugas, grietas, bombas y filtros. Revisamos la causa y lo dejamos funcionando.' },
  { name: 'Mantenimiento', text: 'Visitas periódicas para cuidar el equipo, los químicos y la calidad del agua.' },
  { name: 'Renovación', text: 'Nuevo acabado, nuevo borde o nueva iluminación para la alberca que ya tienes.' },
]
const serviceOptions = [...services.map((s) => s.name), 'Aún no lo sé']

const projects = [
  { src: '/img/grotto.jpg', short: 'Gruta, cascada y tobogán de roca', alt: 'Alberca con gruta, cascada y tobogán de roca' },
  { src: '/img/spa.jpg', short: 'Spa circular y cascada de roca', alt: 'Spa circular junto a una cascada de roca con escalera' },
  { src: '/img/waterfall.jpg', short: 'Borde con cascada y cantera', alt: 'Borde de alberca con cascada de agua y acabado en cantera' },
  { src: '/img/dusk.jpg', short: 'Alberca con spa al atardecer', alt: 'Alberca con spa y jardín iluminado al atardecer' },
]

const steps = [
  { title: 'Platicamos', text: 'Conocemos tu patio, lo que imaginas y tu presupuesto.' },
  { title: 'Diseñamos', text: 'Te presentamos la forma, las medidas y los acabados para que decidas.' },
  { title: 'Construimos', text: 'Hacemos la obra con un plan claro de tiempos y materiales.' },
  { title: 'Cuidamos', text: 'Después de entregarla, la mantenemos limpia y funcionando.' },
]

const values = [
  { name: 'Integridad', text: 'Te decimos qué se puede hacer, cuánto cuesta y cuándo termina.' },
  { name: 'Eficiencia', text: 'Planeamos cada etapa para no alargar la obra ni tu espera.' },
  { name: 'Calidad', text: 'Materiales y acabados pensados para durar muchos veranos.' },
]

// Formulario -> WhatsApp
const nombre = ref('')
const mensaje = ref('')
const servicio = ref(serviceOptions[0])
const error = ref('')
const tried = ref(false)
const nombreEl = ref<HTMLInputElement | null>(null)
const mensajeEl = ref<HTMLTextAreaElement | null>(null)

const waLink = computed(() => {
  const txt = `Hola, soy ${nombre.value.trim() || '…'}. Me interesa: ${servicio.value}. ${mensaje.value.trim()}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`
})

function onSend(e: Event) {
  tried.value = true
  if (!nombre.value.trim() || !mensaje.value.trim()) {
    e.preventDefault()
    error.value = 'Escribe tu nombre y un mensaje para continuar.'
    ;(nombre.value.trim() ? mensajeEl.value : nombreEl.value)?.focus()
  } else {
    error.value = ''
  }
}

// Copiar correo / teléfono
const copied = ref('')
async function copy(key: string, value: string) {
  try {
    await navigator.clipboard.writeText(value)
    copied.value = key
  } catch {
    copied.value = 'manual-' + key
  }
  setTimeout(() => { copied.value = '' }, 1800)
}
function copyLabel(key: string) {
  if (copied.value === key) return 'Copiado'
  if (copied.value === 'manual-' + key) return 'Selecciónalo y copia'
  return 'Copiar'
}

// Visor de fotos
const lb = ref<HTMLDialogElement | null>(null)
const photo = reactive({ src: '', alt: '' })
function openPhoto(p: { src: string; alt: string }) {
  photo.src = p.src
  photo.alt = p.alt
  lb.value?.showModal()
}
function closePhoto() {
  lb.value?.close()
}
function onDialogClick(e: MouseEvent) {
  if (e.target === lb.value) closePhoto()
}
</script>
