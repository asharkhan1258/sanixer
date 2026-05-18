"use client";

export default function ZolaraPolicy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen px-4 py-20 md:px-8 lg:px-20s">
      <div className="max-w-4xl mx-auto space-y-4 mt-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold">Powered by Sanixer</h1>

        {/* Intro Content */}
        <p>
          Sanixer operates as an independent technology and software solutions
          brand.
        </p>

        <p>
          For financial processing, payment infrastructure, banking, and merchant
          services, Sanixer is powered and administratively supported by
          Sanixer.
        </p>

        {/* Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Why You May See “Sanixer” on Your Payment
        </h2>

        <p>
          When you make a payment for services provided by Sanixer, the charge
          may appear under the name:
        </p>

        <p className="font-bold mb-2">Sanixer</p>

        <p>This is because:</p>

        <ul className="list-disc list-inside space-y-2">
          <li>Sanixer manages our financial operations and merchant processing.</li>
          <li>All payment gateways, banking infrastructure, and card processing are handled through Sanixer.</li>
          <li>Sanixer uses Sanixer as its authorized financial and operational partner.</li>
        </ul>

        {/* Clarification */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Important Clarification</h2>

        <ul className="list-disc list-inside space-y-2">
          <li>You are purchasing services from <strong>Sanixer</strong>.</li>
          <li>Sanixer acts solely as the authorized financial processing and administrative partner.</li>
          <li>Service agreements, project deliverables, and support remain under Sanixer.</li>
        </ul>
      </div>
    </div>
  );
}