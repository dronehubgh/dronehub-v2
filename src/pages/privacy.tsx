import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import Carousel from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const menuSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  focusOnSelect: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const items = [
  {
    title: 'Terms and Conditions',
    link: '/',
    color: '#D600E8',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy',
    color: '#0645A4',
  },
  {
    title: 'After Sales Policy',
    link: '/',
    color: '#011127',
  },
  {
    title: 'Warranty Policy',
    link: '/',
    color: '#FFAA00',
  },
];

const Paragraph = ({ children, active, isFirst }: any) => (
  <Link
    lineHeight={'18px'}
    fontWeight={active ? '700' : '400'}
    mb={
      isFirst
        ? { base: 10, md: 10, lg: '40px' }
        : { base: 10, md: 10, lg: '25px' }
    }
    color={active ? 'brand.blue' : 'black'}
    fontSize={{ lg: '18px', md: '18px', base: '14px' }}
  >
    {children}
  </Link>
);

const PrivacyText = ({ children, isHeader, mt }: any) => (
  <Text
    fontWeight={isHeader ? '700' : '400'}
    mb={isHeader ? { lg: '20px', base: '5px' } : 1}
    mt={mt ? { lg: '20px', base: '5px' } : 1}
    fontSize={isHeader ? { lg: '24px' } : { lg: '18px' }}
  >
    {' '}
    {children}{' '}
  </Text>
);

