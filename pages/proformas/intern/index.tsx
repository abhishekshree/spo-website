import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import BasicCard from "components/BasicCard"
import Container from "components/Container"
import Page from "components/Page"
import Section from "components/Section"
import { media } from "utils/media"

import data_2023 from "./data_2023.json"
import data_previous from "./data_previous.json"

interface Proforma {
	name: string;
	link: string;
}
const Routes = [
	{ 
		name: "Placement Proformas",
		url: "/proformas/placement" 
	}
]

const BASE_URL = "https://drive.google.com/file/d/"

const PastInternProformas = () => {
	const Proformas_2023: Array<Proforma> = []
	for (const key in data_2023) {
		Proformas_2023.push({
			name: data_2023[key].name,
			link: `${BASE_URL}${data_2023[key].link}/view`
		})
	}
	const Proformas_previous: Array<Proforma> = []
	for (const key in data_previous) {
		Proformas_previous.push({
			name: data_previous[key].name,
			link: `${BASE_URL}${data_previous[key].link}/view`
		})
	}

	return (
		<Page title="Previous Year Intern Proformas" routes={Routes}>
			<div id="steps">
				<Section title="2023-2024">
					<Container>
						<CustomAutofitGrid>
							{
								Proformas_2023.map((proforma, index) => (
									<BasicCard key={proforma.name} title={proforma.name} linkUrl={proforma.link} description="" />
								))
							}
						</CustomAutofitGrid>
					</Container>
				</Section>
				<Section title="Previous Years">
					<Container>
						<CustomAutofitGrid>
							{
								Proformas_previous.map((proforma, index) => (
									<BasicCard key={proforma.name} title={proforma.name} linkUrl={proforma.link} description="" />
								))
							}
						</CustomAutofitGrid>
					</Container>
				</Section>
			</div>
		</Page>
	)
}

export default PastInternProformas

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
	--autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
	--autofit-grid-item-size: 100%;
  }
`
