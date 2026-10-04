const screenList = [
  { key: 'discover', src: 'screenshot-discover.png', title: 'Discover', caption: 'Shelves arranged around your household library', alt: 'Actual Oneirodex Discover view' },
  { key: 'library', src: 'screenshot-library.png', title: 'Game catalog', caption: 'The collection with real filters and system labels', alt: 'Actual Oneirodex game catalog' },
  { key: 'systems', src: 'screenshot-systems.png', title: 'Systems', caption: 'Your owned library grouped by platform', alt: 'Actual Oneirodex Systems page' },
  { key: 'game', src: 'screenshot-game.png', title: 'Game page', caption: 'Actions, play paths, and title information in one place', alt: 'Actual Oneirodex game detail page' },
  { key: 'chat', src: 'screenshot-chat.png', title: 'Household', caption: 'Chat and presence live alongside the library', alt: 'Actual Oneirodex chat panel' },
  { key: 'big-picture', src: 'screenshot-big-picture.png', title: 'Big Picture', caption: 'A controller-friendly view for the television', alt: 'Actual Oneirodex Big Picture view' },
  { key: 'admin-ops', src: 'screenshot-admin-ops.png', title: 'Admin', caption: 'Operational health and household tools for administrators', alt: 'Actual Oneirodex admin operations dashboard' },
]
const featureGroups = {
  library: { eyebrow: 'FIND WHAT YOU ALREADY OWN', title: 'Library & discovery', items: [
    ['Multi-library scanning', 'Scan game folders and files across declared libraries; review unmatched items and fix uncertain matches by hand.'],
    ['Metadata and matching', 'Identify titles with configured metadata providers and local references. Ambiguous matches stay reviewable.'],
    ['Search, filters, freshness', 'Narrow the catalog by system, genre, play path, and more. Spot new, changed, or missing items.'],
    ['Discover shelves', 'Arrange curated and upcoming rows around the household collection, with custom shelves and timed events.'],
    ['Systems and set progress', 'Browse by console family; compare your own ROM set to admin-provided DAT references.'],
    ['Collections and reminders', 'Keep favorites, collections, wishlists, downloads, updates, release calendar, and news close at hand.'],
    ['Ownership registers', 'Track linked or imported store ownership for supported services. These registers do not download from stores.'],
    ['Related media & reference tools', 'Keep related adaptations and soundtracks with a title; inspect identity and DAT reports without acquiring files.'],
    ['Language and patch awareness', 'Filter titles by detected ROM language and find cataloged translation patches. Patch application keeps the original file protected.'],
    ['Optional acquire workflow', 'Search operator-configured indexers and send approved requests to a household download client. This is opt-in and operator managed.'],
  ]},
  play: { eyebrow: 'FOLLOW THE RIGHT PATH', title: 'Play & companion', items: [
    ['Browser play', 'WebRetro runs supported systems when the configured core and BIOS are ready; cloud-save bridge and cheats are available where supported.'],
    ['Desktop companion', 'Install, launch, and update compatible PC titles from the companion. Availability depends on the title and its setup.'],
    ['Download from your library', 'Fetch files from the household server when the member’s library access allows it.'],
    ['Big Picture and VR', 'Use the controller-oriented TV view and the optional Quest PWA experience.'],
    ['Mods and profiles', 'Browse supported mod catalogs and track loader requirements, profiles, and shareable setup codes. The companion stages files; it does not install loaders.'],
    ['Clear play status', 'Each title is marked for browser, companion, or catalog access according to what is actually configured.'],
    ['Game details', 'Review versions, extras, saved states, cheat files, system facts, and save locations from the title page.'],
    ['Front-end exports', 'Export compatible library metadata for external front ends without moving your source game files.'],
    ['Translation tools', 'Find cataloged patches and apply supported formats with the desktop companion; live translation is an optional overlay, not a rewritten ROM.'],
    ['VR and controller browse', 'Browse with gamepads, Big Picture, or the VR hub. Compatibility is labeled as native, community profile, or flat play.'],
  ]},
  household: { eyebrow: 'MADE FOR THE PEOPLE AT HOME', title: 'Household', items: [
    ['Members and access', 'Invite household members, assign roles, set quotas, and restrict library access with household rules.'],
    ['Spaces and chat', 'Create household or invite-only spaces with text channels, presence, profiles, direct messages, reactions, and threads.'],
    ['Friends and activity', 'Find friends, see presence, follow recent household activity, and keep a shared sense of what is being played.'],
    ['Optional voice and screenshare', 'Enable LiveKit as an optional self-hosted service for supported voice and screenshare sessions.'],
    ['Themes and rooms', 'Choose color themes, decade rooms, icon packs, and era-inspired type settings for your own view.'],
    ['Mobile and TV layouts', 'Use compact navigation and touch-sized controls on smaller screens or browse from the couch.'],
    ['Notifications and support', 'Follow mentions and invitations; report an issue to the household admin inbox.'],
    ['Ownership privacy', 'Store connections are ownership records. Store downloads and DRM workarounds are outside Oneirodex.'],
    ['Personal settings', 'Set tile density, preferred language, sorting, favorites, themes, icon packs, and room scenery for your account.'],
  ]},
  admin: { eyebrow: 'RUN YOUR OWN HOUSEHOLD SERVER', title: 'Admin & operations', items: [
    ['Libraries and scans', 'Declare storage locations, organize scans, watch job progress, and resolve the unmatched queue.'],
    ['Members and invites', 'Manage users, roles, registration rules, whitelists, invite links, and quotas.'],
    ['Operations dashboard', 'Review app services, database, queues, companion status, capacity indicators, and filtered logs.'],
    ['Settings and modules', 'Configure integrations and enable optional modules. OpenID Connect remains opt-in.'],
    ['Art and themes', 'Manage cover art, local-rendered art tools, system identity, uploaded theme packs, and defaults.'],
    ['Discover and content', 'Order shelves, curate featured items, schedule events, and manage announcements.'],
    ['Emulation readiness', 'Map cores and BIOS by system and expose browser play only when its prerequisites are present.'],
    ['Help and support inbox', 'Review reports from members and forward them to the project issue tracker when configured.'],
    ['Optional integrations', 'Connect metadata, notification, AI assist, identity, and acquisition services you operate. Sensitive or outbound modules are opt-in.'],
    ['Device and resource health', 'Review companion heartbeats, service status, queues, system resources, and GPU telemetry when a supported reader is configured.'],
    ['Safety and access controls', 'Use invite rules, library permissions, request roles, login rate limits, and optional malware scanning.'],
  ]},
}
const videoGrid = document.querySelector('#video-grid')
const videoPlayer = document.querySelector('#walkthrough-player')
const rawBase = 'https://raw.githubusercontent.com/cephyrixzyth/Oneirodex/main/docs/media/video/howto/'
const siteThemes = [
  { id: 'default', name: 'Default (system)', accent: '#49e394', swatch: '#49e394', background: '#080a0a' },
  { id: 'aurora', name: 'Arcade Neon', accent: '#22d3ee', swatch: '#22d3ee', background: '#071217' },
  { id: 'ember', name: 'Hot Cabinet', accent: '#f472b6', swatch: '#f472b6', background: '#160b12' },
  { id: 'violet', name: 'Modern Violet', accent: '#a78bfa', swatch: '#a78bfa', background: '#100d1b' },
  { id: 'forest', name: 'Vector Green', accent: '#4ade80', swatch: '#4ade80', background: '#09130d' },
  { id: 'ocean', name: 'Modern Ocean', accent: '#3b82f6', swatch: '#3b82f6', background: '#080f1b' },
  { id: 'rose', name: 'Modern Rose', accent: '#fb7185', swatch: '#fb7185', background: '#160c10' },
  { id: 'mono', name: 'Modern Mono', accent: '#94a3b8', swatch: '#94a3b8', background: '#101014' },
  { id: 'sunset', name: 'Coin Gold', accent: '#fbbf24', swatch: '#fbbf24', background: '#151108' },
  { id: 'ice', name: 'Modern Ice', accent: '#7dd3fc', swatch: '#7dd3fc', background: '#09121c' },
]
let videoData = []
let videoFilter = 'all'
let selectedVideoName = null
let screenIndex = 0
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

