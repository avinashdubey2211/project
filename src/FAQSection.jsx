import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icons for toggle

export default function FAQSection() {
  const faqs = [
    {
      question: "What is an eCommerce website?",
      answer: `An eCommerce website is an online store where you can list and sell products or services. 
It usually includes product pages, a shopping cart, secure checkout, and tools for managing payments, shipping, 
customer support, and marketing.`,
    },
    {
      question: "What do I need in order to build an eCommerce website?",
      answer: `You’ll need: 
- A domain name (your unique web address) 
- Hosting (to make your site live) 
- Products/services to sell 
- A payment provider (to accept payments) 
- A store builder/template  

With platforms like Wix, Shopify, or WooCommerce, you get all of these tools in one place.`,
    },
    {
      question: "Where can I host my eCommerce website?",
      answer: `You can host on platforms like Wix, Shopify, WooCommerce, BigCommerce, or Squarespace. 
They offer secure hosting with fast global coverage, ensuring your site loads quickly everywhere.`,
    },
    {
      question: "How can I use AI in e-commerce to increase my website sales?",
      answer: `You can use AI for: 
- Personalized product recommendations 
- Chatbots for instant customer support 
- Smart email automation 
- Sales forecasting & inventory planning  
AI helps boost engagement and conversion rates.`,
    },
    {
      question: "How much does it cost to create an eCommerce website?",
      answer: `Costs vary depending on the platform and features. 
On average, expect to spend **$20–$300/month** including hosting, tools, and apps. 
Free plans exist, but for serious selling, a paid plan is recommended.`,
    },
    {
      question: "What is Wix eCommerce pricing?",
      answer: `Wix Business & eCommerce plans start from around **$17/month** (Business Basic) 
to **$35/month** (Business VIP), offering features like online payments, unlimited products, 
and advanced analytics.`,
    },
    {
      question: "What is the best eCommerce website builder?",
      answer: `It depends on your needs:  
- **Wix** → Easy to use, all-in-one solution  
- **Shopify** → Best for scaling businesses  
- **WooCommerce** → Great for WordPress users  
- **BigCommerce** → Ideal for large stores with complex needs`,
    },
    {
      question: "Can I create an eCommerce website for free?",
      answer: `Yes, you can start free on some platforms. 
However, free plans often limit features like custom domains and online payments. 
For a professional store, a paid plan is better.`,
    },
    {
      question: "What types of eCommerce websites are there?",
      answer: `The main types include:  
- **B2C** (Business to Customer)  
- **B2B** (Business to Business)  
- **C2C** (Customer to Customer, like eBay)  
- **D2C** (Direct to Customer, brand-to-buyer)`,
    },
    {
      question: "How do I choose a name for my eCommerce website?",
      answer: `Tips for choosing a name:  
- Keep it short and simple  
- Make it unique and brandable  
- Ensure it’s easy to spell and remember  
- Check that the domain name is available`,
    },
    {
      question: "I have no design or coding skills, can I still use Wix?",
      answer: `Yes ✅ Wix is beginner-friendly with drag-and-drop tools. 
You can create a professional-looking eCommerce website without any coding knowledge.`,
    },
    {
      question: "How can I promote my eCommerce business website?",
      answer: `Effective methods include:  
- SEO (search engine optimization)  
- Social media marketing  
- Email campaigns  
- Paid ads (Google, Facebook, Instagram)  
- Influencer marketing  
- Content marketing (blogs, videos, etc.)`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        eCommerce Site Builder FAQ
      </h1>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl shadow-sm bg-white"
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center p-4  hover:bg-gray-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg  text-gray-800">
                {faq.question}
              </p>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-800 text-sm whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
