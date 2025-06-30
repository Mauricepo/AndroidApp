import AsyncStorage from '@react-native-async-storage/async-storage'
import { create, StoreApi, UseBoundStore } from 'zustand'
const initialWords = [
  {
    text: '美しい',
    hiragana: 'utsukushii',
    translation: 'beautiful',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00726A.mp3'
  },

  {
    text: 'いつも',
    hiragana: 'itsumo',
    translation: 'always (colloquial)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00544A.mp3'
  },

  { text: '足', hiragana: 'ashi', translation: 'leg, foot', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00114A.mp3' },

  {
    text: '起こす',
    hiragana: 'okosu',
    translation: 'wake (someone) up',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01048A.mp3'
  },

  { text: '見せる', hiragana: 'miseru', translation: 'show', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08911A.mp3' },

  {
    text: '娘',
    hiragana: 'musume',
    translation: 'daughter, girl',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09093A.mp3'
  },

  {
    text: '楽しむ',
    hiragana: 'tanoshimu',
    translation: 'enjoy',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05424A.mp3'
  },

  { text: '色', hiragana: 'iro', translation: 'color', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00614A.mp3' },

  {
    text: 'みんな',
    hiragana: 'minna',
    translation: 'everybody (colloquial)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09024A.mp3'
  },

  { text: '取る', hiragana: 'toru', translation: 'take, get', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06567A.mp3' },

  { text: '勉強', hiragana: 'benkyou', translation: 'study', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08353A.mp3' },

  {
    text: 'できる',
    hiragana: 'dekiru',
    translation: 'can do, be good at',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06060A.mp3'
  },

  {
    text: '短い',
    hiragana: 'mijikai',
    translation: 'short, brief',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08883A.mp3'
  },

  {
    text: '落ちる',
    hiragana: 'ochiru',
    translation: 'fall, come down',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01124A.mp3'
  },

  { text: '息子', hiragana: 'musuko', translation: 'son', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09090A.mp3' },

  {
    text: '白い',
    hiragana: 'shiroi',
    translation: 'white, blank',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04346A.mp3'
  },

  {
    text: '飛行機',
    hiragana: 'hikouki',
    translation: 'airplane',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07675A.mp3'
  },

  { text: '病気', hiragana: 'byouki', translation: 'illness', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07851A.mp3' },

  { text: '冬', hiragana: 'fuyu', translation: 'winter', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08167A.mp3' },

  { text: '年', hiragana: 'toshi', translation: 'year, age', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06421A.mp3' },

  { text: '重い', hiragana: 'omoi', translation: 'heavy', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01196A.mp3' },

  { text: '胸', hiragana: 'mune', translation: 'chest, breast', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09112A.mp3' },

  {
    text: '払う',
    hiragana: 'harau',
    translation: 'pay (money, respect, attention, etc.)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07488A.mp3'
  },

  {
    text: '軽い',
    hiragana: 'karui',
    translation: 'light (of weight, degree, etc.)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01830A.mp3'
  },

  {
    text: '見つける',
    hiragana: 'mitsukeru',
    translation: 'find',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08935A.mp3'
  },

  {
    text: '忘れる',
    hiragana: 'wasureru',
    translation: 'forget, leave behind',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW10041A.mp3'
  },

  {
    text: '酒',
    hiragana: 'sake',
    translation: 'alcohol, rice wine',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03401A.mp3'
  },

  {
    text: 'どちら',
    hiragana: 'dochira',
    translation: 'which (polite)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06450A.mp3'
  },

  {
    text: '姉',
    hiragana: 'ane',
    translation: "(one's own) older sister",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00200A.mp3'
  },

  {
    text: '覚える',
    hiragana: 'oboeru',
    translation: 'memorize, learn',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01183A.mp3'
  },

  {
    text: '狭い',
    hiragana: 'semai',
    translation: 'narrow, small',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04837A.mp3'
  },

  { text: '赤い', hiragana: 'akai', translation: 'red', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00044A.mp3' },

  {
    text: '着る',
    hiragana: 'kiru',
    translation: 'wear, put on',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02332A.mp3'
  },

  {
    text: '笑う',
    hiragana: 'warau',
    translation: 'laugh, smile',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW10060A.mp3'
  },

  {
    text: '一番',
    hiragana: 'ichiban',
    translation: 'most, best',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00494A.mp3'
  },

  {
    text: '授業',
    hiragana: 'jugyou',
    translation: 'class session, lecture',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04033A.mp3'
  },

  { text: '週', hiragana: 'shuu', translation: 'week', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03941A.mp3' },

  {
    text: '漢字',
    hiragana: 'kanji',
    translation: 'Chinese character',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01907A.mp3'
  },

  {
    text: '自転車',
    hiragana: 'jitensha',
    translation: 'bicycle',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03798A.mp3'
  },

  { text: '電車', hiragana: 'densha', translation: 'train', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06162A.mp3' },

  {
    text: '探す',
    hiragana: 'sagasu',
    translation: 'search for, look for (someone or something one wants)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03360A.mp3'
  },

  { text: '紙', hiragana: 'kami', translation: 'paper', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01768A.mp3' },

  { text: '歌う', hiragana: 'utau', translation: 'sing', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00702A.mp3' },

  { text: '遅い', hiragana: 'osoi', translation: 'slow, late', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01101A.mp3' },

  { text: '首', hiragana: 'kubi', translation: 'neck', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02496A.mp3' },

  { text: '速い', hiragana: 'hayai', translation: 'fast', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07465A.mp3' },

  {
    text: '一緒に',
    hiragana: 'isshoni',
    translation: 'together, at the same time',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00522A.mp3'
  },

  {
    text: '今月',
    hiragana: 'kongetsu',
    translation: 'this month',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03249A.mp3'
  },

  { text: '遊ぶ', hiragana: 'asobu', translation: 'play', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00136A.mp3' },

  {
    text: '遠い',
    hiragana: 'tooi',
    translation: 'far, distant',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06341A.mp3'
  },

  { text: '弱い', hiragana: 'yowai', translation: 'weak', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09752A.mp3' },

  { text: '耳', hiragana: 'mimi', translation: 'ear', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08987A.mp3' },

  {
    text: '座る',
    hiragana: 'suwaru',
    translation: 'sit, sit down',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04654A.mp3'
  },

  { text: '右', hiragana: 'migi', translation: 'right', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08869A.mp3' },

  {
    text: '浴びる',
    hiragana: 'abiru',
    translation: 'take (a shower), bask',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00209A.mp3'
  },

  { text: '肩', hiragana: 'kata', translation: 'shoulder', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01628A.mp3' },

  {
    text: '寝る',
    hiragana: 'neru',
    translation: 'sleep, go to sleep',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07017A.mp3'
  },

  {
    text: '消す',
    hiragana: 'kesu',
    translation: 'switch off, turn off',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02671A.mp3'
  },

  {
    text: '元気',
    hiragana: 'genki',
    translation: 'healthy, energetic',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02750A.mp3'
  },

  { text: '全部', hiragana: 'zenbu', translation: 'all, whole', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04928A.mp3' },

  {
    text: '去年',
    hiragana: 'kyonen',
    translation: 'last year (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02305A.mp3'
  },

  { text: '引く', hiragana: 'hiku', translation: 'draw, pull', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07660A.mp3' },

  {
    text: '図書館',
    hiragana: 'toshokan',
    translation: 'library',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06434A.mp3'
  },

  {
    text: '上げる',
    hiragana: 'ageru',
    translation: 'raise, lift',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00094A.mp3'
  },

  {
    text: '緑',
    hiragana: 'midori',
    translation: 'green color, greenery',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08954A.mp3'
  },

  { text: '腕', hiragana: 'ude', translation: 'arm', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00740A.mp3' },

  {
    text: 'ドア',
    hiragana: 'doa',
    translation: 'door (loan word)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06197A.mp3'
  },

  {
    text: '女の子',
    hiragana: 'onnanoko',
    translation: 'little girl',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01291A.mp3'
  },

  { text: '男の子', hiragana: 'otokonoko', translation: 'boy', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01138A.mp3' },

  {
    text: '私たち',
    hiragana: 'watashitachi',
    translation: 'we (colloquial)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW10046A.mp3'
  },

  {
    text: '近く',
    hiragana: 'chikaku',
    translation: 'near, close to',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05568A.mp3'
  },

  { text: 'やる', hiragana: 'yaru', translation: 'do, give', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09462A.mp3' },

  {
    text: 'かなり',
    hiragana: 'kanari',
    translation: 'fairly, rather',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01729A.mp3'
  },

  { text: '国', hiragana: 'kuni', translation: 'country', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02492A.mp3' },

  { text: '起こる', hiragana: 'okoru', translation: 'happen', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01055A.mp3' },

  { text: '秋', hiragana: 'aki', translation: 'autumn, fall', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00057A.mp3' },

  { text: '送る', hiragana: 'okuru', translation: 'send', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01044A.mp3' },

  { text: '死ぬ', hiragana: 'shinu', translation: 'die', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03814A.mp3' },

  {
    text: '気持ち',
    hiragana: 'kimochi',
    translation: 'feeling, sensation',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02164A.mp3'
  },

  { text: '乗る', hiragana: 'noru', translation: 'ride, take', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07132A.mp3' },

  {
    text: 'いる',
    hiragana: 'iru',
    translation: 'be present, stay',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00608A.mp3'
  },

  { text: '木', hiragana: 'ki', translation: 'tree, wood', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01982A.mp3' },

  {
    text: '開ける',
    hiragana: 'akeru',
    translation: 'open, unlock (doors, windows, etc.)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00091A.mp3'
  },

  {
    text: '閉める',
    hiragana: 'shimeru',
    translation: 'shut, close (doors, windows, etc.)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03879A.mp3'
  },

  {
    text: '続く',
    hiragana: 'tsuzuku',
    translation: 'continue, follow',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05890A.mp3'
  },

  {
    text: 'お医者さん',
    hiragana: 'oishasan',
    translation: 'doctor (polite)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00928A.mp3'
  },

  { text: '円', hiragana: 'en', translation: 'Japanese yen', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00883A.mp3' },

  { text: 'ここ', hiragana: 'koko', translation: 'here', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03083A.mp3' },

  {
    text: '待つ',
    hiragana: 'matsu',
    translation: 'wait, wait for',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08743A.mp3'
  },

  { text: '低い', hiragana: 'hikui', translation: 'low, short', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07663A.mp3' },

  {
    text: 'もらう',
    hiragana: 'morau',
    translation: 'receive, get (something from someone)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09348A.mp3'
  },

  { text: '食べる', hiragana: 'taberu', translation: 'eat', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05443A.mp3' },

  {
    text: '兄',
    hiragana: 'ani',
    translation: "(one's own) older brother",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00199A.mp3'
  },

  { text: '名前', hiragana: 'namae', translation: 'name', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06723A.mp3' },

  { text: '夫', hiragana: 'otto', translation: 'husband', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01126A.mp3' },

  { text: '一', hiragana: 'ichi', translation: 'one', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00476A.mp3' },

  { text: '結婚', hiragana: 'kekkon', translation: 'marriage', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02695A.mp3' },

  { text: '親', hiragana: 'oya', translation: 'parent', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01229A.mp3' },

  {
    text: '話す',
    hiragana: 'hanasu',
    translation: 'speak, talk',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07421A.mp3'
  },

  {
    text: '少し',
    hiragana: 'sukoshi',
    translation: 'a bit, a little while',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04555A.mp3'
  }
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
    return due.length > 0 ? due.slice(25, 75) : null
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
