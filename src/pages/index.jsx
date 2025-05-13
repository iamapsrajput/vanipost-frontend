import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          VaniPost
        </h1>
        <p className="text-lg md:text-xl mb-6">
          AI-powered content automation platform that helps creators and professionals
          stay active on social media — without manually crafting posts.
        </p>
        <button className="text-lg px-6 py-3 rounded-2xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Join the Waitlist
        </button>
      </div>

      <div className="mt-20 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Why VaniPost?</h2>
        <ul className="list-disc text-left text-lg pl-6 space-y-2">
          <li>🚀 Fetches trending news based on your interests</li>
          <li>🤖 Uses AI to generate context-aware tweets and posts</li>
          <li>📅 Schedules content automatically or for manual review</li>
          <li>📊 Builds your personal brand on autopilot</li>
        </ul>
      </div>

      <div className="mt-16 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-2">How VaniPost Works</h2>
        <ul className="list-disc text-left text-lg pl-6 space-y-2">
          <li>1️⃣ Fetches trending news & insights</li>
          <li>2️⃣ Uses AI to craft intelligent social posts</li>
          <li>3️⃣ Schedules and publishes to X, Instagram (and more)</li>
          <li>4️⃣ Personalized for each user’s audience and tone</li>
        </ul>
      </div>

      <div className="mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-2">About the Team</h2>
        <p className="text-lg text-gray-600 mb-4">
          VaniPost is founded by a team of engineers and data scientists passionate about automating content creation. We're building an AI-first platform to help creators stay relevant without spending hours online.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-lg font-medium">Ajay Rajput</p>
            <p className="text-gray-600">Founder & AI/Cloud Architect</p>
            <a href="https://www.linkedin.com/in/iamapsrajput" className="text-blue-500 text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <p className="text-lg font-medium">Vikrant Rajput</p>
            <p className="text-gray-600">Data Scientist — News Intelligence and Language Modeling</p>
            <a href="https://www.linkedin.com/in/iamvikrantrajput" className="text-blue-500 text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <p className="text-lg font-medium">Siddharth Singh</p>
            <p className="text-gray-600">Full Stack Developer — UI/UX and Integration</p>
            <a href="https://www.linkedin.com/in/imsiddharthsingh" className="text-blue-500 text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VaniPost. All rights reserved.
      </footer>
    </main>
  );
}
