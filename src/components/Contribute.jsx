import React, { useState } from 'react';

const Contribute = () => {
  const [activeTab, setActiveTab] = useState('give');
  const [copyStatus, setCopyStatus] = useState({ local: false, intl: false });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const bankText = {
    local: "Account Name: Christ the Greatest Foundation\nBank Name: [Insert bank name]\nAccount Number: [Insert account number]",
    intl: "Beneficiary: Christ the Greatest Foundation\nSWIFT / BIC: [Insert SWIFT code]\nIBAN / Account: [Insert IBAN / account]"
  };

  const handleCopy = async (key) => {
    try {
      await navigator.clipboard.writeText(bankText[key]);
      setCopyStatus({ ...copyStatus, [key]: true });
      setTimeout(() => setCopyStatus({ ...copyStatus, [key]: false }), 1800);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="contribute" id="get-involved">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot"></span>Get Involved</span>
          <h2>Partner with our mission.</h2>
          <p>Give directly toward a program, or open a strategic partnership on behalf of your organization. Both routes are reviewed by the same team.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Ways to give">
          <button 
            className={`tab-btn ${activeTab === 'give' ? 'active' : ''}`} 
            onClick={() => setActiveTab('give')}
            role="tab" aria-selected={activeTab === 'give'}
          >
            Financial Sponsorship
          </button>
          <button 
            className={`tab-btn ${activeTab === 'csr' ? 'active' : ''}`} 
            onClick={() => setActiveTab('csr')}
            role="tab" aria-selected={activeTab === 'csr'}
          >
            CSR &amp; Strategic Partnerships
          </button>
        </div>

        <div className={`tab-panel ${activeTab === 'give' ? 'active' : ''}`} role="tabpanel">
          <div className="ledger-block">
            <h4>Where your support goes</h4>
            <div className="ledger-row">
              <span className="item-name">A child's complete uniform &amp; kit</span>
              <span className="leader"></span>
              <span className="item-amt">₦15,000</span>
            </div>
            <div className="ledger-row">
              <span className="item-name">Prison welfare package</span>
              <span className="leader"></span>
              <span className="item-amt">₦100,000</span>
            </div>
            <div className="ledger-row">
              <span className="item-name">General fund — any amount</span>
              <span className="leader"></span>
              <span className="item-amt">Open</span>
            </div>
          </div>

          <div className="bank-grid">
            <div className="bank-card">
              <div className="bc-head"><h5>Local Bank Transfer</h5><span className="bc-tag">NGN</span></div>
              <div className="bank-row"><span className="k">Account Name</span><span className="v">Christ the Greatest Foundation</span></div>
              <div className="bank-row"><span className="k">Bank Name</span><span className="v">[Insert bank name]</span></div>
              <div className="bank-row"><span className="k">Account No.</span><span className="v">[Insert account number]</span></div>
              <button className="copy-btn" onClick={() => handleCopy('local')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>{copyStatus.local ? 'Copied' : 'Copy account details'}</span>
              </button>
            </div>

            <div className="bank-card">
              <div className="bc-head"><h5>International Wire</h5><span className="bc-tag">USD / SWIFT</span></div>
              <div className="bank-row"><span className="k">Beneficiary</span><span className="v">Christ the Greatest Foundation</span></div>
              <div className="bank-row"><span className="k">SWIFT / BIC</span><span className="v">[Insert SWIFT code]</span></div>
              <div className="bank-row"><span className="k">IBAN / Acct No.</span><span className="v">[Insert IBAN / account]</span></div>
              <button className="copy-btn" onClick={() => handleCopy('intl')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>{copyStatus.intl ? 'Copied' : 'Copy wire details'}</span>
              </button>
            </div>
          </div>

          <p className="donate-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Full, verified account details are issued on request — call or message <a href="https://wa.me/2348166158813" target="_blank" rel="noopener noreferrer" style={{color: 'var(--navy)', fontWeight: 'bold', textDecoration: 'none'}}>+234 816 615 8813</a> to confirm before sending a large gift.
          </p>
        </div>

        <div className={`tab-panel ${activeTab === 'csr' ? 'active' : ''}`} role="tabpanel">
          <form className="csr-form" onSubmit={handleFormSubmit}>
            <div className="field">
              <label htmlFor="orgName">Organization name</label>
              <input type="text" id="orgName" name="orgName" placeholder="e.g. Meridian Capital Foundation" required />
            </div>
            <div className="field">
              <label htmlFor="repEmail">Representative email</label>
              <input type="email" id="repEmail" name="repEmail" placeholder="you@company.com" required />
            </div>
            <div className="field full">
              <label htmlFor="focus">Partnership focus</label>
              <select id="focus" name="focus" defaultValue="" required>
                <option value="" disabled>Select an area</option>
                <option value="school">School Sponsorship</option>
                <option value="uniform">External Uniform Drive</option>
                <option value="prison">Prison Ministry</option>
                <option value="general">General Fund</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your organization and what you'd like to support."></textarea>
            </div>
            <button type="submit" className="btn btn-outline-navy">Send Partnership Inquiry</button>
            <p className="form-note">This inquiry is reviewed by the Foundation team directly — expect a reply within a few business days.</p>
          </form>
          <div className={`form-success ${formSubmitted ? 'show' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Thank you — your partnership inquiry has been recorded. Our team will follow up by email shortly.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
