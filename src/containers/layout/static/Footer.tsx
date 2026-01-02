
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import { AuthenticationPath } from '@/constants/UrlPath';
import SalanaPay from '@/assets/SalanaPay.svg';
import { useNavigate } from 'react-router-dom';
 
 
const Footer: React.FC = () => {
  // Define all the links in a structured way
  const footerLinks = {
    product: [
      { name: 'Home', path: AuthenticationPath.LandingPage },
      { name: 'Pricing', path: AuthenticationPath.Pricing }
    ],
    resources: [
      { name: 'Dashboards', path: AuthenticationPath.Dashboards },
      { name: 'Blog', path: AuthenticationPath.Blog },
      { name: 'Community', path: AuthenticationPath.Community }
    ],
    company: [
      { name: 'About', path: AuthenticationPath.About },
      { name: 'Privacy Policy', path: AuthenticationPath.PrivacyPolicy },
      { name: 'Terms', path: AuthenticationPath.Terms }
    ],
    contact: [
    {
      name: '11111009900',
      path: 'tel:11111009900'  
    },
    {
      name: 'support@salanapay.com',
      path: 'mailto:salanapay@gmail.com'  
    }
  ]
  };
 
  const navigate = useNavigate();
 
 
  const socialLinks = [
    {
      icon: FacebookIcon,
      href: 'https://facebook.com/salanapay',
      color: '#1877f2'
    },
    {
      icon: TwitterIcon,
      href: 'https://twitter.com/salanapay',
      color: '#1da1f2'
    },
    {
      icon: LinkedInIcon,
      href: 'https://linkedin.com/company/salanapay',
      color: '#0077b5'
    },
    {
      icon: InstagramIcon,
      href: 'https://instagram.com/salanapay',
      color: '#e4405f'
    }
  ];
 
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4,
         textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
         
          {/* Company Info */}
          <Box sx={{ flex: 1, minWidth: { md: 300 } }}>
             <Box sx={{ flexGrow: 1 }}>
              <img src={SalanaPay} alt="SalanaPayLogo"
                style={{
                  height: "40px",
                  maxWidth: "150px",
                  width: "auto",
                  marginLeft:25
                }}
                onClick={() => navigate(AuthenticationPath.LandingPage)} />
            </Box>
 
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.href}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'grey.400',
                    '&:hover': {
                      color: social.color,
                      backgroundColor: `rgba(${parseInt(social.color.slice(1, 3), 16)}, ${parseInt(social.color.slice(3, 5), 16)}, ${parseInt(social.color.slice(5, 7), 16)}, 0.1)`
                    }
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Box>
 
          {/* Links Sections */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            flex: 2
          }}>
           
            {/* Product Links */}
            <Box sx={{ minWidth: 150 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
                Product
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.product.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    variant="body2"
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#4facfe',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
 
            {/* Resources Links */}
            <Box sx={{ minWidth: 150 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
                Resources
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    variant="body2"
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#4facfe',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
 
            {/* Company Links */}
            <Box sx={{ minWidth: 150 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    variant="body2"
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#4facfe',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
 
            {/* Contact Links */}
            <Box sx={{ minWidth: 150 }}>
              <Typography variant="h4" sx={{ mb: 2, color: 'white', fontWeight: 600 }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {footerLinks.contact.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    variant="body2"
                    sx={{
                      color: 'grey.400',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#4facfe',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
         
      <Divider sx={{ borderColor: 'grey.800', mb:1 }} />
 
      {/* Bottom Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Typography variant="body2" sx={{ color: 'grey.500' }}>
          © {new Date().getFullYear()} SalanaPay product & designed by Star Softech. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
 
export default Footer;
 
 