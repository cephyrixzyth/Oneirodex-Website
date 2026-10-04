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
    ['Scan your libraries', 'Scan game folders across your libraries. Review anything Oneirodex could not match and correct it yourself.'],
    ['Game details and matching', 'Use metadata providers and local references to identify games. Check and fix uncertain matches before they are saved.'],
    ['Search and filters', 'Find games by system, genre, or how they can be played. See which games are new, changed, or missing.'],
    ['Discover shelves', 'Browse curated and upcoming games, or add your own shelves and events.'],
    ['Systems and set progress', 'Browse your games by console. Compare your ROM set with DAT references added by an admin.'],
    ['Collections and reminders', 'Keep favorites, wishlists, and downloads together, and check upcoming releases and news.'],
    ['Store ownership records', 'Keep track of games you own through supported stores. Oneirodex does not download games from those stores.'],
    ['Related media and reference tools', 'Link related games, adaptations, and soundtracks. Check game details and DAT reports without downloading files.'],
    ['Languages and patches', 'Filter games by detected ROM language and find listed translation patches. Applying a patch keeps the original file safe.'],
    ['Optional downloads', 'Search indexers set up by your server admin and send approved requests to the household download client. This feature is optional.'],
  ]},
  play: { eyebrow: 'FOLLOW THE RIGHT PATH', title: 'Play & companion', items: [
    ['Play in your browser', 'Play supported systems with WebRetro when the required core and BIOS are ready. Cloud saves and cheats are available for supported games.'],
    ['Desktop companion', 'Install, launch, and update compatible PC games from the companion. What is available depends on each game and its setup.'],
    ['Download from your library', 'Download files from your home server when your library access allows it.'],
    ['Big Picture and VR', 'Play from the controller-friendly TV view or try the optional Quest app.'],
    ['Mods and profiles', 'Browse supported mods and check which loaders they need. Share setup profiles with others. The companion prepares files but does not install loaders.'],
    ['Know how each game can be played', 'Each game shows whether it is ready for browser play, the companion, or catalog access.'],
    ['Game details', 'Find versions, extras, save states, cheats, system information, and save locations on each game page.'],
    ['Front-end exports', 'Export library details for other front ends without moving your game files.'],
    ['Translation tools', 'Find listed patches and apply supported formats with the desktop companion. Live translation is an optional overlay and does not change the ROM.'],
    ['VR and controller browsing', 'Browse with a gamepad, Big Picture, or the VR hub. Each game shows whether it supports VR natively, through a community profile, or in flat play.'],
  ]},
  household: { eyebrow: 'MADE FOR THE PEOPLE AT HOME', title: 'Household', items: [
    ['Members and access', 'Invite people, choose their roles, set quotas, and control which libraries they can use.'],
    ['Spaces and chat', 'Create spaces for your household or invited guests. Chat includes presence, profiles, messages, reactions, and threads.'],
    ['Friends and activity', 'Add friends, see who is around, and catch up on what people at home have been playing.'],
    ['Voice and screen sharing', 'Set up the optional LiveKit service for voice chat and screen sharing.'],
    ['Themes and rooms', 'Pick a color theme, room style, icon pack, and fonts for your view.'],
    ['Phone and TV layouts', 'Use touch-friendly controls on your phone or browse from the couch.'],
    ['Notifications and support', 'Keep up with mentions and invites, or send a problem to your household admin.'],
    ['Store ownership records', 'Link stores to keep track of games you own. Oneirodex does not download from stores or bypass DRM.'],
    ['Personal settings', 'Choose how games are sorted and displayed, along with your language, themes, icons, and room style.'],
  ]},
  admin: { eyebrow: 'RUN YOUR OWN HOUSEHOLD SERVER', title: 'Admin & operations', items: [
    ['Libraries and scans', 'Choose where your games are stored, start scans, follow their progress, and fix games that could not be matched.'],
    ['Members and invites', 'Manage accounts, roles, sign-up rules, invite links, and quotas.'],
    ['Server dashboard', 'Check services, the database, queues, companion status, available capacity, and logs.'],
    ['Settings and features', 'Set up integrations and turn on optional features. OpenID Connect is off until you enable it.'],
    ['Artwork and themes', 'Manage cover art, locally generated artwork, system details, uploaded themes, and defaults.'],
    ['Discover and announcements', 'Arrange shelves, pick featured games, schedule events, and post announcements.'],
    ['Emulation setup', 'Choose cores and BIOS files for each system. Browser play appears when the required pieces are ready.'],
    ['Help and support', 'Review member reports and send them to the project issue tracker if it is connected.'],
    ['Optional integrations', 'Connect the metadata, notifications, identity, or download services you use. Some features send data outside your server, so they stay off until enabled.'],
    ['Devices and server resources', 'Check companion connections, service status, queues, server resources, and GPU details when supported.'],
    ['Access and safety', 'Set invite rules and library permissions, limit sign-in attempts, and optionally scan files for malware.'],
  ]},
}
const videoGrid = document.querySelector('#video-grid')
const videoPlayer = document.querySelector('#walkthrough-player')
const rawBase = 'https://raw.githubusercontent.com/cephyrixzyth/Oneirodex/main/docs/media/video/howto/'
const mediaVersion = '20261004-5'
const siteThemes = [
  { id: 'default', name: 'Default (system)', accent: '#2fd67b', swatch: '#2fd67b', background: '#0b0d10' },
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
    image.src = `assets/screenshots/${screen.src}?v=${mediaVersion}`
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
  videoPlayer.poster = `${rawBase}${clip.poster}?v=${mediaVersion}`
  videoPlayer.innerHTML = `<source src="${rawBase}${clip.file}?v=${mediaVersion}" type="video/mp4"><track kind="captions" src="${rawBase}${clip.vtt}?v=${mediaVersion}" srclang="en" label="English" default>`
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
    const response = await fetch(`assets/videos.json?v=${mediaVersion}`)
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
