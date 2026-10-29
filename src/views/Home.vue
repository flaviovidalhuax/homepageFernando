<template>
  <main>
    <section id="home" class="hero">
      <img
        src="/img/hero.jpg"
        width="1800"
        height="1013"
        alt="Freeform pool with a stone waterfall, surrounded by garden and a flagstone deck"
      >
      <div class="wrap">
        <div>
          <h1>Your pool, designed your way.</h1>
          <p>
            We design, build, repair and maintain swimming pools.
            Tell us how you picture yours and we will make it real.
          </p>
          <div class="actions">
            <RouterLink class="btn" :to="{ path: '/', hash: '#contact' }">Get a quote for my pool</RouterLink>
            <RouterLink class="btn ghost" :to="{ path: '/', hash: '#projects' }">See projects</RouterLink>
          </div>
        </div>
        <div class="badge" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#ring" textLength="484" lengthAdjust="spacing">INTEGRITY · EFFICIENCY · QUALITY · </textPath>
            </text>
          </svg>
          <img src="/img/emblem.png" width="320" height="320" alt="">
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="wrap services">
        <div class="intro">
          <h2>Everything your pool needs</h2>
          <p class="lede">
            From the first sketch to the weekly cleaning.
            Pick a service and we will prepare a quote for you.
          </p>
        </div>
        <ul class="svc-list">
          <li v-for="s in services" :key="s.name">
            <RouterLink :to="{ path: '/', hash: '#contact' }" @click="servicio = s.name">
              <h3>{{ s.name }}</h3>
              <p>{{ s.text }}</p>
              <span class="go">
                Get a quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <section id="projects" class="section projects">
      <div class="wrap">
        <div class="head">
          <h2>Projects</h2>
          <p class="lede">Pools with waterfalls, spas and stone edges. Tap a photo to see it larger.</p>
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

    <section id="process" class="section">
      <div class="wrap">
        <h2>How we work</h2>
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
          alt="365° Pro Pools Inc. logo: a blue spiral inside a gold ring with the words Integrity, Efficiency and Quality"
        >
        <div>
          <h2 id="valores-t">What we promise on every job</h2>
          <dl>
            <div v-for="v in values" :key="v.name">
              <dt>{{ v.name }}</dt>
              <dd>{{ v.text }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="wrap contact">
        <div>
          <h2>Tell us about your pool</h2>
          <p class="lede">Write to us about what you need. We will reply with a proposal or with any questions we have.</p>
          <dl class="direct">
            <div>
              <dt>Email</dt>
              <dd>
                <span>{{ EMAIL }}</span>
                <button class="copy" type="button" @click="copy('mail', EMAIL)">{{ copyLabel('mail') }}</button>
              </dd>
            </div>
            <div>
              <dt>Phone and WhatsApp</dt>
              <dd>
                <span>{{ PHONE_DISPLAY }}</span>
                <button class="copy" type="button" @click="copy('tel', PHONE_LOCAL)">{{ copyLabel('tel') }}</button>
              </dd>
            </div>
            <div>
              <dt>Telegram</dt>
              <dd>
                <span>+52 {{ PHONE_DISPLAY }}</span>
                <a class="copy" :href="tgLink" target="_blank" rel="noopener">Open chat</a>
              </dd>
            </div>
          </dl>
        </div>

        <form class="card" novalidate @submit.prevent>
          <div class="field">
            <label for="f-nombre">Name</label>
            <input
              id="f-nombre"
              ref="nombreEl"
              v-model="nombre"
              type="text"
              autocomplete="name"
              placeholder="Your name"
              :aria-invalid="tried && !nombre.trim() ? 'true' : 'false'"
            >
          </div>
          <div class="field">
            <label for="f-servicio">Service</label>
            <select id="f-servicio" v-model="servicio">
              <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div class="field">
            <label for="f-mensaje">Message</label>
            <textarea
              id="f-mensaje"
              ref="mensajeEl"
              v-model="mensaje"
              placeholder="Tell us your yard size, what you would like or the problem your pool has."
              :aria-invalid="tried && !mensaje.trim() ? 'true' : 'false'"
            />
          </div>
          <p class="err" role="alert">{{ error }}</p>
          <div class="send-row">
            <a class="btn" :href="waLink" target="_blank" rel="noopener" @click="onSend">Send on WhatsApp</a>
            <a class="btn alt" :href="tgLink" target="_blank" rel="noopener" @click="onSendTelegram">Send on Telegram</a>
          </div>
          <p class="hint" role="status">{{ hint }}</p>
        </form>
      </div>
    </section>

    <dialog ref="lb" class="lb" aria-label="Project photo" @click="onDialogClick">
      <figure>
        <button class="x" type="button" aria-label="Close" @click="closePhoto">×</button>
        <img :src="photo.src" :alt="photo.alt">
        <figcaption>{{ photo.alt }}</figcaption>
      </figure>
    </dialog>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

// Contact details: change them here
const EMAIL = 'pool.360.inc@gmail.com'
const PHONE_LOCAL = '6613130870'
const PHONE_DISPLAY = '661 313 0870'
const WHATSAPP_NUMBER = '526613130870' // country code + number

const services = [
  { name: 'Design and construction', text: 'Pools made to fit your yard: shape, depth, waterfalls, spa and finishes.' },
  { name: 'Cleaning', text: 'Clear water all year: brushing, vacuuming and filter checks.' },
  { name: 'Repair', text: 'Leaks, cracks, pumps and filters. We find the cause and get it working again.' },
  { name: 'Maintenance', text: 'Regular visits to look after the equipment, the chemicals and the water quality.' },
  { name: 'Renovation', text: 'A new finish, new coping or new lighting for the pool you already have.' },
]
const serviceOptions = [...services.map((s) => s.name), 'Not sure yet']

const projects = [
  { src: '/img/grotto.jpg', short: 'Grotto, waterfall and rock slide', alt: 'Pool with a rock grotto, waterfall and slide' },
  { src: '/img/spa.jpg', short: 'Round spa and rock waterfall', alt: 'Round spa next to a rock waterfall with steps' },
  { src: '/img/waterfall.jpg', short: 'Waterfall edge and flagstone', alt: 'Pool edge with a waterfall and flagstone finish' },
  { src: '/img/dusk.jpg', short: 'Pool with spa at dusk', alt: 'Pool with spa and lit garden at dusk' },
]

const steps = [
  { title: 'We talk', text: 'We learn about your yard, what you picture and your budget.' },
  { title: 'We design', text: 'We show you the shape, dimensions and finishes so you can decide.' },
  { title: 'We build', text: 'We build with a clear plan for schedule and materials.' },
  { title: 'We care', text: 'After handover, we keep it clean and running.' },
]

const values = [
  { name: 'Integrity', text: 'We tell you what can be done, what it costs and when it will be finished.' },
  { name: 'Efficiency', text: 'We plan each stage so the job does not drag on.' },
  { name: 'Quality', text: 'Materials and finishes built to last many summers.' },
]

// Form -> WhatsApp
const nombre = ref('')
const mensaje = ref('')
const servicio = ref(serviceOptions[0])
const error = ref('')
const tried = ref(false)
const nombreEl = ref<HTMLInputElement | null>(null)
const mensajeEl = ref<HTMLTextAreaElement | null>(null)

const messageText = computed(
  () => `Hi, my name is ${nombre.value.trim() || '…'}. I am interested in: ${servicio.value}. ${mensaje.value.trim()}`,
)
const waLink = computed(() => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText.value)}`)
const tgLink = `https://t.me/+${WHATSAPP_NUMBER}`
const hint = ref(
  'WhatsApp opens with your message ready to send. Telegram opens the chat and copies your message so you can paste it.',
)

function validate(e: Event): boolean {
  tried.value = true
  if (!nombre.value.trim() || !mensaje.value.trim()) {
    e.preventDefault()
    error.value = 'Enter your name and a message to continue.'
    ;(nombre.value.trim() ? mensajeEl.value : nombreEl.value)?.focus()
    return false
  }
  error.value = ''
  return true
}

function onSend(e: Event) {
  validate(e)
}

async function onSendTelegram(e: Event) {
  if (!validate(e)) return
  try {
    await navigator.clipboard.writeText(messageText.value)
    hint.value = 'Message copied. Paste it in the Telegram chat.'
  } catch {
    hint.value = 'Telegram opens the chat. Type or paste your message there.'
  }
}

// Copy email / phone
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
  if (copied.value === key) return 'Copied'
  if (copied.value === 'manual-' + key) return 'Select it and copy'
  return 'Copy'
}

// Photo viewer
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
