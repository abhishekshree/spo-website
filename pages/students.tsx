import Link from "next/link"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import BasicCard from "components/BasicCard"
import Container from "components/Container"
import Page from "components/Page"
import Section from "components/Section"
import { media } from "utils/media"
import FaqSection from "views/PricingPage/FaqSection"

const steps = [
	{
		title: "1",
		description: "You must prepare a master resume and submit it by the specified deadline.",
	},
	{
		title: "2",
		description:
			"Before the deadline, the Students' Placement Office must receive the proofs justifying each point in your resume as well as PVFs (Project Verification Forms) from the project or internship mentor.",
	},
	{
		title: "3",
		description:
			"You must register on the Recruitment Automation System (RAS) within the specified timeframe as notified by SPO.",
	},
	{
		title: "4",
		description:
			"After you've registered, you are supposed to upload all one/two page resumes on the portal.",
	},
	{
		title: "5",
		description: "The Students' Placement Office appoints a point of contact (PoC) for your resume verification.",
	},
	{
		title: "6",
		description: "You would be assigned a time window during which the allotted POC would verify your resume.",
	},
	{
		title: "7",
		description: "Once your resume has been verified, you may begin applying to companies on the RAS in which you are eligible.",
	},
	{
		title: "8",
		description: "Following your application, you must attend all of the company's hiring events (PPTs / Tests / GDs).",
	},
	{
		title: "9",
		description: "If you get an offer from a company, the SPO would notify you and your account would be frozen.",
	},
]

const faqlist = [
	{
		"idx": 1,
		"title": "What are the restrictions on resume format?",
		"body": "There are no restrictions on the resume format barring a few mentioned below.The top heading of your resume should be your Name, Department, year of study, and contact information.A table of educational qualifications should follow it including 10th,12th marks, and CPI ( UG and PG both if applicable) in reverse chronological order."
	},
	{
		"idx": 2,
		"title": "What should be the name of the resume file (one page)?",
		"body": "The resume file should be named as rollNumber_resumeNumber, example a student with roll number 180840 who is submitting 3 resumes should name the files as 180840_1,180840_2,180840_3."
	},
	{
		"idx": 3,
		"title": "How to mention JEE Mains/JEE Adv/any other examination ranks or other scholastic achievements in my resume?",
		"body": "If mentioned, JEE Mains/JEE Adv. ranks have to be mentioned in the numbers, not percentile. For eg, AIR 1234 in JEE Mains 2018.Percentile ranks will only be considered if there is an official record/certificate for the same.If someone wants to mention their rank in their department, a mail from the HoD of the department is required.Definitely mention the year of Activity or Achievement."
	},
	{
		"idx": 4,
		"title": "I don't have any proof for some points on my resume, but I can provide them after campus reopens. What should I do?",
		"body": "[Please note that the below exceptions are only allowed for Scholastic and Extracurricular Achievements.]    For verification of 10th marks, 12th marks, JEE ranks, a google form will be circulated through mail. All the students will need to fill that form.For the verification of any other scholastic achievements (if you do not have a scanned copy of the documents with you), you need to fill the following undertaking and include it in the zip file of proofs, to be sent to spoproofs2021@gmail.com.Undertaking FormThese details will be cross verified in the future and any discrepancy will be dealt with according to SPO policy. The points on your resume for which you will provide the undertaking should be # marked with a footnote “not verified by SPO”. Such points should be given a # mark and a footnote only on the Master Resume, which is not visible to the company officials, and not on the one-page resumes, to be uploaded on the portal."
	},
	{
		"idx": 5,
		"title": "When is a Project Verification Form (PVF) required?",
		"body": "A PVF is needed to be signed by your mentor for any intern/project done under an IITK professor or any external organization (no PVF needed for projects under institute clubs or course projects). Kindly ask your mentor/Guide to send the filled PVF from his/her official email address to spoproofs2021@gmail.com. Only PVFs received on the given ID will be considered. Also, ask your mentor to mark you in cc. The PVF can be downloaded from here.The subject and content of the project written on your resume should match that written on the PVF."
	},
	{
		"idx": 6,
		"title": "How will my PoR/projects under the institute clubs be verified?",
		"body": "PoR and projects under Clubs/ Teams of IITK (summer projects as well) will be ratified through the lists sent by PSG, Senate Chairperson, MnC Gensec, or SnT Gensec."
	},
	{
		"idx": 7,
		"title": "I have some Self projects, how will they be verified?",
		"body": "For verification of such projects, one has to submit codes/git repo links/ (or any other proof ) as deemed necessary.You will have to clearly mention that the project is a self-project."
	},
	{
		"idx": 8,
		"title": "How to verify online courses/online projects?",
		"body": "For verification of online courses/online projects, you will need to submit the pdf certificate issued by the concerned organization. While mentioning the same on your resume, you will have to specify that the course/project was an online course/project."
	},
	{
		"idx": 9,
		"title": "Is proof required for Extracurricular points?",
		"body": "The proof is not required for points under this heading unless they specify a certain position ex. Got 2nd place in School debate competitions."
	},
	{
		"idx": 10,
		"title": "My internship/project is ongoing and will not be finished before resume submission. What should I do?",
		"body": "Fill up the PVF with whatever work has been completed and ask your mentor to sign and send it to spoproofs2021@gmail.com.You will have to mention in the resume that the internship/project is ongoing."
	},
	{
		"idx": 11,
		"title": "Can I update my resume after the deadline?",
		"body": "No, after the resume has been verified it will not be changed. The resume can only be updated in Phase-2 of the internship/placement season."
	},
	{
		"idx": 12,
		"title": "Will the Summer CPI be included?",
		"body": "Whatever CPI is there on Pingala during resume verification will be taken as final."
	}
]
const ResourcesC = [
	{
		name: "Deffered Placement Policy",
		link: "docs/2021-22/deferred_placement_policy.pdf"
	},
	{
		name: "Placement Policy",
		link: "docs/2021-22/Placement_Policy_2021-22.pdf"
	},
	{
		name: "Internship Policy",
		link: "docs/2021-22/Internship-Policy-2021-22.pdf"
	},
	{
		name: "Leave Application",
		link: "docs/2021-22/LAF.doc"
	},
	{
		name: "Project Verification Form",
		link: "docs/2021-22/PVF.doc"
	},
	{
		name: "PPT Absence Form",
		link: "https://docs.google.com/forms/d/e/1FAIpQLSdV3sWKB-GSbFNkHdGSSP7N4ydybbFYumTjBSIAaZw04Na-xQ/viewform"
	},
	{
		name: "Corporate Internship Waiver Form",
		link: "https://docs.google.com/document/d/1zQg3xr6Ca0jHFWPn6o2ZCyi7ypxtjdFoYdIT4pZwncc/edit"
	},
	{
		name: "List of Companies",
		link: "docs/2021-22/List-of-companies.pdf"
	},
]

