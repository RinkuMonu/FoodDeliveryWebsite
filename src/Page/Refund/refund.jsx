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
} from "lucide-react";
import React from "react";

const Refund = () => {
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
              Refund And Cancellation
            </h1>
            <p className="mt-6 text-xl text-[#000]">
              ecoFood Cancellation & Refund Policy
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div
                variant="secondary"
                className="bg-white/20 text-[#000] hover:bg-white/30"
              >
                <Lock className="mr-2 h-4 w-4 ms-10 mb-2" />
                Data Protection
              </div>
              <div
                variant="secondary"
                className="bg-white/20 text-[#000] hover:bg-white/30"
              >
                <CheckCircle className="mr-2 h-4 w-4 ms-10 mb-2" />
                DPDP Act 2023
              </div>
              <div
                variant="secondary"
                className="bg-white/20 text-[#000] hover:bg-white/30"
              >
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
              <h2 className="text-2xl font-bold">
                ecoFood - A brand of SevenUnique Tech Solutions Pvt. Ltd.
              </h2>
              <p>
                At ecoFood, we strive to deliver high-quality, organic, and
                sustainable meals to our customers across India. We understand
                that sometimes, plans may change, and you may need to cancel or
                modify your orders. This Cancellation & Refund Policy outlines
                the terms and conditions under which cancellations and refunds
                are accepted, processed, and issued.
                <br />
                This policy is aligned with Indian laws including the Consumer
                Protection Act, 2019, Information Technology Act, 2000, and
                relevant rules under the Digital Personal Data Protection Act,
                2023.
              </p>
              <p className="mt-2 text-green-100">Effective Date: 27-06-2025</p>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:privacy@ecofood.in"
                    className="hover:underline"
                  >
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
                Introduction
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                ecoFood is committed to customer satisfaction and transparent
                business practices. We ensure that every user has access to
                fair, clear, and lawful cancellation and refund terms. This
                document governs all transactions, whether initiated through our
                mobile app, website, or any other official platform.
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
                Definitions
              </div>
            </div>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Customer/User: Any person who places an order via
                      ecoFood’s platform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Order: Request for food delivery including single meals or
                      subscriptions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Subscription Plan: Pre-paid weekly/monthly meal plans
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      ecoCredits: Promotional or wallet credits used on the
                      platform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Delivery Partner: A third-party or in-house logistics
                      provider for delivering meals
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cut-off Time: The last acceptable time for order
                      modification or cancellation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Force Majeure: Unforeseeable circumstances beyond control
                      (e.g., flood, strike, pandemic)
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
                Order Cancellation by Customer
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
                    <h3 className="mb-3 font-semibold">
                      {" "}
                      One-Time Meal Orders
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        You may cancel your order before it is accepted by the
                        restaurant or kitchen.
                      </li>
                      <li>
                        Cancellation is not allowed once the food is under
                        preparation or dispatched.
                      </li>
                      \
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
                    <h3 className="mb-3 font-semibold">Same-Day Orders</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        If you cancel within 5 minutes of placing the order and
                        before kitchen acceptance, a full refund will be
                        processed.
                      </li>
                      <li>
                        No cancellation or refund will be entertained after the
                        meal has been confirmed for preparation.
                      </li>
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
                    <h3 className="mb-3 font-semibold">
                      Scheduled Orders (For Later Delivery)
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        Must be canceled at least 3 hours prior to scheduled
                        delivery time for a full refund.
                      </li>
                      <li>
                        Cancellations within 3 hours may attract partial or no
                        refund, based on prep stage.
                      </li>
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
                Order Cancellation by ecoFood
              </div>
            </div>
            <p className="p-3">
              ecoFood reserves the right to cancel your order under the
              following circumstances:
            </p>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Unavailability of ingredients or items",
                    icon: FileText,
                  },
                  {
                    title: "Kitchen or logistical constraints",
                    icon: Users,
                  },
                  {
                    title: "Incorrect pricing due to technical error",
                    icon: Phone,
                  },
                  {
                    title: "Suspicious, fraudulent, or bulk misuse behavior",
                    icon: Mail,
                  },
                  {
                    title: "Force majeure events",
                    icon: Database,
                  },
                  { title: "Legal Compliance", icon: Shield },
                ].map((purpose, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-green-50"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="rounded-full bg-green-100 p-2">
                        <purpose.icon className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold text-green-800">
                      {purpose.title}
                    </h3>
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
                Modification of Orders
              </div>
            </div>
            <div className="p-8">
              <div className="overflow-hidden rounded-lg border">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Orders cannot be modified once confirmed.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    For minor changes (e.g., delivery instructions, address
                    edits), contact customer support before dispatch.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subscription users can edit meal preferences before the
                    weekly cycle begins (as per platform guidelines).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-orange-50 to-red-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                Subscription Plan Cancellations
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
                    <h3 className="mb-3 font-semibold">
                      {" "}
                      Monthly/Weekly Meal Plans
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        Can be canceled anytime with refund processed for unused
                        days (after deducting cancellation fee, if applicable).
                      </li>
                      <li>
                        Refunds are calculated based on number of meals already
                        delivered and any used discounts.
                      </li>
                      \
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
                    <h3 className="mb-3 font-semibold">Cancellation Terms</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        For cancellations within 24 hours of plan start: Full
                        refund, minus transaction fees.
                      </li>
                      <li>
                        After plan begins: Prorated refund based on remaining
                        meals.
                      </li>
                      <li>
                        No refund for past days or missed deliveries due to user
                        unavailability.
                      </li>
                    </ul>
                  </div>
                </div>
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
                Refund Eligibility Criteria
              </div>
            </div>
            <p className="text-muted p-5">
              A refund will be applicable under the following conditions:
            </p>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    right:
                      "Order canceled by ecoFood due to operational reasons",
                    icon: Eye,
                  },
                  {
                    right: "Canceled by user within allowed timeframe",
                    icon: FileText,
                  },
                  {
                    right:
                      "Non-delivery or extreme delays (>2 hours beyond delivery slot)",
                    icon: AlertCircle,
                  },
                  {
                    right:
                      "Delivered item is completely incorrect, spoiled, or unfit for consumption (must be reported with photo evidence within 1 hour of delivery)",
                    icon: Users,
                  },
                ].map((right, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <right.icon className="h-4 w-4 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-purple-800">
                        {right.right}
                      </h3>
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
                Refund Process
              </div>
            </div>
            <div className="p-8">
              <div className="overflow-hidden rounded-lg border">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Refunds are processed only after internal verification and
                    approval.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    User must raise refund requests via the app, website, or by
                    emailing support@7unique.in within 24 hours of delivery or
                    cancellation.
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-muted-foreground">
                The following refund methods are available:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2 mt-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Original payment method (credit/debit card, UPI, net banking)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Wallet or ecoCredits (faster)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  NEFT/IMPS transfer (for COD transactions or special cases)
                </li>
              </ul>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                Timeframe for Refunds
              </div>
            </div>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">
                    Payment Mode
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      UPI / Net Banking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Credit/Debit Card
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      ecoCredits (Wallet)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      NEFT/IMPS
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    Refund Timeframe
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      3–5 business days
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      5–7 business days
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      Instant to 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      3–7 business days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-yellow-100 p-2">
                  <Cookie className="h-6 w-6 text-yellow-600" />
                </div>
                Non-Refundable Situations
              </div>
            </div>
            <div className="p-8">
              <p>Refunds will not be issued under the following conditions:</p>
              <div className="overflow-hidden rounded-lg border">
                <ul className="space-y-2 text-muted-foreground p-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Order delivered on time and per specifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Customer unavailable to receive order
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Customer provided incorrect address or contact info
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Repeated refund abuse or suspicious behavior
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Technical glitch due to customer’s device or payment bank
                    failure
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-muted-foreground">
                The following refund methods are available:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2 mt-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Original payment method (credit/debit card, UPI, net banking)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Wallet or ecoCredits (faster)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  NEFT/IMPS transfer (for COD transactions or special cases)
                </li>
              </ul>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                Chargebacks & Disputes
              </div>
            </div>
            <p className="text-muted p-5">
              If a customer raises a chargeback with their bank:
            </p>
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    right:
                      "ecoFood will submit all delivery and transaction evidence.",
                    icon: Eye,
                  },
                  {
                    right:
                      "Fraudulent or abusive chargebacks may lead to account suspension.",
                    icon: FileText,
                  },
                  {
                    right:
                      "Multiple disputes may disqualify the user from future refunds or promotions.",
                    icon: AlertCircle,
                  },
                ].map((right, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <right.icon className="h-4 w-4 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-purple-800">
                        {right.right}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                Special Offers and Coupons
              </div>
            </div>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Orders placed with promo codes, discounts, or offers may
                      be non-refundable or partially refundable.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      If a refund is approved, the discount value will be
                      deducted from the refund.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      ecoCredits, referral bonuses, or cashback are not
                      convertible to cash and non-refundable.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-red-50 to-pink-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-red-100 p-2">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                Wallet or ecoCredits Refunds
              </div>
            </div>
            <p className="p-3">If a refund is issued in ecoCredits:</p>
            <div className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Can be used for future orders only on ecoFood
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cannot be transferred or withdrawn to bank
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Valid for 180 days from issue date unless specified
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Bulk or Corporate Orders
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Custom or bulk orders made through business accounts or special
                contracts are governed by separate agreements. Refund terms are
                clearly mentioned in the corporate SLA and will override this
                policy.
              </p>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-yellow-100 p-2">
                  <Cookie className="h-6 w-6 text-yellow-600" />
                </div>
                Force Majeure
              </div>
            </div>
            <p className="p-3">
              ecoFood shall not be liable to fulfill or refund any order if
              delays or cancellations occur due to:
            </p>
            <div className="p-8">
              <div className="overflow-hidden rounded-lg border">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Natural disasters (floods, earthquakes)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Political unrest, lockdowns, strikes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Pandemic, epidemic, or health emergencies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Technical failures beyond our control
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3 text-2xl py-3 px-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Policy Updates
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                ecoFood reserves the right to modify this Cancellation & Refund
                Policy at any time. Updates will be posted on the app and
                website. Continued use of services after such changes will
                constitute acknowledgment and acceptance of the new policy.
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
                <h2 className="mb-4 text-2xl font-bold">
                  Contact & Grievance Redressal
                </h2>
                <p className="mb-6 text-green-100">
                  For any refund-related query, complaint, or grievance,
                  contact:
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
                      <p>
                        Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                        Jagatpura, Jaipur, Rajasthan - 302017
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Mumbai (Corporate)</p>
                      <p>
                        Office No. 101/2, Vakratunda Corporate Park, Off Aarey
                        Road, Goregaon (East), Mumbai - 400063
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
                This policy shall be governed by the laws of India. Any disputes
                shall fall under the exclusive jurisdiction of the courts in
                <strong> Jaipur, Rajasthan.</strong>
              </p>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <p className="text-indigo-800 font-medium">
                  <strong>
                    Thank you for choosing ecoFood. We value your trust and are
                    committed to fair and transparent service policies.
                  </strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Refund;
