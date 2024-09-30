import {Alert} from 'react-native';
import {
  isIOS,
  GLColors,
  appImages,
  GLFontSize,
  GLFontsFamily,
} from '../exporter';
import {svgIcon} from '../../assets/svg';

export function showAlert(type: string, des: string, onPress?: () => void) {
  Alert.alert(type, des, [
    {
      onPress: onPress,
    },
  ]);
}

export const UNEXPECTED_ERROR = 'Something went wrong. Please try again later.';

export const VERIFY_BOTH =
  'Please verify both your phone number and email before login. OTPs have been sent.';

export const VERIFY_EMAIL =
  'Please verify your email before login. An OTP has been sent to your email.';

export const VERIFY_PHONE =
  'Please verify your phone number before login. An OTP has been sent to your phone.';

export const IMAGE_OPTIONS = {
  quality: 10,
  mediaType: 'photo',
  includeBase64: false,
};

export const APPLE = 'Apple';
export const GOOGLE = 'Google';
export const FACEBOOK = 'Facebook';
export const INSTAGRAM = 'Instagram';
export const MANUAL = 'Manual';
export const EMAIL_ENUM = 'email';
export const PHONE_ENUM = 'phone';
export const EMAIL = 'Log In with your Email';

type IntroSlidesTypes = {
  key: number;
  title: string;
  info: string;
  image: any;
};

export const APP_INTRO_SLIDES: IntroSlidesTypes[] = [
  {
    key: 1,
    title: 'Search Tee Times',
    info: 'Easily book golf tee times for a specific day, time, and number of players.',
    image: appImages.feature1,
  },
  {
    key: 2,
    title: 'Book Tee Times',
    info: 'Never miss a game with our seamless booking system. Reserve your tee times in advance and enjoy a hassle-free experience.',
    image: appImages.feature2,
  },
  {
    key: 3,
    title: 'Enjoy Your Game',
    info: 'Arrive at the course and have a great round of golf!',
    image: appImages.feature3,
  },
];

type LoginTypes = {
  id: number;
  type: string;
  title: string;
  icon: any;
};

export const LOGIN_TYPES: LoginTypes[] = [
  {
    id: 1,
    type: 'Google',
    title: 'Continue with Google',
    icon: svgIcon.GoogleIcon,
  },
  ...(isIOS()
    ? [
        {
          id: 2,
          type: 'Apple',
          title: 'Continue with Apple',
          icon: svgIcon.AppleIcon,
        },
      ]
    : []),
  {
    id: 3,
    type: 'Facebook',
    title: 'Continue with Facebook',
    icon: svgIcon.FBIcon,
  },
  {
    id: 4,
    type: 'Instagram',
    title: 'Continue with Instagram',
    icon: svgIcon.InstaIcon,
  },
  {
    id: 5,
    type: 'Manual',
    title: 'Log In with your Email',
    icon: null,
  },
];

type Requests = {
  id: string | number;
  title: string;
};

export const MY_REQUESTS: Requests[] = [
  {
    id: '1REQ',
    title: 'Make Game Request',
  },
  {
    id: '2REQ',
    title: 'Make Game Request',
  },
  {
    id: '3REQ',
    title: 'Make Game Request',
  },
  {
    id: '4REQ',
    title: 'Make Game Request',
  },
  {
    id: '5REQ',
    title: 'Make Game Request',
  },
  {
    id: '6REQ',
    title: 'Make Game Request',
  },
  {
    id: '7REQ',
    title: 'Make Game Request',
  },
  {
    id: '8REQ',
    title: 'Make Game Request',
  },
  {
    id: '9REQ',
    title: 'Make Game Request',
  },
  {
    id: '10REQ',
    title: 'Make Game Request',
  },
  {
    id: '11REQ',
    title: 'Make Game Request',
  },
  {
    id: '12REQ',
    title: 'Make Game Request',
  },
];

