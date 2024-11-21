import Link from "next/link"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import BasicCard from "components/BasicCard"
import Container from "components/Container"
import Page from "components/Page"
import Section from "components/Section"
import { media } from "utils/media"

// Example data for Roadmaps (replace with actual data)
const Roadmaps = [
	{
		name: "Mechanical Core",
		link: "/assets/Roadmap_ME.pdf"
	},

	{
		name: "Electrical Core",
		link: "/assets/Roadmap_EE.pdf"
	},

	{
		name: "Analyst",
		link: "/assets/Roadmap_Analytics.pdf"
	},

	{
		name: "Product Management",
		link: "/assets/Roadmap_PM.pdf"
	},

	{
		name: "SDE",
		link: "/assets/Roadmap_SDE.pdf"
	},

	{
		name: "Consulting",
		link: "/assets/Roadmap_Consulting.pdf"
	},

	{
		name: "MSE Core",
		link: "/assets/Roadmap_MSE.pdf"
	},

	{
		name: "CHE Core",
		link: "/assets/Roadmap_CHE.pdf"
	},

	{
		name: "AE Core",
		link: "/assets/Roadmap_AE.pdf"
	}
]

const Routes = [
	{
		name: "Insights",
		url: "/insights"
	}, {
		name: "Procedures",
		url: "/students#steps"
	}, {
		name: "Resources",
		url: "/students#resources"
	}, {
		name: "Preparation Roadmaps",
		url: "/students#prepRoadmaps"
	}, {
		name: "FAQs",
		url: "/students#faqs"
	}
]

const PreparationRoadmap = () => {
// Function to render Roadmaps

	return (
		<Page title="Preparation Roadmaps" description="Explore different preparation roadmaps for various career paths.">
			<div id="prepRoadmaps"></div>
			<Section title="Preparation Roadmaps">
				<Container>
					<CustomAutofitGrid>
						{Roadmaps.map((member) => (
							<Link href={member.link} key={member.name} passHref>
								<Card style={{ cursor: "pointer" }}>
									<Title>{member.name}</Title>
								</Card>
							</Link>
						))}
					</CustomAutofitGrid>
				</Container>
			</Section>

		</Page>
	)
}

// Styled components
const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 25rem;
`
const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
`
const Title = styled.div`
  font-weight: bold;
`

export default PreparationRoadmap
