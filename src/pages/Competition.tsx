import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const Competition: React.FC = () => {
  return (
    <LegalPageLayout 
      title="CricketFanApp - Referral Challenge"
      subtitle='Official Rules & Terms
        Challenge Period

        Start Date: 20 December

        End Date: 20 January

        Duration: 1 Month
        '
      lastUpdated=""
    >

      <p>Referrals completed outside this period will not be counted.</p>
      
      
      <h2>1. How to Participate</h2>
      <p>🔑 Unique Referral Code</p>
      <p>Every registered CricketFanApp user receives a unique referral code</p>
      <p>Your code can be found in the “Referals” section of the app</p>
      <p>✅ What Counts as a Valid Referral</p>
      <p>A referral is considered successful only when:</p>
      <ul>
        <li>1. A new user downloads the CricketFanApp.</li>
        <li>2. The user signs up using your referral code.</li>
        <li>3. The user completes full account verification.</li>
      </ul>


      <p>Incomplete sign-ups or unverified accounts will not be counted.</p>
      <h2>2. Real-Time Leaderboard</h2>
      <p>📊 Automatic Ranking</p>
      <p>All participants who share their referral code are automatically ranked</p>
      <p>The Top 10 users with the highest number of valid referrals are displayed on the live leaderboard</p>
      <p>📍 Track Your Progress</p>
      <p>Users can view:</p>
      <ul>
        <li>Current rank.</li>
        <li>Total successful referrals.</li>
        <li>Available anytime under “Referral Leaderboard” in the app.</li>
        <li>Leaderboard updates occur automatically and in real time.</li>
      </ul>

      <h2>3. Prize Qualifications & Thresholds</h2>
      <p>🥇 The Winner's Circle (Grand Prizes).</p>
      <p>To qualify for Top 3 Grand Prizes, users must achieve a minimum of 50 successful referrals:</p>
      <ul>
        <li>🥇 1st Place: 500 Coins.</li>
        <li>🥈 2nd Place: 300 Coins.</li>
        <li>🥉 3rd Place: 200 Coins.</li>
      </ul>
      <p>Only users who reach the 50-referral threshold are eligible for these prizes.</p>
      <p>💪 Effort Rewards (If Threshold Is Not Met)</p>
      <p>If no participant reaches 50 referrals by the end of the challenge:</p>
      <ul>
        <li>The top 3 referrers overall will still be rewarded.</li>
        <li>These users will receive special “Effort Rewards” in recognition of their contribution to the CricketFanApp community.</li>
        <li>Effort Rewards are determined solely by referral count..</li>
        
      </ul>

      <h2>4. Fair Play & Anti-Fraud Policy</h2>
      <h6>🚫 Prohibited Activities.</h6>
      <p>The following actions are strictly forbidden:</p>
      <ul>
        <li>Creating multiple accounts.</li>
        <li>Self-referring using your own code.</li>
        <li>Using bots, scripts, or automated tools</li>
        <li>Using temporary or fake email addresses</li>
      </ul>
      <h6>🔍 Verification & Audits</h6>
      <p>Cricket Fan App reserves the right to audit all referrals</p>
      <p>Any suspicious or fraudulent activity will result in:</p>
      <ul>
        <li>Immediate disqualification.</li>
        <li>Removal of invalid referral counts.</li>
      </ul>
      <h6>⚖ Final Decision</h6>
      <p>All leaderboard rankings at the close of the challenge are final.</p>
      <p>CricketFanApp's decisions regarding disputes, eligibility, and rewards are binding</p>

      <h2>5. General Terms</h2>
      <p>Rewards are non-transferable and cannot be exchanged for cash.</p>
      <p>CricketFanApp reserves the right to modify, suspend, or cancel the challenge if necessary</p>
      
      
      <h2>6. Eligibility</h2>
      <p>Participants must be 13 years or older.</p>
      <p>Users must have a verified CricketFanApp account in good standing</p>
      <p>Suspended or banned accounts are not eligible to participate or receive rewards</p>
      
      
      <h2>7. Platform Disclaimer</h2>
      <p>This referral challenge is not sponsored, endorsed, administered by, or associated with Google, Apple, Instagram, Facebook, X (Twitter), or any other social media platform.</p>
      
      
      <h2>8. Data & Privacy</h2>
      <p>Referral tracking is handled internally within the CricketFanApp</p>
      <p>No personal data is shared publicly through the leaderboard</p>
      <p>All data is processed in accordance with the CricketFanApp Privacy Policy.</p>
      
    </LegalPageLayout>
  );
};

export default Competition;