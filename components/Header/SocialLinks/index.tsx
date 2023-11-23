interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
  }
  
  const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
    return (
      <a
        className="pointer-events-none flex items-center gap-2 px-3 py-2 md:p-8 lg:pointer-events-auto lg:p-0"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  };

export default SocialLink