import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPageLayout 
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This Privacy Policy explains how CricketFanApp (“we”, “our”, or “us”) collects, uses, and protects your data."
      lastUpdated="1 October 2025"
    >
      <h2>1. Introduction</h2>
      <p>Welcome to CricketFanApp. We respect your privacy and are committed to protecting your personal data in accordance with Indian law, including the Information Technology Act, 2000 and its subsequent amendments.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We collect information that you provide directly to us when creating an account, participating in tournaments, or interacting with other users. This includes:</p>
      <ul>
        <li>Account Data: Name, username, email, and login details.</li>
        <li>Content Data: Photos, videos, and other material you upload.</li>
        <li>Device Data: Device model, OS, app version, and usage stats.</li>
        <li>Cookies & Analytics: Used to personalize experience and track engagement.</li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Operate and improve the app experience.</li>
        <li>Enable features like Fantasy Cricket and the in-app marketplace.</li>
        <li>Display and recommend relevant content.</li>
        <li>Manage coins, redemptions, and marketplace transactions.</li>
        <li>Communicate updates and respond to support requests.</li>
        <li>Ensure safety, detect fraud, and enforce our Terms.</li>
      </ul>
      
      <h2>4. Data Sharing</h2>
      
      <ul>
        <li>We may share limited user content on CricketFanApp's official social pages for promotional or engagement purposes.</li>
        <li>We do not sell or rent your personal data.</li>
        <li>Third-party analytics or advertising partners may receive anonymized information to improve performance.</li>
      </ul>
      
      <h2>5. In-App Marketplace</h2>
      
      <ul>
        <li>Items available in the in-app market are for coin redemption only.</li>
        <li>Coins are not convertible to cash or transferable outside the app.</li>
        <li>Some rewards may require user delivery details (e.g., name, address).</li>
        <li>Data provided for redemption is used only to fulfill the order and then securely stored or deleted as required by law.</li>
      </ul>

      <h2>6. Cookies & Tracking</h2>
      <p>Cookies help us:</p>
      <ul>
        <li>Save preferences and login sessions.</li>
        <li>Analyze user activity and engagement.</li>
        <li>Optimize performance and marketing.</li>
        <li>You can disable cookies in your browser settings, though this may limit functionality.</li>
      </ul>

      <h2>7. Data Retention & Account Disabling</h2>
      <ul>
        <li>We retain user data for performance, analytics, and app stability.</li>
        <li>If users request removal or violate policies, we disable the account rather than delete data, to maintain system integrity.</li>
        <li>Upon account deletion, all personal data is removed. Anonymous statistical data that does not identify the user may be retained to preserve match integrity.</li>
      </ul>

      <h2>8. Security</h2>
      <ul>
        <li>We implement encryption, firewalls, and secure authentication.</li>
        <li>Despite safeguards, no digital platform is 100% secure. Users must also protect their login information.</li>
      </ul>
      <h2>9. Your Rights</h2>
      <p>You may:</p>
      <ul>
        <li>Access or update your personal information.</li>
        <li>Request correction or limitation of data processing.</li>
        <li>Request account disabling if you no longer wish to use CricketFanApp.</li>
        <li>Requests can be made at social@cricketfanapp.com.</li>
      </ul>
      <h2>10. Policy Updates</h2>
      <ul>
        <li>This Privacy Policy may be updated periodically.</li>
        <li>Continued use of the app implies acceptance of any changes.</li>
      </ul>
      <h2>7. Contact</h2>
      
      <ul>
        <li>📩 Email: social@cricketfanapp.com</li>
        <li>🌐 Website: https://cricketfanapp.com/privacy</li>
      </ul>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;