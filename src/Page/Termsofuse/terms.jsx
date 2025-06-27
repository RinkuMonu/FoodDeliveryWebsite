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

const TermsOfUse = () => {
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
              Terms Of Use
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
              <h2 className="text-2xl font-bold">A brand of Sevenunique Tech Solutions Pvt. Ltd.

</h2>
              <p className="mt-2 text-green-100">Effective Date:27-06-2025
Welcome to ecoFood, a platform owned and operated by Sevenunique Tech Solutions Pvt. Ltd., offering healthy, eco-friendly, and organic meal delivery services via our mobile app and website. These Terms of Use ("Terms") govern your access to and use of the ecoFood platform and services.
Please read these Terms carefully before using our services. By accessing, browsing, or registering on ecoFood, you agree to be legally bound by these Terms. If you do not agree to these Terms, please do not use our platform.</p>
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
                Definitions
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
               "User", "You", "Your" refers to any person who accesses or uses the Services.
"Company", "We", "Us", "Our" refers to Sevenunique Tech Solutions Pvt. Ltd.
"Platform" includes our mobile application and website (www.ecofood.in).
"Services" refer to the food delivery, subscriptions, and other related services provided by ecoFood.
"Content" means all text, images, graphics, and other material available on the platform.

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
                Eligibility
              </div>
            </div>
            <p className="text-muted p-4">To use the platform, you must:
</p>
            <div className="p-3">
              <div className="grid gap-6 md:grid-cols-2">
                <div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    Be at least 18 years of age
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Have the legal capacity to enter into a binding agreement
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Agree to comply with these Terms
                    </li>

                  </ul>
                  <p className="text-muted p-4">By using our services, you represent and warrant that you meet all the above requirements.</p>
                </div>
                <div>

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
                Account Registration
              </div>
            </div>
             <p className="text-muted p-4">To access certain features, you must register for an account. When you do:</p>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-orange-300 hover:shadow-md">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-orange-100 p-3">
                        <Users className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>


                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Provide accurate and current information</li>



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

                    <ul className="text-sm text-muted-foreground space-y-1">
                     <li>Maintain the confidentiality of your password</li>

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

                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Notify us immediately of any unauthorized access</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
             <p className="text-muted p-4">We are not responsible for losses due to compromised passwords or account misuse.</p>
          </div>

          {/* Purpose of Data Collection */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-teal-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
               Services Offered
              </div>
            </div>
            <p className="text-muted p-3">We provide:</p>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "A curated menu of eco-friendly and organic meals",  icon: FileText },
                  {
                    title: "Meal subscription plans",
                    icon: Users,
                  },
                  { title: "Scheduled and on-demand delivery services",  icon: Phone },
                  {
                    title: "Order tracking and customer support",
                    icon: Mail,
                  },

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
            <p className="p-4">Services are subject to availability and may vary by location.</p>
          </div>

          {/* Data Sharing Policy */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-red-100 p-2">
                  <Share2 className="h-6 w-6 text-red-600" />
                </div>
                 User Responsibilities
              </div>
            </div>
            <div className="p-8">
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-lg font-semibold text-red-800">You agree to:</p>
              </div>

<ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                  Use the platform in compliance with applicable laws

                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Refrain from reselling, copying, or exploiting our content
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    Not engage in abusive, fraudulent, or disruptive behavior
                    </li>
                     <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                  Respect our staff, delivery partners, and community
                    </li>

                  </ul>
 </div>
 <p className="text-muted p-3">We reserve the right to suspend or terminate your account for violating any of the above.</p>
          </div>

          {/* Data Protection & Security */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
               Orders, Pricing, and Payment
              </div>
            </div>
            <div className="p-8">

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Prices listed are inclusive of applicable taxes unless stated otherwise", icon: Lock },
                  { title: "Orders can be paid via UPI, debit/credit cards, net banking, wallets, or cash on delivery (if available", icon: Database },
                  { title: "We reserve the right to modify menu items, prices, or availability without prior notice",  icon: UserCheck },
                  { title: "Promotional codes are subject to specific terms and conditions",  icon: CheckCircle },

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
               Subscription Plans

              </div>
            </div>
            <p className="text-muted p-5">As per the Digital Personal Data Protection Act, 2023, you have the right to:</p>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { right: "Subscription plans are prepaid and customizable",  icon: Eye },
                  { right: "You can manage delivery schedules through the app",  icon: FileText },
                  { right: "Cancellations and refunds follow our [Cancellation & Refund Policy]",  icon: AlertCircle },
                  { right: "Plans are non-transferable", icon: Users },

                ].map((right, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <right.icon className="h-4 w-4 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-purple-800">{right.right}</h3>
                    </div>
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
                Delivery Policy
              </div>
            </div>
            <div className="p-8">

              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Estimated delivery times are displayed at checkout</h3>

                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Delays may occur due to traffic, weather, or operational issues</h3>

                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">You must be available to receive the order; missed deliveries are non-refundable</h3>

                </div>
              </div>
            </div>
          </div>

           <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Cookie className="h-6 w-6 text-purple-600" />
                </div>
               Content Ownership
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
               All content on the platform is owned or licensed by Sevenunique Tech Solutions Pvt. Ltd. You may not reproduce, distribute, or create derivative works without our permission.
              </p>


            </div>
          </div>




 <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-orange-50 to-orange-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Cookie className="h-6 w-6 text-orange-600" />
                </div>
             User-Generated Content
              </div>
            </div>
            <div className="p-8">
              <p className="mb-6 text-orange-300">
                 If you submit reviews, suggestions, or any other content:
                </p>

                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                 You grant us a non-exclusive, royalty-free, perpetual right to use, modify, and display it
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    You warrant that the content does not infringe any third-party rights
                    </li>


                  </ul>

            </div>
            <p className="p-3">We reserve the right to moderate or remove content at our discretion.</p>
          </div>






          {/* Governing Law */}
          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-indigo-100 p-2">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
               Intellectual Property
              </div>
            </div>
            <div className="p-8">
               <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                 All trademarks, logos, and brand names are owned by or licensed to ecoFood
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                   Unauthorized use may result in legal action
                    </li>


                  </ul>
              </div>
            </div>

  <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
               Privacy
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
               Your use of our services is also governed by our [Privacy Policy]. We are committed to protecting your personal information in accordance with Indian data protection laws. </p>

            </div>
          </div>



          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                Prohibited Activities
              </div>
            </div>
            <p className="text-muted p-4">You agree not to:
</p>
            <div className="p-3">
              <div className="grid gap-6 md:grid-cols-2">
                <div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                 Use the platform for unlawful or harmful purposes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                     Introduce malware, viruses, or harmful code
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                     Attempt to reverse-engineer or hack the platform
                    </li>
                     <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    Impersonate others or misrepresent your identity
                    </li>

                  </ul>
                  <p className="text-muted p-4">Violations may result in legal action and termination of services.</p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>





 <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
               Disclaimers

              </div>
            </div>

            <div className="p-3">
              <div className="grid gap-6 md:grid-cols-2">
                <div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
             We strive for accuracy, but errors may occur in product descriptions, pricing, and availability
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                   We do not guarantee uninterrupted or error-free operation of the platform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    Meals may contain allergens; always review product details before consumption
                    </li>


                  </ul>

                </div>
                <div>

                </div>
              </div>
            </div>
          </div>





 <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
               Limitation of Liability
              </div>
            </div>
            <p className="text-muted p-4">To the maximum extent permitted by law, Sevenunique Tech Solutions Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the platform.
</p>
</div>






 <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
               Indemnification
              </div>
            </div>
            <p className="text-muted p-4">You agree to indemnify and hold harmless Sevenunique Tech Solutions Pvt. Ltd., its officers, employees, and partners from any claims, liabilities, damages, or costs arising from your use of the platform or breach of these Terms.
</p>

          </div>






 <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-red-100 p-2">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
             Termination
              </div>
            </div>
            <p className="text-muted p-4">We may suspend or terminate your account at any time for violations of these Terms. You may also discontinue use of our services at any time.
</p>

          </div>





   <div className="border-0 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-2xl py-3 px-3">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <Phone className="h-8 w-8" />
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold">Grievance Redressal</h2>
                <p className="mb-6 text-green-100">
                For any queries or complaints, please contact:
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Grievance Officer</h3>
                  <p className="mb-2">Mr. Dipak</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:privacy@ecofood.in"
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
                     : 0141-4511098
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold mb-3">Office Locations</h3>
                  <div className="text-sm text-green-100 space-y-2">
                    <div>
                      <p className="font-medium">Registered Office (Jaipur):</p>
                      <p>Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan - 302017</p>
                    </div>
                    <div>
                      <p className="font-medium">Corporate Office (Mumbai):</p>
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
       These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.

              </p>

            </div>
          </div>




     <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
               Changes to These Terms
              </div>
            </div>
            <p className="text-muted p-4">We may update these Terms from time to time. When we do, we will notify you via email, app notifications, or by updating the "Effective Date." Continued use of the platform constitutes acceptance of the revised Terms.<br />
Thank you for using ecoFood. We’re honored to serve you nutritious meals with sustainability in mind.
</p>

          </div>




          </div>
        </div>
      </div>

  );
};
export default TermsOfUse;