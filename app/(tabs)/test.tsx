import { useVocabStore, VocabEntry, VocabStore } from '@/store/levelStore'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Progress, View, XStack, YStack } from 'tamagui'
export default function TabTwoScreen() {
  const { vocab, load, getNext } = useVocabStore((state: VocabStore) => state)

  const [vocab2, currentWord] = useState<VocabEntry | null>()

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    currentWord(getNext() || null)
  }, [vocab])

  useEffect(() => {
    console.log('Current word changed:', vocab2)
  }, [vocab2])

  return (
    <>
      <Progress value={0} size="$6">
        <Progress.Indicator animation="bouncy" />
      </Progress>
      <YStack style={{ alignSelf: 'center', alignItems: 'center' }}>
        <View width={20} height={50} />
        <Button size="$11" theme="accent">
          {vocab2?.word || 'No word available'}
        </Button>
        <View width={20} height={500} />
        <XStack flex={1} gap="$8">
          <Button size="$9" theme="accent">
            Vokabel
          </Button>
          <Button size="$9" theme="accent">
            Vokabel
          </Button>
          <Button size="$9" theme="accent">
            Vokabel
          </Button>
        </XStack>
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
