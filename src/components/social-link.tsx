const SocialLink = ({ href, children }) => {
    return (
        <a href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="button"
        >
            {children}
        </a>
    );
};

export default SocialLink;
