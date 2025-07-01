import AsyncStorage from '@react-native-async-storage/async-storage'
import { create, StoreApi, UseBoundStore } from 'zustand'
export const allWords = [
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
    text: '少ない',
    hiragana: 'sukunai',
    translation: 'few, little',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04547A.mp3'
  },

  { text: '高い', hiragana: 'takai', translation: 'high, tall', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05292A.mp3' },

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

  { text: 'どれ', hiragana: 'dore', translation: 'what, which', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06572A.mp3' },

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
  },

  {
    text: '閉じる',
    hiragana: 'tojiru',
    translation: 'shut, close (books, eyes, etc.)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06438A.mp3'
  },

  { text: '時', hiragana: 'toki', translation: 'time, moment', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06359A.mp3' },

  { text: '米', hiragana: 'kome', translation: 'rice (grain)', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03208A.mp3' },

  {
    text: '切る',
    hiragana: 'kiru',
    translation: 'cut',
    audioURL: 'https://assets1.iknow.jp/assets/users/Cerego/b1df3de12365024b455bd98b15a2695f.mp3'
  },

  {
    text: '楽しい',
    hiragana: 'tanoshii',
    translation: 'fun, enjoyable',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05422A.mp3'
  },

  {
    text: '服',
    hiragana: 'fuku',
    translation: 'clothes (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08005A.mp3'
  },

  {
    text: '後ろ',
    hiragana: 'ushiro',
    translation: 'back, behind',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00687A.mp3'
  },

  {
    text: '嬉しい',
    hiragana: 'ureshii',
    translation: 'happy, glad',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00802A.mp3'
  },

  {
    text: '腰',
    hiragana: 'koshi',
    translation: 'waist, lower back',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03107A.mp3'
  },

  {
    text: '日曜日',
    hiragana: 'nichiyoubi',
    translation: 'Sunday',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06846A.mp3'
  },

  {
    text: '昼',
    hiragana: 'hiru',
    translation: 'daytime, midday',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07893A.mp3'
  },

  {
    text: 'お母さん',
    hiragana: 'okaasan',
    translation: 'mother, mom (respectful)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01003A.mp3'
  },

  {
    text: '大学生',
    hiragana: 'daigakusei',
    translation: 'university student',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05165A.mp3'
  },

  {
    text: '終わり',
    hiragana: 'owari',
    translation: 'end, finish',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01269A.mp3'
  },

  { text: '背', hiragana: 'se', translation: 'height, stature', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04656A.mp3' },

  {
    text: '手伝う',
    hiragana: 'tetsudau',
    translation: 'help, assist',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06098A.mp3'
  },

  { text: '鼻', hiragana: 'hana', translation: 'nose', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07412A.mp3' },

  {
    text: '起きる',
    hiragana: 'okiru',
    translation: 'occur, happen',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01029A.mp3'
  },

  {
    text: '載せる',
    hiragana: 'noseru',
    translation: 'place, put on',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07083A.mp3'
  },

  { text: '悲しい', hiragana: 'kanashii', translation: 'sad', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01720A.mp3' },

  {
    text: 'しゃべる',
    hiragana: 'shaberu',
    translation: 'chat, talk',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03926A.mp3'
  },

  {
    text: '近く',
    hiragana: 'chikaku',
    translation: 'in the near future, before long',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05567A.mp3'
  },

  { text: '甘い', hiragana: 'amai', translation: 'sweet', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00218A.mp3' },

  {
    text: 'テーブル',
    hiragana: 'te-buru',
    translation: 'table',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06027A.mp3'
  },

  {
    text: '食べ物',
    hiragana: 'tabemono',
    translation: 'food (colloquial)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05442A.mp3'
  },

  { text: '始まる', hiragana: 'hajimaru', translation: 'begin', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07298A.mp3' },

  {
    text: 'ゲーム',
    hiragana: 'ge-mu',
    translation: 'game (loan word)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02652A.mp3'
  },

  { text: '十', hiragana: 'juu', translation: 'ten', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03944A.mp3' },

  { text: '天気', hiragana: 'tenki', translation: 'weather', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06144A.mp3' },

  {
    text: '暑い',
    hiragana: 'atsui',
    translation: 'hot (of weather)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00158A.mp3'
  },

  { text: '太い', hiragana: 'futoi', translation: 'thick, fat', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08123A.mp3' },

  {
    text: '晩',
    hiragana: 'ban',
    translation: 'evening, night (from sunset to bedtime)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07517A.mp3'
  },

  {
    text: '土曜日',
    hiragana: 'doyoubi',
    translation: 'Saturday',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06522A.mp3'
  },

  {
    text: '痛い',
    hiragana: 'itai',
    translation: 'sore, painful',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00455A.mp3'
  },

  {
    text: 'お父さん',
    hiragana: 'otousan',
    translation: 'father, dad (respectful)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01133A.mp3'
  },

  {
    text: '多分',
    hiragana: 'tabun',
    translation: 'probably, perhaps',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05441A.mp3'
  },

  {
    text: '時計',
    hiragana: 'tokei',
    translation: 'clock, watch',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06405A.mp3'
  },

  {
    text: '泊まる',
    hiragana: 'tomaru',
    translation: 'stay overnight',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06503A.mp3'
  },

  {
    text: 'どうして',
    hiragana: 'doushite',
    translation: 'how come',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06260A.mp3'
  },

  {
    text: '掛ける',
    hiragana: 'kakeru',
    translation: 'hang, put on',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01557A.mp3'
  },

  {
    text: '曲がる',
    hiragana: 'magaru',
    translation: 'make a turn, turn',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08663A.mp3'
  },

  {
    text: 'お腹',
    hiragana: 'onaka',
    translation: 'stomach, belly',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01159A.mp3'
  },

  {
    text: 'ミーティング',
    hiragana: 'mi-tingu',
    translation: 'meeting (loan word)',
    audioURL: 'https://assets0.iknow.jp/assets/users/Cerego/2925dbbfe91fccbbfe3e889d4c2c10c1.mp3'
  },

  {
    text: '嫌い',
    hiragana: 'kirai',
    translation: 'hate, dislike',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02312A.mp3'
  },

  {
    text: '金曜日',
    hiragana: "kin'youbi",
    translation: 'Friday',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02387A.mp3'
  },

  {
    text: '要る',
    hiragana: 'iru',
    translation: 'need, require',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00609A.mp3'
  },

  { text: '無い', hiragana: 'nai', translation: 'to not be', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06600A.mp3' },

  { text: '黄色い', hiragana: 'kiiroi', translation: 'yellow', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01986A.mp3' },

  {
    text: '風邪',
    hiragana: 'kaze',
    translation: 'cold (illness)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01610A.mp3'
  },

  {
    text: '優しい',
    hiragana: 'yasashii',
    translation: 'gentle, kind',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09403A.mp3'
  },

  {
    text: '晴れる',
    hiragana: 'hareru',
    translation: 'be sunny, clear up',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07508A.mp3'
  },

  { text: '汚い', hiragana: 'kitanai', translation: 'dirty', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02098A.mp3' },

  { text: '茶色', hiragana: 'chairo', translation: 'brown', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05621A.mp3' },

  {
    text: '空く',
    hiragana: 'suku',
    translation: 'be empty, become less crowded',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04541A.mp3'
  },

  {
    text: '上る',
    hiragana: 'noboru',
    translation: 'go up, climb',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07109A.mp3'
  },

  {
    text: 'ご飯',
    hiragana: 'gohan',
    translation: 'meal, cooked rice',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03189A.mp3'
  },

  {
    text: '日',
    hiragana: 'nichi',
    translation: 'counter for days',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06841A.mp3'
  },

  {
    text: '髪の毛',
    hiragana: 'kaminoke',
    translation: 'hair, each single hair',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01775A.mp3'
  },

  {
    text: 'つける',
    hiragana: 'tsukeru',
    translation: 'switch on, turn on',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05877A.mp3'
  },

  {
    text: '月曜日',
    hiragana: 'getsuyoubi',
    translation: 'Monday',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02714A.mp3'
  },

  { text: '入る', hiragana: 'hairu', translation: 'enter', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07208A.mp3' },

  {
    text: 'カタカナ',
    hiragana: 'katakana',
    translation: 'katakana',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01640A.mp3'
  },

  {
    text: '今週',
    hiragana: 'konshuu',
    translation: 'this week',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03253A.mp3'
  },

  {
    text: '開く',
    hiragana: 'hiraku',
    translation: 'open (books, eyes, etc.)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07882A.mp3'
  },

  { text: '水', hiragana: 'mizu', translation: 'water', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08889A.mp3' },

  {
    text: 'あれ',
    hiragana: 'are',
    translation: 'that (over there)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00298A.mp3'
  },

  { text: '二', hiragana: 'ni', translation: 'two', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06790A.mp3' },

  {
    text: '締める',
    hiragana: 'shimeru',
    translation: 'tighten, fasten',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03876A.mp3'
  },

  {
    text: 'まずい',
    hiragana: 'mazui',
    translation: 'bad (taste), distasteful',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08706A.mp3'
  },

  {
    text: '平仮名',
    hiragana: 'hiragana',
    translation: 'hiragana',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07881A.mp3'
  },

  {
    text: '曇る',
    hiragana: 'kumoru',
    translation: 'become cloudy',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02515A.mp3'
  },

  {
    text: '触る',
    hiragana: 'sawaru',
    translation: 'touch, feel',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03519A.mp3'
  },

  { text: '駄目', hiragana: 'dame', translation: 'no good', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05460A.mp3' },

  {
    text: '飲み物',
    hiragana: 'nomimono',
    translation: 'beverage, drink',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07114A.mp3'
  },

  {
    text: '木曜日',
    hiragana: 'mokuyoubi',
    translation: 'Thursday',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09267A.mp3'
  },

  {
    text: '曜日',
    hiragana: 'youbi',
    translation: 'day of the week',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09626A.mp3'
  },

  {
    text: 'そば',
    hiragana: 'soba',
    translation: 'side, vicinity',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05088A.mp3'
  },

  {
    text: 'こっち',
    hiragana: 'kocchi',
    translation: 'here, this way (casual)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03152A.mp3'
  },

  {
    text: '火曜日',
    hiragana: 'kayoubi',
    translation: 'Tuesday',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01793A.mp3'
  },

  {
    text: '渇く',
    hiragana: 'kawaku',
    translation: 'be thirsty',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01855A.mp3'
  },

  { text: '三', hiragana: 'san', translation: 'three', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03521A.mp3' },

  {
    text: '水曜日',
    hiragana: 'suiyoubi',
    translation: 'Wednesday',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04503A.mp3'
  },

  {
    text: '二つ',
    hiragana: 'futatsu',
    translation: 'two (things)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08088A.mp3'
  },

  {
    text: '今晩',
    hiragana: 'konban',
    translation: 'this evening, tonight',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03266A.mp3'
  },

  { text: '千', hiragana: 'sen', translation: 'thousand', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04849A.mp3' },

  {
    text: '六日',
    hiragana: 'muika',
    translation: 'six days, sixth of the month',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09030A.mp3'
  },

  {
    text: 'お姉さん',
    hiragana: 'oneesan',
    translation: 'older sister',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01165A.mp3'
  },

  {
    text: '直る',
    hiragana: 'naoru',
    translation: 'be repaired, get fixed',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06623A.mp3'
  },

  {
    text: 'ちょっと',
    hiragana: 'chotto',
    translation: 'just a moment, just a little',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05756A.mp3'
  },

  {
    text: '四',
    hiragana: 'yon',
    translation: 'four (Japanese origin)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09760A.mp3'
  },

  {
    text: 'これから',
    hiragana: 'korekara',
    translation: 'from now on, after this',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/Int/JW03629A.mp3'
  },

  {
    text: '考える',
    hiragana: 'kangaeru',
    translation: 'think, consider',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01880A.mp3'
  },

  {
    text: '戻る',
    hiragana: 'modoru',
    translation: 'return to a point of departure',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09318A.mp3'
  },

  {
    text: '変える',
    hiragana: 'kaeru',
    translation: 'change (something), alter',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/Int/JW02177A.mp3'
  },

  { text: '朝', hiragana: 'asa', translation: 'morning', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00101A.mp3' },

  { text: '歯', hiragana: 'ha', translation: 'tooth', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07146A.mp3' },

  {
    text: '頑張る',
    hiragana: 'ganbaru',
    translation: "work hard, do one's best",
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01959A.mp3'
  },

  {
    text: '携帯電話',
    hiragana: 'keitaidenwa',
    translation: 'cellular phone',
    audioURL: 'https://assets1.iknow.jp/assets/users/Smart.fm/f56gdq82dc.mp3'
  },

  { text: '雨', hiragana: 'ame', translation: 'rain', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00239A.mp3' },

  {
    text: '金',
    hiragana: 'kane',
    translation: 'money (colloquial)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01733A.mp3'
  },

  {
    text: '易しい',
    hiragana: 'yasashii',
    translation: 'easy, simple (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09402A.mp3'
  },

  {
    text: 'お兄さん',
    hiragana: 'oniisan',
    translation: 'older brother',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01163A.mp3'
  },

  { text: '大きい', hiragana: 'ookii', translation: 'big', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00971A.mp3' },

  { text: '小さい', hiragana: 'chiisai', translation: 'small', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05553A.mp3' },

  { text: '辛い', hiragana: 'karai', translation: 'spicy, hot', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01800A.mp3' },

  { text: '八', hiragana: 'hachi', translation: 'eight', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07340A.mp3' },

  {
    text: 'あそこ',
    hiragana: 'asoko',
    translation: 'over there',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00134A.mp3'
  },

  { text: '来る', hiragana: 'kuru', translation: 'come', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02541A.mp3' },

  { text: '前', hiragana: 'mae', translation: 'front, before', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08647A.mp3' },

  {
    text: '五日',
    hiragana: 'itsuka',
    translation: 'five days, fifth of the month',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00504A.mp3'
  },

  {
    text: 'いっぱい',
    hiragana: 'ippai',
    translation: 'full, a lot',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00537A.mp3'
  },

  {
    text: '九',
    hiragana: 'kyuu',
    translation: 'nine (used before counter words and in decimal places)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02189A.mp3'
  },

  { text: '酸っぱい', hiragana: 'suppai', translation: 'sour', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04586A.mp3' },

  {
    text: '違う',
    hiragana: 'chigau',
    translation: 'differ, be wrong',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05566A.mp3'
  },

  {
    text: '細い',
    hiragana: 'hosoi',
    translation: 'thin, slender',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08530A.mp3'
  },

  {
    text: '三つ',
    hiragana: 'mittsu',
    translation: 'three (things)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08939A.mp3'
  },

  {
    text: '八日',
    hiragana: 'youka',
    translation: 'eight days, eighth of the month',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09581A.mp3'
  },

  {
    text: '高校生',
    hiragana: 'koukousei',
    translation: 'high school student',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02905A.mp3'
  },

  {
    text: '上手',
    hiragana: 'jouzu',
    translation: 'good, skilled',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04185A.mp3'
  },

  { text: '強い', hiragana: 'tsuyoi', translation: 'strong', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05951A.mp3' },

  {
    text: '七',
    hiragana: 'nana',
    translation: 'seven (Japanese origin)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06702A.mp3'
  },

  {
    text: '二十日',
    hiragana: 'hatsuka',
    translation: '20 days, 20th of the month',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07356A.mp3'
  },

  { text: '左', hiragana: 'hidari', translation: 'left', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07712A.mp3' },

  {
    text: '二日',
    hiragana: 'futsuka',
    translation: 'two days, second of the month',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08104A.mp3'
  },

  {
    text: '四つ',
    hiragana: 'yottsu',
    translation: 'four (things)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09702A.mp3'
  },

  { text: '暖かい', hiragana: 'atatakai', translation: 'warm', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00142A.mp3' },

  {
    text: 'ある',
    hiragana: 'aru',
    translation: 'exist, there is',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00287A.mp3'
  },

  {
    text: 'いい',
    hiragana: 'ii',
    translation: 'good (informal/spoken form)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00337A.mp3'
  },

  { text: '上', hiragana: 'ue', translation: 'up, above', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00650A.mp3' },

  { text: '駅', hiragana: 'eki', translation: 'train station', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00857A.mp3' },

  { text: '美味しい', hiragana: 'oishii', translation: 'tasty', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00927A.mp3' },

  {
    text: '昨日',
    hiragana: 'kinou',
    translation: 'yesterday (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02133A.mp3'
  },

  {
    text: '綺麗',
    hiragana: 'kirei',
    translation: 'pretty, clean',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02336A.mp3'
  },

  { text: '五', hiragana: 'go', translation: 'five', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02832A.mp3' },

  {
    text: '九つ',
    hiragana: 'kokonotsu',
    translation: 'nine (things)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03089A.mp3'
  },

  { text: 'お願い', hiragana: 'onegai', translation: 'favor', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01166A.mp3' },

  {
    text: '答える',
    hiragana: 'kotaeru',
    translation: 'give an answer',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03131A.mp3'
  },

  { text: '先', hiragana: 'saki', translation: 'ahead, first', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03371A.mp3' },

  {
    text: '寒い',
    hiragana: 'samui',
    translation: 'cold (temperature of the air)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03487A.mp3'
  },

  {
    text: '四',
    hiragana: 'shi',
    translation: 'four (Chinese origin)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03561A.mp3'
  },

  {
    text: '三日',
    hiragana: 'mikka',
    translation: 'three days, third of the month',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08932A.mp3'
  },

  { text: '下', hiragana: 'shita', translation: 'under, below', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03714A.mp3' },

  {
    text: '大丈夫',
    hiragana: 'daijoubu',
    translation: 'all right, OK',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05203A.mp3'
  },

  { text: '大人', hiragana: 'otona', translation: 'adult', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01148A.mp3' },

  { text: '出す', hiragana: 'dasu', translation: 'take out', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05335A.mp3' },

  {
    text: '父',
    hiragana: 'chichi',
    translation: "one's own father (humble)",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05601A.mp3'
  },

  {
    text: '母',
    hiragana: 'haha',
    translation: "one's own mother (humble)",
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07442A.mp3'
  },

  { text: '月', hiragana: 'tsuki', translation: 'moon', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05834A.mp3' },

  {
    text: '妹',
    hiragana: 'imouto',
    translation: 'younger sister',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00587A.mp3'
  },

  {
    text: '冷たい',
    hiragana: 'tsumetai',
    translation: 'cold (to touch)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05940A.mp3'
  },

  {
    text: '弟',
    hiragana: 'otouto',
    translation: 'younger brother',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01134A.mp3'
  },

  { text: '手', hiragana: 'te', translation: 'hand', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05974A.mp3' },

  {
    text: '十日',
    hiragana: 'tooka',
    translation: 'ten days, tenth of the month',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06342A.mp3'
  },

  { text: '口', hiragana: 'kuchi', translation: 'mouth', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02463A.mp3' },

  { text: '夏', hiragana: 'natsu', translation: 'summer', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06694A.mp3' },

  {
    text: '七つ',
    hiragana: 'nanatsu',
    translation: 'seven (things)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06703A.mp3'
  },

  {
    text: '時々',
    hiragana: 'tokidoki',
    translation: 'sometimes',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06363A.mp3'
  },

  { text: '何', hiragana: 'nani', translation: 'what', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06705A.mp3' },

  { text: '人', hiragana: 'hito', translation: 'person', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07754A.mp3' },

  {
    text: '一人',
    hiragana: 'hitori',
    translation: 'one person',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07788A.mp3'
  },

  {
    text: '一日',
    hiragana: 'tsuitachi',
    translation: 'first of the month',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05789A.mp3'
  },

  {
    text: '九日',
    hiragana: 'kokonoka',
    translation: 'nine days, ninth of the month',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03088A.mp3'
  },

  {
    text: '方',
    hiragana: 'hou',
    translation: 'direction, side',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08386A.mp3'
  },

  {
    text: '他',
    hiragana: 'hoka',
    translation: 'other (Japanese origin)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08480A.mp3'
  },

  {
    text: '僕',
    hiragana: 'boku',
    translation: 'I, me (usually used by young males)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08489A.mp3'
  },

  {
    text: '欲しい',
    hiragana: 'hoshii',
    translation: 'want, desire (of the speaker)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08515A.mp3'
  },

  { text: '万', hiragana: 'man', translation: 'ten thousand', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08819A.mp3' },

  {
    text: '見える',
    hiragana: 'mieru',
    translation: 'be visible, can see',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08851A.mp3'
  },

  { text: '道', hiragana: 'michi', translation: 'street, way', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08923A.mp3' },

  {
    text: '五つ',
    hiragana: 'itsutsu',
    translation: 'five (things)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00531A.mp3'
  },

  { text: '目', hiragana: 'me', translation: 'eye', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09133A.mp3' },

  {
    text: '八つ',
    hiragana: 'yattsu',
    translation: 'eight (things)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09423A.mp3'
  },

  {
    text: '止める',
    hiragana: 'yameru',
    translation: 'stop, give up',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09449A.mp3'
  },

  {
    text: '四日',
    hiragana: 'yokka',
    translation: 'four days, fourth of the month',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09699A.mp3'
  },

  {
    text: '夜',
    hiragana: 'yoru',
    translation: 'night (from sunset to sunrise)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09743A.mp3'
  },

  { text: '来年', hiragana: 'rainen', translation: 'next year', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09769A.mp3' },

  { text: '六', hiragana: 'roku', translation: 'six', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09968A.mp3' },

  { text: '悪い', hiragana: 'warui', translation: 'bad', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW10077A.mp3' },

  {
    text: 'お手洗い',
    hiragana: 'otearai',
    translation: 'rest room, lavatory',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01128A.mp3'
  },

  {
    text: 'ご主人',
    hiragana: 'goshujin',
    translation: "(someone else's) husband",
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03116A.mp3'
  },

  {
    text: '本当に',
    hiragana: 'hontouni',
    translation: 'really, truly',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08606A.mp3'
  },

  {
    text: '自分',
    hiragana: 'jibun',
    translation: 'self, oneself',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03837A.mp3'
  },

  {
    text: 'ため',
    hiragana: 'tame',
    translation: 'sake, purpose',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05459A.mp3'
  },

  {
    text: '見つかる',
    hiragana: 'mitsukaru',
    translation: 'be found, be caught',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08933A.mp3'
  },

  {
    text: '休む',
    hiragana: 'yasumu',
    translation: 'take a rest, take a break',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09413A.mp3'
  },

  {
    text: 'ゆっくり',
    hiragana: 'yukkuri',
    translation: 'slowly',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09546A.mp3'
  },

  {
    text: '六つ',
    hiragana: 'muttsu',
    translation: 'six (things)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09108A.mp3'
  },

  { text: '花', hiragana: 'hana', translation: 'flower', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07411A.mp3' },

  { text: '動く', hiragana: 'ugoku', translation: 'move', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00683A.mp3' },

  { text: '線', hiragana: 'sen', translation: 'line', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04852A.mp3' },

  {
    text: '七日',
    hiragana: 'nanoka',
    translation: 'seven days, seventh of the month',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06716A.mp3'
  },

  { text: '以外', hiragana: 'igai', translation: 'except for', audioURL: 'https://assets3.iknow.jp/assets/users/Smart.fm/455cat8jbs.mp3' },

  { text: '男', hiragana: 'otoko', translation: 'man, male', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01137A.mp3' },

  {
    text: '彼',
    hiragana: 'kare',
    translation: "he, one's boyfriend",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01834A.mp3'
  },

  { text: '女', hiragana: 'onna', translation: 'woman', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01290A.mp3' },

  {
    text: '妻',
    hiragana: 'tsuma',
    translation: "(one's own) wife",
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05925A.mp3'
  },

  { text: '百', hiragana: 'hyaku', translation: 'hundred', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07831A.mp3' },

  { text: '辺', hiragana: 'hen', translation: 'vicinity', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08342A.mp3' },

  { text: '店', hiragana: 'mise', translation: 'shop, store', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08905A.mp3' },

  {
    text: '閉まる',
    hiragana: 'shimaru',
    translation: 'be shut, be closed',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03855A.mp3'
  },

  {
    text: '問題',
    hiragana: 'mondai',
    translation: 'problem, question',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09359A.mp3'
  },

  {
    text: '必要',
    hiragana: 'hitsuyou',
    translation: 'need, necessary',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07750A.mp3'
  },

  {
    text: 'もつ',
    hiragana: 'motsu',
    translation: 'last long, be durable',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09292A.mp3'
  },

  { text: '開く', hiragana: 'aku', translation: 'open', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00067A.mp3' },

  {
    text: '昨年',
    hiragana: 'sakunen',
    translation: 'last year (formal, often used in writing)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03392A.mp3'
  },

  {
    text: '治る',
    hiragana: 'naoru',
    translation: 'be cured, get well',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06624A.mp3'
  },

  { text: 'ドル', hiragana: 'doru', translation: 'dollar', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06571A.mp3' },

  {
    text: 'システム',
    hiragana: 'shisutemu',
    translation: 'system (loan word)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03698A.mp3'
  },

  {
    text: '以上',
    hiragana: 'ijou',
    translation: 'more than, not less than',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00435A.mp3'
  },

  {
    text: '最近',
    hiragana: 'saikin',
    translation: 'recent, latest',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03297A.mp3'
  },

  { text: '世界', hiragana: 'sekai', translation: 'world', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04773A.mp3' },

  {
    text: 'コンピューター',
    hiragana: 'konpyu-ta-',
    translation: 'computer',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03268A.mp3'
  },

  {
    text: 'やる',
    hiragana: 'yaru',
    translation: 'give (to an inferior)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09462A.mp3'
  },

  {
    text: '意味',
    hiragana: 'imi',
    translation: 'meaning, sense',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00582A.mp3'
  },

  {
    text: '増える',
    hiragana: 'fueru',
    translation: 'increase, accrue',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07973A.mp3'
  },

  {
    text: '選ぶ',
    hiragana: 'erabu',
    translation: 'choose, elect',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00878A.mp3'
  },

  {
    text: '生活',
    hiragana: 'seikatsu',
    translation: 'life, living',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04673A.mp3'
  },

  {
    text: '進める',
    hiragana: 'susumeru',
    translation: 'go ahead with, proceed',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04570A.mp3'
  },

  {
    text: '続ける',
    hiragana: 'tsuzukeru',
    translation: 'continue, keep up',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05891A.mp3'
  },

  {
    text: 'ほとんど',
    hiragana: 'hotondo',
    translation: 'almost, hardly',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08565A.mp3'
  },

  {
    text: '会社',
    hiragana: 'kaisha',
    translation: 'company, corporation',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01360A.mp3'
  },

  { text: '家', hiragana: 'ie', translation: 'house, dwelling', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00354A.mp3' },

  {
    text: '多く',
    hiragana: 'ooku',
    translation: 'much, largely',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00974A.mp3'
  },

  {
    text: '話',
    hiragana: 'hanashi',
    translation: 'talk, story',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07414A.mp3'
  },

  {
    text: '上がる',
    hiragana: 'agaru',
    translation: 'go up, rise (physical movement)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00051A.mp3'
  },

  {
    text: 'もう',
    hiragana: 'mou',
    translation: 'another, again',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09233A.mp3'
  },

  {
    text: '集める',
    hiragana: 'atsumeru',
    translation: 'collect, gather',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00176A.mp3'
  },

  { text: '声', hiragana: 'koe', translation: 'voice, sound', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03020A.mp3' },

  {
    text: '初めて',
    hiragana: 'hajimete',
    translation: 'for the first time',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07301A.mp3'
  },

  {
    text: '変わる',
    hiragana: 'kawaru',
    translation: 'change, turn into',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01863A.mp3'
  },

  {
    text: 'まず',
    hiragana: 'mazu',
    translation: 'first of all, to begin with',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08704A.mp3'
  },

  { text: '社会', hiragana: 'shakai', translation: 'society', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03896A.mp3' },

  {
    text: 'プログラム',
    hiragana: 'puroguramu',
    translation: 'program booklet',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08218A.mp3'
  },

  {
    text: '力',
    hiragana: 'chikara',
    translation: 'strength, power',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05578A.mp3'
  },

  { text: '今回', hiragana: 'konkai', translation: 'this time', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03243A.mp3' },

  {
    text: '予定',
    hiragana: 'yotei',
    translation: 'schedule, plan',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09706A.mp3'
  },

  {
    text: 'まま',
    hiragana: 'mama',
    translation: 'as is, still (in the current state)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08794A.mp3'
  },

  {
    text: 'テレビ',
    hiragana: 'terebi',
    translation: 'television',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06129A.mp3'
  },

  {
    text: '減る',
    hiragana: 'heru',
    translation: 'decrease, diminish',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08337A.mp3'
  },

  {
    text: '消える',
    hiragana: 'kieru',
    translation: 'be extinguished, disappear',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01988A.mp3'
  },

  {
    text: '家族',
    hiragana: 'kazoku',
    translation: 'family, household',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01624A.mp3'
  },

  {
    text: '比べる',
    hiragana: 'kuraberu',
    translation: 'compare, contrast',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02532A.mp3'
  },

  {
    text: '生まれる',
    hiragana: 'umareru',
    translation: 'be born, come into existence',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00761A.mp3'
  },

  {
    text: 'ただ',
    hiragana: 'tada',
    translation: 'free of charge',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05344A.mp3'
  },

  { text: 'これら', hiragana: 'korera', translation: 'these', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03229A.mp3' },

  {
    text: '調べる',
    hiragana: 'shiraberu',
    translation: 'investigate, check',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04330A.mp3'
  },

  {
    text: '事故',
    hiragana: 'jiko',
    translation: 'accident, trouble',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03656A.mp3'
  },

  {
    text: '電話',
    hiragana: 'denwa',
    translation: 'telephone, phone call',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06190A.mp3'
  },

  {
    text: '外国',
    hiragana: 'gaikoku',
    translation: 'foreign country',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01349A.mp3'
  },

  { text: '銀行', hiragana: 'ginkou', translation: 'bank', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02364A.mp3' },

  {
    text: '十分',
    hiragana: 'juubun',
    translation: 'enough, plentiful',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04012A.mp3'
  },

  {
    text: 'あまり',
    hiragana: 'amari',
    translation: '(not) much',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00230A.mp3'
  },

  {
    text: '写真',
    hiragana: 'shashin',
    translation: 'photograph',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03912A.mp3'
  },

  {
    text: '繰り返す',
    hiragana: 'kurikaesu',
    translation: 'repeat',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02539A.mp3'
  },

  {
    text: '種類',
    hiragana: 'shurui',
    translation: 'kind, type',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04095A.mp3'
  },

  { text: '意見', hiragana: 'iken', translation: 'opinion', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00406A.mp3' },

  {
    text: '新聞',
    hiragana: 'shinbun',
    translation: 'newspaper',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04439A.mp3'
  },

  {
    text: '文章',
    hiragana: 'bunshou',
    translation: 'sentence, writing',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08253A.mp3'
  },

  {
    text: '目立つ',
    hiragana: 'medatsu',
    translation: 'stand out, be conspicuous',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09198A.mp3'
  },

  {
    text: '相手',
    hiragana: 'aite',
    translation: 'opponent (in sports, etc.), the other party, partner',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00018A.mp3'
  },

  { text: '病院', hiragana: 'byouin', translation: 'hospital', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07847A.mp3' },

  {
    text: '厚い',
    hiragana: 'atsui',
    translation: 'thick, bulky',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00156A.mp3'
  },

  {
    text: '忙しい',
    hiragana: 'isogashii',
    translation: 'busy, occupied',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00452A.mp3'
  },

  { text: '薄い', hiragana: 'usui', translation: 'thin, weak', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00689A.mp3' },

  { text: '川', hiragana: 'kawa', translation: 'river, stream', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01845A.mp3' },

  {
    text: '暗い',
    hiragana: 'kurai',
    translation: 'dark, gloomy',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02521A.mp3'
  },

  {
    text: 'クラス',
    hiragana: 'kurasu',
    translation: 'class (in school)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02526A.mp3'
  },

  {
    text: '黒い',
    hiragana: 'kuroi',
    translation: 'black, dark',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02563A.mp3'
  },

  { text: 'バス', hiragana: 'basu', translation: 'bus', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07312A.mp3' },

  { text: '青い', hiragana: 'aoi', translation: 'blue', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00034A.mp3' },

  {
    text: '買い物',
    hiragana: 'kaimono',
    translation: 'shopping, purchase',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01419A.mp3'
  },

  {
    text: '薬',
    hiragana: 'kusuri',
    translation: 'drug, medicine',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02445A.mp3'
  },

  { text: '砂糖', hiragana: 'satou', translation: 'sugar', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03468A.mp3' },

  {
    text: '休み',
    hiragana: 'yasumi',
    translation: 'holiday, break',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09412A.mp3'
  },

  {
    text: '郵便局',
    hiragana: 'yuubinkyoku',
    translation: 'post office',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09514A.mp3'
  },

  { text: '住所', hiragana: 'juusho', translation: 'address', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03977A.mp3' },

  {
    text: 'こちら',
    hiragana: 'kochira',
    translation: 'here, this way (polite)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03139A.mp3'
  },

  {
    text: '財布',
    hiragana: 'saifu',
    translation: 'purse, wallet',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03339A.mp3'
  },

  {
    text: 'パスポート',
    hiragana: 'pasupo-to',
    translation: 'passport',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07317A.mp3'
  },

  { text: '椅子', hiragana: 'isu', translation: 'chair', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00442A.mp3' },

  {
    text: '可愛い',
    hiragana: 'kawaii',
    translation: 'cute, sweet',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01849A.mp3'
  },

  {
    text: 'お祖父さん',
    hiragana: 'ojiisan',
    translation: 'grandfather (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01073A.mp3'
  },

  {
    text: '切手',
    hiragana: 'kitte',
    translation: 'postage stamp',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02117A.mp3'
  },

  {
    text: '涼しい',
    hiragana: 'suzushii',
    translation: 'cool (of temperature)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04566A.mp3'
  },

  {
    text: 'いくつ',
    hiragana: 'ikutsu',
    translation: 'how many, how old',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00396A.mp3'
  },

  { text: 'メニュー', hiragana: 'menyu-', translation: 'menu', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09211A.mp3' },

  {
    text: '電気',
    hiragana: 'denki',
    translation: 'electricity, electric light',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06145A.mp3'
  },

  { text: '勝つ', hiragana: 'katsu', translation: 'win', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01669A.mp3' },

  {
    text: '負ける',
    hiragana: 'makeru',
    translation: 'lose (a game), be defeated',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08680A.mp3'
  },

  {
    text: '建てる',
    hiragana: 'tateru',
    translation: 'build, erect',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05410A.mp3'
  },

  { text: '日記', hiragana: 'nikki', translation: 'diary', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06851A.mp3' },

  {
    text: '売り切れ',
    hiragana: 'urikire',
    translation: 'sellout, sold out',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00788A.mp3'
  },

  {
    text: 'お巡りさん',
    hiragana: 'omawarisan',
    translation: 'police officer (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01189A.mp3'
  },

  {
    text: '目覚まし時計',
    hiragana: 'mezamashidokei',
    translation: 'alarm clock',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09190A.mp3'
  },

  {
    text: 'レシート',
    hiragana: 'reshi-to',
    translation: 'receipt (loan word)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09927A.mp3'
  },

  {
    text: 'ティッシュ',
    hiragana: 'tisshu',
    translation: 'tissue, Kleenex',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06014A.mp3'
  },

  {
    text: '歯ブラシ',
    hiragana: 'haburashi',
    translation: 'toothbrush',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07452A.mp3'
  },

  {
    text: '下りる',
    hiragana: 'oriru',
    translation: 'go down, come down',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01250A.mp3'
  },

  { text: '洗う', hiragana: 'arau', translation: 'wash', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00260A.mp3' },

  {
    text: 'パート',
    hiragana: 'pa-to',
    translation: 'part-time',
    audioURL: 'https://assets1.iknow.jp/assets/users/Smart.fm/2ldl5n3jkga5s.mp3'
  },

  { text: '氏名', hiragana: 'shimei', translation: 'full name', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03867A.mp3' },

  {
    text: '今夜',
    hiragana: "kon'ya",
    translation: 'tonight, this evening',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03272A.mp3'
  },

  { text: '夜中', hiragana: 'yonaka', translation: 'midnight', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09709A.mp3' },

  {
    text: '来週',
    hiragana: 'raishuu',
    translation: 'next week',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09766A.mp3'
  },

  { text: '誰か', hiragana: 'dareka', translation: 'someone', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05486A.mp3' },

  {
    text: '何',
    hiragana: 'nan',
    translation: 'what (used with t, d, n consonants and counters)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06760A.mp3'
  },

  {
    text: '今朝',
    hiragana: 'kesa',
    translation: 'this morning',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02661A.mp3'
  },

  { text: '寿司', hiragana: 'sushi', translation: 'sushi', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04561A.mp3' },

  {
    text: '履く',
    hiragana: 'haku',
    translation: 'put on (shoes), wear (pants, skirt)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07240A.mp3'
  },

  { text: 'おじさん', hiragana: 'ojisan', translation: 'uncle', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01081A.mp3' },

  { text: 'おばさん', hiragana: 'obasan', translation: 'aunt', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01175A.mp3' },

  {
    text: 'お祖母さん',
    hiragana: 'obaasan',
    translation: 'grandmother (colloquial), elderly woman',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01171A.mp3'
  },

  { text: 'いとこ', hiragana: 'itoko', translation: 'cousin', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00555A.mp3' },

  {
    text: '辞書',
    hiragana: 'jisho',
    translation: 'dictionary (category)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03685A.mp3'
  },

  {
    text: '朝ご飯',
    hiragana: 'asagohan',
    translation: 'breakfast (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00106A.mp3'
  },

  { text: '白', hiragana: 'shiro', translation: 'white color', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04344A.mp3' },

  {
    text: 'どっち',
    hiragana: 'docchi',
    translation: 'which (casual)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06462A.mp3'
  },

  {
    text: 'そっち',
    hiragana: 'socchi',
    translation: 'there (casual)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05069A.mp3'
  },

  {
    text: '明日',
    hiragana: 'ashita',
    translation: 'tomorrow (colloquial)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00122A.mp3'
  },

  {
    text: '明後日',
    hiragana: 'asatte',
    translation: 'day after tomorrow (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00107A.mp3'
  },

  {
    text: '一昨日',
    hiragana: 'ototoi',
    translation: 'the day before yesterday (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01146A.mp3'
  },

  { text: '庭', hiragana: 'niwa', translation: 'garden, yard', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06903A.mp3' },

  {
    text: '左側',
    hiragana: 'hidarigawa',
    translation: 'left side',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07714A.mp3'
  },

  {
    text: '右側',
    hiragana: 'migigawa',
    translation: 'right side',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08870A.mp3'
  },

  { text: '指', hiragana: 'yubi', translation: 'finger, toe', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09553A.mp3' },

  { text: '眼鏡', hiragana: 'megane', translation: 'glasses', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09178A.mp3' },

  { text: '鞄', hiragana: 'kaban', translation: 'bag, handbag', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01744A.mp3' },

  {
    text: 'あっち',
    hiragana: 'acchi',
    translation: 'other side, over there (casual)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00170A.mp3'
  },

  {
    text: '大人しい',
    hiragana: 'otonashii',
    translation: 'gentle, quiet',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01150A.mp3'
  },

  {
    text: '下手',
    hiragana: 'heta',
    translation: 'bad at, unskilled',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08315A.mp3'
  },

  {
    text: '厳しい',
    hiragana: 'kibishii',
    translation: 'strict, severe',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02140A.mp3'
  },

  {
    text: '一人で',
    hiragana: 'hitoride',
    translation: 'by oneself, alone',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07789A.mp3'
  },

  {
    text: '答え',
    hiragana: 'kotae',
    translation: 'answer, solution',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03130A.mp3'
  },

  {
    text: 'この頃',
    hiragana: 'konogoro',
    translation: 'these days, recently',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03182A.mp3'
  },

  {
    text: '残念',
    hiragana: 'zannen',
    translation: 'regretful, disappointing',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03550A.mp3'
  },

  {
    text: '仕舞う',
    hiragana: 'shimau',
    translation: 'put away, put in',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03852A.mp3'
  },

  {
    text: '心配',
    hiragana: 'shinpai',
    translation: 'anxiety, worry',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04434A.mp3'
  },

  {
    text: '外',
    hiragana: 'soto',
    translation: 'outside, open air',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05073A.mp3'
  },

  {
    text: '大切',
    hiragana: 'taisetsu',
    translation: 'important, valuable',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05214A.mp3'
  },

  {
    text: 'ちょうど',
    hiragana: 'choudo',
    translation: 'just, exactly',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05722A.mp3'
  },

  {
    text: '助ける',
    hiragana: 'tasukeru',
    translation: 'help, save',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05338A.mp3'
  },

  {
    text: '勤める',
    hiragana: 'tsutomeru',
    translation: 'serve, hold a job',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05903A.mp3'
  },

  {
    text: '連れていく',
    hiragana: 'tsureteiku',
    translation: 'take along, bring along (a person)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05971A.mp3'
  },

  {
    text: '丈夫',
    hiragana: 'joubu',
    translation: 'healthy, sturdy',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04231A.mp3'
  },

  {
    text: '賑やか',
    hiragana: 'nigiyaka',
    translation: 'lively, exciting',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06809A.mp3'
  },

  { text: '眠い', hiragana: 'nemui', translation: 'sleepy', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07009A.mp3' },

  { text: '山', hiragana: 'yama', translation: 'mountain', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09442A.mp3' },

  { text: '橋', hiragana: 'hashi', translation: 'bridge', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07290A.mp3' },

  {
    text: '止まる',
    hiragana: 'tomaru',
    translation: 'come to a stop, cease',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06502A.mp3'
  },

  {
    text: '降る',
    hiragana: 'furu',
    translation: 'fall, come down (rain, snow, etc.)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08198A.mp3'
  },

  {
    text: '本当',
    hiragana: 'hontou',
    translation: 'reality, genuine',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08605A.mp3'
  },

  { text: '町', hiragana: 'machi', translation: 'town', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08723A.mp3' },

  {
    text: 'お菓子',
    hiragana: 'okashi',
    translation: 'sweets, snacks',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01008A.mp3'
  },

  {
    text: '緩い',
    hiragana: 'yurui',
    translation: 'slack, loose',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09563A.mp3'
  },

  {
    text: '良い',
    hiragana: 'yoi',
    translation: 'good (formal/written form)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09574A.mp3'
  },

  {
    text: 'ようこそ',
    hiragana: 'youkoso',
    translation: 'welcome (greeting)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09593A.mp3'
  },

  {
    text: 'お土産',
    hiragana: 'omiyage',
    translation: 'souvenir (polite)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01192A.mp3'
  },

  { text: '両親', hiragana: 'ryoushin', translation: 'parents', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09861A.mp3' },

  {
    text: 'ウェーター',
    hiragana: 'we-ta-',
    translation: 'waiter',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00651A.mp3'
  },

  {
    text: 'ウェートレス',
    hiragana: 'we-toresu',
    translation: 'waitress',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00652A.mp3'
  },

  {
    text: '絶対に',
    hiragana: 'zettaini',
    translation: 'absolutely, definitely',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04815A.mp3'
  },

  {
    text: 'ごちそう',
    hiragana: 'gochisou',
    translation: 'feast, treat',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03135A.mp3'
  },

  { text: 'フォーク', hiragana: 'fo-ku', translation: 'fork', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07974A.mp3' },

  { text: 'スプーン', hiragana: 'supu-n', translation: 'spoon', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04610A.mp3' },

  { text: '瓶', hiragana: 'bin', translation: 'bottle', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07916A.mp3' },

  {
    text: '付く',
    hiragana: 'tsuku',
    translation: 'be on, be switched on',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05852A.mp3'
  },

  { text: '醤油', hiragana: 'shouyu', translation: 'soy sauce', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04244A.mp3' },

  { text: '茶碗', hiragana: 'chawan', translation: 'rice bowl', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05633A.mp3' },

  {
    text: '決める',
    hiragana: 'kimeru',
    translation: 'decide, agree upon',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02162A.mp3'
  },

  {
    text: '感じる',
    hiragana: 'kanjiru',
    translation: 'feel, sense',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01925A.mp3'
  },

  {
    text: '生きる',
    hiragana: 'ikiru',
    translation: "live (one's life)",
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00390A.mp3'
  },

  {
    text: '動かす',
    hiragana: 'ugokasu',
    translation: 'move (something)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00681A.mp3'
  },

  {
    text: '壊れる',
    hiragana: 'kowareru',
    translation: 'break, break down',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03241A.mp3'
  },

  { text: '復習', hiragana: 'fukushuu', translation: 'review', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08014A.mp3' },

  { text: '眉', hiragana: 'mayu', translation: 'eyebrow', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/Int/JW02893A.mp3' },

  {
    text: '客',
    hiragana: 'kyaku',
    translation: 'visitor, customer',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02167A.mp3'
  },

  { text: '机', hiragana: 'tsukue', translation: 'desk', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05858A.mp3' },

  { text: '風呂', hiragana: 'furo', translation: 'bath', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08214A.mp3' },

  { text: '湯', hiragana: 'yu', translation: 'hot water', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09471A.mp3' },

  {
    text: 'ぬるい',
    hiragana: 'nurui',
    translation: 'tepid, lukewarm',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06942A.mp3'
  },

  {
    text: '風邪薬',
    hiragana: 'kazegusuri',
    translation: 'cold medicine',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01615A.mp3'
  },

  { text: '靴下', hiragana: 'kutsushita', translation: 'socks', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02481A.mp3' },

  {
    text: 'たばこ',
    hiragana: 'tabako',
    translation: 'tobacco, cigarette',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05430A.mp3'
  },

  {
    text: 'アイスコーヒー',
    hiragana: 'aisuko-hi-',
    translation: 'iced coffee',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00010A.mp3'
  },

  {
    text: '天ぷら',
    hiragana: 'tenpura',
    translation: 'Japanese deep-fried food',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06181A.mp3'
  },

  { text: '肉', hiragana: 'niku', translation: 'flesh, meat', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06814A.mp3' },

  {
    text: '昨夜',
    hiragana: 'yuube',
    translation: 'last night, last evening (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09517A.mp3'
  },

  {
    text: '流行る',
    hiragana: 'hayaru',
    translation: 'be in fashion, be popular',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07479A.mp3'
  },

  {
    text: '連れてくる',
    hiragana: 'tsuretekuru',
    translation: 'bring (a person)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05972A.mp3'
  },

  {
    text: '方',
    hiragana: 'kata',
    translation: 'person (polite form)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01627A.mp3'
  },

  { text: '零', hiragana: 'rei', translation: 'zero', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09899A.mp3' },

  { text: '雲', hiragana: 'kumo', translation: 'cloud', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02512A.mp3' },

  { text: '空', hiragana: 'sora', translation: 'sky', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05102A.mp3' },

  { text: '人気', hiragana: 'ninki', translation: 'popularity', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06911A.mp3' },

  {
    text: '兄さん',
    hiragana: 'niisan',
    translation: "(one's own) older brother (polite)",
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06794A.mp3'
  },

  {
    text: '姉さん',
    hiragana: 'neesan',
    translation: "(one's own) older sister (polite)",
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06954A.mp3'
  },

  {
    text: '平成',
    hiragana: 'heisei',
    translation: 'Heisei era',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08298A.mp3'
  },

  {
    text: '毎月',
    hiragana: 'maitsuki',
    translation: 'every month',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08637A.mp3'
  },

  {
    text: '半日',
    hiragana: 'hannichi',
    translation: 'half a day',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07571A.mp3'
  },

  {
    text: '半月',
    hiragana: 'hantsuki',
    translation: 'half a month',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07562A.mp3'
  },

  {
    text: 'なるほど',
    hiragana: 'naruhodo',
    translation: 'I see, now I understand',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/Int/JW01734A.mp3'
  },

  {
    text: 'つまり',
    hiragana: 'tsumari',
    translation: 'in short, that is to say',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05931A.mp3'
  },

  {
    text: 'そのまま',
    hiragana: 'sonomama',
    translation: 'as it is, just like that',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05085A.mp3'
  },

  {
    text: 'はっきり',
    hiragana: 'hakkiri',
    translation: 'clearly',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07361A.mp3'
  },

  {
    text: '大変',
    hiragana: 'taihen',
    translation: 'awful, hard',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05256A.mp3'
  },

  {
    text: '簡単',
    hiragana: 'kantan',
    translation: 'simple, easy',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01942A.mp3'
  },

  {
    text: '似ている',
    hiragana: 'niteiru',
    translation: 'look like, resemble',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06865A.mp3'
  },

  {
    text: '驚く',
    hiragana: 'odoroku',
    translation: 'be surprised, be startled',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01158A.mp3'
  },

  {
    text: '嫌',
    hiragana: 'iya',
    translation: "dislike, don't like",
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00588A.mp3'
  },

  {
    text: '喧嘩',
    hiragana: 'kenka',
    translation: 'fight, argument',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02743A.mp3'
  },

  {
    text: '遅れる',
    hiragana: 'okureru',
    translation: 'be late',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01046A.mp3'
  },

  {
    text: 'にんじん',
    hiragana: 'ninjin',
    translation: 'carrot',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06919A.mp3'
  },

  {
    text: 'ジャガイモ',
    hiragana: 'jagaimo',
    translation: 'potato',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03899A.mp3'
  },

  { text: 'ナス', hiragana: 'nasu', translation: 'eggplant', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06682A.mp3' },

  { text: 'やかん', hiragana: 'yakan', translation: 'kettle', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09371A.mp3' },

  {
    text: '話し合う',
    hiragana: 'hanashiau',
    translation: 'discuss, talk over',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07416A.mp3'
  },

  {
    text: '残す',
    hiragana: 'nokosu',
    translation: 'leave, leave undone',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07079A.mp3'
  },

  {
    text: 'ごちそうする',
    hiragana: 'gochisousuru',
    translation: 'treat, host (a meal)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03137A.mp3'
  },

  { text: '合う', hiragana: 'au', translation: 'fit, match', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00028A.mp3' },

  {
    text: '当たる',
    hiragana: 'ataru',
    translation: '(go straight and) hit, strike',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00151A.mp3'
  },

  {
    text: '集まる',
    hiragana: 'atsumaru',
    translation: 'gather, be collected',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00175A.mp3'
  },

  {
    text: '場所',
    hiragana: 'basho',
    translation: 'place, space',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07307A.mp3'
  },

  { text: '海', hiragana: 'umi', translation: 'sea, ocean', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00762A.mp3' },

  {
    text: '少年',
    hiragana: 'shounen',
    translation: 'boy (between 7 and 18 years old)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04219A.mp3'
  },

  { text: '孫', hiragana: 'mago', translation: 'grandchild', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08682A.mp3' },

  {
    text: '生徒',
    hiragana: 'seito',
    translation: 'pupil, student',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04735A.mp3'
  },

  {
    text: '高校',
    hiragana: 'koukou',
    translation: 'high school (for short)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02902A.mp3'
  },

  {
    text: '年上',
    hiragana: 'toshiue',
    translation: 'older, senior',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06423A.mp3'
  },

  {
    text: '卒業',
    hiragana: 'sotsugyou',
    translation: 'graduation',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05065A.mp3'
  },

  {
    text: '運動',
    hiragana: 'undou',
    translation: 'movement, exercise',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00822A.mp3'
  },

  {
    text: '選手',
    hiragana: 'senshu',
    translation: 'athlete, (sports) player',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04883A.mp3'
  },

  { text: '映画', hiragana: 'eiga', translation: 'movie', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00836A.mp3' },

  { text: '英語', hiragana: 'eigo', translation: 'English', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00842A.mp3' },

  { text: '手紙', hiragana: 'tegami', translation: 'letter', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06037A.mp3' },

  { text: '動物', hiragana: 'doubutsu', translation: 'animal', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06311A.mp3' },

  { text: '音', hiragana: 'oto', translation: 'sound, noise', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01132A.mp3' },

  {
    text: '海外',
    hiragana: 'kaigai',
    translation: 'overseas, abroad',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01327A.mp3'
  },

  {
    text: '外国人',
    hiragana: 'gaikokujin',
    translation: 'foreigner',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01351A.mp3'
  },

  {
    text: '帰国',
    hiragana: 'kikoku',
    translation: "return to one's country",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02040A.mp3'
  },

  { text: '彼ら', hiragana: 'karera', translation: 'they', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01840A.mp3' },

  { text: '機械', hiragana: 'kikai', translation: 'machine', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01995A.mp3' },

  { text: '基本', hiragana: 'kihon', translation: 'basics', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02148A.mp3' },

  {
    text: '今度',
    hiragana: 'kondo',
    translation: 'this time, next time',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03259A.mp3'
  },

  { text: '最後', hiragana: 'saigo', translation: 'last', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03304A.mp3' },

  {
    text: '最初',
    hiragana: 'saisho',
    translation: 'first, outset',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03315A.mp3'
  },

  {
    text: '準備',
    hiragana: 'junbi',
    translation: 'preparation, arrangement',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04112A.mp3'
  },

  {
    text: '進む',
    hiragana: 'susumu',
    translation: 'advance, move forward',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04567A.mp3'
  },

  {
    text: '直接',
    hiragana: 'chokusetsu',
    translation: 'directly',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05742A.mp3'
  },

  {
    text: '特に',
    hiragana: 'tokuni',
    translation: 'specially, particularly',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06397A.mp3'
  },

  {
    text: '届く',
    hiragana: 'todoku',
    translation: 'reach, be received',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06469A.mp3'
  },

  { text: 'なぜ', hiragana: 'naze', translation: 'why', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06684A.mp3' },

  {
    text: '並ぶ',
    hiragana: 'narabu',
    translation: 'line up, be parallel',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06746A.mp3'
  },

  {
    text: '運ぶ',
    hiragana: 'hakobu',
    translation: 'carry, transport',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07283A.mp3'
  },

  {
    text: '直す',
    hiragana: 'naosu',
    translation: 'repair, fix',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06621A.mp3'
  },

  {
    text: '反対',
    hiragana: 'hantai',
    translation: 'oppose, object',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07557A.mp3'
  },

  {
    text: '場合',
    hiragana: 'baai',
    translation: 'situation, case',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07149A.mp3'
  },

  {
    text: '詳しい',
    hiragana: 'kuwashii',
    translation: 'detailed, have detailed knowledge',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02569A.mp3'
  },

  {
    text: 'いたずら',
    hiragana: 'itazura',
    translation: 'mischief, prank',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00460A.mp3'
  },

  {
    text: 'お祝い',
    hiragana: 'oiwai',
    translation: 'celebration',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00935A.mp3'
  },

  { text: 'くし', hiragana: 'kushi', translation: 'comb', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02432A.mp3' },

  {
    text: 'こぼれる',
    hiragana: 'koboreru',
    translation: 'spill, overflow',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03195A.mp3'
  },

  {
    text: '伝える',
    hiragana: 'tsutaeru',
    translation: 'convey, transmit',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05883A.mp3'
  },

  { text: '膝', hiragana: 'hiza', translation: 'knee', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07679A.mp3' },

  { text: '肘', hiragana: 'hiji', translation: 'elbow', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07686A.mp3' },

  { text: '枕', hiragana: 'makura', translation: 'pillow', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08674A.mp3' },

  {
    text: '建物',
    hiragana: 'tatemono',
    translation: 'building, structure',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05408A.mp3'
  },

  { text: '道路', hiragana: 'douro', translation: 'road', audioURL: 'https://assets0.iknow.jp/assets/users/Smart.fm/248ed7d0g.mp3' },

  {
    text: '四つ角',
    hiragana: 'yotsukado',
    translation: 'intersection',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09700A.mp3'
  },

  {
    text: '曲がり角',
    hiragana: 'magarikado',
    translation: 'corner (to turn)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08662A.mp3'
  },

  { text: '警察', hiragana: 'keisatsu', translation: 'police', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02614A.mp3' },

  {
    text: '空気',
    hiragana: 'kuuki',
    translation: 'air, atmosphere',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02406A.mp3'
  },

  {
    text: 'スポーツ',
    hiragana: 'supo-tsu',
    translation: 'sport',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04616A.mp3'
  },

  {
    text: 'チャンス',
    hiragana: 'chansu',
    translation: 'chance',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/Int/JW00919A.mp3'
  },

  {
    text: 'クリーニング',
    hiragana: 'kuri-ningu',
    translation: 'dry cleaning',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02536A.mp3'
  },

  {
    text: 'サービス',
    hiragana: 'sa-bisu',
    translation: 'service',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03282A.mp3'
  },

  {
    text: 'グループ',
    hiragana: 'guru-pu',
    translation: 'group',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02543A.mp3'
  },

  {
    text: '自宅',
    hiragana: 'jitaku',
    translation: "one's house, one's home",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03729A.mp3'
  },

  {
    text: '家庭',
    hiragana: 'katei',
    translation: 'home, family',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01708A.mp3'
  },

  {
    text: '期間',
    hiragana: 'kikan',
    translation: 'term, period',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02007A.mp3'
  },

  {
    text: '年度',
    hiragana: 'nendo',
    translation: 'year, school year',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07036A.mp3'
  },

  {
    text: '経験',
    hiragana: 'keiken',
    translation: 'experience, knowledge or skill gained',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02605A.mp3'
  },

  {
    text: '安全',
    hiragana: 'anzen',
    translation: 'safety, security',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00321A.mp3'
  },

  {
    text: '危険',
    hiragana: 'kiken',
    translation: 'danger, dangerous',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02029A.mp3'
  },

  {
    text: '注意',
    hiragana: 'chuui',
    translation: 'attention, care',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05643A.mp3'
  },

  { text: '成功', hiragana: 'seikou', translation: 'success', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04688A.mp3' },

  {
    text: '努力',
    hiragana: 'doryoku',
    translation: 'endeavor, effort',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06563A.mp3'
  },

  {
    text: '説明',
    hiragana: 'setsumei',
    translation: 'explanation, description',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04825A.mp3'
  },

  {
    text: '地震',
    hiragana: 'jishin',
    translation: 'earthquake',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03694A.mp3'
  },

  {
    text: '手術',
    hiragana: 'shujutsu',
    translation: 'surgical operation',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04049A.mp3'
  },

  { text: '火傷', hiragana: 'yakedo', translation: 'burn', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09399A.mp3' },

  {
    text: '課題',
    hiragana: 'kadai',
    translation: 'task, assignment',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01634A.mp3'
  },

  {
    text: '子',
    hiragana: 'ko',
    translation: 'young child, kid',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02827A.mp3'
  },

  {
    text: '確認',
    hiragana: 'kakunin',
    translation: 'confirmation',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01526A.mp3'
  },

  {
    text: '実際',
    hiragana: 'jissai',
    translation: 'reality, actual state',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03761A.mp3'
  },

  {
    text: '国際',
    hiragana: 'kokusai',
    translation: 'international',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03049A.mp3'
  },

  {
    text: '会議',
    hiragana: 'kaigi',
    translation: 'conference, meeting',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01336A.mp3'
  },

  {
    text: '提案',
    hiragana: 'teian',
    translation: 'suggestion, proposal',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05982A.mp3'
  },

  {
    text: '事務所',
    hiragana: 'jimusho',
    translation: "office, one's place of business",
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03866A.mp3'
  },

  { text: '教授', hiragana: 'kyouju', translation: 'professor', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02260A.mp3' },

  { text: '世紀', hiragana: 'seiki', translation: 'century', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04676A.mp3' },

  {
    text: 'あちこち',
    hiragana: 'achikochi',
    translation: 'all over, here and there',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00152A.mp3'
  },

  {
    text: 'そちら',
    hiragana: 'sochira',
    translation: 'there (polite)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05064A.mp3'
  },

  {
    text: 'あちら',
    hiragana: 'achira',
    translation: 'over there (polite)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00153A.mp3'
  },

  {
    text: 'もし',
    hiragana: 'moshi',
    translation: 'if, in case of',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09271A.mp3'
  },

  {
    text: 'うるさい',
    hiragana: 'urusai',
    translation: 'noisy, annoying',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00800A.mp3'
  },

  {
    text: '固い',
    hiragana: 'katai',
    translation: 'stiff, tight',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01633A.mp3'
  },

  {
    text: '深い',
    hiragana: 'fukai',
    translation: 'deep, profound',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07978A.mp3'
  },

  {
    text: '面白い',
    hiragana: 'omoshiroi',
    translation: 'interesting, funny',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01217A.mp3'
  },

  {
    text: '全く',
    hiragana: 'mattaku',
    translation: 'entirely, truly',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08758A.mp3'
  },

  { text: '半分', hiragana: 'hanbun', translation: 'half', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07584A.mp3' },

  {
    text: '普通',
    hiragana: 'futsuu',
    translation: 'normal, regular',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08103A.mp3'
  },

  { text: '分', hiragana: 'bun', translation: 'amount, share', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08230A.mp3' },

  { text: '文化', hiragana: 'bunka', translation: 'culture', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08233A.mp3' },

  {
    text: '毎日',
    hiragana: 'mainichi',
    translation: 'every day',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08641A.mp3'
  },

  {
    text: '気を付ける',
    hiragana: 'kiwotsukeru',
    translation: 'be careful about, pay attention to',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02345A.mp3'
  },

  {
    text: '守る',
    hiragana: 'mamoru',
    translation: 'protect, observe',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08798A.mp3'
  },

  {
    text: 'もちろん',
    hiragana: 'mochiron',
    translation: 'of course',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09290A.mp3'
  },

  {
    text: 'やはり',
    hiragana: 'yahari',
    translation: 'as expected',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09435A.mp3'
  },

  {
    text: 'いくら',
    hiragana: 'ikura',
    translation: 'how much (money)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00400A.mp3'
  },

  {
    text: 'よろしく',
    hiragana: 'yoroshiku',
    translation: "one's regards",
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09748A.mp3'
  },

  {
    text: 'どなた',
    hiragana: 'donata',
    translation: 'who (polite)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06477A.mp3'
  },

  {
    text: '許す',
    hiragana: 'yurusu',
    translation: 'permit, forgive',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09565A.mp3'
  },

  {
    text: '分ける',
    hiragana: 'wakeru',
    translation: 'divide, share',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW10025A.mp3'
  },

  { text: '自然', hiragana: 'shizen', translation: 'nature', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03705A.mp3' },

  {
    text: 'アパート',
    hiragana: 'apa-to',
    translation: 'apartment, flat',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00205A.mp3'
  },

  { text: 'ホテル', hiragana: 'hoteru', translation: 'hotel', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08557A.mp3' },

  {
    text: 'パソコン',
    hiragana: 'pasokon',
    translation: 'personal computer',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07322A.mp3'
  },

  { text: 'うまい', hiragana: 'umai', translation: 'good at', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00756A.mp3' },

  {
    text: '明るい',
    hiragana: 'akarui',
    translation: 'bright, cheerful',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00055A.mp3'
  },

  {
    text: '急ぐ',
    hiragana: 'isogu',
    translation: 'hurry, do quickly',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00453A.mp3'
  },

  { text: '歌', hiragana: 'uta', translation: 'song', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00701A.mp3' },

  {
    text: '中学校',
    hiragana: 'chuugakkou',
    translation: 'junior high school',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05651A.mp3'
  },

  { text: 'テスト', hiragana: 'tesuto', translation: 'test', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06084A.mp3' },

  {
    text: 'ポスト',
    hiragana: 'posuto',
    translation: 'postbox, mailbox',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08528A.mp3'
  },

  {
    text: 'ハンカチ',
    hiragana: 'hankachi',
    translation: 'handkerchief',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07525A.mp3'
  },

  {
    text: '髪',
    hiragana: 'kami',
    translation: 'hair, hairstyle',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01769A.mp3'
  },

  { text: '帽子', hiragana: 'boushi', translation: 'hat, cap', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08418A.mp3' },

  {
    text: '被る',
    hiragana: 'kaburu',
    translation: "wear, put on (on one's head)",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01757A.mp3'
  },

  {
    text: 'ブラウス',
    hiragana: 'burausu',
    translation: 'blouse',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08174A.mp3'
  },

  {
    text: '週末',
    hiragana: 'shuumatsu',
    translation: 'weekend',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04014A.mp3'
  },

  {
    text: '先週',
    hiragana: 'senshuu',
    translation: 'last week',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04884A.mp3'
  },

  {
    text: '再来週',
    hiragana: 'saraishuu',
    translation: 'the week after next',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03501A.mp3'
  },

  {
    text: 'いつか',
    hiragana: 'itsuka',
    translation: 'some time, some day',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00503A.mp3'
  },

  {
    text: '宿題',
    hiragana: 'shukudai',
    translation: 'homework',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04038A.mp3'
  },

  { text: '鍵', hiragana: 'kagi', translation: 'key, lock', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01472A.mp3' },

  { text: '傘', hiragana: 'kasa', translation: 'umbrella', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01571A.mp3' },

  {
    text: '乗り換える',
    hiragana: 'norikaeru',
    translation: 'change, transfer',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07121A.mp3'
  },

  {
    text: '向かう',
    hiragana: 'mukau',
    translation: 'face, head toward',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09038A.mp3'
  },

  {
    text: '本屋',
    hiragana: "hon'ya",
    translation: 'bookstore (colloquial)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08619A.mp3'
  },

  {
    text: 'お茶',
    hiragana: 'ocha',
    translation: 'tea (polite)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01122A.mp3'
  },

  {
    text: '改札口',
    hiragana: 'kaisatsuguchi',
    translation: 'ticket gate',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01355A.mp3'
  },

  {
    text: '晴れ',
    hiragana: 'hare',
    translation: 'fine weather, clear sky',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07504A.mp3'
  },

  {
    text: 'バス停',
    hiragana: 'basutei',
    translation: 'bus stop',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07316A.mp3'
  },

  {
    text: '曇り',
    hiragana: 'kumori',
    translation: 'cloudy weather',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02514A.mp3'
  },

  { text: '塩', hiragana: 'shio', translation: 'salt', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03596A.mp3' },

  {
    text: 'たくさん',
    hiragana: 'takusan',
    translation: 'a lot, in large quantity',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05311A.mp3'
  },

  { text: '大嫌い', hiragana: 'daikirai', translation: 'hate', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05169A.mp3' },

  {
    text: '中',
    hiragana: 'naka',
    translation: 'inside, middle',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06625A.mp3'
  },

  {
    text: '二階',
    hiragana: 'nikai',
    translation: 'second floor, upstairs',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06800A.mp3'
  },

  {
    text: '無くす',
    hiragana: 'nakusu',
    translation: 'lose, get rid of',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06663A.mp3'
  },

  {
    text: 'まあまあ',
    hiragana: 'maamaa',
    translation: 'OK, not bad',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08628A.mp3'
  },

  {
    text: '黄色',
    hiragana: 'kiiro',
    translation: 'yellow color',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01985A.mp3'
  },

  {
    text: 'ランチ',
    hiragana: 'ranchi',
    translation: 'lunch (loan word)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09786A.mp3'
  },

  { text: '魚', hiragana: 'sakana', translation: 'fish', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03363A.mp3' },

  { text: '味', hiragana: 'aji', translation: 'taste, flavor', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00115A.mp3' },

  { text: 'りんご', hiragana: 'ringo', translation: 'apple', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09885A.mp3' },

  {
    text: 'みかん',
    hiragana: 'mikan',
    translation: 'mandarin orange',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08867A.mp3'
  },

  {
    text: '皿',
    hiragana: 'sara',
    translation: 'plate, counter (for plates or helpings)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03498A.mp3'
  },

  {
    text: 'コーヒー',
    hiragana: 'ko-hi-',
    translation: 'coffee',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03029A.mp3'
  },

  {
    text: 'コップ',
    hiragana: 'koppu',
    translation: 'cup, glass',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03155A.mp3'
  },

  {
    text: '二人',
    hiragana: 'futari',
    translation: 'two persons',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08090A.mp3'
  },

  { text: '止む', hiragana: 'yamu', translation: 'stop, cease', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09446A.mp3' },

  { text: '九', hiragana: 'ku', translation: 'nine', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02391A.mp3' },

  {
    text: '昼間',
    hiragana: 'hiruma',
    translation: 'daytime, during the day',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07899A.mp3'
  },

  {
    text: 'いつ頃',
    hiragana: 'itsugoro',
    translation: 'about when, about what time',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00511A.mp3'
  },

  {
    text: '字',
    hiragana: 'ji',
    translation: '(individual) character, letter',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03571A.mp3'
  },

  {
    text: '七',
    hiragana: 'shichi',
    translation: 'seven (Chinese origin)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03739A.mp3'
  },

  {
    text: 'お釣り',
    hiragana: 'otsuri',
    translation: 'change (of money)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01127A.mp3'
  },

  {
    text: '名字',
    hiragana: 'myouji',
    translation: 'surname, family name',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09002A.mp3'
  },

  {
    text: 'おじ',
    hiragana: 'oji',
    translation: "(one's own) uncle",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01070A.mp3'
  },

  {
    text: 'おば',
    hiragana: 'oba',
    translation: "(one's own) aunt",
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01170A.mp3'
  },

  {
    text: '祖父',
    hiragana: 'sofu',
    translation: "(one's own) grandfather (formal)",
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05091A.mp3'
  },

  {
    text: '祖母',
    hiragana: 'sobo',
    translation: "(one's own) grandmother (formal)",
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05094A.mp3'
  },

  { text: '大事', hiragana: 'daiji', translation: 'importance', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05188A.mp3' },

  {
    text: '見方',
    hiragana: 'mikata',
    translation: 'view, perspective',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08863A.mp3'
  },

  { text: '鳥', hiragana: 'tori', translation: 'bird', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06533A.mp3' },

  { text: '犬', hiragana: 'inu', translation: 'dog', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00562A.mp3' },

  {
    text: '返事',
    hiragana: 'henji',
    translation: 'answer, reply',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08362A.mp3'
  },

  {
    text: 'また',
    hiragana: 'mata',
    translation: 'again, also, or',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08717A.mp3'
  },

  {
    text: '年間',
    hiragana: 'nenkan',
    translation: 'period of one year',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07024A.mp3'
  },

  { text: '青', hiragana: 'ao', translation: 'blue, green', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00033A.mp3' },

  { text: '赤', hiragana: 'aka', translation: 'red color', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00042A.mp3' },

  {
    text: '信号',
    hiragana: 'shingou',
    translation: 'signal, traffic light',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04379A.mp3'
  },

  { text: '円', hiragana: 'en', translation: 'circle', audioURL: 'https://assets3.iknow.jp/assets/users/Smart.fm/fl3k4441jocac.mp3' },

  {
    text: '非常に',
    hiragana: 'hijouni',
    translation: 'very, extremely',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07696A.mp3'
  },

  {
    text: '複雑',
    hiragana: 'fukuzatsu',
    translation: 'complicated, intricate',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08009A.mp3'
  },

  {
    text: '平和',
    hiragana: 'heiwa',
    translation: 'peace, harmony',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08307A.mp3'
  },

  {
    text: '回る',
    hiragana: 'mawaru',
    translation: 'turn round, go around',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW08818A.mp3'
  },

  {
    text: '若者',
    hiragana: 'wakamono',
    translation: 'young person, youth',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW10008A.mp3'
  },

  {
    text: '雪',
    hiragana: 'yuki',
    translation: 'snow, snowfall',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09535A.mp3'
  },

  {
    text: 'うまい',
    hiragana: 'umai',
    translation: 'delicious, tasty (used by male)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00757A.mp3'
  },

  {
    text: '思い出す',
    hiragana: 'omoidasu',
    translation: 'recollect, recall',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01206A.mp3'
  },

  {
    text: '聞こえる',
    hiragana: 'kikoeru',
    translation: 'hear, be heard',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02039A.mp3'
  },

  { text: '借りる', hiragana: 'kariru', translation: 'borrow', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01827A.mp3' },

  {
    text: '返す',
    hiragana: 'kaesu',
    translation: 'return, repay',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01431A.mp3'
  },

  {
    text: '受け取る',
    hiragana: 'uketoru',
    translation: 'receive, get',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00676A.mp3'
  },

  {
    text: '捨てる',
    hiragana: 'suteru',
    translation: 'discard, abandon',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04590A.mp3'
  },

  {
    text: '一緒',
    hiragana: 'issho',
    translation: 'together, same (colloquial)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/Int/JW01095A.mp3'
  },

  {
    text: '遊び',
    hiragana: 'asobi',
    translation: 'game, amusement',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00135A.mp3'
  },

  {
    text: '移す',
    hiragana: 'utsusu',
    translation: 'move, transfer',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00727A.mp3'
  },

  {
    text: '大きさ',
    hiragana: 'ookisa',
    translation: 'size, dimension',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00972A.mp3'
  },

  {
    text: '考え',
    hiragana: 'kangae',
    translation: 'thought, idea',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01879A.mp3'
  },

  {
    text: '空港',
    hiragana: 'kuukou',
    translation: 'airport (for public transportation)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02409A.mp3'
  },

  {
    text: '出発',
    hiragana: 'shuppatsu',
    translation: 'departure, starting',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04075A.mp3'
  },

  { text: '地図', hiragana: 'chizu', translation: 'map, atlas', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05598A.mp3' },

  { text: '運転', hiragana: 'unten', translation: 'drive', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00818A.mp3' },

  {
    text: '降りる',
    hiragana: 'oriru',
    translation: 'get off, land',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01251A.mp3'
  },

  {
    text: 'ガス',
    hiragana: 'gasu',
    translation: 'gas (loan word)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01605A.mp3'
  },

  {
    text: '必ず',
    hiragana: 'kanarazu',
    translation: 'without exception, always',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01727A.mp3'
  },

  { text: 'カメラ', hiragana: 'kamera', translation: 'camera', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01780A.mp3' },

  {
    text: '通う',
    hiragana: 'kayou',
    translation: 'go to and from, frequent a place',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01790A.mp3'
  },

  {
    text: '急に',
    hiragana: 'kyuuni',
    translation: 'suddenly, unexpectedly',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02218A.mp3'
  },

  {
    text: 'サラリーマン',
    hiragana: 'sarari-man',
    translation: 'salaried worker',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03509A.mp3'
  },

  {
    text: '給料',
    hiragana: 'kyuuryou',
    translation: 'salary, pay',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02228A.mp3'
  },

  {
    text: '曲',
    hiragana: 'kyoku',
    translation: 'piece of music',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02293A.mp3'
  },

  {
    text: '切れる',
    hiragana: 'kireru',
    translation: 'cut well, be sharp',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02338A.mp3'
  },

  {
    text: '正しい',
    hiragana: 'tadashii',
    translation: 'correct, righteous',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05354A.mp3'
  },

  {
    text: '苦しい',
    hiragana: 'kurushii',
    translation: 'painful, agonizing',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02546A.mp3'
  },

  {
    text: '細かい',
    hiragana: 'komakai',
    translation: 'minute, fine',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03198A.mp3'
  },

  { text: '静か', hiragana: 'shizuka', translation: 'quiet', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03696A.mp3' },

  { text: '健康', hiragana: 'kenkou', translation: 'health', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02758A.mp3' },

  { text: 'ゴルフ', hiragana: 'gorufu', translation: 'golf', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03225A.mp3' },

  {
    text: 'コース',
    hiragana: 'ko-su',
    translation: 'course, route',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03023A.mp3'
  },

  {
    text: '頼む',
    hiragana: 'tanomu',
    translation: 'order, ask for',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05426A.mp3'
  },

  {
    text: '困る',
    hiragana: 'komaru',
    translation: 'be troubled, not know what to do',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03201A.mp3'
  },

  {
    text: 'ずっと',
    hiragana: 'zutto',
    translation: 'all the time, all through',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04585A.mp3'
  },

  {
    text: '例えば',
    hiragana: 'tatoeba',
    translation: 'for example',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05414A.mp3'
  },

  {
    text: 'つもり',
    hiragana: 'tsumori',
    translation: 'intention, purpose',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05942A.mp3'
  },

  {
    text: 'しばらく',
    hiragana: 'shibaraku',
    translation: 'a little while, a while',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03827A.mp3'
  },

  {
    text: '紹介',
    hiragana: 'shoukai',
    translation: 'introduction',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04138A.mp3'
  },

  {
    text: '小学校',
    hiragana: 'shougakkou',
    translation: 'elementary school',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04146A.mp3'
  },

  {
    text: '公園',
    hiragana: 'kouen',
    translation: 'park, public garden',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02858A.mp3'
  },

  {
    text: '中学',
    hiragana: 'chuugaku',
    translation: 'junior high',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05649A.mp3'
  },

  {
    text: '成績',
    hiragana: 'seiseki',
    translation: 'results, grade',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04718A.mp3'
  },

  {
    text: '教科書',
    hiragana: 'kyoukasho',
    translation: 'textbook, schoolbook',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02244A.mp3'
  },

  {
    text: '席',
    hiragana: 'seki',
    translation: "seat, one's place",
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04778A.mp3'
  },

  {
    text: '教室',
    hiragana: 'kyoushitsu',
    translation: 'classroom, class',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02258A.mp3'
  },

  {
    text: '教師',
    hiragana: 'kyoushi',
    translation: 'teacher, instructor (formal)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02256A.mp3'
  },

  { text: '試験', hiragana: 'shiken', translation: 'exam', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03651A.mp3' },

  {
    text: '合格',
    hiragana: 'goukaku',
    translation: 'passing an examination',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW02875A.mp3'
  },

  {
    text: '数学',
    hiragana: 'suugaku',
    translation: 'mathematics',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04510A.mp3'
  },

  {
    text: '数字',
    hiragana: 'suuji',
    translation: 'numeric characters, number',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04511A.mp3'
  },

  { text: '音楽', hiragana: 'ongaku', translation: 'music', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01276A.mp3' },

  {
    text: '食事',
    hiragana: 'shokuji',
    translation: 'meal, food',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04271A.mp3'
  },

  {
    text: '壁',
    hiragana: 'kabe',
    translation: 'wall, partition',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01759A.mp3'
  },

  {
    text: '信じる',
    hiragana: 'shinjiru',
    translation: 'believe, trust',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04398A.mp3'
  },

  {
    text: '育てる',
    hiragana: 'sodateru',
    translation: 'bring up, raise',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05062A.mp3'
  },

  {
    text: '倒れる',
    hiragana: 'taoreru',
    translation: 'fall over',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05289A.mp3'
  },

  { text: '落とす', hiragana: 'otosu', translation: 'drop', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01143A.mp3' },

  {
    text: '代わる',
    hiragana: 'kawaru',
    translation: 'substitute, be substituted for',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01862A.mp3'
  },

  {
    text: 'タクシー',
    hiragana: 'takushi-',
    translation: 'taxi',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05312A.mp3'
  },

  {
    text: '確か',
    hiragana: 'tashika',
    translation: 'for sure, for certain',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05327A.mp3'
  },

  {
    text: '立てる',
    hiragana: 'tateru',
    translation: 'stand, set up',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05409A.mp3'
  },

  {
    text: '中学生',
    hiragana: 'chuugakusei',
    translation: 'junior high school student',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05650A.mp3'
  },

  {
    text: '売れる',
    hiragana: 'ureru',
    translation: 'sell, be in demand',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00803A.mp3'
  },

  {
    text: '着く',
    hiragana: 'tsuku',
    translation: 'arrive at, reach',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05851A.mp3'
  },

  {
    text: '決まる',
    hiragana: 'kimaru',
    translation: 'be decided',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02155A.mp3'
  },

  { text: '飾る', hiragana: 'kazaru', translation: 'decorate', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01581A.mp3' },

  { text: '殺す', hiragana: 'korosu', translation: 'kill', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03235A.mp3' },

  {
    text: '下げる',
    hiragana: 'sageru',
    translation: 'lower, turn down',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03407A.mp3'
  },

  {
    text: '贈る',
    hiragana: 'okuru',
    translation: 'offer, give',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW01043A.mp3'
  },

  {
    text: '訪ねる',
    hiragana: 'tazuneru',
    translation: 'visit, go to see',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05342A.mp3'
  },

  { text: '打つ', hiragana: 'utsu', translation: 'hit, strike', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00722A.mp3' },

  {
    text: '相談',
    hiragana: 'soudan',
    translation: 'consultation, advice',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05003A.mp3'
  },

  {
    text: '玄関',
    hiragana: 'genkan',
    translation: 'entrance, front door',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02749A.mp3'
  },

  { text: '兄弟', hiragana: 'kyoudai', translation: 'sibling', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02269A.mp3' },

  {
    text: '長男',
    hiragana: 'chounan',
    translation: 'eldest son',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05724A.mp3'
  },

  { text: '高さ', hiragana: 'takasa', translation: 'height', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05297A.mp3' },

  {
    text: '用',
    hiragana: 'you',
    translation: 'things to do',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/Int/JW01141A.mp3'
  },

  { text: '時代', hiragana: 'jidai', translation: 'age, era', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03720A.mp3' },

  {
    text: '位置',
    hiragana: 'ichi',
    translation: 'position, location',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00475A.mp3'
  },

  { text: '季節', hiragana: 'kisetsu', translation: 'season', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW02077A.mp3' },

  { text: '穴', hiragana: 'ana', translation: 'hole', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00194A.mp3' },

  {
    text: '裏',
    hiragana: 'ura',
    translation: 'the back, the reverse side',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00774A.mp3'
  },

  {
    text: '島',
    hiragana: 'shima',
    translation: 'island (Japanese origin)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03850A.mp3'
  },

  {
    text: '海岸',
    hiragana: 'kaigan',
    translation: 'seashore, coast',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01331A.mp3'
  },

  {
    text: 'ガラス',
    hiragana: 'garasu',
    translation: 'glass (material)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01811A.mp3'
  },

  { text: '自然', hiragana: 'shizen', translation: 'natural', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03706A.mp3' },

  { text: '風', hiragana: 'kaze', translation: 'wind', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01609A.mp3' },

  { text: '科学', hiragana: 'kagaku', translation: 'science', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW01455A.mp3' },

  { text: '太陽', hiragana: 'taiyou', translation: 'sun', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05270A.mp3' },

  { text: '台風', hiragana: 'taifuu', translation: 'typhoon', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05251A.mp3' },

  { text: '北', hiragana: 'kita', translation: 'north', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW02089A.mp3' },

  { text: '馬', hiragana: 'uma', translation: 'horse', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00755A.mp3' },

  { text: '牛肉', hiragana: 'gyuuniku', translation: 'beef', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW02219A.mp3' },

  {
    text: '雑誌',
    hiragana: 'zasshi',
    translation: 'magazine, journal',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03454A.mp3'
  },

  { text: '小説', hiragana: 'shousetsu', translation: 'novel', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04194A.mp3' },

  {
    text: '大使館',
    hiragana: 'taishikan',
    translation: 'embassy',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW05189A.mp3'
  },

  {
    text: '故障',
    hiragana: 'koshou',
    translation: 'malfunction, breakdown',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03117A.mp3'
  },

  { text: '温度', hiragana: 'ondo', translation: 'temperature', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01288A.mp3' },

  {
    text: '何か',
    hiragana: 'nanika',
    translation: 'something, some',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06706A.mp3'
  },

  {
    text: '向こう',
    hiragana: 'mukou',
    translation: 'over there, on the other side',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09062A.mp3'
  },

  {
    text: '真ん中',
    hiragana: 'mannaka',
    translation: 'center, middle (casual)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08832A.mp3'
  },

  {
    text: '遠く',
    hiragana: 'tooku',
    translation: 'far away, distance',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06343A.mp3'
  },

  {
    text: '横',
    hiragana: 'yoko',
    translation: 'side, width across',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09664A.mp3'
  },

  {
    text: 'つまらない',
    hiragana: 'tsumaranai',
    translation: 'boring, dull',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW05930A.mp3'
  },

  {
    text: '素晴らしい',
    hiragana: 'subarashii',
    translation: 'excellent, wonderful',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW04604A.mp3'
  },

  {
    text: '毎年',
    hiragana: 'maitoshi',
    translation: 'every year (colloquial)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08639A.mp3'
  },

  {
    text: '来月',
    hiragana: 'raigetsu',
    translation: 'next month',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09765A.mp3'
  },

  {
    text: '日時',
    hiragana: 'nichiji',
    translation: 'date and time',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/Int/JW02576A.mp3'
  },

  {
    text: '夕方',
    hiragana: 'yuugata',
    translation: 'early evening, at dusk',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09484A.mp3'
  },

  {
    text: '通る',
    hiragana: 'tooru',
    translation: 'pass, go through',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06353A.mp3'
  },

  {
    text: '自動車',
    hiragana: 'jidousha',
    translation: 'automobile',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW03802A.mp3'
  },

  {
    text: '慣れる',
    hiragana: 'nareru',
    translation: 'grow accustomed to, get used to',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06757A.mp3'
  },

  {
    text: '撮る',
    hiragana: 'toru',
    translation: 'take (a photograph), film',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06568A.mp3'
  },

  {
    text: 'やっと',
    hiragana: 'yatto',
    translation: 'at last, finally (used only for a good outcome)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09426A.mp3'
  },

  {
    text: 'どんどん',
    hiragana: 'dondon',
    translation: 'knock, bang',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06590A.mp3'
  },

  {
    text: '並べる',
    hiragana: 'naraberu',
    translation: 'line up, arrange',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06747A.mp3'
  },

  {
    text: '逃げる',
    hiragana: 'nigeru',
    translation: 'escape, run away',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06827A.mp3'
  },

  {
    text: '渡す',
    hiragana: 'watasu',
    translation: 'hand over, give',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW10047A.mp3'
  },

  { text: '値段', hiragana: 'nedan', translation: 'price', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06983A.mp3' },

  { text: '両方', hiragana: 'ryouhou', translation: 'both', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09865A.mp3' },

  {
    text: '約束',
    hiragana: 'yakusoku',
    translation: 'promise, vow',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09389A.mp3'
  },

  { text: '一部', hiragana: 'ichibu', translation: 'part', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW00495A.mp3' },

  { text: 'ラジオ', hiragana: 'rajio', translation: 'radio', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09778A.mp3' },

  {
    text: '入院',
    hiragana: 'nyuuin',
    translation: 'hospitalization',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06876A.mp3'
  },

  { text: 'ニュース', hiragana: 'nyu-su', translation: 'news', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06890A.mp3' },

  {
    text: '旅行',
    hiragana: 'ryokou',
    translation: 'travel, trip',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09875A.mp3'
  },

  { text: '用意', hiragana: 'youi', translation: 'preparation', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09578A.mp3' },

  {
    text: '伸びる',
    hiragana: 'nobiru',
    translation: 'stretch, grow',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07102A.mp3'
  },

  {
    text: 'パーティー',
    hiragana: 'pa-ti-',
    translation: 'party',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07153A.mp3'
  },

  { text: 'ビール', hiragana: 'bi-ru', translation: 'beer', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW07607A.mp3' },

  {
    text: '早く',
    hiragana: 'hayaku',
    translation: 'early, soon',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07468A.mp3'
  },

  {
    text: '番組',
    hiragana: 'bangumi',
    translation: '(television, radio) program',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07529A.mp3'
  },

  { text: 'ビデオ', hiragana: 'bideo', translation: 'video', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07752A.mp3' },

  {
    text: '増やす',
    hiragana: 'fuyasu',
    translation: 'increase (something), add (something)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08166A.mp3'
  },

  { text: '振る', hiragana: 'furu', translation: 'wave, shake', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08197A.mp3' },

  {
    text: '迎える',
    hiragana: 'mukaeru',
    translation: 'welcome, receive (a visitor)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09040A.mp3'
  },

  {
    text: '無理',
    hiragana: 'muri',
    translation: 'unreasonable, impossible',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09124A.mp3'
  },

  {
    text: '珍しい',
    hiragana: 'mezurashii',
    translation: 'rare, scarce',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09197A.mp3'
  },

  { text: '有名', hiragana: 'yuumei', translation: 'famous', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09519A.mp3' },

  {
    text: '喜ぶ',
    hiragana: 'yorokobu',
    translation: 'be happy, be delighted',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09746A.mp3'
  },

  {
    text: '留学',
    hiragana: 'ryuugaku',
    translation: 'studying abroad',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW09831A.mp3'
  },

  {
    text: '料理',
    hiragana: 'ryouri',
    translation: 'cooking, dish',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09868A.mp3'
  },

  { text: '野菜', hiragana: 'yasai', translation: 'vegetable', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09401A.mp3' },

  {
    text: '分かれる',
    hiragana: 'wakareru',
    translation: 'be divided, split off',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW10014A.mp3'
  },

  {
    text: '特別',
    hiragana: 'tokubetsu',
    translation: 'special',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06399A.mp3'
  },

  {
    text: '理由',
    hiragana: 'riyuu',
    translation: 'reason, excuse',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09830A.mp3'
  },

  { text: '自由', hiragana: 'jiyuu', translation: 'freedom', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW03948A.mp3' },

  {
    text: '方向',
    hiragana: 'houkou',
    translation: 'direction, course',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08412A.mp3'
  },

  {
    text: '残る',
    hiragana: 'nokoru',
    translation: 'remain, be left over',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07082A.mp3'
  },

  {
    text: 'ビル',
    hiragana: 'biru',
    translation: 'building (loan word)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW07894A.mp3'
  },

  {
    text: 'まとめる',
    hiragana: 'matomeru',
    translation: 'gather together, put in order',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08769A.mp3'
  },

  {
    text: '流れる',
    hiragana: 'nagareru',
    translation: 'flow, run',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06655A.mp3'
  },

  {
    text: 'セーター',
    hiragana: 'se-ta-',
    translation: 'sweater',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04770A.mp3'
  },

  { text: 'シャツ', hiragana: 'shatsu', translation: 'shirt', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW03917A.mp3' },

  {
    text: '洗濯',
    hiragana: 'sentaku',
    translation: 'laundry, washing',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW04905A.mp3'
  },

  {
    text: '間違える',
    hiragana: 'machigaeru',
    translation: 'make a (careless) mistake, fail at (something)',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08731A.mp3'
  },

  {
    text: 'アイスクリーム',
    hiragana: 'aisukuri-mu',
    translation: 'ice cream',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00009A.mp3'
  },

  {
    text: '乾く',
    hiragana: 'kawaku',
    translation: 'become dry',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01854A.mp3'
  },

  {
    text: '冷める',
    hiragana: 'sameru',
    translation: 'cool off',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW03491A.mp3'
  },

  {
    text: '色々',
    hiragana: 'iroiro',
    translation: 'a variety of',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW00615A.mp3'
  },

  {
    text: '持って行く',
    hiragana: 'motteiku',
    translation: 'take, bring',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09296A.mp3'
  },

  {
    text: '着替える',
    hiragana: 'kigaeru',
    translation: 'change clothes',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW01999A.mp3'
  },

  { text: '石鹸', hiragana: 'sekken', translation: 'soap', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW04804A.mp3' },

  { text: '野球', hiragana: 'yakyuu', translation: 'baseball', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09378A.mp3' },

  {
    text: '昼食',
    hiragana: 'chuushoku',
    translation: 'lunch (formal)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW05668A.mp3'
  },

  {
    text: '朝食',
    hiragana: 'choushoku',
    translation: 'breakfast (formal)',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW05714A.mp3'
  },

  {
    text: '眠る',
    hiragana: 'nemuru',
    translation: 'sleep, lie idle',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07013A.mp3'
  },

  {
    text: '初め',
    hiragana: 'hajime',
    translation: 'first, beginning (in terms of time passage)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07299A.mp3'
  },

  { text: '火', hiragana: 'hi', translation: 'fire, flame', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW07593A.mp3' },

  {
    text: '西',
    hiragana: 'nishi',
    translation: 'west, western',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06833A.mp3'
  },

  {
    text: '東',
    hiragana: 'higashi',
    translation: 'east, eastern',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07618A.mp3'
  },

  { text: '南', hiragana: 'minami', translation: 'south', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW08964A.mp3' },

  {
    text: '夕食',
    hiragana: 'yuushoku',
    translation: 'supper, dinner (formal)',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09498A.mp3'
  },

  {
    text: 'なかなか',
    hiragana: 'nakanaka',
    translation: 'pretty, considerably',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/Int/JW01294A.mp3'
  },

  {
    text: '励ます',
    hiragana: 'hagemasu',
    translation: 'encourage, cheer up',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/Int/JW01428A.mp3'
  },

  { text: '涙', hiragana: 'namida', translation: 'tear', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06734A.mp3' },

  { text: '夢', hiragana: 'yume', translation: 'dream', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW09558A.mp3' },

  {
    text: '職場',
    hiragana: 'shokuba',
    translation: 'place of work, office',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/Int/JW00460A.mp3'
  },

  {
    text: '隣',
    hiragana: 'tonari',
    translation: 'next to, next door',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06478A.mp3'
  },

  {
    text: 'マンション',
    hiragana: 'manshon',
    translation: 'apartment, residential building',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW08828A.mp3'
  },

  {
    text: 'エレベーター',
    hiragana: 'erebe-ta-',
    translation: 'elevator',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW00882A.mp3'
  },

  { text: '窓', hiragana: 'mado', translation: 'window', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/mado_cue.mp3' },

  {
    text: '押す',
    hiragana: 'osu',
    translation: 'push, press down',
    audioURL: 'https://assets0.iknow.jp/assets/users/Smart.fm/dlblfn1jdmqc4.mp3'
  },

  {
    text: '入学',
    hiragana: 'nyuugaku',
    translation: 'enter a school, matriculate',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06878A.mp3'
  },

  {
    text: '戸',
    hiragana: 'to',
    translation: 'door, sliding door',
    audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06193A.mp3'
  },

  {
    text: '通り',
    hiragana: 'toori',
    translation: 'street, road',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW06348A.mp3'
  },

  {
    text: '亡くなる',
    hiragana: 'nakunaru',
    translation: 'die, pass away',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06666A.mp3'
  },

  {
    text: '夫婦',
    hiragana: 'fuufu',
    translation: 'husband and wife, married couple',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07965A.mp3'
  },

  {
    text: '女性',
    hiragana: 'josei',
    translation: 'woman, female (formal)',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW04299A.mp3'
  },

  { text: '森', hiragana: 'mori', translation: 'forest', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW09350A.mp3' },

  {
    text: 'トラック',
    hiragana: 'torakku',
    translation: 'truck',
    audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW06528A.mp3'
  },

  {
    text: 'レコード',
    hiragana: 'reko-do',
    translation: 'record',
    audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW09926A.mp3'
  },

  { text: '熱', hiragana: 'netsu', translation: 'heat, fever', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW06984A.mp3' },

  { text: 'ページ', hiragana: 'pe-ji', translation: 'page', audioURL: 'https://assets2.iknow.jp/assets/legacy/JLL/audio/JW08308A.mp3' },

  { text: '踊る', hiragana: 'odoru', translation: 'dance', audioURL: 'https://assets0.iknow.jp/assets/legacy/JLL/audio/JW01154A.mp3' },

  { text: '長さ', hiragana: 'nagasa', translation: 'length', audioURL: 'https://assets1.iknow.jp/assets/legacy/JLL/audio/JW06631A.mp3' },

  { text: '厚さ', hiragana: 'atsusa', translation: 'thickness', audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW00165A.mp3' },

  {
    text: '秘密',
    hiragana: 'himitsu',
    translation: 'secret, privacy',
    audioURL: 'https://assets3.iknow.jp/assets/legacy/JLL/audio/JW07823A.mp3'
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

export interface rawWords {
  text: string
  hiragana: string
  translation: string
  audioURL: string
}

interface VocabStore {
  vocab: Record<string, VocabEntry>
  initialWords: rawWords[]
  lastActivation: number
  update: (word: string, quality: 1 | 3 | 4 | 5) => void
  getNext: () => VocabEntry[] | null
  activateNow: (word: string) => void
  markKnown: (word: string) => void
  resetWord: (word: VocabEntry) => void
  reset: () => void
  getMatchWords: () => VocabEntry[] | null
  load: () => Promise<void>
  setSelectedWords: (words: rawWords[]) => void
}

export const useVocabStore: UseBoundStore<StoreApi<VocabStore>> = create<VocabStore>((set) => ({
  lastActivation: 0,
  vocab: {},
  initialWords: [],
  load: async () => {
    let result: { vocab: Record<string, VocabEntry>; lastActivation: number } = { vocab: {}, lastActivation: 0 }
    const data = await AsyncStorage.getItem('vocab')
    const time = Number((await AsyncStorage.getItem('lastActivation')) || '0')
    if (data) {
      result = { vocab: JSON.parse(data), lastActivation: time }
    } else {
      const state = useVocabStore.getState()
      const { initialWords } = state
      console.log('initialWords', initialWords)
      const entries = Object.fromEntries(initialWords.map((w) => [w.text, createEntry(w.text, w.hiragana, w.translation, w.audioURL)]))
      result = { vocab: entries, lastActivation: 0 }
    }
    set({ vocab: result.vocab, lastActivation: result.lastActivation })
  },

  setSelectedWords: async (words: rawWords[]) => {
    set({ initialWords: words })
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
    const state = useVocabStore.getState()
    const { initialWords } = state
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
