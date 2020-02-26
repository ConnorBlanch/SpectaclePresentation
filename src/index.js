import React from 'react';
import ReactDOM from 'react-dom';

import {
	Appear,
	Box,
	CodePane,
	CodeSpan,
	Deck,
	FlexBox,
	FullScreen,
	Grid,
	Heading,
	Image,
	ListItem,
	Markdown,
	Notes,
	OrderedList,
	Progress,
	SpectacleLogo,
	Slide,
	Text,
	UnorderedList
} from 'spectacle';

// SPECTACLE_CLI_THEME_START
const theme = {
	fonts: {
		header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
		text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
	},
	colors: {
		primary: '#84898B',
		secondary: 'white',
		tertiary: '#2F6777',
		quaternary: '#84898B'
	}
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
	<FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
		<Box padding="0 1em">
			<FullScreen />
		</Box>
		<Box padding="1em">
			<Progress />
		</Box>
	</FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
	<Deck theme={theme} template={template} transitionEffect="fade">
		<Slide transitionEffect="slide">
			<FlexBox height="100%" flexDirection="column">
				<Text margin="0px" fontSize="100px" color="secondary">
					Connor Blanch
				</Text>
				<Text margin="0px" fontSize="80px">
					Chief Software Engineer
				</Text>
				<Text margin="0px" fontSize="50px">
					Promess Inc
				</Text>
			</FlexBox>
			<Image
				src="https://cdn.promessinc.com/wp-content/themes/promess/images/Promess-Incorporated.png"
				width="180"
				height="auto"
				alt="Company Logo"
				align="left"
			/>
		</Slide>
		<Slide transitionEffect="slide">
			<FlexBox height="25%" flexDirection="row" justifyContent="center">
				<Text color="secondary" fontSize="80px">
					Daily Routine
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem>Decide on new features that go into our Software</ListItem>
					<ListItem>
						Work with my Project Manager and QA lead to make sure we are on track with our Release Schedule
					</ListItem>
					<ListItem>
						Help my team of Software Developers with issues they are having/answer their questions
					</ListItem>
					<ListItem>Attend meetings discussing open issues/new applications opportunities</ListItem>
					<ListItem>Work on implementing new features or fixing immediate issues</ListItem>
					<ListItem>Interview new candidates for Internship and Full Time positions within Promess</ListItem>
				</UnorderedList>
			</FlexBox>
			<Image
				src="https://cdn.promessinc.com/wp-content/themes/promess/images/Promess-Incorporated.png"
				width="180"
				height="auto"
				alt="Company Logo"
				align="left"
			/>
		</Slide>
		<Slide transitionEffect="slide">
			<FlexBox height="25%" flexDirection="row" justifyContent="center">
				<Text color="secondary" fontSize="80px">
					Great Things About Development/
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem />
				</UnorderedList>
			</FlexBox>
			<Image
				src="https://cdn.promessinc.com/wp-content/themes/promess/images/Promess-Incorporated.png"
				width="180"
				height="auto"
				alt="Company Logo"
				align="left"
			/>
		</Slide>
		<Slide transitionEffect="slide">
			<FlexBox height="25%" flexDirection="row" justifyContent="center">
				<Text color="secondary" fontSize="80px" />
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem />
				</UnorderedList>
			</FlexBox>
			<Image
				src="https://cdn.promessinc.com/wp-content/themes/promess/images/Promess-Incorporated.png"
				width="180"
				height="auto"
				alt="Company Logo"
				align="left"
			/>
		</Slide>
		<Slide transitionEffect="slide">
			<FlexBox height="25%" flexDirection="row" justifyContent="center">
				<Text color="secondary" fontSize="80px" />
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem />
				</UnorderedList>
			</FlexBox>
			<Image
				src="https://cdn.promessinc.com/wp-content/themes/promess/images/Promess-Incorporated.png"
				width="180"
				height="auto"
				alt="Company Logo"
				align="left"
			/>
		</Slide>
		<Slide transitionEffect="slide">
			<FlexBox height="25%" flexDirection="row" justifyContent="center">
				<Text color="secondary" fontSize="80px" />
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem />
				</UnorderedList>
			</FlexBox>
			<Image
				src="https://cdn.promessinc.com/wp-content/themes/promess/images/Promess-Incorporated.png"
				width="180"
				height="auto"
				alt="Company Logo"
				align="left"
			/>
		</Slide>
	</Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
