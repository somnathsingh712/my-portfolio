import React from 'react';
import { CheckCircle, Calendar, Building2 } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Internet of Things',
      issuer: 'NPTEL',
      date: 'Sept 2025',
      credentialId: 'NPTEL25CS147S958700781',
      skills: ['Internet of things'],
      certificateImage: '/iot.pdf',
    },
    {
      title: 'Introduction to programming in Java',
      issuer: 'iamneo',
      date: 'May 2025',
      credentialId: '17Bg10h8Di2D13B61BJ1',
      skills: ['JAVA'],
      certificateImage: '/java.png',
    },
    {
      title: 'Master DSA with C++',
      issuer: 'W3 Grads',
      date: 'June 2025',
      credentialId: 'UC-87654321',
      skills: ['DSA in JAVA'],
      certificateImage: '/w3grads.jpg',
    },
   
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card group border-l-4 border-blue-600 dark:border-blue-400 hover:border-blue-500 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 dark:bg-blue-900 opacity-0 group-hover:opacity-20 rounded-full transition-all duration-300"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <Building2 size={16} />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                  <CheckCircle className="text-green-500 dark:text-green-400" size={24} />
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                {/* Credential ID */}
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 bg-gray-100 dark:bg-gray-700 p-2 rounded font-mono">
                  ID: {cert.credentialId}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={cert.certificateImage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 rounded-lg p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold">6+</p>
              <p className="text-blue-100 mt-2">Certifications</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="text-blue-100 mt-2">Skills Certified</p>
            </div>
            <div>
              <p className="text-4xl font-bold">2025</p>
              <p className="text-blue-100 mt-2">Latest Cert</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="text-blue-100 mt-2">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
