import React, { Component } from 'react';
import "./termsOfUse.css";
import TermsForm from "../terms-form/termsForm";
import { Navigate } from 'react-router-dom';
import { isAllowed } from '../login/auth';

class TermsOfUse extends Component {
  state = {  } 
  render() { 
    if (!isAllowed(["can_view_terms"])) {
      return <Navigate to="/" replace />;
    }
    
    return (
      <div className="terms-container">
        <div className="terms-title">Agreement to our legal terms</div>
        <div className="terms-item">
        These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of the NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU IMMEDIATELY.
        </div>
        <div className="terms-item">
        Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Leg; to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms continued use of the Services after the date such revised Legal Terms are posted
        </div>
        <div className="terms-item">
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Mervices. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
        </div>

        <TermsForm></TermsForm>
      </div>
    );
  }
}
 
export default TermsOfUse;