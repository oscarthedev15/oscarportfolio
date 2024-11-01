"use client"; // Add this line at the top
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono p-6">
      <Head>
        <link rel="icon" href="/images/wordart.png" />
        <title>Resume - Technical Vibe</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Jesse Jacob</h1>
          <p className="text-lg md:text-xl mt-2">AI and Web3 Developer</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">
                Senior Blockchain and AI Developer
              </h3>
              <p className="text-sm text-gray-400">Ernst & Young - New York</p>
              <p className="text-sm text-gray-400">Feb 2023 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>
                  Developed enterprise blockchain applications in ESG and
                  financial sectors.
                </li>
                <li>
                  Authored EVM smart contracts and built full-stack applications
                  leveraging blockchain technology.
                </li>
                <li>
                  Utilized generative AI to create innovative applications for
                  major clients.
                </li>
                <li>
                  Developed large language models with integrated agents and
                  tools.
                </li>
                <li>
                  Led team initiatives and mentored junior developers to enhance
                  team capabilities.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Junior Software Engineer</h3>
              <p className="text-sm text-gray-400">
                Publicis Sapient - New York
              </p>
              <p className="text-sm text-gray-400">Sep 2021 - Sep 2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Responsibility or achievement 1</li>
                <li>Responsibility or achievement 2</li>
                <li>Responsibility or achievement 3</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            Technical Project Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Project or Skill</h3>
              <p className="text-sm text-gray-400">Description or details</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Detail or achievement 1</li>
                <li>Detail or achievement 2</li>
                <li>Detail or achievement 3</li>
              </ul>
            </div>
            {/* Add more technical experiences as needed */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-gray-700 pb-2 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Degree</h3>
              <p className="text-sm text-gray-400">
                Institution Name - Location
              </p>
              <p className="text-sm text-gray-400">Month Year - Month Year</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Relevant coursework or achievement 1</li>
                <li>Relevant coursework or achievement 2</li>
              </ul>
            </div>
            {/* Add more education details as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}
