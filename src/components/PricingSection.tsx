"use client";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import Button from "./ui/Button";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    {
      title: "Standard",
      price: isYearly ? "$60" : "$6",
      description: "National average cost of buying cost is easy",
      features: [
        { name: "Unlimited Storage", available: true },
        { name: "Worldwide Accessibility", available: true },
        { name: "Low Latency", available: true },
        { name: "High Durability", available: false },
        { name: "Geo-Redundancy", available: false },
      ],
    },
    {
      title: "Extended",
      price: isYearly ? "$120" : "$12",
      recommended: true,
      description: "National average cost of buying cost is easy",
      features: [
        { name: "Unlimited Storage", available: true },
        { name: "Worldwide Accessibility", available: true },
        { name: "Low Latency", available: true },
        { name: "High Durability", available: true },

        { name: "Geo-Redundancy", available: true },
      ],
    },
    {
      title: "Premium+",
      price: isYearly ? "$180" : "$18",
      description: "National average cost of buying cost is easy",
      features: [
        { name: "Unlimited Storage", available: true },
        { name: "Worldwide Accessibility", available: true },
        { name: "Low Latency", available: true },
        { name: "High Durability", available: true },

        { name: "Geo-Redundancy", available: true },
      ],
    },
  ];

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="py-8" id='pricingSection'>
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Our Pricing Plans
          </h1>
          <p className="mb-8 text-gray-600">
            Pay securely online and manage the booking via desktop or via the
            mobile app.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text"> Monthly </span>
              <input
                type="checkbox"
                className="mx-6 toggle-primary toggle"
                checked={isYearly}
                onChange={handleToggle}
              />
              <span className="label-text">Yearly </span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-15 sm:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-md">
              <p className="text-5xl text-primary">
                {plan.price}
                {isYearly ? (
                  <span className="text-sm text-slate-400">/Yearly</span>
                ) : (
                  <span className="text-sm text-slate-400">/Monthly</span>
                )}
              </p>
              <h2 className="my-3 text-2xl font-bold text-gray-900 ">
                {plan.title}
              </h2>
              <p className="mb-12 text-slate-400">{plan.description}</p>
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center my-6 text-gray-600 "
                  >
                    {feature.available ? (
                      <TiTick className="mr-2 text-primary " />
                    ) : (
                      <TiTick className="mr-2 text-slate-400 " />
                    )}
                    <p className="">{feature.name}</p>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.recommended ? "default" : "outline"}
                color="primary"
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
