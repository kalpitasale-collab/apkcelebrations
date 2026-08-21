import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose }) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Success Icon */}
        <div className="modal-icon-wrapper">
          <Check size={40} strokeWidth={2.5} />
        </div>

        {/* Title & Message */}
        <h3 className="modal-title">Enquiry Received</h3>
        <p className="modal-message">
          Thank you! Your event enquiry has been received successfully. 
          Our planning team will review your specifications and contact you shortly.
        </p>

        {/* Action Button */}
        <button className="btn btn-dark" onClick={onClose} style={{ width: '100%' }}>
          Back to Celebrations
        </button>

      </div>
    </div>
  );
}
