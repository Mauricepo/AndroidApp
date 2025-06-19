import AsyncStorage from '@react-native-async-storage/async-storage'
import { create, StoreApi, UseBoundStore } from 'zustand'
const initialWords = [
  { text: '行く', hiragana: 'iku', translation: 'go', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00393A.mp3' },

  {
    text: '見る',
    hiragana: 'miru',
    translation: 'see, look at',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09011A.mp3'
  },

  {
    text: '多い',
    hiragana: 'ooi',
    translation: 'a lot of, many',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00964A.mp3'
  },

  {
    text: '家',
    hiragana: 'uchi',
    translation: 'home, household',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00709A.mp3'
  },

  {
    text: 'これ',
    hiragana: 'kore',
    translation: 'this, this one',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03226A.mp3'
  },

  {
    text: 'それ',
    hiragana: 'sore',
    translation: 'that, that one',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05106A.mp3'
  },

  {
    text: '私',
    hiragana: 'watashi',
    translation: 'I (general)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW10045A.mp3'
  },

  {
    text: '仕事',
    hiragana: 'shigoto',
    translation: 'work, job',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03665A.mp3'
  },

  { text: 'いつ', hiragana: 'itsu', translation: 'when', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00501A.mp3' },

  { text: 'する', hiragana: 'suru', translation: 'do, make', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04644A.mp3' },

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

  { text: '思う', hiragana: 'omou', translation: 'think', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01213A.mp3' },

  {
    text: '持つ',
    hiragana: 'motsu',
    translation: 'have, possess',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09291A.mp3'
  },

  { text: '買う', hiragana: 'kau', translation: 'buy', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01429A.mp3' },

  { text: '時間', hiragana: 'jikan', translation: 'time, hour', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03620A.mp3' },

  { text: '知る', hiragana: 'shiru', translation: 'know', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04340A.mp3' },

  {
    text: '同じ',
    hiragana: 'onaji',
    translation: 'same, identical',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01160A.mp3'
  },

  { text: '今', hiragana: 'ima', translation: 'now', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00573A.mp3' },

  { text: '新しい', hiragana: 'atarashii', translation: 'new', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00147A.mp3' },

  { text: 'なる', hiragana: 'naru', translation: 'become', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06750A.mp3' },

  {
    text: 'まだ',
    hiragana: 'mada',
    translation: '(not) yet, still',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08718A.mp3'
  },

  { text: 'あと', hiragana: 'ato', translation: 'after', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00187A.mp3' },

  {
    text: '聞く',
    hiragana: 'kiku',
    translation: 'hear, ask, listen',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02020A.mp3'
  },

  { text: '言う', hiragana: 'iu', translation: 'say, tell', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00352A.mp3' },

  {
    text: 'å°ãªã',
    hiragana: 'sukunai',
    translation: 'few, little',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04547A.mp3'
  },

  { text: 'é«ã', hiragana: 'takai', translation: 'high, tall', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05292A.mp3' },

  { text: '子供', hiragana: 'kodomo', translation: 'child', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03174A.mp3' },

  { text: 'そう', hiragana: 'sou', translation: 'so, that way', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04953A.mp3' },

  { text: 'もう', hiragana: 'mou', translation: 'already, yet', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09232A.mp3' },

  { text: '学生', hiragana: 'gakusei', translation: 'student', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01515A.mp3' },

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

  { text: '本', hiragana: 'hon', translation: 'book', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08587A.mp3' },

  {
    text: '今年',
    hiragana: 'kotoshi',
    translation: 'this year (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03165A.mp3'
  },

  { text: 'よく', hiragana: 'yoku', translation: 'often, well', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09642A.mp3' },

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
    text: 'あげる',
    hiragana: 'ageru',
    translation: 'give, offer (colloquial)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00095A.mp3'
  },

  {
    text: 'こう',
    hiragana: 'kou',
    translation: 'like this, such',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02846A.mp3'
  },

  { text: '学校', hiragana: 'gakkou', translation: 'school', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01684A.mp3' },

  {
    text: 'くれる',
    hiragana: 'kureru',
    translation: 'be given',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02561A.mp3'
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

  { text: 'どこ', hiragana: 'doko', translation: 'where', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06412A.mp3' },

  { text: '部屋', hiragana: 'heya', translation: 'room', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08331A.mp3' },

  { text: '若い', hiragana: 'wakai', translation: 'young', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW10002A.mp3' },

  {
    text: '車',
    hiragana: 'kuruma',
    translation: 'car, automobile',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02551A.mp3'
  },

  { text: '置く', hiragana: 'oku', translation: 'put, place', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01032A.mp3' },

  {
    text: '住む',
    hiragana: 'sumu',
    translation: 'live, reside',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04629A.mp3'
  },

  { text: '働く', hiragana: 'hataraku', translation: 'work', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07338A.mp3' },

  {
    text: '難しい',
    hiragana: 'muzukashii',
    translation: 'difficult',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09089A.mp3'
  },

  {
    text: '先生',
    hiragana: 'sensei',
    translation: 'teacher (colloquial)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04895A.mp3'
  },

  {
    text: '立つ',
    hiragana: 'tatsu',
    translation: 'stand, rise',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05374A.mp3'
  },

  { text: '呼ぶ', hiragana: 'yobu', translation: 'call, name', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09717A.mp3' },

  {
    text: '大学',
    hiragana: 'daigaku',
    translation: 'university, college',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05163A.mp3'
  },

  {
    text: '安い',
    hiragana: 'yasui',
    translation: 'cheap, inexpensive',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09409A.mp3'
  },

  { text: 'もっと', hiragana: 'motto', translation: 'more', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09298A.mp3' },

  {
    text: '帰る',
    hiragana: 'kaeru',
    translation: 'go back home',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01439A.mp3'
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

  { text: 'そこ', hiragana: 'soko', translation: 'there', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05045A.mp3' },

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
    text: '大好き',
    hiragana: 'daisuki',
    translation: 'like (something) a lot',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05207A.mp3'
  },

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

  {
    text: 'とても',
    hiragana: 'totemo',
    translation: 'very (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06468A.mp3'
  },

  { text: '誰', hiragana: 'dare', translation: 'who', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05485A.mp3' },

  {
    text: '好き',
    hiragana: 'suki',
    translation: 'favorite, liked',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04528A.mp3'
  },

  { text: '読む', hiragana: 'yomu', translation: 'read', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09728A.mp3' },

  { text: '次', hiragana: 'tsugi', translation: 'next', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05835A.mp3' },

  { text: 'あなた', hiragana: 'anata', translation: 'you', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00197A.mp3' },

  { text: '飲む', hiragana: 'nomu', translation: 'drink', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07115A.mp3' },

  { text: '古い', hiragana: 'furui', translation: 'old', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08200A.mp3' },

  {
    text: '質問',
    hiragana: 'shitsumon',
    translation: 'question',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03783A.mp3'
  },

  {
    text: '今日',
    hiragana: 'kyou',
    translation: 'today (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02231A.mp3'
  },

  {
    text: '友達',
    hiragana: 'tomodachi',
    translation: 'friend, companion (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06516A.mp3'
  },

  { text: '早い', hiragana: 'hayai', translation: 'early', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07465A.mp3' },

  { text: 'どれ', hiragana: 'dore', translation: 'what, which', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06572A.mp3' }
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
