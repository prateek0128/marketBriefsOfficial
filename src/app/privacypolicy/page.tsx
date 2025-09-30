import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="space-y-4 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            This Privacy Policy describes how{" "}
            <span className="font-semibold">
              Maheshwari Innovative IT Services LLP
            </span>{" "}
            collects, uses, shares, protects, and processes your personal data
            through our website and related services. We comply with applicable
            data protection laws, including the General Data Protection
            Regulation (GDPR) and the Information Technology Act, 2000 (India).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Collection of Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, date of birth,
              address, telephone/mobile number, email ID, and identity/address
              proofs.
            </li>
            <li>
              <strong>Sensitive Data:</strong> Payment instrument details or
              biometric information (only with explicit user consent).
            </li>
            <li>
              <strong>Usage Data:</strong> Behavioral, transactional, and
              preference data tracked during platform usage.
            </li>
          </ul>
          <p>
            We collect data directly from users, automatically via
            cookies/device logs, and through third parties. Users under 18 are
            not permitted to use our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Usage of Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide services requested by users.</li>
            <li>Improve user experience and resolve disputes.</li>
            <li>
              Conduct marketing research, prevent fraud, and ensure legal
              compliance.
            </li>
            <li>Enhance security and maintain platform integrity.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Sharing of Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>With Group Entities & Business Partners:</strong> For
              platform operations, service improvements, and analytics.
            </li>
            <li>
              <strong>With Third-Party Service Providers:</strong> For
              logistics, payment processing, security, analytics, and fraud
              detection.
            </li>
            <li>
              <strong>With Law Enforcement Agencies:</strong> When required by
              law or to protect users&apos; rights and safety.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Security Precautions</h2>
          <p>
            We implement industry-standard security measures, including
            encryption (AES, TLS), secure access protocols (MFA, RBAC), and
            regular security audits. However, users are responsible for
            protecting their account credentials.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Data Deletion and Retention
          </h2>
          <p>
            Users can delete their account via platform settings. Certain data
            may be retained as required by law, for fraud prevention, or for
            legitimate operational purposes. Anonymized data may be used for
            analytics.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access, update, or rectify your personal data.</li>
            <li>
              Withdraw consent for data usage (withdrawal may impact services).
            </li>
            <li>
              Request data deletion (subject to legal and operational
              constraints).
            </li>
            <li>Report misuse or privacy concerns.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Consent</h2>
          <p>
            By using our platform, you consent to the collection, use, and
            sharing of your data as described in this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Changes to the Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Users are encouraged
            to review this policy regularly for any changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Safety Standards & Protection Against CSAE
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Zero Tolerance Policy:</strong> Strict prohibition of any
              content, communication, or behavior related to child exploitation
              or abuse.
            </li>
            <li>
              <strong>Proactive Content Monitoring:</strong> AI tools + human
              moderation to detect and remove harmful content.
            </li>
            <li>
              <strong>User Reporting:</strong> Users can report violations.
              Compliance team acts immediately and confidentially.
            </li>
            <li>
              <strong>Collaboration with Authorities:</strong> Full cooperation
              with law enforcement and child protection agencies.
            </li>
            <li>
              <strong>Strict Enforcement:</strong> Violators face permanent bans
              and legal action.
            </li>
            <li>
              <strong>Compliance:</strong> Aligns with Google Play CSAE policies
              and international laws.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact & Support</h2>
          <p>
            If you come across any content or activity that violates our
            policies, please contact us immediately through our official
            communication channels.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Last Updated: <span className="font-medium">March 13, 2025</span>
        </p>
      </section>

      <Link href="/" className="text-blue-600 hover:underline block mt-8">
        ← Back to Home
      </Link>
    </div>
  );
}
