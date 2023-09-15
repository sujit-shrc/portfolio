// components/CertificationEntry.tsx

import React from 'react';

interface CertificationEntryProps {
  logoSrc: string;
  certification: string;
  company: string;
  validatorLink: string;
}

const CertificationEntry: React.FC<CertificationEntryProps> = ({
  logoSrc,
  certification,
  company,
  validatorLink,
}) => {
  return (
    <li className="mb-4">
      <div className="flex items-center">
        <div className="mr-2">
          <img src={logoSrc} alt={company} width={24} height={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{certification}</h3>
          <p className="text-gray-500">{company}</p>
          <a
            href={validatorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Validate Certificate
          </a>
        </div>
      </div>
    </li>
  );
};

export default CertificationEntry;
