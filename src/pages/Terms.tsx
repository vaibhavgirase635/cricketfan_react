import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const Terms: React.FC = () => {
  return (
    <LegalPageLayout 
      title="TERMS OF SERVICE & CONDITIONS"
      lastUpdated="1 October 2025"
    >
      <p>Welcome to our CricketFanApp</p>
      <p>By downloading, accessing, or using CricketFanApp, you agree to these Terms of Service & Conditions</p>
      <p>Please read carefully before using the app or website.</p>

      <h2>1. Eligibility</h2>
      <ul>
        <li>You must be at least 13 years old (or the minimum legal age in your country) to use CricketFanApp.</li>
        <li>Users under 18 should have parental or guardian consent.</li>
        <li>By using the app, you confirm that you have the authority to agree to these Terms.</li>
      </ul>

      <h2>2. Account & User Responsibilities</h2>
      <ul>
        <li>Provide accurate and current information when creating your account.</li>
        <li>You are responsible for safeguarding your account credentials.</li>
        <li>Misuse, impersonation, or fraud may result in account disabling (not deletion).</li>
        <li>We disable rather than delete accounts because deletion could affect app data and performance.</li>
        <li>If you believe your account has been compromised, contact us immediately at support@cricketfanapp.com.</li>
      </ul>
      
      <h2>3. User Content & Ownership</h2>
      <ul>
        <li>When you post photos, videos, reels, live streams, or other content (“User Content”):</li>
        <li>Ownership: You retain ownership of your content.</li>
        <li>License: By posting, you grant CricketFanApp a worldwide, royalty-free license to use, share, and display your content:</li>
        <li>Inside the app (feeds, match boards, profiles).</li>
        <li>On official CricketFanApp social media (Instagram, TikTok, YouTube, Facebook, etc.).</li>
        <li>Responsibility: You are responsible for ensuring your content complies with laws and our Community Guidelines</li>
        <li>Moderation: We may remove content that violates these Terms or our policies.</li>
      </ul>
      
      <h2>4. Fantasy Cricket (In-App Only)</h2>
      <ul>
        <li>The Fantasy Cricket feature is available only inside the app.</li>
        <li>It is purely for fun and engagement — no real money or betting is involved.</li>
        <li>Points, ranks, and coins are virtual and non-redeemable for cash.</li>
        <li>Leaderboards reflect player performance in real matches and are for entertainment.</li>
        <li>CricketFanApp may modify or pause the feature anytime.</li>
      </ul>
      
      <h2>5. Rewards, Coins & In-App Market</h2>
      <ul>
        <li>Users can earn coins through engagement (posting, sharing, logging in, completing activities, etc.).</li>
        <li>Coins can be exchanged for digital or physical items listed in the in-app marketplace.</li>
        <li>Items are available only while stock lasts and may change without prior notice.</li>
        <li>All redemptions are processed within the app — coins cannot be transferred, traded, or converted into real currency.</li>
        <li>Any misuse of the rewards or redemption system may lead to account disabling.</li>
      </ul>

      <h2>6. Community Guidelines</h2>
      <p>Users must not:</p>
      <ul>
        <li>Post offensive, hateful, illegal, or harmful content.</li>
        <li>Harass, threaten, or impersonate others.</li>
        <li>Share copyrighted or third-party material without permission.</li>
        <li>Manipulate coins, leaderboards, or referral systems.</li>
        <li>Violation of these rules may result in content removal or account suspension.</li>
      </ul>

      <h2>7.  Cookies & Tracking Technologies</h2>
      <p>CricketFanApp uses cookies and similar technologies to:</p>
      <ul>
        <li>Improve app and website performance.</li>
        <li>Save user preferences and login sessions.</li>
        <li>Analyze usage and user engagement.</li>
        <li>Personalize content and recommendations.</li>
        <li>By using CricketFanApp, you consent to the use of cookies in accordance with our Privacy Policy.</li>
        <li>Users can disable cookies in their browser or device settings, but some app features may not function properly.</li>
      </ul>

      <h2>8. Third-Party Services</h2>
      <ul>
        <li>CricketFanApp may integrate tools such as analytics, ads, or login providers (e.g., Google, Meta).</li>
        <li>We are not responsible for the actions or data policies of these external services.</li>
        <li>Use of third-party tools is at your own discretion.</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <ul>
        <li>All app designs, features, and trademarks belong to CricketFanApp or its licensors.</li>
        <li>You may not copy, modify, or distribute our materials without written consent.</li>
      </ul>

      <h2>10. Disclaimer</h2>
      <ul>
        <li>CricketFanApp is provided as available.</li>
        <li>We make no guarantees regarding uninterrupted service, accuracy, or reliability.</li>
        <li>Fantasy features, rewards, and marketplace items are subject to change.</li>
        <li>User-generated content represents individual opinions, not those of CricketFanApp.</li>
      </ul>

      <h2>11. Limitation of Liability</h2>
      <p>CricketFanApp is not responsible for any indirect, incidental, or consequential damages arising from:</p>
      <ul>
        <li>App usage or technical issues.</li>
        <li>User content or third-party actions.</li>
        <li>Unauthorized access or data breaches beyond our reasonable control.</li>
        <li>User-generated content represents individual opinions, not those of CricketFanApp.</li>
      </ul>

      <h2>12. Suspension & Termination</h2>
      <p>We may suspend or disable accounts that:</p>
      <ul>
        <li>Violate these Terms or our Community Guidelines.</li>
        <li>Misuse app features, including rewards or coin redemptions.</li>
        <li>Post unlawful or harmful material.</li>
      </ul>

      <h2>13. Changes to Terms</h2>
      <ul>
        <li>We may update these Terms periodically.</li>
        <li>Significant updates will be announced, and continued use constitutes acceptance of changes.</li>
      </ul>

      <h2>14. Governing Law</h2>
      <ul>
        <li>These Terms are governed by the laws of India, and disputes shall be handled under its jurisdiction.</li>
      </ul>

      <h2>15. Contact Us</h2>
      <ul>
        <li>📧 Email: support@cricketfanapp.com</li>
        <li>🌐 Website: https://cricketfanapp.com</li>
      </ul>

    </LegalPageLayout>
  );
};

export default Terms;