const Privacy = () => {
  return (
    // <Layout title="Privacy Policy | Dronehub">
    <>
      {/* <Header
        text="We are on a mission to create a happy ever after for Humans and Drones"
        heading="Privacy Policy"
        // image='/images/man.png'
        py={py}
        mt={20}
      /> */}

      <Box bg="white">
        <Flex display={{ base: 'block', md: 'flex' }}>
          <Box
            overflowX={'scroll'}
            display={{ base: 'none', md: 'block' }}
            w={{ lg: '30vw', base: '100%', md: '100%' }}
          >
            <Box mt={{ lg: '20px', base: '5px' }}>
              <NextLink href="/terms-and-conditions" passHref>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                  lineHeight={'18px'}
                >
                  Overview
                </Link>
              </NextLink>
            </Box>
            <Box mt={{ lg: '40px', base: '5px' }}>
              <NextLink href="/product" passHref>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                  fontWeight={'400'}
                >
                  Terms of Use
                </Link>
              </NextLink>
            </Box>
            <Box mt={{ lg: '15px', base: '5px' }}>
              <NextLink href="/privacy" passHref>
                <Link
                  _hover={{ textDecor: 'none' }}
                  color={'brand.blue'}
                  fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                >
                  Privacy Policy
                </Link>
              </NextLink>
            </Box>
            <Box mt={{ lg: '15px', base: '5px' }}>
              <NextLink href="/after-sales-policies" passHref>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                >
                  After Sales Policy
                </Link>
              </NextLink>
            </Box>
            <Box mt={{ lg: '15px', base: '5px' }}>
              <NextLink href="/product" passHref>
                <Link
                  _hover={{ textDecor: 'none' }}
                  fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                >
                  Warranty Policy
                </Link>
              </NextLink>
            </Box>
          </Box>
          <Box display={{ base: 'block', md: 'none' }} mb="20px">
            <Carousel {...menuSliderSettings}>
              <Box mt="5px" py="5px" borderBottom={'1px solid #D8D8D8'}>
                <NextLink href="/terms-and-conditions" passHref>
                  <Link
                    _hover={{ textDecor: 'none' }}
                    fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                    lineHeight={'18px'}
                  >
                    Overview
                  </Link>
                </NextLink>
              </Box>
              <Box mt="5px" py="5px" borderBottom={'1px solid #D8D8D8'}>
                <NextLink href="/terms-of-use" passHref>
                  <Link
                    _hover={{ textDecor: 'none' }}
                    fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                    fontWeight={'400'}
                  >
                    Terms of Use
                  </Link>
                </NextLink>
              </Box>
              <Box mt="5px" py="5px" borderBottom={'1px solid blue'}>
                <NextLink href="/privacy" passHref>
                  <Link
                    _hover={{ textDecor: 'none' }}
                    color={'brand.blue'}
                    fontWeight={'700'}
                    fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                  >
                    Privacy Policy
                  </Link>
                </NextLink>
              </Box>
              <Box mt="5px" py="5px">
                <NextLink href="/after-sales-policies" passHref>
                  <Link
                    _hover={{ textDecor: 'none' }}
                    fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                  >
                    After Sales Policy
                  </Link>
                </NextLink>
              </Box>
              <Box mt="5px" py="5px" borderBottom={'1px solid #D8D8D8'}>
                <NextLink href="/waranty-policy" passHref>
                  <Link
                    _hover={{ textDecor: 'none' }}
                    fontSize={{ lg: '18px', md: '18px', base: '14px' }}
                  >
                    Warranty Policy
                  </Link>
                </NextLink>
              </Box>
            </Carousel>
          </Box>
          <Box w={{ lg: '70vw', base: '100%', md: '100vw' }}>
            <PrivacyText mt isHeader>
              Effective : May 17, 2021
            </PrivacyText>
            <PrivacyText mt>
              This page (together with the documents referred to on it) tells
              you the terms of use on which you may make use of our website (our
              site), whether as a guest or a registered user. Please read these
              terms of use carefully before you start to use the site. By using
              our site, you indicate that you accept these terms of use and that
              you agree to abide by them. If you do not agree to these terms of
              use, please refrain from using our site.
            </PrivacyText>
            <PrivacyText mt isHeader>
              INFORMATION ABOUT US
            </PrivacyText>
            <Link href="https://dronehubgh.com">https://dronehubgh.com</Link> is
            a site operated by DroneHub Ghana (“We”). We are registered in
            Accra, Ghana and have our registered office at H/No. 60 Co-Operative
            Building, Opposite Glico Insurance, Kwame Nkrumah Avenue-Adabraka,
            Accra-Ghana. We are a limited company.
            <PrivacyText mt isHeader>
              {' '}
              ACCESSING OUR SITE
            </PrivacyText>
            Access to our site is permitted on a temporary basis, and we reserve
            the right to withdraw or amend the service we provide on our site
            without notice (see below). We will not be liable if for any reason
            our site is unavailable at any time or for any period. From time to
            time, we may restrict access to some parts of our site, or our
            entire site, to users who have registered with us. If you choose, or
            you are provided with, a user identification code, password or any
            other piece of information as part of our security procedures, you
            must treat such information as confidential, and you must not
            disclose it to any third party. We have the right to disable any
            user identification code or password, whether chosen by you or
            allocated by us, at any time, if in our opinion you have failed to
            comply with any of the provisions of these terms of use. When using
            our site, you must comply with the provisions of our acceptable use
            policy. You are responsible for making all arrangements necessary
            for you to have access to our site. You are also responsible for
            ensuring that all persons who access our site through your internet
            connection are aware of these terms, and that they comply with them.
            <PrivacyText mt isHeader>
              {' '}
              INTELLECTUAL PROPERTY RIGHTS
            </PrivacyText>
            We are the owner or the licensee of all intellectual property rights
            in our site, and in the material published on it. Those works are
            protected by copyright laws and treaties around the world. All such
            rights are reserved. You may print off one copy, and may download
            extracts, of any page(s) from our site for your personal reference
            and you may draw the attention of others within your organisation to
            material posted on our site. You must not modify the paper or
            digital copies of any materials you have printed off or downloaded
            in any way, and you must not use any illustrations, photographs,
            video or audio sequences or any graphics separately from any
            accompanying text. Our status (and that of any identified
            contributors) as the authors of material on our site must always be
            acknowledged. You must not use any part of the materials on our site
            for commercial purposes without obtaining a licence to do so from us
            or our licensors. If you print off, copy or download any part of our
            site in breach of these terms of use, your right to use our site
            will cease immediately and you must, at our option, return or
            destroy any copies of the materials you have made.
            <PrivacyText mt isHeader>
              {' '}
              RELIANCE ON INFORMATION POSTED
            </PrivacyText>
            Commentary and other materials posted on our site are not intended
            to amount to advice on which reliance should be placed. We therefore
            disclaim all liability and responsibility arising from any reliance
            placed on such materials by any visitor to our site, or by anyone
            who may be informed of any of its contents.
            <PrivacyText mt isHeader>
              {' '}
              OUR SITE CHANGES REGULARLY
            </PrivacyText>
            We aim to update our site regularly, and may change the content at
            any time. If the need arises, we may suspend access to our site, or
            close it indefinitely. Any of the material on our site may be out of
            date at any given time, and we are under no obligation to update
            such material.
            <PrivacyText mt isHeader>
              {' '}
              OUR LIABILITY
            </PrivacyText>
            The material displayed on our site is provided without any
            guarantees, conditions or warranties as to its accuracy. To the
            extent permitted by law, both we and third parties connected to us,
            hereby expressly exclude: all conditions, warranties and other terms
            which might otherwise be implied by statute, common law or the law
            of equity. Any liability for any direct, indirect or consequential
            loss or damage incurred by any user in connection with our site or
            in connection with the use, inability to use, or results of the use
            of our site, any websites linked to it and any materials posted on
            it, including, without limitation any liability for: Loss of income
            or revenue Loss of business Loss of profits or contracts Loss of
            anticipated savings Loss of data Loss of goodwill Wasted management
            or office time and For any other loss or damage of any kind, however
            arising and whether caused by tort (including negligence), breach of
            contract or otherwise, even if foreseeable, provided that this
            condition shall not prevent claims for loss of or damage to your
            tangible property or any other claims for direct financial loss that
            are not excluded by any of the categories set out above. This does
            not affect our liability for death or personal injury arising from
            our negligence, nor our liability for fraudulent misrepresentation
            or misrepresentation as to a fundamental matter, nor any other
            liability which cannot be excluded or limited under applicable law.
            INFORMATION ABOUT YOU AND YOUR VISITS TO OUR SITE We process
            information about you in accordance with our privacy policy. By
            using our site, you consent to such processing and you warrant that
            all data provided by you is accurate.
            <PrivacyText mt isHeader>
              {' '}
              UPLOADING MATERIAL TO OUR SITE
            </PrivacyText>
            From time to time we may add features to our site which allows you
            to upload material to our site, or to make contact with other users
            of our site. Whenever you make use of these features you must comply
            with the content standards set out in our acceptable use policy. You
            warrant that any such contribution does comply with those standards,
            and you indemnify us for any breach of that warranty. Any material
            you upload to our site will be considered non-confidential and
            non-proprietary, and we have the right to use, copy, distribute and
            disclose to third parties any such material for any purpose. We also
            have the right to disclose your identity to any third party who is
            claiming that any material posted or uploaded by you to our site
            constitutes a violation of their intellectual property rights, or of
            their right to privacy. We will not be responsible, or liable to any
            third party, for the content or accuracy of any materials posted by
            you or any other user of our site. We have the right to remove any
            material or posting you make on our site if, in our opinion, such
            material does not comply with the content standards set out in our
            acceptable use policy.
            <PrivacyText mt isHeader>
              {' '}
              VIRUSES, HACKING AND OTHER OFFENCES
            </PrivacyText>
            You must not misuse our site by knowingly introducing viruses,
            trojans, worms, logic bombs or other material which is malicious or
            technologically harmful. You must not attempt to gain unauthorised
            access to our site, the server on which our site is stored or any
            server, computer or database connected to our site. You must not
            attack our site via a denial-of-service attack or a distributed
            denial-of service attack. By breaching this provision, you would
            commit a criminal offence under the Computer Misuse Act 1990. We
            will report any such breach to the relevant law enforcement
            authorities and we will cooperate with those authorities by
            disclosing your identity to them. In the event of such a breach,
            your right to use our site will cease immediately. We will not be
            liable for any loss or damage caused by a distributed
            denial-of-service attack, viruses or other technologically harmful
            material that may infect your computer equipment, computer programs,
            data or other proprietary material due to your use of our site or to
            your downloading of any material posted on it, or on any website
            linked to it.
            <PrivacyText mt isHeader>
              {' '}
              LINKING TO OUR SITE
            </PrivacyText>
            You may link to our home page, provided you do so in a way that is
            fair and legal and does not damage our reputation or take advantage
            of it, but you must not establish a link in such a way as to suggest
            any form of association, approval or endorsement on our part where
            none exists. You must not establish a link from any website that is
            not owned by you. Our site must not be framed on any other site, nor
            may you create a link to any part of our site other than the home
            page. We reserve the right to withdraw linking permission without
            notice. The website from which you are linking must comply in all
            respects with the content standards set out in our acceptable use
            policy. If you wish to make any use of material on our site other
            than that set out above, please address your request to
            connect@dronehubgh.com
            <PrivacyText mt isHeader>
              {' '}
              LINKS FROM OUR SITE
            </PrivacyText>
            Where our site contains links to other sites and resources provided
            by third parties, these links are provided for your information
            only. We have no control over the contents of those sites or
            resources, and accept no responsibility for them or for any loss or
            damage that may arise from your use of them.
            <PrivacyText mt isHeader>
              {' '}
              JURISDICTION AND APPLICABLE LAW
            </PrivacyText>
            The English courts will have non-exclusive jurisdiction over any
            claim arising from, or related to, a visit to our site. These terms
            of use and any dispute or claim arising out of or in connection with
            them or their subject matter or formation (including non-contractual
            disputes or claims) shall be governed by and construed in accordance
            with the laws of Ghana.
            <PrivacyText mt isHeader>
              {' '}
              VARIATIONS
            </PrivacyText>
            We may revise these terms of use at any time by amending this page.
            You are expected to check this page from time to time to take notice
            of any changes we made, as they are binding on you. Some of the
            provisions contained in these terms of use may also be superseded by
            provisions or notices published elsewhere on our site.
            <PrivacyText mt isHeader>
              {' '}
              YOUR CONCERNS
            </PrivacyText>
            If you have any concerns about material which appears on our site,
            please contact connect@dronehubgh.com. Thank you for visiting our
            site.
            <PrivacyText mt isHeader>
              {' '}
              PRIVACY POLICY
            </PrivacyText>
            DroneHub Ghana (“We”) are committed to protecting and respecting
            your privacy. This policy (together with our terms of use and any
            other documents referred to on it) sets out the basis on which any
            personal data we collect from you, or that you provide to us, will
            be processed by us. Please read the following carefully to
            understand our views and practices regarding your personal data and
            how we will treat it.
            <PrivacyText mt isHeader>
              {' '}
              INFORMATION WE MAY COLLECT FROM YOU
            </PrivacyText>
            We may collect and process the following data about you: Information
            that you provide by filling in forms on our site (our site). This
            includes information provided at the time of registering to use our
            site, subscribing to our service, posting material or requesting
            further services. We may also ask you for information when you
            report a problem with our site. If you contact us, we may keep a
            record of that correspondence. Details of your visits to our site
            including, but not limited to, traffic data, location data, weblogs
            and other communication data, whether this is required for our own
            billing purposes or otherwise and the resources that you access.
            <PrivacyText mt isHeader>
              {' '}
              IP ADDRESSES
            </PrivacyText>
            We may collect information about your computer, including where
            available your IP address, operating system and browser type, for
            system administration and to report aggregate information to our
            advertisers. This is statistical data about our users’ browsing
            actions and patterns, and does not identify any individual.
            <PrivacyText mt isHeader>
              {' '}
              COOKIES
            </PrivacyText>
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when
            you browse our website and also allows us to improve our site.
            <PrivacyText mt isHeader>
              {' '}
              USES MADE OF THE INFORMATION
            </PrivacyText>
            We use information held about you in the following ways: To ensure
            that content from our site is presented in the most effective manner
            for you and for your computer. To provide you with information,
            products or services that you request from us or which we feel may
            interest you, where you have consented to be contacted for such
            purposes. To carry out our obligations arising from any contracts
            entered into between you and us. To allow you to participate in
            interactive features of our service, when you choose to do so. To
            notify you about changes to our service. We may also use your data,
            or permit selected third parties to use your data, to provide you
            with information about goods and services which may be of interest
            to you and we or they may contact you about these…
            <PrivacyText mt isHeader>
              {' '}
              DISCLOSURE OF YOUR INFORMATION
            </PrivacyText>
            We may disclose your personal information to third parties: In the
            event that we sell or buy any business or assets, in which case we
            may disclose your personal data to the prospective seller or buyer
            of such business or assets. If DroneHub Ghana or substantially all
            of its assets are acquired by a third party, in which case personal
            data held by it about its customers will be one of the transferred
            assets. If we are under a duty to disclose or share your personal
            data in order to comply with any legal obligation, or in order to
            enforce or apply our terms of use and other agreements; or to
            protect the rights, property, or safety of DroneHub Ghana, our
            customers, or others. This includes exchanging information with
            other companies and organisations for the purposes of fraud
            protection and credit risk reduction.
            <PrivacyText mt isHeader>
              {' '}
              YOUR RIGHTS
            </PrivacyText>
            You have the right to ask us not to process your personal data for
            marketing purposes. We will usually inform you (before collecting
            your data) if we intend to use your data for such purposes or if we
            intend to disclose your information to any third party for such
            purposes. You can exercise the right at any time by contacting us at
            connect@dronehubgh.com Our site may, from time to time, contain
            links to and from the websites of our partner networks, advertisers
            and affiliates. If you follow a link to any of these websites,
            please note that these websites have their own privacy policies and
            that we do not accept any responsibility or liability for these
            policies. Please check these policies before you submit any personal
            data to these websites.
            <PrivacyText mt isHeader>
              {' '}
              ACCESS TO INFORMATION
            </PrivacyText>
            The Act gives you the right to access information held about you.
            Your right of access can be exercised in accordance with the Act.
            Any access request may be subject to a fee of GHC 100 to meet our
            costs in providing you with details of the information we hold about
            you. CHANGES TO OUR PRIVACY POLICY Any changes we may make to our
            privacy policy in the future will be posted on this page and, where
            appropriate, notified to you by email.
            <PrivacyText mt isHeader>
              {' '}
              CONTACT
            </PrivacyText>
            Questions, comments and requests regarding this privacy policy are
            welcomed and should be addressed to
            <PrivacyText mt isHeader>
              {' '}
              ACCEPTABLE USE POLICY
            </PrivacyText>
            This acceptable use policy sets out the terms between you and us
            under which you may access our website (our site). This acceptable
            use policy applies to all users of, and visitors to, our site. Your
            use of our site means that you accept, and agree to abide by, all
            the policies in this acceptable use policy, which supplement our
            terms of website use. is a site operated by DroneHub Ghana (we or
            us). We are registered in Accra, Ghana and we have our registered
            office at H/No. 60 Co-Operative Building Opposite Glico Insurance,
            Kwame Nkrumah Avenue-Adabraka, Accra – Ghana.
            <PrivacyText mt isHeader>
              {' '}
              PROHIBITED USES
            </PrivacyText>
            You may use our site only for lawful purposes. You may not use our
            site: in any way that breaches any applicable local, national or
            international law or regulation in any way that is unlawful or
            fraudulent, or has any unlawful or fraudulent purpose or effect for
            the purpose of harming or attempting to harm minors in any way to
            send, knowingly receive, upload, download, use or re-use any
            material which does not comply with our content standards; to
            transmit, or procure the sending of, any unsolicited or unauthorized
            advertising or promotional material or any other form of similar
            solicitation (spam); or to knowingly transmit any data, send or
            upload any material that contains viruses, Trojan horses, worms,
            time-bombs, keystroke loggers, spyware, adware or any other harmful
            programs or similar computer code designed to adversely affect the
            operation of any computer software or hardware. You also agree: Not
            to reproduce, duplicate, copy or re-sell any part of our site in
            contravention of the provisions of our terms of website use; Not to
            access without authority, interfere with, damage or disrupt: any
            part of our site; Any equipment or network on which our site is
            stored; Any software used in the provision of our site; or any
            equipment or network or software owned or used by any third party.
            <PrivacyText mt isHeader>
              {' '}
              INTERACTIVE SERVICES
            </PrivacyText>
            We may from time to time provide interactive services on our site
            (interactive services). Where we do provide any interactive service,
            we will provide clear information to you about the kind of service
            offered, if it is moderated and what form of moderation is used
            (including whether it is human or technical). We will do our best to
            assess any possible risks for users (and in particular, for
            children) from third parties when they use any interactive service
            provided on our site, and we will decide in each case whether it is
            appropriate to use moderation of the relevant service (including
            what kind of moderation to use) in the light of those risks.
            However, we are under no obligation to oversee, monitor or moderate
            any interactive service we provide on our site, and we expressly
            exclude our liability for any loss or damage arising from the use of
            any interactive service by a user in contravention of our content
            standards, whether the service is moderated or not. The use of any
            of our interactive services by a minor is subject to the consent of
            their parent or guardian. We advise parents who permit their
            children to use an interactive service that it is important that
            they communicate with their children about their safety online, as
            moderation is not foolproof. Minors who are using any interactive
            service should be made aware of the potential risks to them. Where
            we do moderate an interactive service, we will normally provide you
            with a means of contacting the moderator, should a concern or
            difficulty arise.
            <PrivacyText mt isHeader>
              {' '}
              CONTENT STANDARDS
            </PrivacyText>
            These content standards apply to any and all material which you
            contribute to our site (contributions), and to any interactive
            services associated with it. You must comply with the spirit of the
            following standards as well as the letter. The standards apply to
            each part of any contribution as well as to its whole. Contributions
            must: Be accurate (where they state facts); Be genuinely held (where
            they state opinions); Comply with applicable law in Ghana and in any
            country from which they are posted. Contributions must not: Contain
            any material which is defamatory of any person; Contain any material
            which is obscene, offensive, hateful or inflammatory; Promote
            sexually explicit material; Promote violence; Promote discrimination
            based on race, sex, religion, nationality, disability, Sexual
            orientation or age; Infringe any copyright, database right or
            trademark of any other person; Be likely to deceive any person; Be
            made in breach of any legal duty owed to a third party, such as a
            contractual duty or a duty of confidence; Promote any illegal
            activity; Be threatening, abuse or invade another’s privacy, or
            cause annoyance, Inconvenience or needless anxiety; Be likely to
            harass, upset, embarrass, alarm or annoy any other person; Be used
            to impersonate any person, or to misrepresent your identity or
            affiliation with any person; Give the impression that they emanate
            from us, if this is not the case; or advocate, promote or assist any
            unlawful act such as (by way of example only) copyright infringement
            or computer misuse.
            <PrivacyText mt isHeader>
              {' '}
              SUSPENSION AND TERMINATION
            </PrivacyText>
            We will determine, in our discretion, whether there has been a
            breach of this acceptable use policy through your use of our site.
            When a breach of this policy has occurred, we may take such action
            as we deem appropriate. Failure to comply with this acceptable use
            policy constitutes a material breach of the terms of use upon which
            you are permitted to use our site, and may result in our taking all
            or any of the following actions: Immediate, temporary or permanent
            withdrawal of your right to use our site; Immediate, temporary or
            permanent removal of any posting or material Uploaded by you to our
            site; Issue of a warning to you; Legal proceedings against you for
            reimbursement of all costs on an indemnity basis (including, but not
            limited to, reasonable administrative and legal costs) Resulting
            from the breach; Further legal action against you; Disclosure of
            such information to law enforcement authorities as we reasonably
            feel is necessary. We exclude liability for actions taken in
            response to breaches of this acceptable use policy. The responses
            described in this policy are not limited, and we may take any other
            action we reasonably deem appropriate.
            <PrivacyText mt isHeader>
              {' '}
              CHANGES TO THE ACCEPTABLE USE POLICY
            </PrivacyText>
            We may revise this acceptable use policy at any time by amending
            this page. You are expected to check this page from time to time to
            take notice of any changes we make, as they are legally binding on
            you. Some of the provisions contained in this acceptable use policy
            may also be superseded by provisions or notices published elsewhere
            on our site.
          </Box>
        </Flex>
      </Box>
      {/* <Box bg="white" >
        <Contact />
      </Box> */}
    </>
    // </Layout>
  );
};

export default Privacy;