const themeOptions = document.querySelector('#theme-options')
const themePicker = document.querySelector('#theme-picker')
function applySiteTheme(themeId) {
  const theme = siteThemes.find((item) => item.id === themeId) || siteThemes[0]
  document.documentElement.dataset.siteTheme = theme.id
  document.querySelector('#current-theme-name').textContent = theme.name.replace(' (system)', '')
  document.querySelector('#current-theme-swatch').style.setProperty('--theme-swatch', theme.swatch)
  document.querySelector('meta[name="theme-color"]').content = theme.background
  themeOptions.querySelectorAll('[data-theme-option]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeOption === theme.id))
  })
  try { localStorage.setItem('oneirodex-site-theme', theme.id) } catch {}
}
themeOptions.innerHTML = siteThemes.map((theme) => `<button type="button" class="theme-option" data-theme-option="${theme.id}" aria-pressed="false"><span class="theme-swatch" style="--theme-swatch:${theme.swatch}" aria-hidden="true"></span><span>${theme.name}</span></button>`).join('')
themeOptions.addEventListener('click', (event) => {
  const button = event.target.closest('[data-theme-option]')
  if (!button) return
  applySiteTheme(button.dataset.themeOption)
  themePicker.open = false
})
applySiteTheme(document.documentElement.dataset.siteTheme)

