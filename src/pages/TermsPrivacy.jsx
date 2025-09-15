import React, { useEffect } from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { useSEO } from '../hooks/useSEO';
import { useLocation, useNavigate } from 'react-router-dom';

const TermsPrivacy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // SEO configuration for this page
  useSEO({
    title: 'Terms of Use & Privacy Policy | Platinum Medical Evaluations',
    description: 'Read our terms of use and privacy policy for Platinum Medical Evaluations. Learn about our data collection practices and user responsibilities.',
    keywords: 'terms of use, privacy policy, medical evaluations, data protection, user agreement',
    canonical: '/terms-privacy'
  });

  // Handle scroll to specific section based on URL hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Default scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, color: '#1976d2' }}>
          Terms & Policy
        </Typography>

        {/* Navigation Menu */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
            <Typography 
              component="span"
              onClick={() => navigate('/terms-privacy#terms')}
              sx={{ 
                color: '#0C0FE4', 
                cursor: 'pointer', 
                textDecoration: 'underline',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': { color: '#0A0BC7' }
              }}
            >
              Terms of Use
            </Typography>
            <Typography 
              component="span"
              onClick={() => navigate('/terms-privacy#privacy')}
              sx={{ 
                color: '#0C0FE4', 
                cursor: 'pointer', 
                textDecoration: 'underline',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': { color: '#0A0BC7' }
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>

        {/* Terms of Use Section */}
        <Box sx={{ mb: 6 }} id="terms">
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#1976d2', mb: 3 }}>
            TERMS OF USE
          </Typography>
          
          <Typography variant="body1" paragraph>
            Platinum Medical Evaluations ("we," "us," or "our") provides this website ("Site") to you conditioned on
            your acceptance without modification of the terms, conditions, and notices contained
            herein. Your use of this Site constitutes your agreement to all such terms, conditions,
            and notices.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            MODIFICATION OF THESE TERMS OF USE
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to change the terms, conditions, and notices under which this Site
            is offered, including but not limited to the charges associated with the use of this Site.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            LINKS TO THIRD PARTY SITES
          </Typography>
          <Typography variant="body1" paragraph>
            This Site may contain links to other websites ("Linked Sites"). The Linked Sites are not
            under our control, and we are not responsible for the contents of any Linked Site,
            including without limitation any link contained in a Linked Site, or any changes or
            updates to a Linked Site. We are not responsible for webcasting, or any other form of
            transmission received from any Linked Site. We are providing these links to you only as
            a convenience, and the inclusion of any link does not imply endorsement by us of the
            site or any association with its operators.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            NO UNLAWFUL OR PROHIBITED USE
          </Typography>
          <Typography variant="body1" paragraph>
            As a condition of your use of this Site, you warrant to us that you will not use this Site
            for any purpose that is unlawful or prohibited by these terms, conditions, and notices.
            You may not use this Site in any manner which could damage, disable, overburden, or
            impair this Site or interfere with any other party's use and enjoyment of this Site. You
            may not obtain or attempt to obtain any materials or information through any means not
            intentionally made available or provided for through this Site.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            CONTENT YOU SUBMIT
          </Typography>
          <Typography variant="body1" paragraph>
            When using this Site, you may have the opportunity to submit reviews or feedback
            regarding your experiences with us, and to participate in bulletin boards, chat areas,
            news groups, forums, communities, personal web pages, calendars, and/or other
            message or communication features designed to enable you to communicate with the
            public at large or with a group (collectively, "Communication Services"). You agree to
            use the Communication Services only to post, send, and receive messages and
            material that are proper and related to the particular Communication Service.
          </Typography>

          <Typography variant="body1" paragraph>
            By way of example, and not as a limitation, you agree that when using a
            Communication Service, you will not post content that contains:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 2 }}>
            <Typography component="li" variant="body1" paragraph>
              Personal and confidential information, including phone numbers, addresses, and
              health information;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Vulgar content, including offensive, derogatory, obscene, profane, or inflammatory language or content;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Threats or personal attacks on others;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Discriminatory content or hate speech, including content that advocates against groups of people based on their race, ethnic origin, religion, disability, gender, gender identity, sexual orientation, age, or veteran status;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Misrepresentations, including content submitted fraudulently on behalf of others or that misrepresents your identity or connection with us or our practice;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Non-applicable content, including posts that are not specific to us or our practice;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Advertising or solicitations;
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Illegal content; or
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              References to or information about ongoing legal matters or proceedings.
            </Typography>
          </Box>

          <Typography variant="body1" paragraph>
            You further agree that you will not:
          </Typography>

          <Box component="ul" sx={{ pl: 4, mb: 2 }}>
            <Typography component="li" variant="body1" paragraph>
              Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Upload files that contain viruses, corrupt files, or any other similar software or programs that may damage the operation of another's computer.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Conduct or forward surveys, contests, pyramid schemes or chain letters.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Falsify or delete any legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Restrict or inhibit any other user from using and enjoying the Communication Services.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Harvest or otherwise collect information about others, including e-mail addresses, without their consent.
            </Typography>
          </Box>

          <Typography variant="body1" paragraph>
            We have no obligation to monitor the Communication Services. However, we reserve
            the right to review materials posted to a Communication Service and to remove any
            content that does not comply with these terms or any publicly posted content that
            includes personal and confidential information. We reserve the right to terminate your
            access to any or all of the Communication Services at any time without notice for any
            reason whatsoever. Content uploaded to a Communication Service may be subject to
            posted limitations on usage, reproduction, and/or dissemination. You are responsible for
            adhering to such limitations if you download the content. If you would like to remove
            your own review from this Site, please contact us.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            LIABILITY DISCLAIMER
          </Typography>
          <Typography variant="body1" paragraph>
            THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
            AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR
            TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
            INFORMATION HEREIN. WE AND/OR OUR SUPPLIERS MAY MAKE
            IMPROVEMENTS AND/OR CHANGES IN THIS SITE AT ANY TIME. ADVICE
            RECEIVED VIA THIS SITE SHOULD NOT BE RELIED UPON FOR PERSONAL,
            MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN
            APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR
            SITUATION. WE AND/OR OUR SUPPLIERS MAKE NO REPRESENTATIONS ABOUT
            THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF
            THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED
            GRAPHICS CONTAINED ON THIS SITE FOR ANY PURPOSE. TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION,
            SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED
            "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND/OR OUR
            SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH
            REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
            RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND
            NON-INFRINGEMENT.
          </Typography>

          <Typography variant="body1" paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE AND/OR OUR SUPPLIERS BE LIABLE FOR ANY
            DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL
            DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION,
            DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY
            WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS SITE, WITH THE
            DELAY OR INABILITY TO USE THIS SITE OR RELATED SERVICES, THE
            PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY
            INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
            OBTAINED THROUGH THIS SITE, OR OTHERWISE ARISING OUT OF THE USE OF
            THIS SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
            LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR SUPPLIERS HAS BEEN
            ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME
            STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
            LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
            LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY
            PORTION OF THIS SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE
            AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS SITE.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            COPYRIGHT AND TRADEMARK NOTICES
          </Typography>
          <Typography variant="body1" paragraph>
            All contents of this website are Copyright © 2025 Platinum Medical Evaluations. All Rights Reserved.
            All logos are trademarks and service marks of Platinum Medical Evaluations. All other trademarks,
            service marks and logos used in this Site are the property of their respective owners.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            TRADEMARKS
          </Typography>
          <Typography variant="body1" paragraph>
            The names of actual companies and products mentioned herein may be the trademarks
            of their respective owners. The example companies, organizations, products, people
            and events depicted herein are fictitious. No association with any real company,
            organization, product, person, or event is intended or should be inferred. Any rights not
            expressly granted herein are reserved.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            NOTICES
          </Typography>
          <Typography variant="body1" paragraph>
            Please contact us by phone at 310-853-1739.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Privacy Policy Section */}
        <Box id="privacy">
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#1976d2', mb: 3 }}>
            PRIVACY POLICY STATEMENT
          </Typography>
          
          <Typography variant="body1" paragraph>
            We are committed to protecting your privacy and providing a safe online experience.
            This Privacy Statement applies to our Practice's website and governs our data collection
            and usage practices. By using this website, you consent to the data practices described
            in this Privacy Statement.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            Collection of your Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            This Practice collects personally identifiable information provided by you, such as your
            e-mail address, name, home or work address or telephone number. This Practice also
            collects anonymous demographic information, which is not unique to you, such as your
            ZIP code, age, gender, preferences, interests and favorites. There is also information
            about your computer hardware and software that is automatically collected by this
            website. This information can include: your IP address, browser type, domain names,
            access times and referring to website addresses. This information is used for the
            operation of the service, to maintain quality of the service, and to provide general
            statistics regarding use of this website. Please keep in mind that if you directly disclose
            personally identifiable information or personally sensitive data through public message
            boards, this information may be collected and used by others. This Practice encourages
            you to review the privacy statements of websites you choose to link to from the website
            so that you can understand how those websites collect, use and share your information.
            This Practice is not responsible for the privacy statements or other content on any other
            websites.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            Use of your Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            This Practice collects and uses your personal information to operate the website and
            deliver the services you have requested. This Practice also uses your personally
            identifiable information to inform you of other products or services available from this
            Practice and its affiliates. This Practice may also contact you via surveys to conduct
            research about your opinion of current services or of potential new services that may be
            offered. This Practice does not sell, rent or lease its customer lists to third parties. This
            Practice may share data with trusted partners to help us perform statistical analysis,
            send you email or postal mail, provide customer support, or arrange for deliveries. All
            such third parties are prohibited from using your personal information except to provide
            these services and they are required to maintain the confidentiality of your information.
            This Practice does not use or disclose sensitive personal information, such as race,
            religion, or political affiliations, without your explicit consent. This Practice will disclose
            your personal information, without notice, only if required to do so by law.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            Use of Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            The website uses "cookies" to help this Practice personalize your online experience. A
            cookie is a text file that is placed on your hard disk by a webpage server. Cookies
            cannot be used to run programs or deliver viruses to your computer. Cookies are
            uniquely assigned to you and can only be read by a web server in the domain that
            issued the cookie to you.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            Security of your Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            This Practice secures your personal information from unauthorized access, use or
            disclosure. This Practice secures the personally identifiable information you provide on
            computer servers in a controlled, secure environment, protected from unauthorized
            access, use or disclosure. When personal information (such as a credit card number) is
            transmitted to other websites, it is protected through the use of encryption, such as the
            Secure Socket Layer (SSL) protocol.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            Changes to this Statement
          </Typography>
          <Typography variant="body1" paragraph>
            This Practice will occasionally update this Privacy Statement to reflect company and
            customer feedback. We encourage you to periodically review this Privacy Statement to
            be informed of how this Practice is protecting your information.
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2, color: '#1976d2' }}>
            Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            Please contact us by phone at 310-853-1739.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPrivacy;
