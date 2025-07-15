import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import NavBar from '../../../components/navbar/NavBar';
import bg from '../../../assets/images/home/hero_bg.jpg';
import { FaArrowRight } from 'react-icons/fa';

const ForAgentsHero = () => {
  return (
    <Box h={{ base: '60vh', md: '90vh' }} bgImg={`url(${bg})`} bgSize='cover'>
      <Box h='full' w='full' bgColor='#062617B2'>
        <Flex
          h='full'
          w={{ base: '100%', lg: '76rem' }}
          mx='auto'
          flexDir='column'
          align='center'
          justify='space-between'
          pt={{ base: 0, lg: 16 }}
          pb={16}>
          <Box w='full'>
            <NavBar />
          </Box>
          <Heading
            as='h1'
            fontSize={{ base: '5xl', sm: '5xl', md: '6xl', lg: '7xl' }}
            lineHeight='150%'
            fontWeight='700'
            color='accent'
            textAlign='center'>
            A SaWingatlan nem
            <br />
            <Text as='span' color='white'>
              versenytárs, hanem lehetőség!
            </Text>
          </Heading>
          <Text fontSize='lg' color='white' textAlign='center' lineHeight='tall'>
            Támogatjuk az ingatlanközvetítők munkáját, új piacokat és magasabb értékesítést biztosítunk partnereinknek.
          </Text>
          <Button
            size='2xl'
            mt={4}
            bg={'accent'}
            w={'fit-content'}
            rounded={'8px'}
            pl={4}
            pr={{ base: 4, sm: 2 }}
            color={'dark'}
            fontSize='lg'
            fontWeight='600'
            onClick={() => {
              const element = document.getElementById('agentContact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Csatlakozom hozzátok!
            <Box
              bg={'light'}
              h={'47px'}
              w={'47px'}
              rounded='5px'
              ml={4}
              display={{ base: 'none', sm: 'flex' }}
              alignItems='center'
              justifyContent='center'>
              <FaArrowRight color='dark' />
            </Box>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ForAgentsHero;
