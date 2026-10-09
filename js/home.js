import { CONFIG } from '../config.js?v=20261009090817'
import { STRINGS, pickLanguage, saveLanguage } from './i18n.js?v=20261009090817'

const $ = id => document.getElementById(id)
const el = (tag, props = {}, ...children) => {
  const node = Object.assign(document.createElement(tag), props)
  node.append(...children)
  return node
}
let lang = pickLanguage()

function render() {
  const s = STRINGS[lang]
  const n = CONFIG.stateName
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant'
  document.title = s.homeTitle(n)
  $('lang').value = lang
  $('stateNo').textContent = n
  $('tagline').textContent = s.tagline
  $('lead').textContent = s.lead(n)
  $('cta').textContent = s.applyCta
  $('cta2').textContent = s.applyCta
  $('statusCta').textContent = s.statusCta
  $('routeTitle').textContent = s.routeTitle
  $('route').replaceChildren(...s.steps.map(([title, desc]) =>
    el('li', {}, el('b', { textContent: title }), el('span', { textContent: desc }))))
  $('alliancesTitle').textContent = s.alliancesTitle(n)
  $('alliances').replaceChildren(...CONFIG.clans.map(c => el('li', {},
    el('span', { className: 'patch' }, c.badge ? el('img', { src: c.badge, alt: '', width: 46, height: 52 }) : ''),
    el('span', { className: 'meta-box' },
      el('span', { className: 'tag', textContent: c.tag }),
      el('span', { className: 'name', textContent: c.name, title: c.name })))))
  $('finalTitle').textContent = s.finalTitle
  $('finalText').textContent = s.finalText
  $('footer').textContent = s.footer(n)
  $('credit').textContent = s.credit
}

$('lang').addEventListener('change', e => { lang = e.target.value; saveLanguage(lang); render() })
render()
