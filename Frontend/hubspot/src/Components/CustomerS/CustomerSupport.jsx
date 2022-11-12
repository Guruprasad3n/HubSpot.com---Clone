import React from 'react'
import './customerSupport.css'
import { CalendarIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image } from '@chakra-ui/react'

const CustomerS = () => {
  return (
    <>
      <div className='CustomerSupport1'>
        <div><Image src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/peopleBlobs/combined.jpg' alt='groupImage' width={"100%"} height={"100%"} /></div>
        <div className='CustomerSupport1Text'>
          <p style={{ fontSize: '12px', lineHeight: '18px', color: '#516f90' }}>CUSTOMER SUPPORT</p>
          <p style={{ fontWeight: 'bold', lineHeight: '44px', fontSize: '32px', color: '#33475b', marginBottom: '25px' }}>HubSpot is more than just software.</p>
          <p style={{ fontWeight: '400', fontSize: '14px', color: '#33475b', lineHeight: '24px', marginBottom: '32px' }}>You don’t have to do it alone. HubSpot’s award-winning customer support and services teams are here to answer your questions, help you master the inbound methodology, and make sure you’re getting the most out of your tools. All that — plus our detailed help documentation, educational resources, and training programs — means you’ll never feel left out in the cold.</p>
          <div className='iconsDiv'>
            <div>
              <p>Phone & Email Support</p>
              <PhoneIcon />
            </div>
            <div>
              <p>Help Documentation & Training</p>
              <CalendarIcon />
            </div>
            <div>
              <p>Community Support</p>
              <InfoIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='FAQDiv'>
        <p style={{ fontWeight: 'bold', lineHeight: '44px', textAlign: 'center', fontSize: '32px', color: '#33475b', marginBottom: '25px' }}>Frequently Asked Questions</p>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon color='teal' />
                  <Box flex='1' textAlign='left'>
                    <p className='FAQHeading'> What is Marketing Hub?</p>
                  </Box>

                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='FAQAns'>Marketing Hub is marketing automation software designed to help you attract the right audience, convert more visitors into customers, and run complete inbound marketing campaigns at scale. It offers the tools you need to save time, stay organized, and efficiently engage with your customers — all on one powerful, easy-to-use platform.</p>
                <p className='FAQAns'>Marketing Hub is available in three editions: Starter, Professional, and Enterprise. Each plan is designed to fit a different budget and includes tools to solve specific customer problems. This means that you can find a plan to fit your needs, whether you work for a small business or a booming enterprise. <span>Learn more about Marketing</span></p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon color='teal' />
                  <Box flex='1' textAlign='left'>
                    <p className='FAQHeading'>How does payments work, and how much dows it cost?</p>
                  </Box>

                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='FAQAns'>  With HubSpot’s payments tool, you can collect one-time and recurring payments from your customers in your CRM. You can collect payments from your quotes, or use payment links. Payment links can be shared directly with your customers via email or chat or added directly to your website pages. Learn more about HubSpot’s payments tool</p>
                <p className='FAQAns'>There are no setup fees, monthly fees, minimums, or hidden charges. HubSpot charges a percentage of each transaction, so you only pay for the service when you use it.
                  For credit and debit cards: You pay a flat 2.9% of the transaction amount.
                  For ACH payments: you pay 0.5% of the transaction amount, capped at $10 per transaction.</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon color='teal' />
                  <Box flex='1' textAlign='left'>
                    <p className='FAQHeading'>what are marketing contacts, and how does contact pricing work?</p>
                  </Box>

                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='FAQAns'>Under this new contact model, you can set any of your contacts as ‘marketing contacts.’ These contacts count toward your paid contact tier and can be targeted with marketing emails and ads. Conversely, you can also set contacts as ‘non-marketing contacts.’ You can store your non-marketing contacts in your CRM for free, up to a limit of 15 million overall contacts. However, you cannot target non-marketing contacts with marketing emails or ads.</p>
                <p className='FAQAns'>
                  When you purchase Marketing Hub with marketing contacts, you’ll have the opportunity to select your contact tier, or how many marketing contacts you want to start out with. You can then change individual marketing contacts to non-marketing contacts any time from your HubSpot account. Their status will be updated once a month. However, once you select a contact tier, you cannot downgrade until your contract renews.</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon color='teal' />
                  <Box flex='1' textAlign='left'>
                    <p className='FAQHeading'>How many marketing contacts can i have with a Marketing Hub plan?</p>
                  </Box>

                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='FAQAns'>
                  Each Marketing Hub edition comes with a different number of included marketing contacts.
                </p>
               <div className='FAQAns'>
               <ul >
                  <li>Marketing Hub Starter: includes 1,000 marketing contacts</li>
                  <li>Marketing Hub Professional: includes 2,000 marketing contacts</li>
                  <li>Marketing Hub Enterprise: includes 10,000 marketing contacts</li>
                </ul>
               </div>

                <p className='FAQAns'>While you’ll enjoy these included marketing contacts at no additional cost, you can purchase additional marketing contacts with any of our editions at any time.</p>
                <p className='FAQAns'>
                  Once you select a contact tier, you cannot downgrade to a lower contact tier until your contract renews. To see how much Marketing Hub costs with a specific number of contacts, try our pricing calculator.
                </p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon color='teal' />
                  <Box flex='1' textAlign='left'>
                    <p className='FAQHeading'>How many emails can I send with a paid Marketing Hub Plan?</p>
                  </Box>

                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='FAQAns'>The number of emails you can send per month depends on the Marketing Hub plan and the number of contacts you purchase.</p>
                <div className='FAQAns'>
                  <ul >
                    <li>Marketing Hub Starter: email send limit is 5 times your marketing contact tier per calendar month</li>
                    <li>Marketing Hub Professional: email send limit is 10 times your marketing contact tier per calendar month</li>
                    <li>Marketing Hub Enterprise: email send limit is 20 times your marketing contact tier per calendar month</li>
                  </ul>
                </div>
                <p className='FAQAns'>If you need to send even more than that, you can purchase more marketing contacts or purchase the Dedicated IP Add-On for unlimited email sends.</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <AccordionIcon color='teal' />
                  <Box flex='1' textAlign='left'>
                    <p className='FAQHeading'>Do I need to buy onboarding for Marketing Hub?</p>
                  </Box>

                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='FAQAns'>When you purchase Marketing Hub Professional or Enterprise, you’ll automatically be charged for onboarding to ensure you get started on the right foot with your inbound marketing efforts. Inbound marketing is about much more than just using a bunch of software to get marketing done; it’s about transforming your business to create marketing people love. That’s much easier to do in the thriving ecosystem of HubSpot customer training programs and with the personal support of our famously passionate inbound marketing professors and consultants.</p>
                <p className='FAQAns'>When you purchase Marketing Hub Starter, you won’t need to buy onboarding, but Inbound Consulting is available for an additional fee.</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <h1 style={{ fontSize: '12px', color: 'rgb(81,111,144', lineHeight: '24px', textAlign: 'center !important', margin: 'auto' }}>For more detailed information on product packaging and the limits that apply, please see our Product and Services Catalog.
        </h1>
      </div>
      <div style={{ width: '70%', margin: 'auto', marginBottom: '100px', marginTop: '100px' }}>
        <p style={{ fontWeight: '700', fontSize: '32px', color: '#33475b' }}>Still have questions about how HubSpot's software can help your business?</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '25px' }}>
          <PhoneIcon />
          <p style={{ fontSize: '1.5em', fontWeight: '600', color: '#0091ae', cursor: 'pointer', lineHeight: '0.5' }}>See phone number</p>
        </div>
      </div>
    </>
  )
}

export default CustomerS