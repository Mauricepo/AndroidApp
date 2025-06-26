import { useVocabStore, VocabEntry, VocabStore } from '@/store/levelStore'
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Progress, View, XStack, YStack } from 'tamagui'
export default function TabTwoScreen() {
  const { vocab, load, getNext } = useVocabStore((state: VocabStore) => state)

  const [learningWords, currentWords] = useState<learningWort[] | null>()

  const [currenrtWord, setCurrentWort] = useState<learningWort | null>(null)

  const [asnwers, setAnswers] = useState<VocabEntry[]>()

  const [wrong, setWrong] = useState<boolean>()

  const [checkSpelling, setCheckSpelling] = useState<boolean>()

  const [score, setScore] = useState<number>()

  interface learningWort {
    word: VocabEntry
    step: number
    active?: boolean
    done?: boolean
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    const newWords = getNext()?.map((entry) => ({ word: entry, step: 1, active: false, done: false })) || null

    const updatedWords = newWords?.map((word, index) => ({
      ...word,
      active: index < 5
    }))
    currentWords(updatedWords as learningWort[])

    if (updatedWords) {
      const nextWord = updatedWords.find((word) => word.active && !word.done) || null
      setCurrentWort(nextWord as learningWort | null)
    }
  }, [vocab])

  let done = false

  const playSound = async (soundUrl: string) => {
    const { sound } = await Audio.Sound.createAsync({ uri: soundUrl }, { shouldPlay: true })
  }

  function setNextWord() {
    setWrong(false)
    setCheckSpelling(false)
    let newWords =
      learningWords?.map((word) => {
        if (word.word.word === currenrtWord?.word.word) {
          if (word.step === 6) {
            done = true
            return { ...word, active: false, done: true }
          }
          if (wrong) {
            return { ...word, step: word.step > 1 ? word.step : 1 }
          }
          return { ...word, step: word.step + 1 }
        }
        return word
      }) || null

    if (done) {
      const newWord = newWords?.find((word) => word.active === false && word.done === false)
      newWords =
        newWords?.map((word) => {
          if (word.word.word === newWord?.word.word) {
            return { ...word, active: true }
          }
          return word
        }) || null
    }
    const test =
      newWords
        ?.sort(() => Math.random() - 0.5)
        .find((word) => word.active && word.active && word.done === false && word.word.word !== currenrtWord?.word.word) || null
    setCurrentWort(test)
    currentWords(newWords)
  }

  function handleAnswer(selectedAnswer: VocabEntry) {
    if (!checkSpelling && (currenrtWord?.step ?? 0) < 6) {
      setCheckSpelling(true)
      return
    }

    if (currenrtWord?.word.meaning !== selectedAnswer.meaning) {
      setWrong(true)

      if (currenrtWord && currenrtWord?.step > 1)
        setScore((prevScore) => {
          const newScore = (prevScore ?? 0) - 1
          return newScore < 0 ? 0 : newScore
        })
      return
    } else {
      playSound(selectedAnswer.sound)
      setScore((prevScore) => (prevScore ?? 0) + 1)
      setNextWord()
    }
  }

  useEffect(() => {
    console.log('learningWords:', learningWords)
  }, [learningWords])

  useEffect(() => {
    const answers = learningWords
      ?.map((w) => w.word)
      ?.filter((word) => word.word !== currenrtWord?.word.word)
      ?.sort(() => Math.random() - 0.5)
      ?.slice(0, 5)
      .concat(currenrtWord?.word ? [currenrtWord.word] : [])

    setAnswers(answers?.sort(() => Math.random() - 0.5))
  }, [currenrtWord])

  return (
    <>
      <Progress value={((score ?? 0) * 100) / ((learningWords?.length ?? 0) * 6)} size="$6">
        <Progress.Indicator animation="bouncy" />
      </Progress>
      <YStack style={{ alignSelf: 'center', alignItems: 'center' }}>
        <View width={20} height={50} />

        {currenrtWord?.step === 6 ? (
          <Button size="$11" theme="accent" onPress={() => playSound(currenrtWord.word.sound)}>
            Sound
          </Button>
        ) : (
          <Button size="$11" theme="accent">
            {currenrtWord?.word.word || 'No word available'}
            {wrong && (
              <>
                {currenrtWord?.word.meaning || 'No word available'}

                {currenrtWord?.word.hiragana || 'No word available'}
              </>
            )}
          </Button>
        )}

        <View width={20} height={300} />
        <XStack flex={1} gap="$5" flexWrap="wrap" style={{ justifyContent: 'center', alignItems: 'center' }}>
          {asnwers?.map((word, index) => (
            <Button
              key={index}
              size="$3"
              theme="accent"
              onPress={() => {
                handleAnswer(word)
              }}
              style={{ maxWidth: '90%', alignSelf: 'center' }}
            >
              {checkSpelling ? word.hiragana : word.meaning}
            </Button>
          ))}
        </XStack>
        {wrong && (
          <Button size="$4" theme="accent" onPress={() => setNextWord()}>
            weiter
          </Button>
        )}
      </YStack>
    </>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  }
})
