const SocialLink = ({ href, children }) => {
    return (
        <a href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 'bold',
            textDecoration:'none',
            color: 'black'
          }}
        >
            {children}
        </a>
    );
};

export default SocialLink;
