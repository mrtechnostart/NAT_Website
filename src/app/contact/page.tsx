"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { emailObject, sendEmail } from '@/actions/sendEmail';
import { SentMessageInfo } from 'nodemailer';

export default function Component() {
  const [formData, setFormData] = useState<emailObject>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when form is submitted
    const response: SentMessageInfo = await sendEmail(formData);
    setIsLoading(false); // Reset isLoading to false after email sending is done
    if (response && response.accepted.length > 0) {
      alert('Email sent successfully');
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Nat Technology is a leading provider of Android and web applications, serving clients across various
              industries. Our team of skilled developers and designers are dedicated to delivering innovative solutions
              that drive business success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">Avlon Rangoli, Bhiwari, Rajasthan</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">nattechandtechnologies@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">+91 8383997355</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" value={formData.email} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" value={formData.message} onChange={handleInputChange} />
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}> {/* Disable button when isLoading is true */}
                {isLoading ? 'Sending...' : 'Submit'} {/* Change button text based on isLoading */}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
