import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Stack,
    Text
} from '@chakra-ui/react'

const FooterAccordion = () => {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' as='b'>
                            Popular Features
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack spacing={['1']}>
                        <Stack>
                            <Text as='b'>Free CRM</Text>
                            <Text>Nurture and grow your business with customer relationship management software.</Text>
                        </Stack>
                        <Stack>
                            <Text as='b'>Live Chat</Text>
                            <Text>Connect with visitors in real time to convert leads, close deals, and provide support.</Text>
                        </Stack>
                        <Stack>
                            <Text as='b'>Meeting Scheduler</Text>
                            <Text>Add meeting scheduler link to your emails and website and set more appoinments/</Text>
                        </Stack>
                        <Stack>
                            <Text as='b'>Website Builder</Text>
                            <Text>Customize your website with an easy-to-use drag and drop website builder.</Text>
                        </Stack>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' as='b'>
                            Free Tools
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    With tools to make every part of your process more robust, more human and a support team that excited to help you.
                    We having free tools that as well in our inventory.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' as='b'>
                            Company
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack spacing={['1']}>
                        <Stack>
                            <Text as='b'>Our Mission</Text>
                            <Text>
                                There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.
                            </Text>
                        </Stack>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' as='b'>
                            Customer Support
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack p={['1']}>
                        <Text>Support options are based on your product plan.</Text>

                        <Stack>
                            <Text>CRM Free accounts are supported by the community.</Text>
                            <Text>All starter accounts are supported by the email and chat.</Text>
                            <Text>All professional and enterprise accounts are supported by the log into your account to requrest a call or contact us directly via phone.</Text>
                        </Stack>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' as='b'>
                            Partners
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Stack>
                        <Text as='b'>Partner With HubSport</Text>
                        <Text>You want to grow your business faster. We're in the growth business. Explore our partner programs, find the one that's right for you, and let's start growing better together.</Text>

                        <Text as='b'>App Partner Program</Text>
                        <Text>HubsSpot's App Partner program is for developers and companies that want to grow their business by building apps on HubSpot's open platform.</Text>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default FooterAccordion