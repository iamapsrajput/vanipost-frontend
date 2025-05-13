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

      <footer className="mt-24 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VaniPost. All rights reserved.
      </footer>
    </main>
  );
}
