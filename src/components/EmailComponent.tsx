"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { emailObject, sendEmail } from '@/actions/sendEmail';
import { SentMessageInfo } from 'nodemailer';
import { useState } from 'react';
export default function EmailComponent() {
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
    return(
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
    )
}