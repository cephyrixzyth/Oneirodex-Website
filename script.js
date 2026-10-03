const games = [...document.querySelectorAll('.game-card')]
const genreButtons = [...document.querySelectorAll('.shelf-chip[data-genre]')]
const viewButtons = [...document.querySelectorAll('.side-link[data-view]')]
const gameGrid = document.querySelector('#game-grid')
const emptyState = document.querySelector('#empty-state')
const searchInput = document.querySelector('#search')
const dialog = document.querySelector('#detail-dialog')
const videoDialog = document.querySelector('#video-dialog')
const favorites = new Set()

const videoClips = {
  tour: { file: 'howto-tour', title: 'Meet Oneirodex' },
  library: { file: 'howto-library', title: 'Find a game in your library' },
  systems: { file: 'howto-systems', title: 'Systems and set completion' },
}

let selectedGenre = 'all'
let selectedView = 'discover'
let selectedGame = null

function renderGames() {
  const term = searchInput.value.trim().toLowerCase()
  const visibleGames = games.filter((game) => {
    const genreMatches = selectedGenre === 'all' ||
      (selectedView === 'systems'
        ? game.dataset.system.toLowerCase().includes(selectedGenre)
        : game.dataset.genre === selectedGenre)
    const searchMatches = !term || `${game.dataset.title} ${game.dataset.genre} ${game.dataset.owner} ${game.dataset.system}`.toLowerCase().includes(term)
    return genreMatches && searchMatches
  })

  const sortMode = document.querySelector('#sort-games').value
  if (sortMode === 'az') {
    const sorted = [...visibleGames].sort((a, b) => a.dataset.title.localeCompare(b.dataset.title))
    sorted.forEach((game) => gameGrid.insertBefore(game, emptyState))
  } else {
    games.forEach((game) => gameGrid.insertBefore(game, emptyState))
  }

  games.forEach((game) => { game.hidden = !visibleGames.includes(game) })
  emptyState.hidden = visibleGames.length > 0
}

function setGenre(genre) {
  selectedGenre = genre
  genreButtons.forEach((button, index) => {
    const selected = index < 4 && button.dataset.genre === genre
    button.classList.toggle('selected', selected)
    button.setAttribute('aria-pressed', String(selected))
  })
  renderGames()
}

function setView(view) {
  selectedView = view
  viewButtons.forEach((button) => {
    const selected = button.dataset.view === view
    button.classList.toggle('active', selected)
    button.setAttribute('aria-pressed', String(selected))
  })

  const title = document.querySelector('#view-name')
  const heading = document.querySelector('#demo-heading')
  const subtitle = document.querySelector('#demo-subtitle')
  const kicker = document.querySelector('#view-kicker')
  const isSystems = view === 'systems'
  const isCatalog = view === 'catalog'

  title.textContent = isSystems ? 'Systems' : isCatalog ? 'Game catalog' : 'Discover'
  heading.textContent = isSystems ? 'Pick a system.' : isCatalog ? 'The whole collection.' : 'What sounds fun?'
  subtitle.textContent = isSystems
    ? 'A familiar way to explore the sample library.'
    : isCatalog ? 'Every game in one searchable place.' : 'A few favorites are waiting for you.'
  kicker.textContent = isSystems ? 'BROWSE BY SYSTEM' : isCatalog ? 'THE SAMPLE COLLECTION' : 'THURSDAY · 7:42 PM'

  const options = isSystems
    ? [['all', 'All systems'], ['pc', 'PC'], ['arcade', 'Arcade'], ['handheld', 'Handheld']]
    : [['all', 'For you'], ['adventure', 'Adventure'], ['cozy', 'Cozy'], ['arcade', 'Arcade']]

  genreButtons.slice(0, 4).forEach((button, index) => {
    const option = options[index]
    button.dataset.genre = option[0]
    button.innerHTML = `${option[1]}${index === 0 && !isSystems ? ' <span>06</span>' : ''}`
    button.hidden = !option
  })
  genreButtons[4].innerHTML = isSystems ? '16-bit' : 'All games <span aria-hidden="true">↗</span>'
  genreButtons[4].dataset.genre = isSystems ? '16-bit' : 'all'
  genreButtons[4].hidden = false

  setGenre('all')
}

