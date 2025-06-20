import AsyncStorage from '@react-native-async-storage/async-storage'
import { create, StoreApi, UseBoundStore } from 'zustand'
const initialWords = [
  {
    text: '出る',
    hiragana: 'deru',
    translation: 'go out, leave',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06128A.mp3'
  },

  {
    text: '使う',
    hiragana: 'tsukau',
    translation: 'use, make use of',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05824A.mp3'
  },

  { text: '所', hiragana: 'tokoro', translation: 'place', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06416A.mp3' },

  {
    text: '作る',
    hiragana: 'tsukuru',
    translation: 'make, create',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05866A.mp3'
  },

  {
    text: '持つ',
    hiragana: 'motsu',
    translation: 'have, possess',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09291A.mp3'
  },

  { text: '買う', hiragana: 'kau', translation: 'buy', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01429A.mp3' },

  {
    text: '同じ',
    hiragana: 'onaji',
    translation: 'same, identical',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01160A.mp3'
  },

  {
    text: 'まだ',
    hiragana: 'mada',
    translation: '(not) yet, still',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08718A.mp3'
  },

  {
    text: '聞く',
    hiragana: 'kiku',
    translation: 'hear, ask, listen',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02020A.mp3'
  },

  { text: '子供', hiragana: 'kodomo', translation: 'child', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03174A.mp3' },

  {
    text: '熱い',
    hiragana: 'atsui',
    translation: 'hot (to touch)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00157A.mp3'
  },

  { text: 'どうぞ', hiragana: 'douzo', translation: 'please', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06282A.mp3' },

  {
    text: '午後',
    hiragana: 'gogo',
    translation: 'afternoon, p.m.',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03085A.mp3'
  },

  { text: '長い', hiragana: 'nagai', translation: 'long', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06628A.mp3' },

  {
    text: '今年',
    hiragana: 'kotoshi',
    translation: 'this year (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03165A.mp3'
  },

  {
    text: '彼女',
    hiragana: 'kanojo',
    translation: 'she, girlfriend',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01741A.mp3'
  },

  { text: 'どう', hiragana: 'dou', translation: 'how, what', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06208A.mp3' },

  {
    text: '言葉',
    hiragana: 'kotoba',
    translation: 'word, language',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03172A.mp3'
  },

  { text: '顔', hiragana: 'kao', translation: 'face', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01443A.mp3' },

  {
    text: '終わる',
    hiragana: 'owaru',
    translation: 'finish, end',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01270A.mp3'
  },

  {
    text: '一つ',
    hiragana: 'hitotsu',
    translation: 'one (thing)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07770A.mp3'
  },

  {
    text: '始める',
    hiragana: 'hajimeru',
    translation: 'start (something)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07303A.mp3'
  },

  {
    text: '起きる',
    hiragana: 'okiru',
    translation: 'get up, get out of bed',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01028A.mp3'
  },

  { text: '春', hiragana: 'haru', translation: 'spring', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07500A.mp3' },

  {
    text: '午前',
    hiragana: 'gozen',
    translation: 'morning, a.m.',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03125A.mp3'
  },

  {
    text: '別',
    hiragana: 'betsu',
    translation: 'another, different',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08319A.mp3'
  },

  { text: '若い', hiragana: 'wakai', translation: 'young', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW10002A.mp3' },

  {
    text: '車',
    hiragana: 'kuruma',
    translation: 'car, automobile',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02551A.mp3'
  },

  { text: '置く', hiragana: 'oku', translation: 'put, place', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01032A.mp3' },

  { text: '働く', hiragana: 'hataraku', translation: 'work', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07338A.mp3' },

  {
    text: '難しい',
    hiragana: 'muzukashii',
    translation: 'difficult',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09089A.mp3'
  },

  { text: '呼ぶ', hiragana: 'yobu', translation: 'call, name', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09717A.mp3' },

  {
    text: '安い',
    hiragana: 'yasui',
    translation: 'cheap, inexpensive',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09409A.mp3'
  },

  {
    text: '分かる',
    hiragana: 'wakaru',
    translation: 'understand',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW10011A.mp3'
  },

  { text: '広い', hiragana: 'hiroi', translation: 'wide, big', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07904A.mp3' },

  { text: '数', hiragana: 'kazu', translation: 'number', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01604A.mp3' },

  {
    text: '近い',
    hiragana: 'chikai',
    translation: 'near, close',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05562A.mp3'
  },

  { text: '走る', hiragana: 'hashiru', translation: 'run', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07309A.mp3' },

  { text: '入れる', hiragana: 'ireru', translation: 'put in', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00613A.mp3' },

  {
    text: '教える',
    hiragana: 'oshieru',
    translation: 'teach, tell',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01077A.mp3'
  },

  {
    text: '歩く',
    hiragana: 'aruku',
    translation: 'walk, go on foot',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00291A.mp3'
  },

  { text: '会う', hiragana: 'au', translation: 'meet', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00027A.mp3' },

  { text: '書く', hiragana: 'kaku', translation: 'write', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01487A.mp3' },

  { text: '頭', hiragana: 'atama', translation: 'head', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00146A.mp3' },

  { text: '売る', hiragana: 'uru', translation: 'sell', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00795A.mp3' },

  {
    text: '体',
    hiragana: 'karada',
    translation: 'body, physique, physical condition',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01813A.mp3'
  },

  {
    text: '直ぐ',
    hiragana: 'sugu',
    translation: 'at once, soon',
    audioURL: 'https://assets0.iknow.jp/assets/users/Smart.fm/6l6f811fh7dk0.mp3'
  },

  { text: '飛ぶ', hiragana: 'tobu', translation: 'fly', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06495A.mp3' },

  { text: '読む', hiragana: 'yomu', translation: 'read', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09728A.mp3' },

  { text: '飲む', hiragana: 'nomu', translation: 'drink', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07115A.mp3' },

  { text: '古い', hiragana: 'furui', translation: 'old', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08200A.mp3' },

  {
    text: '質問',
    hiragana: 'shitsumon',
    translation: 'question',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03783A.mp3'
  },

  { text: '早い', hiragana: 'hayai', translation: 'early', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07465A.mp3' }
]

const createEntry = (word: string, hiragana: string, meaning: string, sound: string): VocabEntry => {
  const now = Date.now()
  return {
    word,
    hiragana,
    meaning,
    sound,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    dueDate: now,
    lastReviewed: now,
    isActive: true,
    lapseState: false
  }
}

const save = (vocab: Record<string, VocabEntry>, lastActivation: number) => {
  localStorage.setItem('vocab', JSON.stringify(vocab))
  localStorage.setItem('lastActivation', String(lastActivation))
}

const updateEntry = (entry: VocabEntry, quality: 1 | 3 | 4 | 5): VocabEntry => {
  const now = Date.now()
  let { easeFactor, repetitions, interval, lapseState } = entry
  let dueDate = now

  if (quality >= 3) {
    repetitions += 1

    if (!lapseState) {
      if (repetitions === 1) {
        interval = 0 // Lernphase Schritt 1: 10 Minuten
        dueDate = now + 10 * 60 * 1000
      } else if (repetitions === 2) {
        interval = 1 // Lernphase Schritt 2: 1 Tag
        dueDate = now + interval * 24 * 60 * 60 * 1000
      } else if (repetitions === 3 && !lapseState) {
        interval = 6 // Start Intervallphase
        dueDate = now + interval * 24 * 60 * 60 * 1000
      } else {
        interval = Math.round(interval * easeFactor)
        dueDate = now + interval * 24 * 60 * 60 * 1000
      }
      easeFactor = Math.max(MIN_EF, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
    } else {
      if (repetitions === 1) {
        dueDate = now + 10 * 60 * 1000
      } else {
        interval = Math.round(interval * easeFactor)
        dueDate = now + interval * 24 * 60 * 60 * 1000
        repetitions = 4
        lapseState = false
        easeFactor = Math.max(MIN_EF, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
      }
    }
  } else {
    // Bei Fehler → Zurück zur Lernphase
    interval = Math.round(entry.interval * 0.7)
    dueDate = now
    lapseState = repetitions >= 3 ? true : lapseState
    repetitions = 0
    easeFactor = Math.max(MIN_EF, easeFactor - 0.2) <= 1.3 ? Math.max(MIN_EF, easeFactor - 0.2) : 1.3
  }

  return {
    ...entry,
    easeFactor,
    interval,
    repetitions,
    lapseState,
    lastReviewed: now,
    dueDate
  }
}

const MIN_EF = 1.3
// const DAILY_NEW_LIMIT = 10

export interface VocabEntry {
  word: string
  hiragana: string
  meaning: string
  sound: string
  easeFactor: number
  interval: number
  repetitions: number
  dueDate: number
  lastReviewed: number
  isActive: boolean
  lapseState: boolean
}

interface VocabStore {
  vocab: Record<string, VocabEntry>
  lastActivation: number
  update: (word: string, quality: 1 | 3 | 4 | 5) => void
  getNext: () => VocabEntry[] | null
  activateNow: (word: string) => void
  markKnown: (word: string) => void
  resetWord: (word: VocabEntry) => void
  reset: () => void
  getMatchWords: () => VocabEntry[] | null
  load: () => Promise<void>
}

export const useVocabStore: UseBoundStore<StoreApi<VocabStore>> = create<VocabStore>((set) => ({
  lastActivation: 0,
  vocab: {},

  load: async () => {
    let result: { vocab: Record<string, VocabEntry>; lastActivation: number } = { vocab: {}, lastActivation: 0 }
    const data = await AsyncStorage.getItem('vocab')
    const time = Number((await AsyncStorage.getItem('lastActivation')) || '0')
    if (data) {
      result = { vocab: JSON.parse(data), lastActivation: time }
    } else {
      const entries = Object.fromEntries(initialWords.map((w) => [w.text, createEntry(w.text, w.hiragana, w.translation, w.audioURL)]))
      result = { vocab: entries, lastActivation: 0 }
    }
    set({ vocab: result.vocab, lastActivation: result.lastActivation })
  },

  update: (word: string, quality: 1 | 3 | 4 | 5) => {
    const state = useVocabStore.getState()
    const updated = updateEntry(state.vocab[word], quality)
    const newVocab = { ...state.vocab, [word]: updated }
    save(newVocab, state.lastActivation)
    useVocabStore.setState({ vocab: newVocab })
  },
  getNext: (): VocabEntry[] | null => {
    const now = Date.now()
    const state = useVocabStore.getState()

    //  const { vocab, lastActivation } = state
    const { vocab } = state

    // Neue Aktivierung falls neuer Tag
    //   const lastDay = new Date(lastActivation).toDateString()
    //  const today = new Date(now).toDateString()

    const updatedVocab = { ...vocab }

    // if (lastDay !== today) {
    // Neue Aktivierung von 10 Wörtern pro Tag
    // const inactive = Object.values(vocab).filter((v) => !v.isActive)
    // const toActivate = inactive.slice(0, DAILY_NEW_LIMIT)

    // for (const entry of toActivate) {
    //   updatedVocab[entry.word] = { ...entry, isActive: true }
    // }

    // aktiviert alle in dne nächsten 24 Stunden fälligen Karten

    // const active = Object.values(vocab).filter((v) => v.isActive)

    // for (const entry of active) {
    //   if (entry.dueDate < now + 1 * 24 * 60 * 60 * 1000) {
    //     updatedVocab[entry.word] = { ...entry, dueDate: now }
    //   }
    // }

    // save(updatedVocab, now)
    // useVocabStore.setState({ vocab: updatedVocab, lastActivation: now })
    // }

    const due = Object.values(updatedVocab)
      .filter((v: VocabEntry) => {
        if (!v.isActive) return false
        if (v.dueDate > now) return false

        // Alle fälligen Karten zeigen, auch wenn sie heute schon gesehen wurden (wenn dueDate wieder <= now)
        return true
      })
      .sort((a: VocabEntry, b: VocabEntry) => a.dueDate - b.dueDate)
    return due.length > 0 ? due : null
  },
  reset: () => {
    const entries = Object.fromEntries(initialWords.map((w) => [w.text, createEntry(w.text, w.hiragana, w.translation, w.audioURL)]))
    AsyncStorage.removeItem('vocab')
    AsyncStorage.removeItem('lastActivation')
    useVocabStore.setState({ vocab: entries, lastActivation: 0 })
  },
  setApiKey: (key: string) => {
    AsyncStorage.setItem('apikey', String(key))
  },
  activateNow: (word: string) => {
    const state = useVocabStore.getState()
    const now = Date.now()
    const entry = state.vocab[word]
    const updated = { ...entry, isActive: true, dueDate: now }
    const newVocab = { ...state.vocab, [word]: updated }
    save(newVocab, state.lastActivation)
    useVocabStore.setState({ vocab: newVocab })
  },

  markKnown: (word: string) => {
    const state = useVocabStore.getState()
    const now = Date.now()
    const updated = {
      ...state.vocab[word],
      isActive: true,
      easeFactor: 2.6,
      interval: 21,
      repetitions: 4,
      dueDate: now + 21 * 24 * 60 * 60 * 1000,
      lastReviewed: now
    }
    const newVocab = { ...state.vocab, [word]: updated }
    save(newVocab, state.lastActivation)
    useVocabStore.setState({ vocab: newVocab })
  },

  resetWord: (w: VocabEntry) => {
    const state = useVocabStore.getState()
    const updated = createEntry(w.word, w.hiragana, w.meaning, w.sound)
    const newVocab = { ...state.vocab, [w.word]: updated }
    save(newVocab, state.lastActivation)
    useVocabStore.setState({ vocab: newVocab })
  },

  getMatchWords: (): VocabEntry[] | null => {
    const now = Date.now()
    const state = useVocabStore.getState()
    //  const { vocab, lastActivation } = state
    const { vocab } = state

    // Neue Aktivierung falls neuer Tag
    //   const lastDay = new Date(lastActivation).toDateString()
    //  const today = new Date(now).toDateString()

    const updatedVocab = { ...vocab }
    // if (lastDay !== today) {
    // Neue Aktivierung von 10 Wörtern pro Tag
    // const inactive = Object.values(vocab).filter((v) => !v.isActive)
    // const toActivate = inactive.slice(0, DAILY_NEW_LIMIT)

    // for (const entry of toActivate) {
    //   updatedVocab[entry.word] = { ...entry, isActive: true }
    // }

    // aktiviert alle in dne nächsten 24 Stunden fälligen Karten

    // const active = Object.values(vocab).filter((v) => v.isActive)

    // for (const entry of active) {
    //   if (entry.dueDate < now + 1 * 24 * 60 * 60 * 1000) {
    //     updatedVocab[entry.word] = { ...entry, dueDate: now }
    //   }
    // }

    // save(updatedVocab, now)
    // useVocabStore.setState({ vocab: updatedVocab, lastActivation: now })
    // }

    const due = Object.values(updatedVocab)
      .filter((v: VocabEntry) => {
        if (!v.isActive) return false
        if (v.dueDate > now) return false

        // Alle fälligen Karten zeigen, auch wenn sie heute schon gesehen wurden (wenn dueDate wieder <= now)
        return true
      })
      .sort((a: VocabEntry, b: VocabEntry) => a.dueDate - b.dueDate)

    return due.length > 0 ? due.slice(0, 5) : null
  }
}))
export type { VocabStore }
