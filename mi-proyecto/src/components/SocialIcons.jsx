import './SocialIcons.css';
function SocialIcons({ className = '', iconSize = '1.2rem', showLabels = false
}) 
{
 const socialLinks = [
 {
 name: 'Facebook',
 url: 'https://facebook.com',
 icon: 'fab fa-facebook-f',
 color: '#1877f2'
 },
 { name: 'Twitter',
 url: 'https://twitter.com',
 icon: 'fab fa-twitter',
 color: '#1da1f2'
 },
 {
 name: 'Instagram',
 url: 'https://instagram.com',
 icon: 'fab fa-instagram',
 color: '#e4405f'
 },
 {
 name: 'GitHub',
 url: 'https://github.com',
 icon: 'fab fa-github',
 color: '#333'
 },
 {
 name: 'LinkedIn',
 url: 'https://linkedin.com',
 icon: 'fab fa-linkedin-in',
 color: '#0077b5'
 }
 ];
 return (
 <div className={`social-icons-container ${className}`}>
 {socialLinks.map((social) => (
 <a
 key={social.name} 
 href={social.url}
 target="_blank"
 rel="noopener noreferrer"
 className="social-icon"
 style={{ fontSize: iconSize }}
 title={social.name}
 >
 <i className={social.icon}></i>
 {showLabels && <span className="social-label">{social.name}</span>}
 </a>
 ))}
 </div>
 );
} 
export default SocialIcons; 
