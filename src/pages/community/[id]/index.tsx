'use client';
import Icon from '@/components/Icon';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import BoringAvatars from 'boring-avatars';
export default function CommunityViewPage() {
  return (
    <Box className='h-screen' bg={'secondaryColor.200'}>
      <Flex h={'full'} gap={6} mx={'auto'} maxW={1200} bg={'red.200'}>
        <Box bg={'white'} maxW={'800px'} flex={1} flexShrink={0}>
          <Flex
            borderBottom={'1px'}
            borderBottomColor={'gray.300'}
            py={2}
            px={5}
            align={'center'}
          >
            <HStack spacing={4}>
              <BoringAvatars variant='sunset' />
              <Heading size={'md'} color={'primaryColor.800'}>
                Life for good
              </Heading>
            </HStack>
          </Flex>

          <Stack divider={<StackDivider />} py={6} px={4} bg={'gray.100'}>
            <HStack
              align={'flex-start'}
              gap={3}
              bg={'white'}
              p={3}
              rounded={'md'}
            >
              <Box as={BoringAvatars} variant='beam'></Box>

              <Stack>
                <Heading size={'sm'} color={'primaryColor.800'}>
                  Life for good
                </Heading>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque consectetur odit qui adipisci deserunt hic!
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </Box>
        <Stack
          justify={'space-between'}
          flexBasis={1}
          bg={'white'}
          minW={'300px'}
          pb={6}
        >
          <Box
            borderBottom={'1px'}
            borderBottomColor={'gray.300'}
            py={3}
            px={5}
          >
            <Heading size={'md'}>Members</Heading>
          </Box>
          <Stack borderTop={'1px'} borderTopColor={'gray.300'} py={3} px={4}>
            <Button
              justifySelf={'flex-end'}
              alignItems={'center'}
              gap={2}
              colorScheme='red'
              variant={'outline'}
            >
              <Icon name='logout' size={24} />
              <Text as={'span'}>Leave Group</Text>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
