"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-open.svg";
import grainImage from "@/assets/images/grain.jpg";
import React from "react";
import Swal from 'sweetalert2'

interface SectionProps {
  id?: string;
}

export const ContactSection = ({ id }: SectionProps) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "84a2448f-2737-4263-ad96-a8698887c0b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#8dae93'
      })
    }
  };

  return (
    <section id={id} className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                I can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className="max-w-lg mx-auto p-6 bg-transparent rounded-lg mt-4">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="input-box">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                  name='name'
                  required
                />
              </div>
              <div className="input-box">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  name='email'
                  required
                />
              </div>
              <div className="input-box">
                <label className="block text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Send Message</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