function switchScreen(nextIndex, focusTab = false) {
  screenIndex = (nextIndex + screenList.length) % screenList.length
  const screen = screenList[screenIndex]
  const image = document.querySelector('#screen-image')
  const panel = document.querySelector('#viewer-panel')
  image.style.opacity = '0'
  window.setTimeout(() => {
    image.src = `assets/screenshots/${screen.src}`
    image.alt = screen.alt
    document.querySelector('#screen-caption').textContent = `${screen.title} · ${screen.caption}`
    document.querySelector('#screen-count').innerHTML = `${String(screenIndex + 1).padStart(2, '0')} <i>/</i> ${String(screenList.length).padStart(2, '0')}`
    document.querySelectorAll('.viewer-tabs [role=tab]').forEach((tab) => {
      const active = tab.dataset.screen === screen.key
      tab.setAttribute('aria-selected', String(active))
      tab.tabIndex = active ? 0 : -1
      if (active) panel.setAttribute('aria-labelledby', tab.id)
    })
    image.onload = () => { image.style.opacity = '1' }
    if (image.complete) image.style.opacity = '1'
    if (focusTab) document.querySelector(`#tab-${screen.key === 'chat' ? 'social' : screen.key === 'big-picture' ? 'big-picture' : screen.key === 'admin-ops' ? 'admin' : screen.key}`).focus()
  }, reduceMotion ? 0 : 130)
}
document.querySelectorAll('.viewer-tabs [role=tab]').forEach((tab) => {
  tab.addEventListener('click', () => switchScreen(screenList.findIndex((screen) => screen.key === tab.dataset.screen)))
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? screenList.length - 1 : screenIndex + (event.key === 'ArrowRight' ? 1 : -1)
    switchScreen(index, true)
  })
})
document.querySelector('#prev-screen').addEventListener('click', () => switchScreen(screenIndex - 1))
document.querySelector('#next-screen').addEventListener('click', () => switchScreen(screenIndex + 1))

