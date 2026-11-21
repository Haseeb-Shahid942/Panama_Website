'use client'

import { useState, useRef } from 'react';
import AIRPORTS from './airportsarray.json'; // Import JSON data from local file
import Select from 'react-select'; // Import react-select
import Swal from 'sweetalert2';

import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import axios from 'axios';
import { trackFlightSearch, trackLead } from '@/utils/facebookPixel';
// import emailjs from '@D/browser';
// import emailjs from '@emailjs/browser';
// import { wrap } from 'framer-motion';


// Calendar Icon for inputs
const CalendarIcon = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="#008CBA" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="#fff" strokeWidth="1.3" />
  </svg>
);

// Custom Input Component with Label at the top
const DateInputWithLabel = ({
  value,
  onChange,       // Add onChange prop!
  placeholder,
  label,
  departureDate,
  icon,
  readOnly,
}) => {
  const minDate = placeholder === "Return" && departureDate ? departureDate : "today";
  return (
    <div className="flex relative w-full">
      <Flatpickr
        className="w-full border border-white bg-transparent py-2 px-3 rounded text-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
        value={value}
        onChange={onChange} // Use onChange prop
        readOnly={readOnly}
        placeholder={placeholder}
        options={{
          minDate: minDate,
          dateFormat: "d/m/Y",
        }}
        style={{ fontWeight: 600, fontSize: '12px' }}
        aria-label={placeholder}
      />
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passenger: { adults: 1, youth: 0, children: 0, infants: 0 },
    tripType: 'Round trip',
    classType: 'Economy',
    direct: false,
    flexible: false,
    selectedButton: 'flights',
    name: '',
    phone: '',
    gmail: '',
  });

  const [loading, setLoading] = useState(false);
  const [passengerDropdown, setPassengerDropdown] = useState(false);

  const formRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setTimeout(() => {
  //     // Send the full data
  //     // console.log(formData);
  //     sendInquiryEmail(formData);
  //     setLoading(false);
  //     alert("Form Submitted Successfully!");
  //     setFormData({
  //       from: '',
  //       to: '',
  //       departure: '',
  //       return: '',
  //       passenger: { adults: 1, children: 0, infants: 0 },
  //       tripType: 'Round trip',
  //       classType: 'Economy',
  //       direct: false,
  //       flexible: false,
  //       selectedButton: 'flights',
  //       name: '',
  //       phone: '',
  //       gmail: '',
  //     })
  //   }, 5000);
  // };

  // Validation function
  const validateForm = () => {
    const errors = [];

    // Check required fields
    if (!formData.name.trim()) {
      errors.push('Name is required');
    }

    // Check if at least one contact method is provided
    const hasPhone = formData.phone.trim();
    const hasEmail = formData.gmail.trim();
    
    if (!hasPhone && !hasEmail) {
      errors.push('Please provide either a phone number or email address');
    }

    // Validate email format if provided
    if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.gmail.trim())) {
        errors.push('Please enter a valid email address (e.g., example@email.com)');
      }
    }

    // Validate phone format if provided
    if (hasPhone) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        errors.push('Please enter a valid phone number (minimum 10 digits, e.g., +44 123 456 7890)');
      }
    }

    // Check travel details
    if (!formData.from) {
      errors.push('Departure location is required');
    }

    if (!formData.to) {
      errors.push('Destination location is required');
    }

    if (!formData.departure) {
      errors.push('Departure date is required');
    }

    if (formData.tripType === 'Round trip' && !formData.return) {
      errors.push('Return date is required for round trip');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      await Swal.fire({
        icon: 'error',
        title: 'Please fix the following errors:',
        html: validationErrors.map(error => `• ${error}`).join('<br>'),
        confirmButtonText: 'OK',
        confirmButtonColor: '#392477',
      });
      return;
    }

    try {
      setLoading(true);
      
      // Track flight search event
      trackFlightSearch({
        from: formData.from,
        to: formData.to,
        departure: formData.departure,
        return: formData.return,
        passengers: formData.passenger.adults + formData.passenger.youth + formData.passenger.children + formData.passenger.infants,
        tripType: formData.tripType,
        classType: formData.classType,
      });
      
      const response = await axios.post("/api/mail/contact", formData);
      
      if (response.data.success) {
        // Track lead conversion
        trackLead({
          destination: `${formData.from} to ${formData.to}`,
          type: 'flight_inquiry',
          estimatedValue: 500, // Average flight value
        });
        
        await Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your inquiry has been submitted successfully. We will contact you soon!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#392477',
        });
        
        // Reset form
        setFormData({
          from: '',
          to: '',
          departure: '',
          return: '',
          passenger: { adults: 1, youth: 0, children: 0, infants: 0 },
          tripType: 'Round trip',
          classType: 'Economy',
          direct: false,
          flexible: false,
          selectedButton: 'flights',
          name: '',
          phone: '',
          gmail: '',
        });
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Something went wrong while submitting your inquiry. Please try again.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#392477',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to submit your inquiry. Please check your internet connection and try again.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#392477',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (selectedOption, type) => {
    setFormData((prev) => ({ ...prev, [type]: selectedOption }));
    if (type === 'from') {
      toInputRef.current?.focus();
    }
  };

  const classTypeOptions = [
    { value: "Economy", label: "Economy" },
    { value: "Premium", label: "Premium Economy" },
    { value: "Business", label: "Business" },
    { value: "First", label: "First" },
  ];

  const handleButtonSelect = (buttonType) => {
    setFormData((prev) => ({ ...prev, selectedButton: buttonType }));
  };

  const totalPassengers = formData.passenger.adults + formData.passenger.youth + formData.passenger.children + formData.passenger.infants;

  const fromOptions = AIRPORTS.map(airport => ({ value: airport, label: airport }));
  const toOptions = AIRPORTS.map(airport => ({ value: airport, label: airport }));

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "white",
      minWidth: '160px',
      height: "auto",
      maxWidth: 'auto',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#111",
      color: "white",
      width: "auto",
      overflowY: 'auto',
      maxHeight: "200px",
      display: 'block',
      whiteSpace: 'nowrap',

    }),

    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#ccc",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#444" : "#111",
      color: "white",
      fontSize: "14px",
    }),
  }

  function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);
    // Example output: July 16, 2025
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  // call this function on form submit
  // const sendInquiryEmail = (formData) => {
  //   const templateParams = {
  //     name: formData.name,
  //     gmail: formData.gmail,
  //     phone: formData.phone,
  //     classType: formData.classType,
  //     from: formData.from,
  //     to: formData.to,
  //     departure: formatDate(formData.departure),
  //     return: formatDate(formData.return) || '',
  //     tripType: formData.tripType,
  //     direct: formData.direct ? 'Yes' : 'No',
  //     adults: formData.passenger.adults,
  //     children: formData.passenger.children,
  //     infants: formData.passenger.infants,
  //     selectedButton: formData.selectedButton,
  //   };

  //   // Replace with your actual values from EmailJS dashboard
  //   emailjs.send(
  //     'service_xppz61o',
  //     'template_53d0cd2',
  //     templateParams,
  //     '4CLyFY7Du_W3_uTMx'
  //   )
  //     .then((response) => {
  //       alert('Inquiry sent successfully!');
  //       // Optionally reset form here
  //     }, (error) => {
  //       alert('Failed to send inquiry: ' + error.text);
  //     });
  // };
