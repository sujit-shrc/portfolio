interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
  }

  const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
    return (
      <a
        className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 md:p-8 lg:p-0 hover:text-emerald-500"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  };

export default SocialLink