export default function StudentsPage() {
	return (
		<Page title="For students" description="A collection of resources for students at IIT Kanpur.">
			<div id="steps">
				<Section title="Procedure">
					<Container>
						<CustomAutofitGrid>
							{steps.map((singleStep, idx) => (
								<BasicCard key={singleStep.title} {...singleStep} />
							))}
						</CustomAutofitGrid>
					</Container>
				</Section>
			</div>

			<Section title="Resources">
				<Container>
					<CustomAutofitGrid4>
						{ResourcesC.map((member) => (
							<Link href={member.link} key={member.name} passHref>
								<Card style={{ cursor: "pointer" }}>
									<Title>{member.name}</Title>
								</Card>
							</Link>
						))}
					</CustomAutofitGrid4>
				</Container>
			</Section>

			<div id="faqs"></div>
			<Section title="Resume FAQs">
				<FaqSection faqs={faqlist} />
				<p style={{ marginTop: "3rem" }}>
					<b>NOTE:</b> Whenever you send a mail containing proofs/PVFs or anything related to resume submission, kindly ensure that the subject contains your roll number.
					For detailed guidelines and recommendations on resume making, all the students are advised to visit this <a href="https://docs.google.com/document/d/1Lf4T9PAXi4yQ0cobzzyoslTy3VvBw8FB6FONHNQT1kY/edit">link</a>.
				</p>
			</Section>
		</Page>
	)
}
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

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
const CustomAutofitGrid4 = styled(AutofitGrid)`
padding: 1.5rem;
--autofit-grid-item-size: 25rem;
  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }
  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`
