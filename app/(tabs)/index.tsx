import { allWords, rawWords, useVocabStore, VocabStore } from '@/store/levelStore'
import { useEffect, useState } from 'react'
import { Accordion, Button, Input, Switch, Text, View, XStack, YStack } from 'tamagui'
export default function HomeScreen() {
  interface buttons extends rawWords {
    toggled: boolean
  }

  const { setSelectedWords } = useVocabStore((state: VocabStore) => state)

  const [isSwitchOn, setIsSwitchOn] = useState(true)

  const [words, setWords] = useState<buttons[]>([])

  const [selectedWords, setselectedWords] = useState<buttons[]>([])

  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)

  useEffect(() => {
    setWords(allWords.map((word) => ({ ...word, toggled: false })) as buttons[])
  }, [])

  const toggleSwitch = () => {
    setIsSwitchOn((prev) => !prev)
  }

  const handleWordToggle = (button: buttons) => {
    setWords(() => {
      return words.map((w) => (w.text === button.text ? { ...w, toggled: !w.toggled } : w))
    })

    if (button.toggled) {
      setselectedWords((prev) => prev.filter((word: buttons) => word.text !== button.text))
    }
    if (!button.toggled) {
      setselectedWords([...selectedWords, button])
    }
  }

  const sentWordsToStore = () => {
    if (isSwitchOn) {
      setSelectedWords(words.slice(start, end))
    } else {
      setSelectedWords(selectedWords)
    }
  }

  const accordionStyle = {
    backgroundColor: 'black',
    color: 'white'
  }

  return (
    <>
      <YStack style={{ alignSelf: 'center', alignItems: 'center', flex: 1, overflow: 'scroll' }}>
        <Switch onCheckedChange={toggleSwitch} defaultChecked={true}>
          <Switch.Thumb animation="quicker" />
        </Switch>
        {isSwitchOn && (
          <XStack>
            <Input value={start.toString()} onChange={(e) => setStart(Number(e.nativeEvent.text))} placeholder="Start" />
            <Input value={end.toString()} onChange={(e) => setEnd(Number(e.nativeEvent.text))} placeholder="Ende" />
          </XStack>
        )}

        {!isSwitchOn && (
          <Accordion overflow="hidden" width="$20" type="multiple">
            <Accordion.Item value="a1">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    1-100
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(0, 100)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a2">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    101-200
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(100, 200)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a3">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    201-300
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(200, 300)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a4">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    301-400
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(300, 400)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a5">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    401-500
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(400, 500)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a6">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    501-600
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(500, 600)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a7">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    601-700
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(600, 700)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a8">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    701-800
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(700, 800)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a9">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    801-900
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(800, 900)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
            <Accordion.Item value="a10">
              <Accordion.Trigger style={accordionStyle} flexDirection="row">
                {({ open }: { open: boolean }) => (
                  <Text
                    // can add theme values
                    color="white"
                    fontFamily="$body"
                    // or just use direct values
                    fontSize={20}
                    hoverStyle={{
                      color: '$colorHover'
                    }}
                  >
                    901-1000
                  </Text>
                )}
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="medium">
                <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                  {words.slice(900, 1000)?.map((word, index) => (
                    <>
                      <Button
                        key={index}
                        size="$3"
                        theme="accent"
                        onPress={() => handleWordToggle(word)}
                        style={{ maxWidth: '90%', alignSelf: 'center', backgroundColor: `${word.toggled ? 'red' : 'white'}` }}
                      >
                        {`${word.text} | ${word.translation}`}
                      </Button>
                      <View width={2} height={5} />
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.HeightAnimator>
            </Accordion.Item>
          </Accordion>
        )}
        <Button size="$3" theme="accent" onPress={() => sentWordsToStore()} style={{ maxWidth: '90%', alignSelf: 'center' }}>
          Lets go
        </Button>
      </YStack>
    </>
  )
}