function renderFeatureGroup(groupName) {
  const group = featureGroups[groupName] || featureGroups.library
  const target = document.querySelector('#feature-content')
  target.innerHTML = `<div class="feature-content-head"><div><span>${group.eyebrow}</span><h3>${group.title}</h3></div><span>${String(group.items.length).padStart(2, '0')} CAPABILITIES</span></div><div class="feature-list">${group.items.map(([title, desc]) => `<article class="feature-item"><h4>${title}</h4><p>${desc}</p></article>`).join('')}</div>`
  document.querySelectorAll('[data-feature-group]').forEach((button) => {
    const selected = button.dataset.featureGroup === groupName
    button.setAttribute('aria-selected', String(selected))
    button.tabIndex = selected ? 0 : -1
  })
}
document.querySelectorAll('[data-feature-group]').forEach((button) => button.addEventListener('click', () => renderFeatureGroup(button.dataset.featureGroup)))
document.querySelectorAll('[data-feature-group]').forEach((button) => button.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return
  event.preventDefault()
  const buttons = [...document.querySelectorAll('[data-feature-group]')]
  const i = buttons.indexOf(button)
  const next = (i + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length
  buttons[next].click()
  buttons[next].focus()
}))
function formatDuration(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}` }
function setSelectedVideo(clip, autoplay = false) {
  if (!clip) return
  selectedVideoName = clip.name
  videoPlayer.pause()
  videoPlayer.poster = `${rawBase}${clip.poster}`
  videoPlayer.innerHTML = `<source src="${rawBase}${clip.file}" type="video/mp4"><track kind="captions" src="${rawBase}${clip.vtt}" srclang="en" label="English" default>`
  videoPlayer.load()
  document.querySelector('#current-video-kicker').textContent = clip.kicker === 'Admins' ? 'ADMIN TOUR' : clip.kicker === 'Members' ? 'MEMBER TOUR' : 'OVERVIEW'
  document.querySelector('#current-video-title').textContent = clip.title
  document.querySelector('#current-video-description').textContent = clip.blurb
  if (autoplay) videoPlayer.play().catch(() => {})
}
function renderVideos() {
  const query = document.querySelector('#video-search').value.trim().toLowerCase()
  const visible = videoData.filter((clip) => (videoFilter === 'all' || clip.kicker === videoFilter) && `${clip.title} ${clip.blurb} ${clip.kicker}`.toLowerCase().includes(query))
  if (visible.length && !visible.some((clip) => clip.name === selectedVideoName)) setSelectedVideo(visible[0])
  videoGrid.innerHTML = visible.length ? visible.map((clip) => `<button class="video-choice${clip.name === selectedVideoName ? ' is-selected' : ''}" type="button" data-play-clip="${clip.name}" aria-pressed="${clip.name === selectedVideoName}"><span class="video-choice-title">${clip.title}</span><span class="video-choice-meta"><span>${clip.kicker === 'Admins' ? 'ADMIN' : clip.kicker === 'Members' ? 'MEMBER' : 'OVERVIEW'}</span><span>${formatDuration(clip.seconds)}</span></span></button>`).join('') : '<p class="empty-videos">No walkthroughs match that search. Try another feature.</p>'
  document.querySelector('#video-total').textContent = videoData.length
}
async function loadVideos() {
  try {
    const response = await fetch('assets/videos.json')
    if (!response.ok) throw new Error('Walkthrough index unavailable')
    videoData = await response.json()
    if (videoData.length) setSelectedVideo(videoData[0])
    renderVideos()
  } catch {
    videoGrid.innerHTML = '<p class="empty-videos">Walkthroughs are temporarily unavailable. Explore the real screen captures above or visit the project documentation.</p>'
  }
}
document.querySelector('#video-search').addEventListener('input', renderVideos)
document.querySelectorAll('[data-video-filter]').forEach((button) => button.addEventListener('click', () => {
  videoFilter = button.dataset.videoFilter
  document.querySelectorAll('[data-video-filter]').forEach((item) => item.classList.toggle('selected', item === button))
  renderVideos()
}))
videoGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-play-clip]')
  if (!button) return
  const clip = videoData.find((item) => item.name === button.dataset.playClip)
  if (!clip) return
  setSelectedVideo(clip, true)
  renderVideos()
})

const navButton = document.querySelector('.nav-toggle')
const nav = document.querySelector('#site-nav')
navButton.addEventListener('click', () => {
  const open = navButton.getAttribute('aria-expanded') === 'true'
  navButton.setAttribute('aria-expanded', String(!open))
  navButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation')
  nav.classList.toggle('open', !open)
})
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); navButton.setAttribute('aria-expanded', 'false') }))
document.querySelector('#year').textContent = new Date().getFullYear()
const demoConfig = JSON.parse(document.querySelector('#demo-config').textContent)
if (demoConfig.liveDemoUrl) {
  const demoButton = document.querySelector('#live-demo-button')
  demoButton.href = demoConfig.liveDemoUrl
  demoButton.target = '_blank'
  demoButton.rel = 'noreferrer'
  demoButton.innerHTML = 'Launch the live demo <span aria-hidden="true">↗</span>'
  document.querySelector('#demo-entry-description').textContent = 'Explore the live Oneirodex service in a separate, isolated demo environment. It uses sample data and stays separate from household libraries.'
  document.querySelector('#demo-status-label').textContent = 'Live demo instance'
  document.querySelector('#nav-demo-link').href = demoConfig.liveDemoUrl
  document.querySelector('#nav-demo-link').target = '_blank'
  document.querySelector('#nav-demo-link').rel = 'noreferrer'
}
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  }), { threshold: .1 })
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item))
} else document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'))
renderFeatureGroup('library')
loadVideos()
