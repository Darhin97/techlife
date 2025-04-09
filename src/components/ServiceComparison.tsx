"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { comparisonData, ComparisonTab } from "@/lib/data";

export function ServiceComparison() {
  const [activeTab, setActiveTab] = useState<ComparisonTab>("cctv");

  return (
    <section id="compare" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Compare Services & Pricing
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Make informed decisions with our side-by-side comparison of IT
            services and pricing.
          </motion.p>
        </div>

        <Tabs
          defaultValue="cctv"
          onValueChange={(value) => setActiveTab(value as ComparisonTab)}
          className="mb-8"
        >
          <TabsList className="flex flex-wrap justify-center">
            {Object.entries(comparisonData).map(([key, data]) => (
              <TabsTrigger key={key} value={key} className="px-4 py-2 mb-2">
                {data.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(comparisonData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-700">
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider min-w-[200px]">
                          Features
                        </th>
                        {data.plans.map((plan) => (
                          <th
                            key={plan.name}
                            className="px-6 py-3 text-center text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider"
                          >
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                      {data.features.map((feature) => (
                        <tr key={feature.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800 dark:text-slate-200">
                            {feature.name}
                          </td>
                          {data.plans.map((plan) => (
                            <td
                              key={`${plan.name}-${feature.name}`}
                              className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 text-center"
                            >
                              {typeof feature.values[plan.id] === "boolean" ? (
                                feature.values[plan.id] ? (
                                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-red-500 mx-auto" />
                                )
                              ) : (
                                feature.values[plan.id]
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800 dark:text-slate-200">
                          Monthly price
                        </td>
                        {data.plans.map((plan) => (
                          <td
                            key={`${plan.name}-price`}
                            className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 text-center font-bold"
                          >
                            {plan.price}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                        {data.plans.map((plan, index) => (
                          <td
                            key={`${plan.name}-action`}
                            className="px-6 py-4 whitespace-nowrap text-center"
                          >
                            <Button
                              asChild
                              className={cn(
                                index === 1
                                  ? "bg-orange-500 hover:bg-orange-600"
                                  : "",
                              )}
                            >
                              <a href="#contact">Select Plan</a>
                            </Button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
