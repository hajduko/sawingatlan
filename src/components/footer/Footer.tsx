import { Box, Flex, Text, Image, Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router';
import { MdOutlineEmail, MdOutlineHouse, MdOutlinePhone } from 'react-icons/md';
import logo from '../../assets/sawin_white.svg';

const Footer = () => {
  return (
    <Flex bgColor='dark' justify='center'>
      <Box w={{ base: '95%', lg: '76rem' }} py='12'>
        <Grid
          templateAreas={{ base: `"main" "contact" "footer"`, md: `"main contact" "footer footer"` }}
          templateColumns={{ base: '1fr', md: '5fr 2fr' }}>
          <GridItem area='main' mb={{ base: 6, md: 0 }}>
            <Flex flexDirection='column' align={{ base: 'center', md: 'flex-start' }}>
              <Link to='/'>
                <Image src={logo} height='25px' mb={8} />
              </Link>
            </Flex>

            <Flex
              gap={{ base: 4, md: 10 }}
              flexDirection={{ base: 'column', md: 'row' }}
              align={{ base: 'flex-start', md: 'flex-start' }}>
              <Link to='/'>
                <Text color='white' fontSize='md' fontWeight={location.pathname === '/' ? '700' : '400'}>
                  Eladóknak
                </Text>
              </Link>
              <Link to='/foragents'>
                <Text color='white' fontSize='md' fontWeight={location.pathname === '/foragents' ? '700' : '400'}>
                  Ingatlanosoknak
                </Text>
              </Link>
            </Flex>
          </GridItem>
          <GridItem area='contact'>
            <Link to='mailto:info@sawin.hu'>
              <Flex align='center' gap={6} mb={4}>
                <MdOutlineEmail color='white' size='24px' />
                <Text fontSize='md' color='white' fontWeight='600'>
                  info@sawin.hu
                </Text>
              </Flex>
            </Link>
            <Link to='tel:+36300706484'>
              <Flex align='center' gap={6} mb={4}>
                <MdOutlinePhone color='white' size='24px' />
                <Text fontSize='md' color='white' fontWeight='600'>
                  +36 30 070 6484
                </Text>
              </Flex>
            </Link>
            <Link to='https://maps.app.goo.gl/PT61SbnRXygy87zA9'>
              <Flex align='center' gap={6}>
                <MdOutlineHouse color='white' size='24px' />
                <Text fontSize='md' color='white' fontWeight='600'>
                  1051 Budapest, Nádor utca 11.
                </Text>
              </Flex>
            </Link>
          </GridItem>
          <GridItem area='footer' pt={6} mt={14} borderTopColor='white' borderTopWidth='2px'>
            <Flex
              align={{ base: 'flex-start', md: 'center' }}
              flexDirection={{ base: 'column', md: 'row' }}
              width='100%'
              justify='space-between'
              px={{ base: 4, lg: 0 }}
              gap={{ base: 2, md: 0 }}>
              <Text color='white' fontSize='md'>
                2025 - SaWingatlan © Minden jog fenntartva
              </Text>
              <Link to='/privacy'>
                <Text color='white' fontSize='md'>
                  Adatvédelmi nyilatkozat
                </Text>
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Footer;
