"use client";

import { useState } from "react";
import Image from "next/image";
import type { Client } from "@/data/clients";

interface ClientAppPageProps {
  client: Client;
}

export default function ClientAppPage({ client }: ClientAppPageProps) {
  const [showQR, setShowQR] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={200}
            height={100}
            className="object-contain max-h-24"
            priority
          />
        </div>

        {/* Call to action */}
        <p className="text-center text-gray-700 mb-6 text-lg">
          Ask your customer for a review
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          {/* Text/SMS Button */}
          <a
            href={client.smsLink}
            className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Text
          </a>

          {/* Email Button */}
          <a
            href={client.emailLink}
            className="flex items-center justify-center gap-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>

          {/* QR Code Button */}
          <button
            onClick={() => setShowQR(!showQR)}
            className="flex items-center justify-center gap-3 w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            QR Code
          </button>
        </div>

        {/* QR Code Display */}
        {showQR && (
          <div className="mt-6 flex justify-center">
            <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
              <Image
                src={client.qrCode}
                alt={`QR Code for ${client.name}`}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
