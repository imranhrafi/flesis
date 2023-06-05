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
    <div className="py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Our Pricing Plans
          </h1>
          <p className="mb-8 text-gray-600">
            Pay securely online and manage the booking via desktop or via the
            mobile app.
          </p>
        </div>
        <div className="mb-8 flex justify-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text"> Monthly </span>
              <input
                type="checkbox"
                className="toggle-primary toggle mx-6"
                checked={isYearly}
                onChange={handleToggle}
              />
              <span className="label-text">Yearly </span>
            </label>
          </div>
        </div>
        <div className="gap-15 grid grid-cols-1 sm:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-md">
              <p className="text-5xl text-primary">
                {plan.price}
                {isYearly ? (
                  <span className="text-sm text-slate-400">/Yearly</span>
                ) : (
                  <span className="text-sm text-slate-400">/Monthly</span>
                )}
              </p>
              <h2 className=" my-3 text-2xl font-bold text-gray-900">
                {plan.title}
              </h2>
              <p className="mb-12 text-slate-400">{plan.description}</p>
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="my-6 flex items-center text-gray-600 "
                  >
                    {feature.available ? (
                      <TiTick className="mr-2  text-primary " />
                    ) : (
                      <TiTick className="mr-2  text-slate-400 " />
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
    </div>
  );
};

export default PricingSection;
