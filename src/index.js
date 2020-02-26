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

const slideCodeBlock = `<Slide transitionEffect="slide">
		<FlexBox height="15%" flexDirection="row" justifyContent="center">
			<Text color="secondary" fontSize="80px">
				Courses to Take
			</Text>
		</FlexBox>
		<FlexBox height="85%" flexDirection="column" alignItems="flex-start">
			<UnorderedList fontSize="20px">
				<Text color="secondary" fontSize="25px">
					Pre College
				</Text>
				<ListItem>Mathematics</ListItem>
				<ListItem>Science</ListItem>
				<ListItem>Any programming type classes that are available</ListItem>
				<ListItem>Online!</ListItem>
				<Text color="secondary" fontSize="25px">
					College
				</Text>
				<ListItem>Mathematics</ListItem>
				<ListItem>Pre Defined Computer Courses</ListItem>
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
`;

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
					Things I Love About My Job
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem>New challenges each day</ListItem>
					<ListItem>Extreme problem solving</ListItem>
					<ListItem>Working with other departments to provide a great product</ListItem>
					<ListItem>Leading our Software Department</ListItem>
					<ListItem>Helping my team achieve their personal and work goals</ListItem>
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
					Work Environment
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem>Pretty Quiet</ListItem>
					<ListItem>Open Concept</ListItem>
					<ListItem>Decorating for Holidays!</ListItem>
					<ListItem>Laid Back</ListItem>
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
					Why Computer Science/Engineering
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem>High School Programming Class</ListItem>
					<ListItem>Loved Computers Already</ListItem>
					<ListItem>Enjoyed the idea of creating something that someone could easily access</ListItem>
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
					Similar Careers
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="30px">
					<ListItem>Software Developer</ListItem>
					<ListItem>Quality Assurance Engineer</ListItem>
					<ListItem>UI/UX Developer</ListItem>
					<ListItem>Software Manager/Team Lead</ListItem>
					<ListItem>Product Development</ListItem>
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
			<FlexBox height="15%" flexDirection="row" justifyContent="center">
				<Text color="secondary" fontSize="80px">
					Courses to Take
				</Text>
			</FlexBox>
			<FlexBox height="85%" flexDirection="column" alignItems="flex-start">
				<UnorderedList fontSize="20px">
					<Text color="secondary" fontSize="25px">
						Pre College
					</Text>
					<ListItem>Mathematics</ListItem>
					<ListItem>Science</ListItem>
					<ListItem>Any programming type classes that are available</ListItem>
					<ListItem>Online!</ListItem>
					<Text color="secondary" fontSize="25px">
						College
					</Text>
					<ListItem>Mathematics</ListItem>
					<ListItem>Pre Defined Computer Courses</ListItem>
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
			<FlexBox height="100%" flexDirection="column" alignItems="center">
				<Text color="secondary" fontSize="80px">
					Live Demo! Can You Guess What It Is?
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
					This Presentation Was Done With Code!
				</Text>
			</FlexBox>
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start">
				<CodePane fontSize={25} language="JavaScript" autoFillHeight>
					{slideCodeBlock}
				</CodePane>
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
			<FlexBox height="75%" flexDirection="column" alignItems="flex-start" />
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
