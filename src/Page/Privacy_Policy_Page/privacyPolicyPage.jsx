import React, { useState } from "react";

const PrivacyPolicyTabs = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "content", label: "Content Policy" },
    { id: "terms", label: "Terms and Conditions" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "privacy":
        return (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <p className="text-gray-700">
                Welcome to Seven Unique, operated by Seven Unique Tech Solution
                Pvt. Ltd. ("we," "us," or "our"). We are committed to protecting
                your privacy and ensuring that your personal data is handled in
                a safe and responsible manner. This Privacy Policy outlines how
                we collect, use, disclose, and safeguard your information when
                you use our mobile application and website (collectively, the
                "Platform").
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="font-bold">
                <span className="text-orange-600">1.</span> Information We
                Collect
              </h1>
              <div className="space-y-4">
                <p>
                  We collect information to provide better services to all our
                  users. The types of information we collect include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-gray-800">
                      Personal Information:
                    </strong>{" "}
                    When you create an account, we collect your name, email
                    address, phone number, and delivery address.
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Sensitive Personal Data or Information (SPDI):
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>
                          ▸ Payment details (processed through secure
                          third-party gateways)
                        </li>
                        <li>▸ Login credentials (stored in encrypted form)</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Technical and Usage Data:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ To process and deliver your orders</li>
                        <li>
                          ▸ To verify your identity and manage your account
                        </li>
                        <li>
                          ▸ To provide customer support and respond to your
                          queries
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      How We Use Your Information:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ To process and deliver your orders</li>
                        <li>
                          ▸ To verify your identity and manage your account
                        </li>
                        <li>
                          ▸ To provide customer support and respond to your
                          queries
                        </li>
                        <li>
                          ▸ To send order updates, promotions, and relevant
                          communication
                        </li>
                        <li>
                          ▸ To analyze usage and improve Platform functionality
                        </li>
                        <li>▸ To comply with legal obligations</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Cookies and Tracking Technologies:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ Maintain session information</li>
                        <li>▸ Personalize your experience</li>
                        <li>
                          ▸ Collect analytical data to improve service You may
                          disable cookies through your browser settings, but
                          some features may not function properly.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Sharing of Your Information:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ Delivery personnel for order fulfillment</li>
                        <li>▸ Merchant partners for order preparation</li>
                        <li>
                          ▸ Third-party service providers for payment,
                          analytics, and communication
                        </li>
                        <li>▸ Legal authorities, when required under law</li>
                      </ul>
                    </div>
                    <p>
                      All partners are contractually obligated to maintain the
                      confidentiality and security of your data.
                    </p>
                  </li>
                  <li>
                    <strong className="text-gray-800">Data Security:</strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ SSL encryption</li>
                        <li>▸ Access controls</li>
                        <li>
                          ▸ Encrypted data storage However, no electronic
                          transmission or storage is completely secure. We
                          encourage you to use strong passwords and keep them
                          confidential.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800"> Data Retention:</strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ You maintain an account with us</li>
                        <li>
                          ▸ Necessary for processing orders or complying with
                          legal requirements Upon account deactivation, we
                          securely delete or anonymize your data, unless
                          retention is required by law.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800"> Your Rights:</strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>▸ Access the personal data we hold about you</li>
                        <li>▸ Request correction or deletion of your data</li>
                        <li>▸ Withdraw consent or restrict processing</li>
                        <li>
                          ▸ Opt-out of non-essential communications You can
                          exercise these rights through your account settings or
                          by contacting us directly.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      {" "}
                      Children’s Privacy:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>
                          ▸ Our services are intended for users above 18 years
                          of age. We do not knowingly collect data from children
                          under 18. If we discover such data has been collected,
                          we will delete it immediately.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      {" "}
                      Changes to this Policy:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>
                          ▸ We may update this Privacy Policy from time to time.
                          We will notify you of significant changes by posting
                          the updated policy on the Platform with a revised
                          effective date.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      {" "}
                      Grievance Redressal:
                    </strong>{" "}
                    <div className="ml-3 list-none">
                      <ul>
                        <li>
                          In compliance with the Information Technology Act,
                          2000 and its rules, the Grievance Officer for the
                          Platform is:
                          <br />
                          Grievance Officer: Vimal Verma <br />
                          Email: info@7unique.in
                          <br />
                          Phone: +91 78780 53816
                          <br />
                          Address: Plot No 97, Dakshinpuri - I, Shrikishan,
                          Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017
                          <br />
                          We aim to respond to all grievances within 15 working
                          days
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong className="text-gray-800"> Contact Us:</strong> For
                    any questions or concerns about this Privacy Policy, you can
                    contact us at
                    <div className="ml-3 list-none">
                      <ul>
                        <li>
                          Seven Unique Tech Solution Pvt. Ltd.
                          <br />
                          Email: info@7unique.in
                          <br />
                          Phone: +91 78780 53816
                          <br />
                          Address: Plot No 97, Dakshinpuri - I, Shrikishan,
                          Sanganer, Jagatpura, Jaipur, Rajasthan, India, 302017
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "content":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Content Policy</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                Our platform maintains strict guidelines regarding acceptable
                content. By using our services, you agree to comply with these
                standards.
              </p>
              <h3 className="font-bold text-lg mb-2">Prohibited Content:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal or unlawful material</li>
                <li>Copyright-infringing content</li>
                <li>Hate speech or discriminatory language</li>
                <li>Explicit adult content</li>
                <li>Misinformation or false claims</li>
              </ul>
              <h3 className="font-bold text-lg mt-4 mb-2">
                Content Moderation:
              </h3>
              <p className="text-gray-700">
                We reserve the right to remove any content that violates our
                policies without prior notice. Repeated violations may result in
                account suspension.
              </p>
            </div>
          </div>
        );
      case "terms":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing or using our services, you agree to be bound by
                these terms. If you do not agree, you may not use our platform.
              </p>

              <h3 className="font-bold text-lg mb-2">
                2. User Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate account information</li>
                <li>Maintain the confidentiality of your credentials</li>
                <li>Use the service only for lawful purposes</li>
              </ul>

              <h3 className="font-bold text-lg mb-2">
                3. Service Modifications
              </h3>
              <p className="text-gray-700">
                We may modify or discontinue any aspect of the service at any
                time without prior notice. We are not liable for any
                modification, suspension, or discontinuance of the service.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {tabs.find((tab) => tab.id === activeTab)?.label}
          </h1>
          <p className="text-gray-600">Effective Date: May 20, 2025</p>
        </div>

        <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                activeTab === tab.id
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderTabContent()}

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            By using our services, you acknowledge that you have read and
            understood this {tabs.find((tab) => tab.id === activeTab)?.label}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyTabs;
