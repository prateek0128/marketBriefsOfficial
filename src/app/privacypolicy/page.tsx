import React from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  AlertTriangle,
  Mail,
  Calendar,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 text-lg max-w-3xl">
            Your privacy matters to us. This policy explains how Maheshwari
            Innovative IT Services LLP collects, uses, and protects your
            personal information.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-blue-100">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: March 13, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Introduction
              </h2>
              <p className="text-slate-700 leading-relaxed">
                This Privacy Policy describes how{" "}
                <span className="font-semibold text-slate-900">
                  Maheshwari Innovative IT Services LLP
                </span>{" "}
                collects, uses, shares, protects, and processes your personal
                data through our website and related services. We comply with
                applicable data protection laws, including the General Data
                Protection Regulation (GDPR) and the Information Technology Act,
                2000 (India).
              </p>
            </div>
          </div>
        </section>

        {/* Collection of Information */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Collection of Information
            </h2>
          </div>

          <div className="space-y-6 ml-16">
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="font-semibold text-slate-900 mb-2">
                Personal Information
              </h3>
              <p className="text-slate-700">
                Name, date of birth, address, telephone/mobile number, email ID,
                and identity/address proofs.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-2">
              <h3 className="font-semibold text-slate-900 mb-2">
                Sensitive Data
              </h3>
              <p className="text-slate-700">
                Payment instrument details or biometric information (only with
                explicit user consent).
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-semibold text-slate-900 mb-2">Usage Data</h3>
              <p className="text-slate-700">
                Behavioral, transactional, and preference data tracked during
                platform usage.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 mt-4">
              <p className="text-slate-700 text-sm">
                We collect data directly from users, automatically via
                cookies/device logs, and through third parties.
                <span className="font-semibold text-slate-900">
                  {" "}
                  Users under 18 are not permitted to use our services.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Usage of Information */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <UserCheck className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Usage of Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ml-16">
            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg border border-purple-100">
              <p className="text-slate-700">
                Provide services requested by users
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg border border-purple-100">
              <p className="text-slate-700">
                Improve user experience and resolve disputes
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg border border-purple-100">
              <p className="text-slate-700">
                Conduct marketing research and prevent fraud
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg border border-purple-100">
              <p className="text-slate-700">
                Enhance security and maintain platform integrity
              </p>
            </div>
          </div>
        </section>

        {/* Sharing of Information */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <UserCheck className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Sharing of Information
            </h2>
          </div>

          <div className="space-y-4 ml-16">
            <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-orange-400">
              <h3 className="font-semibold text-slate-900 mb-2">
                With Group Entities & Business Partners
              </h3>
              <p className="text-slate-700 text-sm">
                For platform operations, service improvements, and analytics.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-orange-400">
              <h3 className="font-semibold text-slate-900 mb-2">
                With Third-Party Service Providers
              </h3>
              <p className="text-slate-700 text-sm">
                For logistics, payment processing, security, analytics, and
                fraud detection.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border-l-4 border-orange-400">
              <h3 className="font-semibold text-slate-900 mb-2">
                With Law Enforcement Agencies
              </h3>
              <p className="text-slate-700 text-sm">
                When required by law or to protect users' rights and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Security Precautions */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <Lock className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Security Precautions
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We implement industry-standard security measures, including
                encryption (AES, TLS), secure access protocols (MFA, RBAC), and
                regular security audits. However, users are responsible for
                protecting their account credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Data Deletion and Retention */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Data Deletion and Retention
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Users can delete their account via platform settings. Certain
                data may be retained as required by law, for fraud prevention,
                or for legitimate operational purposes. Anonymized data may be
                used for analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ml-16">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="text-slate-700">
                ✓ Access, update, or rectify your personal data
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="text-slate-700">
                ✓ Withdraw consent for data usage
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="text-slate-700">✓ Request data deletion</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <p className="text-slate-700">
                ✓ Report misuse or privacy concerns
              </p>
            </div>
          </div>
        </section>

        {/* CSAE Protection */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-red-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Safety Standards & Protection Against CSAE
            </h2>
          </div>

          <div className="space-y-4 ml-16">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-900 mb-2">
                ⚠ Zero Tolerance Policy
              </h3>
              <p className="text-slate-700 text-sm">
                Strict prohibition of any content, communication, or behavior
                related to child exploitation or abuse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Proactive Monitoring
                </h4>
                <p className="text-slate-600 text-sm">
                  AI tools + human moderation
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  User Reporting
                </h4>
                <p className="text-slate-600 text-sm">
                  Immediate & confidential action
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Authority Collaboration
                </h4>
                <p className="text-slate-600 text-sm">
                  Full cooperation with law enforcement
                </p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Strict Enforcement
                </h4>
                <p className="text-slate-600 text-sm">
                  Permanent bans & legal action
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consent */}
        <section className="mb-12 bg-slate-50 rounded-xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Consent</h2>
          <p className="text-slate-700 leading-relaxed">
            By using our platform, you consent to the collection, use, and
            sharing of your data as described in this Privacy Policy.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-12 bg-slate-50 rounded-xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Changes to the Privacy Policy
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy periodically. Users are encouraged
            to review this policy regularly for any changes.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Contact & Support</h2>
              <p className="text-blue-100 leading-relaxed">
                If you come across any content or activity that violates our
                policies, please contact us immediately through our official
                communication channels.
              </p>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