export const CALENDAR_THEME = {
  textDayFontWeight: '400',
  textMonthFontWeight: '600',
  textDayHeaderFontWeight: '400',
  dayTextColor: GLColors.Natural.N11,
  monthTextColor: GLColors.Natural.N10,
  textDayFontSize: GLFontSize.FONT_SIZE_14,
  textSectionTitleColor: GLColors.Natural.N8,
  textMonthFontSize: GLFontSize.FONT_SIZE_16,
  textDayHeaderFontSize: GLFontSize.FONT_SIZE_14,
  textDayFontFamily: GLFontsFamily.Poppins_Medium,
  textMonthFontFamily: GLFontsFamily.Poppins_Medium,
  textDayHeaderFontFamily: GLFontsFamily.Poppins_Medium,
};

export const DAY_NAME_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const CURRENT_DATE = new Date().toISOString().split('T')[0];

export const GENERIC_ERROR_TEXT = 'Something went wrong. Please try again.';

export const INS_SCOPES = ['user_profile', 'user_media'];

export const LOCATIONS_DATA = [
  {id: 0, value: 'Fairways Country Club', label: 'Fairways Country Club'},
  {id: 1, value: 'Dubsdread Golf Course', label: 'Dubsdread Golf Course'},
  {
    id: 2,
    value: 'Cathcart Castle Golf Club',
    label: 'Cathcart Castle Golf Club',
  },
  {id: 3, value: 'Miami Beach Golf Club', label: 'Miami Beach Golf Club'},
];

export const TIME_ORDER = ['Morning', 'Afternoon', 'Evening'];

export const TERMS_DESC = `We are Golflync Corp (" Company ," " we ," " us ," " our "), a company registered in Arizona, United States at 1445 E Via Linda 2-616, Scottsdale, AZ 85259.

We operate the mobile application Golflync (the " App "), as well as any other related products and services that refer or link to these legal terms (the " Legal Terms ") (collectively, the "Services ").

You can contact us by email at users@golflync.com or by mail to 1445 E Via Linda 2-616, Scottsdale, AZ 85259, United States. These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (" you"), and Golflync Corp, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.

Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services. We recommend that you print a copy of these Legal Terms for your records.`;

export const TABLE_OF_CONTENT = `1. OUR SERVICES
2. INTELLECTUAL PROPERTY RIGHTS
3. USER REPRESENTATIONS
4. USER REGISTRATION
5. PROHIBITED ACTIVITIES
6. USER GENERATED CONTRIBUTIONS
7. CONTRIBUTION LICENSE
8. GUIDELINES FOR REVIEWS
9. MOBILE APPLICATION LICENSE
10. SOCIAL MEDIA
11. THIRD-PARTY WEBSITES AND CONTENT
12. ADVERTISERS
13. SERVICES MANAGEMENT
14. PRIVACY POLICY
15. TERM AND TERMINATION
16. MODIFICATIONS AND INTERRUPTIONS
17. GOVERNING LAW
18. DISPUTE RESOLUTION
19. CORRECTIONS
20. DISCLAIMER
21. LIMITATIONS OF LIABILITY
22. INDEMNIFICATION
23. USER DATA
24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
25. CALIFORNIA USERS AND RESIDENTS
26. MISCELLANEOUS
27. CONTACT US`;

