import React from 'react';
import './Contact.css';
import GetInTouch from './GetInTouch';
import InquiryRoadmap from './InquiryRoadmap';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Get In Touch Section */}
      <GetInTouch />

      {/* The Inquiry Roadmap */}
      <InquiryRoadmap />
    </div>
  );
}
