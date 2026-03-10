import React from "react";
import { Download, Eye } from "lucide-react";

export default function Resume() {

  const pdf = "/somresume.pdf";
  const image = "/resume.png";

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 dark:from-gray-900 to-white dark:to-gray-800">

      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Resume
        </h2>

        {/* Resume Image Preview */}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden mb-8">

          <img
            src={image}
            alt="Resume Preview"
            className="w-full h-auto object-contain"
          />

          {/* Buttons */}

          <div className="bg-gray-900 p-6 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href={pdf}
              download
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              <Download size={20} />
              Download Resume
            </a>

            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold"
            >
              <Eye size={20} />
              View Full Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}