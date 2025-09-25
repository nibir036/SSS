import React from 'react';
import { CheckCircle } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Recognition</h1>
          <p className="text-xl text-gray-600">
            Our commitment to excellence has been recognized by industry leaders worldwide
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "DGDP Enlistment",
              "MES Enlistment",
              "LGED",
              "EED",
              "DCCI Membership",
              "BIAA Membership",
              "Import Authorization",
              "Export Authorization",
              "HED Licensed"
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;