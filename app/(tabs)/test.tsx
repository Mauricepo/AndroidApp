import { useVocabStore, VocabEntry, VocabStore } from '@/store/levelStore'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Progress, View, XStack, YStack } from 'tamagui'
export default function TabTwoScreen() {
  const { vocab, load, getNext } = useVocabStore((state: VocabStore) => state)

  const [learningWords, currentWords] = useState<learningWort[] | null>()

  const [currenrtWord, setCurrentWort] = useState<learningWort | null>(null)

  const [asnwers, setAnswers] = useState<string[]>()

  const [wrong, setWrong] = useState<boolean>()

  interface learningWort {
    word: VocabEntry
    step: 1 | 2 | 3 | 4 | 5
    active?: boolean
    done?: boolean
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    const newWords = getNext()?.map((entry) => ({ word: entry, step: 1 as 1 | 2 | 3 | 4 | 5, active: false, done: false })) || null

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

  function setNextWord() {
    let newWords =
      learningWords?.map((word) => {
        if (word.word.word === currenrtWord?.word.word) {
          if (word.step === 5) {
            done = true
            return { ...word, active: false, done: true }
          }
          if (wrong) {
            return { ...word, step: (word.step - 1) as 1 | 2 | 3 | 4 | 5 }
          }
          console.log('word.step:', word.step)
          return { ...word, step: (word.step + 1) as 1 | 2 | 3 | 4 | 5 }
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
    setCurrentWort(newWords?.sort(() => Math.random() - 0.5).find((word) => word.active && word.active && word.done === false) || null)
    currentWords(newWords)
  }

  function handleAnswer(selectedAnswer: string) {
    if (currenrtWord?.word.meaning !== selectedAnswer) {
      setWrong(true)
      return
    } else {
      setNextWord()
    }
  }

  useEffect(() => {
    console.log('learningWords:', learningWords)
  }, [learningWords])

  useEffect(() => {
    const answers = learningWords
      ?.map((w) => w.word.meaning)
      ?.filter((word) => word !== currenrtWord?.word.word)
      ?.sort(() => Math.random() - 0.5)
      ?.slice(0, 2)
      .concat(currenrtWord?.word.meaning || [])

    setAnswers(answers?.sort(() => Math.random() - 0.5))
  }, [currenrtWord])

  return (
    <>
      <Progress value={0} size="$6">
        <Progress.Indicator animation="bouncy" />
      </Progress>
      <YStack style={{ alignSelf: 'center', alignItems: 'center' }}>
        <View width={20} height={50} />
        <Button size="$11" theme="accent">
          {currenrtWord?.word.word || 'No word available'}
          {wrong && (
            <>
              {currenrtWord?.word.meaning || 'No word available'}
              {currenrtWord?.word.hiragana || 'No word available'}
            </>
          )}
        </Button>
        <View width={20} height={500} />
        <XStack flex={1} gap="$5">
          {asnwers?.map((answer, index) => (
            <Button key={index} size="$3" theme="accent" onPress={() => handleAnswer(answer)}>
              {answer}
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
