import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

const Rules: React.FC = () => {
  return (
    <LegalPageLayout 
      title="CricketFanApp Platform Rules"
      lastUpdated="Last Updated: 1 October 2025"
    >
      <p>Welcome to CricketFanApp (CFA) — the ultimate cricket social experience!</p>
      <p>Our goal is to create a respectful, fun, and fair environment for all fans, players, and creators.</p>
      <p>By using the app, you agree to follow these platform rules.</p>
      
      <h2>1. Respect & Safety</h2>
      <p>We're a global cricket community — treat everyone with respect.</p>
      <p>Do's:</p>
      <ul>
        <li>Encourage and celebrate great cricket moments.</li>
        <li>Be kind, constructive, and supportive.</li>
        <li>Report harmful or offensive content.</li>
      </ul>
      <p>Don'ts:</p>
      <ul>
        <li>No bullying, hate speech, or harassment.</li>
        <li>No discrimination based on nationality, gender, religion, or race.</li>
        <li>No threats, intimidation, or personal attacks.</li>
      </ul>

      <h2>2. Content & Posting Rules</h2>
      <p>You're responsible for everything you upload (photos, reels, comments, videos, etc.).</p>
      <p>Allowed:</p>
      <ul>
        <li>Original cricket-related photos, clips, and commentary.</li>
        <li>Match reactions, highlights, or memes made by you.</li>
        <li>Engaging with others positively through likes, comments, or duets.</li>
      </ul>
      <p>Not Allowed:</p>
      <ul>
        <li>Nudity, sexually explicit, or violent content.</li>
        <li>Misleading information about matches or players.</li>
        <li>Copyrighted content (match footage, music, or TV clips) without permission.</li>
        <li>Content promoting gambling, illegal betting, or political propaganda.</li>
      </ul>

      <h2>3. Coins, Rewards & Market Use</h2>
      <p>Our coin and rewards system is designed to make engagement fun.</p>
      <p>Allowed:</p>
      <ul>
        <li>Earn coins through posts, interactions, or fantasy play.</li>
        <li>Redeem coins in the in-app marketplace for available items.</li>
      </ul>
      <p>Not Allowed:</p>
      <ul>
        <li>Selling or transferring coins for money or outside apps.</li>
        <li>Using multiple or fake accounts to exploit rewards.</li>
        <li>Manipulating engagement (bots, spam likes, fake comments).</li>
      </ul>
      <p>All coin redemptions and rewards are final, non-refundable, and have no cash value.</p>

      <h2>4. Fantasy Cricket (In-App Only)</h2>
      <p>Fantasy Cricket is a fun, skill-based feature — not gambling.</p>
      <p>Rules:</p>
      <ul>
        <li>Pick your dream XI before a match begins.</li>
        <li>Earn points based on real player performance.</li>
        <li>Points are for entertainment only (no real money or betting).</li>
        <li>Leaderboards are for bragging rights and fun competition.</li>
        <li>No real money involvement</li>
        <li>Abuse, collusion, or fake account creation will result in suspension.</li>
      </ul>
      
      <h2>5. Interaction & Comments</h2>
      <p>Keep conversations clean, cricket-focused, and friendly.</p>
      <p>Not Allowed:</p>
      <ul>
        <li>Spamming comments or promoting external products.</li>
        <li>Abusive language or trolling.</li>
        <li>Sharing personal or private information of others.</li>
      </ul>
      
      <h2>6. Account Behavior</h2>
      <p>We reserve the right to disable or restrict accounts that:</p>
      <ul>
        <li>Violate these platform rules or Terms of Service.</li>
        <li>Engage in fraud, impersonation, or hacking.</li>
        <li>Exploit app systems or third-party services.</li>
        <li>Note: Accounts are disabled, not deleted, to ensure system stability and safety.</li>
      </ul>
      
      <h2>7. Intellectual Property</h2>
      <ul>
        <li>Respect other creator's rights.</li>
        <li>Do not post or reuse content that isn't yours without permission.</li>
        <li>If your content is used by CFA for highlights or promotions, credit will always be given where possible.</li>
      </ul>

      <h2>8. Privacy & Data</h2>
      <ul>
        <li>Keep your login information private and secure.</li>
        <li>CFA will never request your password or sensitive information through messages.</li>
        <li>Refer to our Privacy Policy for full details on how we handle your data.</li>
      </ul>

      <h2>9. Reporting & Enforcement</h2>
      <p>Help keep CricketFanApp safe:</p>
      <ul>
        <li>Use the Report button for inappropriate content or behavior.</li>
        <li>Violations may result in warnings, temporary suspension, or permanent account disabling.</li>
        <li>CFA's moderation decisions are final.</li>
      </ul>

      <h2>10. Be a True Cricket Fan!</h2>
      <ul>
        <li>Remember — CricketFanApp is built for fans, creators, and players who share the same passion.</li>
        <li>Play fair, post positive, and celebrate the game responsibly.</li>
      </ul>
      <p>Contact Us</p>
      <ul>
        <li>📩 Email: support@cricketfanapp.com</li>
        <li>🌐 Website: https://cricketfanapp.com </li>
      </ul>
    </LegalPageLayout>
  );
};

export default Rules;