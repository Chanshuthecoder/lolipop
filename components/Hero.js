import React, { useState } from 'react'

import { Dimensions, View, FlatList} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

import ViewPager from '@react-native-community/viewpager'

import VideoPlayer from '../components/VideoPlayer'
import Info from '../components/Info'
import Sidebar from '../components/Sidebar'

const { height } = Dimensions.get('window')

const Container = styled(ViewPager)`
	height: ${height}px;
`
const Gradient = styled(LinearGradient)`
	height: 100%;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`
const Center = styled.View`
	flex: 1;
	flex-direction: row;
`

const Hero = ({ videos }) => {
	const [selected, setSelected] = useState(0)

	return (
		<Container
			orientation='vertical'
			showPageIndicator
			onPageSelected={e => setSelected(e.nativeEvent.position)}
			initialPage={0}>
			{videos.map((item, index) => {
				return (
					<View key={index}>
						<VideoPlayer
							video={item.video.url}
							isPlay={selected === index}
						/>
						<Gradient
							locations={[0, 0.26, 0.6, 1]}
							colors={[
								'rgba(26,26,26,0.6)',
								'rgba(26,26,26,0)',
								'rgba(26,26,26,0)',
								'rgba(26,26,26,0.6)'
							]}>
							<Center>
								<Info user={item.user} />
								<Sidebar user={item.user} count={item.counts} video={item.video} iPlay={ selected === index } />
							</Center>
						</Gradient>
					</View>
				)
			})}
		</Container>
	)
}

export default Hero