viewButtons.forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)))
genreButtons.forEach((button) => button.addEventListener('click', () => setGenre(button.dataset.genre)))
searchInput.addEventListener('input', renderGames)
document.querySelector('#sort-games').addEventListener('change', renderGames)

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) && !dialog.open && !videoDialog.open) {
    event.preventDefault()
    searchInput.focus()
  }
})

function openGame(game) {
  selectedGame = game
  const title = game.dataset.title
  document.querySelector('#detail-title').textContent = title
  document.querySelector('#detail-system').textContent = `${game.dataset.system} · ${game.dataset.genre.toUpperCase()}`
  document.querySelector('#detail-description').textContent = game.dataset.description
  document.querySelector('#detail-owner').textContent = `Added by ${game.dataset.owner}`
  document.querySelector('#detail-avatar').textContent = game.dataset.owner[0]
  document.querySelector('#detail-path-title').textContent = `Play path: ${game.dataset.path}.`
  document.querySelector('#detail-path-copy').textContent = game.dataset.path === 'Catalog'
    ? 'This sample is catalog-only in Oneirodex. Its play status stays clear, so you know where it can run.'
    : 'This sample uses a desktop companion. Oneirodex shows a browser Play button only when that system supports it.'

  const art = document.querySelector('#dialog-cover')
  art.dataset.art = game.dataset.art
  art.innerHTML = `<strong>${title.toUpperCase()}</strong>`
  updateFavoriteButton()
  dialog.showModal()
}

function updateFavoriteButton() {
  const isSaved = favorites.has(selectedGame?.dataset.title)
  const button = document.querySelector('#favorite-toggle')
  button.classList.toggle('saved', isSaved)
  button.innerHTML = `<span aria-hidden="true">${isSaved ? '♥' : '♡'}</span> ${isSaved ? 'Saved to favorites' : 'Save to favorites'}`
  if (selectedGame) {
    const tileFavorite = selectedGame.querySelector('.favorite')
    tileFavorite.textContent = isSaved ? '♥' : '♡'
    tileFavorite.classList.toggle('is-saved', isSaved)
  }
}

games.forEach((game) => game.addEventListener('click', () => openGame(game)))
document.querySelector('#favorite-toggle').addEventListener('click', () => {
  if (!selectedGame) return
  const title = selectedGame.dataset.title
  if (favorites.has(title)) favorites.delete(title)
  else favorites.add(title)
  updateFavoriteButton()
})

function closeOnBackdrop(target, event) {
  if (event.target === target) target.close()
}

dialog.addEventListener('click', (event) => closeOnBackdrop(dialog, event))
videoDialog.addEventListener('click', (event) => closeOnBackdrop(videoDialog, event))
document.querySelectorAll('.dialog-x').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()))
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close())

document.querySelectorAll('[data-video]').forEach((button) => button.addEventListener('click', () => {
  const clip = videoClips[button.dataset.video]
  if (!clip) return
  const base = `https://raw.githubusercontent.com/chrisjrovira/Oneirodex/main/docs/media/video/howto/${clip.file}`
  document.querySelector('#video-dialog-title').textContent = clip.title
  document.querySelector('#video-dialog-frame').innerHTML = `<video controls autoplay playsinline crossorigin="anonymous" poster="${base}.png"><source src="${base}.mp4" type="video/mp4"><track kind="captions" src="${base}.vtt" srclang="en" label="English" default></video>`
  videoDialog.showModal()
  videoDialog.querySelector('video').focus({ preventScroll: true })
}))

videoDialog.addEventListener('close', () => { document.querySelector('#video-dialog-frame').replaceChildren() })

const menuButton = document.querySelector('.menu-toggle')
const nav = document.querySelector('#nav-links')
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!expanded))
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation')
  nav.classList.toggle('open', !expanded)
})
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.setAttribute('aria-label', 'Open navigation')
  nav.classList.remove('open')
}))

const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })
  revealItems.forEach((item) => observer.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

renderGames()