export const TERMS = [
  {
    id: 1,
    title: '1. OUR SERVICES',
    desc: `The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
    
The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).`,
  },
  {
    id: 2,
    title: '2. INTELLECTUAL PROPERTY RIGHTS',
    desc: `Our intellectual property 

We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"). 
    
Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world. 
    
The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only. 
    
Your use of our Services 

Subject to your compliance with these Legal Terms, including the " PROHIBITED ACTIVITIES " section below, we grant you a non-exclusive, non-transferable, revocable license to: 
    
• access the Services; and 
    
• download or print a copy of any portion of the Content to which you have properly gained access. 
    
solely for your personal, non-commercial use or internal business purpose. 
    
Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. 
    
If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: users@golflync.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content. 
    
We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. 
    
Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.

Your submissions and contributions 

Please review this section and the " PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services. 

Submissions:  By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. 

Contributions:  The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution. 

You understand that Contributions may be viewable by other users of the Services and possibly through third-party websites. 

When you post Contributions, you grant us a license (including use of your name, trademarks, and logos):  By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels. 

This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.

You are responsible for what you post or upload:  By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you: 

• confirm that you have read and agree with our " PROHIBITED ACTIVITIES " and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading; 

• to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution; 

• warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and 

• warrant and represent that your Submissions and/or Contributions do not constitute confidential information. 

You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law. 

We may remove or edit your Content:  Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.`,
  },
  {
    id: 3,
    title: '3. USER REPRESENTATIONS',
    desc: `By using the Services, you represent and warrant that:   (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;   (3) you have the legal capacity and you agree to comply with these Legal Terms;   (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.

If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).`,
  },
  {
    id: 4,
    title: '4. USER REPRESENTATIONS',
    desc: 'You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.',
  },
  {
    id: 5,
    title: '5. PROHIBITED ACTIVITIES',
    desc: `You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

As a user of the Services, you agree not to:
    
• Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. 
    
• Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords. 
    
• Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein. 
    
• Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services. 
    
• Use any information obtained from the Services in order to harass, abuse, or harm another person. 
    
• Make improper use of our support services or submit false reports of abuse or misconduct. 
    
• Use the Services in a manner inconsistent with any applicable laws or regulations. 
    
• Engage in unauthorized framing of or linking to the Services. 
    
• Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services. 
    
• Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. 
    
• Delete the copyright or other proprietary rights notice from any Content. 
    
• Attempt to impersonate another user or person or use the username of another user. 
    
• Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms"). 
    
• Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services. 
    
• Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you. 
    
• Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services. 
    
• Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. 
    
• Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services. 
    
• Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software. 
    
• Use a buying agent or purchasing agent to make purchases on the Services. 
    
• Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. 
    
• Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise. 
    
• Use the Services to advertise or offer to sell goods and services. 
    
• Sell or otherwise transfer your profile.`,
  },
  {
    id: 6,
    title: '6. USER GENERATED CONTRIBUTIONS',
    desc: `The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that: 

• The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party. 
    
• You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms. 
    
• You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms. 
    
• Your Contributions are not false, inaccurate, or misleading. 
    
• Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation. 
    
• Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us). 
    
• Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone. 
    
• Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people. 
    
• Your Contributions do not violate any applicable law, regulation, or rule. 
    
• Your Contributions do not violate the privacy or publicity rights of any third party. 
    
• Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors. 
    
• Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap. 
    
• Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation. 
    
Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.`,
  },
  {
    id: 7,
    title: '7. CONTRIBUTION LICENSE',
    desc: `By posting your Contributions to any part of the Services or making Contributions accessible to the Services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.
This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.      
    
We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.    
    
We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.`,
  },
  {
    id: 8,
    title: '8. GUIDELINES FOR REVIEWS',
    desc: `We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.

We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.`,
  },
  {
    id: 9,
    title: '9. MOBILE APPLICATION LICENSE',
    desc: `Use License

If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.

Apple and Android Devices
    
The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.`,
  },
  {
    id: 10,
    title: '10. SOCIAL MEDIA',
    desc: `As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.`,
  },
  {
    id: 11,
    title: '11. THIRD-PARTY WEBSITES AND CONTENT',
    desc: `The Services may contain (or you may be sent via the App) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.`,
  },
  {
    id: 12,
    title: '12. ADVERTISERS',
    desc: `We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.`,
  },
  {
    id: 13,
    title: '13. SERVICES MANAGEMENT',
    desc: `We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.`,
  },
  {
    id: 14,
    title: '14. PRIVACY POLICY',
    desc: `We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.`,
  },
  {
    id: 15,
    title: '15. TERM AND TERMINATION',
    desc: `These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.

If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.`,
  },
  {
    id: 16,
    title: '16. MODIFICATIONS AND INTERRUPTIONS',
    desc: `We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.

We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.`,
  },
  {
    id: 17,
    title: '17. GOVERNING LAW',
    desc: `These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Arizona applicable to agreements made and to be entirely performed within the State of Arizona, without regard to its conflict of law principles.`,
  },
  {
    id: 18,
    title: '18. DISPUTE RESOLUTION',
    desc: `Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in Mariposa, Arizona, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms. In no event shall any claim, action, or proceeding brought by either Party related in any way to the Services be commenced more than one (1) years after the cause of action arose.`,
  },
  {
    id: 19,
    title: '19. CORRECTIONS',
    desc: `There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.`,
  },
  {
    id: 20,
    title: '20. DISCLAIMER',
    desc: `THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.`,
  },
  {
    id: 21,
    title: '21. LIMITATIONS OF LIABILITY',
    desc: `IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.   NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO $2,500.00 USD.   CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.`,
  },
  {
    id: 22,
    title: '22. INDEMNIFICATION',
    desc: `You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.`,
  },
  {
    id: 23,
    title: '23. USER DATA',
    desc: `We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.`,
  },
  {
    id: 24,
    title: '24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    desc: `Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.`,
  },
  {
    id: 25,
    title: '25. CALIFORNIA USERS AND RESIDENTS',
    desc: `If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.`,
  },
  {
    id: 26,
    title: '26. MISCELLANEOUS',
    desc: `These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.`,
  },
  {
    id: 27,
    title: '27. CONTACT US',
    desc: `In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:

Golflync Corp
1445 E Via Linda 2-616
Scottsdale, AZ 85259
United States
users@golflync.com `,
  },
];