// 
  return (
    <div className="max-w-4xl mx-auto p-3 lg:p-6 bg-black/40 rounded-md">
      {/* Button Group */}
      <div className="flex justify-start">
        <button
          className={`px-2 lg:px-4 py-2 rounded-tl rounded-tr border border-transparent text-white ${formData.selectedButton === 'flights' ? 'bg-primary ' : 'bg-transparent border-white border-r-transparent border-b-transparent'}`}
          onClick={() => handleButtonSelect('flights')}
          type="button"
        >
          Flights
        </button>
        <button
          className={`px-2 lg:px-4 py-2 rounded-tl rounded-tr border border-transparent text-white ${formData.selectedButton === 'flight-hotels' ? 'bg-primary' : 'bg-transparent border-white border-l-transparent border-b-transparent'}`}
          onClick={() => handleButtonSelect('flight-hotels')}
          type="button"
        >
          Flight + Hotels
        </button>
      </div>

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="bg-gradient-to-br from-black/60 to-white/10 text-black p-2 md:p-2 w-full" autoComplete="off">
        <fieldset disabled={loading} className='space-y-2'>
          {/* First Row */}
          <div className="flex justify-start gap-4 mb-2 lg:mb-3">
            <div className="flex gap-4">
              <label className="flex items-center text-white gap-2 text-sm">
                <input
                  type="radio"
                  name="tripType"
                  value="Round trip"
                  disabled={loading}
                  checked={formData.tripType === 'Round trip'}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value, return: '' })}
                  aria-label="Round trip"
                />
                Return
              </label>
              <label className="flex items-center gap-2 text-white text-sm">
                <input
                  type="radio"
                  name="tripType"
                  value="One way"
                  disabled={loading}
                  checked={formData.tripType === 'One way'}
                  onChange={(e) => setFormData({ ...formData, tripType: e.target.value, return: '' })}
                  aria-label="One way trip"
                />
                One Way
              </label>
            </div>
            <label className="flex items-center gap-2 text-white text-sm" htmlFor="direct-flights">
              <input
                type="checkbox"
                id="direct-flights"
                disabled={loading}
                checked={formData.direct}
                onChange={(e) => setFormData({ ...formData, direct: e.target.checked })}
                aria-label="Direct flights only"
              />
              <span>Direct Flights</span>
            </label>

            <label className="flex items-center justify-center gap-2 text-white text-sm" htmlFor="flexible-dates">
              <input
                type="checkbox"
                id="flexible-dates"
                disabled={loading}
                name={'flexible'}
                checked={formData.flexible}
                onChange={(e) => setFormData({ ...formData, flexible: e.target.checked })}
                aria-label="Flexible dates"
              />
              <span>Flexible Dates</span>
            </label>
            <div className="hidden md:flex">
              <Select
                className="w-full border-none"
                value={classTypeOptions.find(opt => opt.value === formData.classType)}
                onChange={(selected) => setFormData({ ...formData, classType: selected.value })}
                options={classTypeOptions}
                isDisabled={loading}
                aria-label="Travel class"
                inputId="class-type-desktop"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    background: "#27272a", // dark dropdown
                    color: "white",
                    width: 'auto',
                    whiteSpace: 'nowrap',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    background: state.isFocused ? "#392477" : "#27272a",
                    color: "white",
                    fontSize: "14px",
                  }),
                }}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-2 lg:mb-1">
            <div className="flex-1 relative">
              <Select
                className="w-full text-sm bg-transparent"
                value={formData.from ? { label: formData.from, value: formData.from } : null}
                onChange={(selected) => handleSelect(selected.value, 'from')}
                options={fromOptions}
                placeholder="From"
                ref={fromInputRef}
                styles={customStyles}
                aria-label="Departure airport"
                inputId="from-airport"
              />
            </div>
            <div className="flex-1 relative">
              <Select
                className="w-full text-sm"
                value={formData.to ? { label: formData.to, value: formData.to } : null}
                onChange={(selected) => handleSelect(selected.value, 'to')}
                options={toOptions}
                placeholder="To"
                ref={toInputRef}
                styles={customStyles}
                aria-label="Destination airport"
                inputId="to-airport"
              />
            </div>
            <div className='flex lg:flex-row gap-2 box-border w-full'>
              <div className="flex-1">
                <DateInputWithLabel
                  value={formData.departure}
                  readOnly={loading}
                  onChange={date => setFormData(prev => ({
                    ...prev,
                    departure: date[0],
                    // If departure is changed and return is before it, clear return
                    return:
                      formData.tripType === "Round trip" && formData.return && new Date(date[0]) > new Date(formData.return)
                        ? ''
                        : formData.return,
                  }))}
                  label="Departure"
                  departureDate={formData.departure}
                  icon={CalendarIcon}
                  placeholder="Departure"
                />
              </div>
              <div className={formData.tripType === 'Round trip' ? "flex-1" : "hidden"}>
                {formData.tripType === 'Round trip' && (
                  <DateInputWithLabel
                    value={formData.return}
                    readOnly={loading}
                    onChange={date => setFormData(prev => ({
                      ...prev,
                      return: date[0]
                    }))}
                    label="Return"
                    icon={CalendarIcon}
                    placeholder="Return"
                    departureDate={formData.departure}
                  />
                )}
              </div>
            </div>
            {/* Passenger(s) */}
            <div className="md:mb-4 flex relative w-full gap-2 md:w-auto">
              <button
                type="button"
                disabled={loading}
                onClick={() => setPassengerDropdown(!passengerDropdown)}
                className="w-full bg-transparent text-white px-1 py-2 border border-white box-border rounded relative text-sm"
                aria-label={`${totalPassengers} passenger${totalPassengers > 1 ? 's' : ''} selected`}
                aria-expanded={passengerDropdown}
                aria-haspopup="true"
              >
                <span className='block md:min-w-25 text-nowrap'>{totalPassengers} Passenger</span>
              </button>
              {passengerDropdown && (
                <div className="absolute z-30 top-7 mt-1 w-auto bg-black text-white border shadow-lg rounded p-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Adult(s)</span>
                    <select
                      className="w-10 text-center rounded bg-transparent text-white placeholder-white border-white"
                      value={formData.passenger.adults}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        passenger: { ...prev.passenger, adults: parseInt(e.target.value) }
                      }))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => <option key={v} value={v} className='text-white bg-black'>{v}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Youth(s)</span>
                    <select
                      className="w-10 text-center rounded bg-transparent text-white placeholder-white border-white"
                      value={formData.passenger.youth}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        passenger: { ...prev.passenger, youth: parseInt(e.target.value) }
                      }))}
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => <option key={v} value={v} className='text-white bg-black'>{v}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Child(ren)</span>
                    <select
                      className="w-10 text-center rounded bg-transparent text-white placeholder-white border-white"
                      value={formData.passenger.children}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        passenger: { ...prev.passenger, children: parseInt(e.target.value) }
                      }))}
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map(v => <option key={v} value={v} className='text-white bg-black'>{v}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Infant(s)</span>
                    <select
                      className="w-10 text-center rounded bg-transparent text-white placeholder-white border-white"
                      value={formData.passenger.infants}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        passenger: { ...prev.passenger, infants: parseInt(e.target.value) }
                      }))}
                    >
                      {[0, 1, 2, 3, 4].map(v => <option key={v} value={v} className='text-white bg-black'>{v}</option>)}
                    </select>
                  </div>
                  <div className="flex gap-2 justify-end mt-2">
                    <button
                      type="button"
                      className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50"
                      onClick={() => setPassengerDropdown(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      disabled={loading}
                      className="border border-primary bg-secondary text-white px-3 py-1 rounded hover:bg-primary-hover"
                      onClick={() => setPassengerDropdown(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}


              <div className="flex md:hidden w-full box-border">
                <Select
                  className="w-full border-none box-border"
                  value={classTypeOptions.find(opt => opt.value === formData.classType)}
                  onChange={(selected) => setFormData({ ...formData, classType: selected.value })}
                  options={classTypeOptions}
                  isDisabled={loading}
                  aria-label="Travel class"
                  inputId="class-type-mobile"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      color: "white",
                      boxShadow: "none",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "#111", // dark dropdown
                      color: "white",
                      width: 'auto',
                      whiteSpace: 'nowrap',
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "white",
                    }),
                    input: (provided) => ({
                      ...provided,
                      color: "white",
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: "#ccc",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused ? "#444" : "#111",
                      color: "white",
                      fontSize: "14px",
                    }),
                  }}
                />
              </div>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="text-white text-xs mb-2 opacity-75">
            * Required fields. Please provide at least one contact method (phone or email).
          </div>
          <div className='flex gap-2 items-center'>
            <div className="flex-1 relative">
              <input
                className="w-full border border-white bg-transparent pt-3 pb-2 px-3 rounded text-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Name *"
                required
              />
            </div>
            <div className="flex-1 relative">
              <input
                className="w-full border border-white bg-transparent pt-3 pb-2 px-3 rounded text-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Phone *"
                type="tel"
              />
            </div>
            <div className="flex-1 relative">
              <input
                className="w-full border border-white bg-transparent pt-3 pb-2 px-3 rounded text-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={formData.gmail}
                onChange={(e) => setFormData(prev => ({ ...prev, gmail: e.target.value }))}
                placeholder="Email *"
                type="email"
              />
            </div>
            <div className="flex-1">
              <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded font-semibold text-sm" disabled={loading}>
                {loading ? 'Inquiring' : 'Inquire'}
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div >
  );
};

export default ContactForm;
