import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, User, Phone, Mail, Users, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/config';
import emailjs from '@emailjs/browser';

export default function BookingForm({ onOpenSuccessModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    services: [], // Array of string values
    eventDate: '',
    location: '',
    guests: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const serviceOptions = [
    "Balloon Decoration",
    "Theme Backdrop",
    "DJ & Entertainment",
    "Game Host",
    "Magic Show",
    "Tattoo Artist",
    "Photography",
    "Catering",
    "Mascot"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleServiceChange = (serviceName) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(serviceName);
      let updatedServices;
      if (isSelected) {
        updatedServices = prev.services.filter(s => s !== serviceName);
      } else {
        updatedServices = [...prev.services, serviceName];
      }
      return {
        ...prev,
        services: updatedServices
      };
    });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";

    // Phone validation
    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.eventType) tempErrors.eventType = "Please select an event type";
    if (!formData.eventDate) tempErrors.eventDate = "Please choose a date";
    if (!formData.location.trim()) tempErrors.location = "Event location is required";

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Build a readable message for WhatsApp
      const message = `*New Event Booking Enquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate}
*Location:* ${formData.location}
${formData.guests ? `*Guests:* ${formData.guests}\n` : ''}${formData.services.length > 0 ? `*Services:* ${formData.services.join(', ')}\n` : ''}${formData.notes ? `*Notes:* ${formData.notes}` : ''}`;

      const whatsappUrl = `https://wa.me/91${CONTACT_INFO.whatsapp.phone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Send email via EmailJS as a backup record
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          event_type: formData.eventType,
          event_date: formData.eventDate,
          location: formData.location,
          guests: formData.guests || 'Not specified',
          services: formData.services.join(', ') || 'None selected',
          notes: formData.notes || 'None'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          console.log('Booking email sent successfully');
        })
        .catch((err) => {
          console.error('EmailJS send failed:', err);
        });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        services: [],
        eventDate: '',
        location: '',
        guests: '',
        notes: ''
      });
      setErrors({});

      // Open success modal in parent
      onOpenSuccessModal();
    } else {
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const errorInput = document.getElementsByName(firstError)[0];
        if (errorInput) {
          errorInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          errorInput.focus();
        }
      }
    }
  };

  return (
    <section id="booking" className="section booking-sec">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">Plan With Us</span>
          <h2 className="section-title">Let's Plan Your Celebration</h2>
          <p className="section-description">
            Tell us about your event and our planning team will coordinate to craft a custom celebration package.
          </p>
        </div>

        {/* Booking Panel */}
        <div className="booking-panel">
          <form onSubmit={handleSubmit} className="booking-form-grid" noValidate>

            {/* Full Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                <User size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                <Phone size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <Mail size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            {/* Event Type */}
            <div className="form-group">
              <label className="form-label" htmlFor="eventType">Event Type *</label>
              <select
                id="eventType"
                name="eventType"
                className="form-select"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Event Type</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Private Party">Private Party</option>
                <option value="Engagement">Engagement</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Other">Other</option>
              </select>
              {errors.eventType && <span className="form-error">{errors.eventType}</span>}
            </div>

            {/* Event Date */}
            <div className="form-group">
              <label className="form-label" htmlFor="eventDate">
                <Calendar size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Event Date *
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                className="form-input"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
              />
              {errors.eventDate && <span className="form-error">{errors.eventDate}</span>}
            </div>

            {/* Event Location */}
            <div className="form-group">
              <label className="form-label" htmlFor="location">
                <MapPin size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Event Location *
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="form-input"
                placeholder="Enter event location / city area"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
              {errors.location && <span className="form-error">{errors.location}</span>}
            </div>

            {/* Number of Guests */}
            <div className="form-group">
              <label className="form-label" htmlFor="guests">
                <Users size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> Number of Guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                className="form-input"
                placeholder="Approximate guest count"
                value={formData.guests}
                onChange={handleInputChange}
                min="1"
              />
            </div>

            {/* Services Required (Multi-select) */}
            <div className="form-group full-width">
              <label className="form-label" style={{ marginBottom: 'var(--spacing-xs)' }}>Services Required (Select all that apply)</label>
              <div className="multi-select-container">
                {serviceOptions.map((service) => (
                  <label key={service} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes / Special Ideas */}
            <div className="form-group full-width">
              <label className="form-label" htmlFor="notes">Tell Us About Your Event</label>
              <textarea
                id="notes"
                name="notes"
                className="form-textarea"
                placeholder="Tell us about your theme, colors, preferences and custom ideas..."
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <div className="form-submit-wrapper">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