export const PRIVACY_DESC = `This website is operated by GolfLync Corp. (hereinafter, “GolfLync”, “We”, or “Us”). This Privacy Policy (the “Privacy Policy”) governs your access to the GolfLync website https://www.golflync.com/, the GolfLync mobile application, and any other services owned, controlled, or offered by GolfLync, now or in the future (all collectively referred to as, the "Services”. The term “You” or “User” shall refer to any individual that views, uses, accesses, browses or submits any content or material to the Services. 

Since we may gather certain types of information about our users, we feel you should fully understand our policy and the terms and conditions surrounding the capture and use of that information. This Privacy Policy discloses what information we gather and how we use it.`;

export const PRIVACY_INFO = `BY VISITING, SIGNING UP, USING, BROWSING, OR ACCESSING THE SERVICES, YOU CONSENT TO THE DATA PRACTICES DESCRIBED IN THIS STATEMENT. IF YOU DO NOT AGREE WITH OUR PRIVACY PRACTICES, DO NOT USE THE SERVICES.`;

export const POLICY = [
  {
    id: '1',
    title: 'INFORMATION WE COLLECT',
    desc: `Personal Information:
Through the Services, we may collect Personal Information. “Personal Information” means information about you that specifically identifies you or, when combined with other information we have, can be used to identify you. Generally, we do not collect Personal Information about you when you visit and/or use the Services, unless you choose to provide such information to us. Submitting Personal Information through the Services is voluntary. By doing so, you are giving us your permission to use the information for the stated purpose.  
    
• Legal Basis for collecting your Personal Information
We collect, process, and use your information for the purposes described in this Privacy Policy, based at least on one of the following legal grounds:
    
• With your consent: We ask for your agreement to process your information for specific purposes, and you have the right to withdraw your consent at any time. 
    
• When Performing this Agreement: We collect and process your Personal Information to provide you with the Services, following your acceptance of this Privacy Policy; to maintain and improve the Services; to develop new services and features; and to personalize the Services for you to get a better user experience. 
    
• Legitimate interests: We process your information for our legitimate interests while applying appropriate safeguards that protect your privacy. This means that we process your information for things like detecting, preventing, or otherwise addressing fraud, abuse, security, usability, functionality or technical issues with protecting against harm to the rights, property or safety of our properties, or our users, or the public as required or permitted by law; enforcing legal claims, including investigation of potential violations of this Privacy Policy; in order to comply and/or fulfill our obligation under applicable laws, regulation, guidelines, industry standards and contractual requirements, legal process, subpoena or governmental request, as well as our Terms and Conditions.`,
  },
  {
    id: '2',
    title: 'INFORMATION WE COLLECT AND HOW WE COLLECT INFORMATION',
    desc: `Through the Services, we may collect information that can identify you or your company when you voluntarily submit it to us. If requested, your Personal Information may include:
• Full name
• Mailing address
• Phone Number
• Email address
• Other similar information`,
  },
  {
    id: '3',
    title: 'STORAGE OF PERSONAL INFORMATION',
    desc: `We will take reasonable precautions, as well as physical, technical, and organizational measures in accordance with industry standards, as described herein, to protect your Personal Information from loss, misuse, unauthorized access, disclosure, alteration, or destruction. Computer safeguards, such as firewalls and data encryption may be used to protect your information. However, the security of information on or transmitted via the Internet cannot be guaranteed. Unauthorized entry of use, hardware or software failures, and other factors may compromise the security of your Personal Information. All information you send to us electronically or through email is not secure. Any transmission is at your own risk as the transmission of information via the Internet is not completely secure.`,
  },
  {
    id: '4',
    title: 'HOW WE USE YOUR INFORMATION',
    desc: `• Operate, maintain and improve the Services;
• Provide you with the Services and its contents, and any other information, products or services that you request from us;
• Send you reminders, technical notices, updates, security alerts, support and administrative messages and marketing messages;
• Answer your questions and respond to your requests;
• Ensure that content from the Services is presented in the most effective manner for you and for your computer or device for accessing the Services;
• Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including the Terms and Conditions; 
• Notify you when there are changes to any products or services we offer or provide though the Services; and
• To maintain the security of Services.`,
  },
  {
    id: '5',
    title: 'SECURITY AND DATA RETENTION',
    desc: `The security of your Personal Information is important to us. We seek to protect your Personal Information from unauthorized access, use and disclosure using appropriate physical, technical, organizational, and administrative security measures based on the type of Personal Information and how we are processing that data. We endeavor to follow generally accepted industry standards to protect the Personal Information submitted to us, both during transmission and in storage. For example, the Services use industry standard Secure Sockets Layer (SSL) technology to allow for the encryption of Personal Information. We maintain what we consider industry standard backup and archival systems. Although we work to protect the security of the data that we hold in our records, for example, by making good faith efforts to store Personal Information in a secure operating environment that is not open to the public, please be aware that no method of transmitting data over the Internet or storing data is completely secure. We cannot and do not guarantee the complete security of any data you share with us, and except as expressly required by law, we are not responsible for the theft, destruction, loss or inadvertent disclosure of your information or content.

If at any time we believe that the security of your Personal Information may have been compromised, we may seek to notify you of that development. If a notification is appropriate, we will endeavor to notify you as promptly as possible under the circumstances. If we have your email address, we may notify you by email to the most recent email address you have provided us. If you receive a notice from us, you can print it to retain a copy of it. To receive these notices, you must check your email account. You consent to our use of email as a means of such notification. If you prefer for us to use the U.S. Postal Service to notify you in this situation, please email us at support@hydrant.us. Please include your address when you submit your request. You can make this election any time, and it will apply to notifications we make after a reasonable time thereafter for us to process your request. You may also use this email address to request a print copy, at no charge, of an electronic notice we have sent to you regarding a compromise of your Personal Information.
    
We may retain Personal Information about you consistent with all internal policies and procedures. We may retain Personal Information to comply with our legal obligations, resolve disputes or collect fees owed, or as is otherwise permitted or required by our data retention policies and procedures.`,
  },
  {
    id: '6',
    title: 'UPDATES TO THIS POLICY',
    desc: `We reserve the right to change, modify, update, add, or remove portions of this Privacy Policy at any time. Any changes or updates will be effective immediately upon posting to this page. When we do update it, for your convenience, we will make the updated policy available on this page. If you opt out of receiving communications, you may not receive certain notifications, however, they will still govern your use of the Services, and you are responsible for proactively checking for any changes. We encourage you to check this Privacy Policy frequently to stay up to date on any changes. You can determine if changes have been made by checking the effective date on the Privacy Policy. Continued use of the Services after the effective date of any change in this Privacy Policy will constitute acceptance of such changes and it will signify that you agree to abide by and be bound by the modified Privacy Policy.`,
  },
  {
    id: '7',
    title: 'CONTACT US',
    desc: `If you have questions, comments, or concerns regarding this Privacy Policy, please contact us and we will respond to your request within a reasonable timeframe. Please include the following information in your request (a) Your name; (b) Your contact information, including phone number, mailing address, and email address; and (c) the precise nature of your request, inquiry, or complaint.`,
  },
];
