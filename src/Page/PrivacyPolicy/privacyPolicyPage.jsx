import {
  CheckCircle,
  Shield,
  FileText,
  Mail,
  Phone,
  Clock,
  Users,
  Lock,
  AlertCircle,
  Eye,
  Database,
  Cookie,
  Share2,
  Globe,
  UserCheck,
} from "lucide-react"
import React from "react";

const PrivacyPolicyPage = () => {
  return (
  <div className="">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#fff2e2] py-10 md:py-24">
        <div className="container py-12 px-20 ms-26">
          <div className="mx-auto  text-center text-white">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#ab6545] p-4 backdrop-blur-sm">
                <Shield className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#ab6545] mb-4">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-[#000]">
              ecoFood - Protecting your personal data while delivering healthy, organic meals
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Lock className="mr-2 h-4 w-4 ms-10 mb-2" />
                Data Protection
              </div>
              <div variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <CheckCircle className="mr-2 h-4 w-4 ms-10 mb-2" />
                DPDP Act 2023
              </div>
              <div variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Eye className="mr-2 h-4 w-4 ms-7 mb-2" />
                Transparency
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-6 py-12">
        <div className="mx-auto  space-y-8">
          {/* Company Info div */}
          <div className="border-0 bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-2xl">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold">ecoFood - A brand of SevenUnique Tech Solutions Pvt. Ltd.</h2>
              <p className="mt-2 text-green-100">Effective Date: 27-06-2025</p>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:privacy@ecofood.in" className="hover:underline">
                    privacy@ecofood.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>0141-4511098</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Our Commitment to Your Privacy
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                ecoFood respects your privacy and is committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, share, store, and protect the information you provide when using our
                mobile application and website, which offer healthy, organic, and eco-friendly meal delivery services.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                By accessing or using our services, you agree to this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                Information We Collect
              </div>
            </div>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Full Name
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Email Address
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Mobile Number
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Delivery Address and Location (GPS)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Dietary Preferences (vegan, gluten-free)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Allergy Information
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Payment Details (UPI, card info)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Device ID and IP Address
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Non-Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      Browser type, device type, OS
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      Pages visited and time spent
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      Actions on website or app
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      Cookies and tracking pixel data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Collect Information */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-orange-50 to-red-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                How We Collect Your Information
              </div>
            </div>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-orange-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-orange-100 p-3">
                        <Users className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 font-semibold">Directly From You</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Account registration</li>
                      <li>Order placement</li>
                      <li>Profile updates</li>
                      <li>Customer support</li>
                    </ul>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-orange-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-orange-100 p-3">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 font-semibold">Automatically</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Cookies & web beacons</li>
                      <li>Device permissions</li>
                      <li>GPS location</li>
                      <li>App usage data</li>
                    </ul>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-orange-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-orange-100 p-3">
                        <Share2 className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="mb-3 font-semibold">From Third Parties</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Social media logins</li>
                      <li>Analytics providers</li>
                      <li>Payment gateways</li>
                      <li>Ad platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purpose of Data Collection */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-teal-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                Purpose of Data Collection
              </div>
            </div>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Order Fulfillment", desc: "Process, confirm, and deliver your orders", icon: FileText },
                  {
                    title: "Personalized Experience",
                    desc: "Recommend meals based on preferences and history",
                    icon: Users,
                  },
                  { title: "Customer Support", desc: "Assist you effectively when you reach out", icon: Phone },
                  {
                    title: "Marketing & Communication",
                    desc: "Send offers, updates, and promotional content",
                    icon: Mail,
                  },
                  {
                    title: "Analytics & Improvements",
                    desc: "Analyze usage trends and improve services",
                    icon: Database,
                  },
                  { title: "Legal Compliance", desc: "Fulfill legal and regulatory requirements", icon: Shield },
                ].map((purpose, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-green-50">
                    <div className="mb-3 flex justify-center">
                      <div className="rounded-full bg-green-100 p-2">
                        <purpose.icon className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-green-800">{purpose.title}</h3>
                    <p className="text-sm text-green-600">{purpose.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Sharing Policy */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-red-100 p-2">
                  <Share2 className="h-6 w-6 text-red-600" />
                </div>
                Data Sharing Policy
              </div>
            </div>
            <div className="p-8">
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-lg font-semibold text-red-800">We do NOT sell your data.</p>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                However, we may share it with trusted third parties:
              </p>
              <div className="overflow-hidden rounded-lg border">
                <table>
                  <div>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <th className="font-semibold">Third Party</th>
                      <th className="font-semibold">Purpose</th>
                      <th className="font-semibold">Protection</th>
                    </tr>
                  </div>
                  <tbody>
                    {[
                      {
                        party: "Delivery Partners",
                        purpose: "Efficient order delivery",
                        protection: "Confidentiality agreements",
                      },
                      {
                        party: "Payment Gateways",
                        purpose: "Secure payment processing",
                        protection: "PCI-DSS compliance",
                      },
                      {
                        party: "Analytics Providers",
                        purpose: "Usage tracking and improvement",
                        protection: "Data processing agreements",
                      },
                      {
                        party: "Marketing Partners",
                        purpose: "Relevant ads and offers",
                        protection: "Explicit consent required",
                      },
                      {
                        party: "Government Authorities",
                        purpose: "Legal compliance",
                        protection: "As required by law",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50/50">
                        <td className="font-medium">{item.party}</td>
                        <td>{item.purpose}</td>
                        <td>
                          <div variant="outline" className="text-green-700 border-green-300">
                            {item.protection}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Data Protection & Security */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                Data Protection & Security
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We implement strict technical and organizational security measures to safeguard your data:
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "SSL Encryption", desc: "HTTPS and secure data transmission", icon: Lock },
                  { title: "Secure Storage", desc: "Cloud storage with limited access", icon: Database },
                  { title: "Access Control", desc: "Role-based data access control", icon: UserCheck },
                  { title: "Regular Audits", desc: "Security audits and backups", icon: CheckCircle },
                  { title: "PCI-DSS Compliance", desc: "Secure payment processing", icon: Shield },
                  { title: "Data Retention", desc: "Data kept only as long as necessary", icon: Clock },
                ].map((security, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-blue-50">
                    <div className="mb-3 flex justify-center">
                      <div className="rounded-full bg-blue-100 p-2">
                        <security.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-blue-800">{security.title}</h3>
                    <p className="text-sm text-blue-600">{security.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                User Rights (Under Indian Law)

              </div>
            </div>
            <p className="text-muted p-5">As per the Digital Personal Data Protection Act, 2023, you have the right to:</p>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { right: "Access", desc: "View your personal data", icon: Eye },
                  { right: "Correct", desc: "Fix inaccurate information", icon: FileText },
                  { right: "Delete", desc: "Remove your data (with exceptions)", icon: AlertCircle },
                  { right: "Withdraw Consent", desc: "Stop marketing communications", icon: Users },
                  { right: "Data Portability", desc: "Transfer data to another provider", icon: Share2 },
                  { right: "File Complaint", desc: "Contact our Grievance Officer", icon: Phone },
                ].map((right, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <right.icon className="h-4 w-4 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-purple-800">{right.right}</h3>
                    </div>
                    <p className="text-sm text-purple-600">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-yellow-100 p-2">
                  <Cookie className="h-6 w-6 text-yellow-600" />
                </div>
                Use of Cookies
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                ecoFood uses cookies and similar technologies to:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Remember Preferences</h3>
                  <p className="text-sm text-yellow-600">Login and user preferences</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Personalize Experience</h3>
                  <p className="text-sm text-yellow-600">Browsing and meal recommendations</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Measure Performance</h3>
                  <p className="text-sm text-yellow-600">Website analytics and error tracking</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">You can manage cookie settings in your browser at any time.</p>
            </div>
          </div>

           <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-yellow-100 p-2">
                  <Cookie className="h-6 w-6 text-yellow-600" />
                </div>
                 Updates to This Policy
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                This Privacy Policy may be updated periodically. When we make changes, we will notify you via app alerts or email. Your continued use of our services after updates constitutes acceptance of the revised policy.
              </p>


            </div>
          </div>

          {/* Contact & Grievance */}
          <div className="border-0 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-2xl py-3 px-3">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <Phone className="h-8 w-8" />
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold">Contact & Grievance Redressal</h2>
                <p className="mb-6 text-green-100">
                  If you have questions, complaints, or wish to exercise your rights, please contact:
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Grievance Officer</h3>
                  <p className="mb-2">Mr. Dipak</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:support@7unique.in"
                      className="flex items-center justify-center gap-2 text-green-100 hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                      support@7unique.in / info@7unique.in
                    </a>
                    <a
                      href="tel:01414511098"
                      className="flex items-center justify-center gap-2 text-green-100 hover:text-white"
                    >
                      <Phone className="h-4 w-4" />
                      0141-4511098
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold mb-3">Office Locations</h3>
                  <div className="text-sm text-green-100 space-y-2">
                    <div>
                      <p className="font-medium">Jaipur (Registered)</p>
                      <p>Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan - 302017</p>
                    </div>
                    <div>
                      <p className="font-medium">Mumbai (Corporate)</p>
                      <p>
                        Office No. 101/2, Vakratunda Corporate Park, Off Aarey Road, Goregaon (East), Mumbai - 400063
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-indigo-100 p-2">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                Governing Law and Jurisdiction
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                This Privacy Policy is governed by the laws of India, particularly the{" "}
                <strong>Digital Personal Data Protection Act, 2023</strong>. Any disputes shall be subject to the
                exclusive jurisdiction of courts located in Jaipur, Rajasthan.
              </p>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <p className="text-indigo-800 font-medium">
                  Thank you for choosing ecoFood. We're dedicated to delivering healthy meals while protecting your
                  personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;