import { IndustryApplicationsSectionProps } from '../layouts/IndustryApplicationsSection';

interface IIndustryOverview {
  name: string;
  description: string;
  image: string;
  link: string;
}

type Industry =
  | 'agriculture'
  | 'survey'
  | 'security'
  | 'media'
  | 'infrastructure'
  | 'construction'
  | 'publicSafety'
  | 'forestry'
  | 'mining';

export const IndustryOverView: IIndustryOverview[] = [
  {
    name: 'Agriculture',
    description:
      'Agriculture drones are designed to provide farmers with advanced technological solutions for better results.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/agriculture_eovnmd.png',
    link: '/industries/agriculture',
  },
  {
    name: 'Aerial Surveying',
    description:
      'Drones enable you to gather accurate aerial data for surveying and mapping faster and more efficiently.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/aerial_surveying_zg22fl.png',
    link: '/industries/surveying',
  },
  {
    name: 'Media & Entertainment',
    description:
      'Professional photographers and filmmakers rely on drone technology for new levels of content creation.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/media_swh9vw.png',
    link: '/industries/media',
  },
  {
    name: 'Public Safety',
    description:
      'Police departments, firefighters, and other public safety officers rely on advanced drone technology to ease their operations.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505623/donehub-assets/industry-images/public_safety_astgak.png',
    link: '/industries/public-safety',
  },
  {
    name: 'Forestry',
    description:
      'Drone technology provides better access to forest data. It helps forestry stakeholders gather accurate and reliable information for more informed decision-making.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/forestry_svpz8w.png',
    link: '/industries/forestry',
  },
  {
    name: 'Infrastructure',
    description:
      'Various sectors in the energy industry such as solar, electricity, oil and gas rely on drone inspections to maintain safety standards in energy production.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/infrastructure_b7tmz7.png',
    link: '/industries/infrastructure',
  },
  {
    name: 'Security',
    description:
      'Security drones provide continuous surveillance to cover large spaces or scan restricted structures using sensing and monitoring equipment.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505623/donehub-assets/industry-images/security_mbrvmy.png',
    link: '/industries/security',
  },
  {
    name: 'Mining',
    description:
      'Data captured by drones are processed and analyzed in varying ways for safer and better mine plan, design, survey, exploration and security.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505623/donehub-assets/industry-images/mining_ikjcph.png',
    link: '/industries/mining',
  },
  {
    name: 'Construction',
    description:
      'Drones are useful in every stage of the construction process. From planning, development to completion, its opportunities are endless.',
    image:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/construction_oufxpz.png',
    link: '/industries/construction',
  },
];

const agriculture: IndustryApplicationsSectionProps = {
  industryName: 'Drone Applications in Agriculture',
  description:
    'The use of advanced drone technology has brought about better approaches to agriculture. Drones are now being used for mapping, crop inspection, plant count, spraying, irrigation management and more. With drone technology, farmers are achieving improved levels of efficiency, cost and time savings.',
  primaryDetails: [
    {
      title: 'Plant Health & Scouting',
      description:
        'Gather accurate multispectral data with our agricultural drones for early pest and disease detection and get better insight into plant health.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977252/donehub-assets/industry-images/agric/RGB_NDVI_c53bh5.png',
    },
    {
      title: 'Plant Counting & Yield Estimation',
      description:
        'Agriculture drones are designed to allow you to have accurate records of your crop population and make better forecasts on the crop’s potential yield.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977252/donehub-assets/industry-images/agric/51_bcdjt3.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Farm Mapping',
      description:
        'Drones are helping farmers to capture and identify changes in field conditions, visualize farm construction plans, and generate maps for more precise farm planning.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977252/donehub-assets/industry-images/agric/cm-level-precision_lgy1ym.png',
    },
    {
      title: 'Precision Spraying',
      description:
        'Eliminate threats from fungus, weeds or pests from your farm by spraying the required amount of plant protection chemicals without affecting your plants’ health. Spraying drones can spread fertilizer faster and more efficiently, providing the best solution to maximize your yields.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977253/donehub-assets/industry-images/agric/7_4_i3rsbs.png',
    },
  ],
};

// ---------end of agriculture details---------------------------------

const survey: IndustryApplicationsSectionProps = {
  industryName: 'Surveying and Mapping',
  description: '',
  primaryDetails: [
    {
      title: 'Topographic Surveys',
      description:
        'Drones capture high-resolution images used to generate maps for locations that have poor-quality, outdated data, or even no data.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977544/donehub-assets/industry-images/survey/img-1_o8sms4.png',
    },
    {
      title: 'Land Development & Management',
      description:
        'Aerial images captured by drones significantly facilitate surveys for land planning and management projects such as site scouting and allotment.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977544/donehub-assets/industry-images/survey/img-2_kzakm0.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Area Measurement',
      description:
        'Achieve error-free surface and distance measurements using high-resolution orthophotos captured by drones.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977544/donehub-assets/industry-images/survey/img-3_mjyumq.png',
    },
    {
      title: 'Stockpile Measurement',
      description:
        'Surveyors can capture several topographical data points using drones for more accurate volume measurement.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977544/donehub-assets/industry-images/survey/img-4_ubzekd.png',
    },
  ],
};
// -------end of survey details----------------------------------------

const security: IndustryApplicationsSectionProps = {
  industryName: 'Security',
  description: '',
  primaryDetails: [
    {
      title: 'Events & Activities',
      description:
        'Experience high-level security in all your events such as political rallies, music shows and national conferences.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977878/donehub-assets/industry-images/security/img-1_chjjee.png',
    },
    {
      title: 'Track & Follow',
      description:
        'Outsmart intruders by using drones to know their locations and track them.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977878/donehub-assets/industry-images/security/img-2_j2jkbl.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Deterrence',
      description:
        'Deploy drones with payloads such as sirens, warning lights and beacons are used to deter intruders.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977878/donehub-assets/industry-images/security/img-3_wqfotz.png',
    },
    {
      title: 'Situational Awareness',
      description:
        'Deploy drones for wide area visibility for blindspots that could be missed by regular security cameras.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977878/donehub-assets/industry-images/security/img-4_qy1rsq.png',
    },
  ],
};
// --------end of security details--------------------------------------

const media: IndustryApplicationsSectionProps = {
  industryName: 'Media',
  description: '',
  primaryDetails: [
    {
      title: 'Event Coverage',
      description:
        'Capture high-quality aerial photos and videos of events and happenings.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979340/donehub-assets/industry-images/media/img-1_v5qqkl.png',
    },
    {
      title: 'Marketing',
      description:
        'Advertise your brand in the best way possible using high-resolution photos and videos',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979340/donehub-assets/industry-images/media/img-2_czrqxr.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Film-making',
      description:
        'Capture all the action from every angle for the best cinematic experience.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979340/donehub-assets/industry-images/media/img-3_o1s0iv.png',
    },
    {
      title: 'Documentaries',
      description:
        'Experience the thrill of recording documentaries with drones.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979340/donehub-assets/industry-images/media/img-4_isabru.png',
    },
  ],
};
// --------end of media details-----------------------------------------

const infrastructure: IndustryApplicationsSectionProps = {
  industryName: 'Energy and Infrastructure',
  description:
    'Enhancing safety, efficiency and productivity in asset inspection',
  primaryDetails: [
    {
      title: 'Power Line Inspection',
      description:
        'With drones, you can carry out safer and cost-effective power line inspections.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979162/donehub-assets/industry-images/Infrastructure/img-1_r8cnac.png',
    },
    {
      title: 'Solar Panel Inspection',
      description:
        'Drones offer faster, safer, more efficient and cost-effective solar panel inspections.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676999726/donehub-assets/industry-images/Infrastructure/solar-panels_hffqkb.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Oil & Gas Infrastructure Inspection',
      description:
        'Drones can be used to inspect pipelines for potential leaks and security breaches.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979162/donehub-assets/industry-images/Infrastructure/img-3_mplit8.png',
    },
    {
      title: 'Other Infrastructure Inspections',
      description:
        'Drones can be used to inspect bridges, roads, telecommunication towers, railways, airports, and many other infrastructures to identify damages for quick fixes.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676979162/donehub-assets/industry-images/Infrastructure/img-4_kalokj.png',
    },
  ],
};
// ------end of infrastructure details-----------------------------------

const construction: IndustryApplicationsSectionProps = {
  industryName: 'Surveying and Mapping',
  description: '',
  primaryDetails: [
    {
      title: '',
      description: '',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978866/donehub-assets/industry-images/construction/img-3_bqu6xv.png',
    },
    {
      title: 'Development',
      description:
        'With drones, contractors can stay aware of on-site progress and resource allocation.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978866/donehub-assets/industry-images/construction/img-2_crrx9v.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Inspection',
      description:
        'With high-quality aerial imaging and real-time video transmission, contractors can evaluate completed projects in a safer way.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978867/donehub-assets/industry-images/construction/img-4_ivkf8e.png',
    },
  ],
};
// --------end of construction details-----------------------------------

const publicSafety: IndustryApplicationsSectionProps = {
  industryName: 'Public Safety',
  description: '',
  primaryDetails: [
    {
      title: 'Site Assessments & Investigations',
      description:
        'Survey scenes to collect accurate site information for investigations or assess the damage for proper decision making.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978606/donehub-assets/industry-images/public-safety/img-1_k7jz2s.png',
    },
    {
      title: 'Situational Awareness',
      description:
        'Get quick and significant aerial insights in challenging situations for an appropriate situational response. Drone technology allows safety teams to get rapid real-time aerial awareness during disasters such as floods, fire, etc.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978606/donehub-assets/industry-images/public-safety/img-2_ozqwrs.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Accident Reconstruction',
      description:
        'Aerial mapping captures accurate data that allows investigators and motorists to recreate accident scenes for better investigation.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1677000375/donehub-assets/industry-images/public-safety/img-3_zgupzu.png',
    },
    {
      title: 'Assist First Responders',
      description:
        'Direct aid to first responder missions on emergency or disaster sites to assess the damage and capture accurate data that supports the cause.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978606/donehub-assets/industry-images/public-safety/img-4_qxnxrp.png',
    },
    {
      title: 'Aid Firefighters',
      description:
        'Safely assess fire outbreaks to determine the rate of spread, route, and areas of high risk before sending a team for rescue.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978606/donehub-assets/industry-images/public-safety/img-5_at8hpl.png',
    },
  ],
};
// ---------end of public safety details----------------------------------

const forestry: IndustryApplicationsSectionProps = {
  industryName: 'Forestry',
  description: '',
  primaryDetails: [
    {
      title: 'Forest Resource Surveys',
      description:
        'Drones provide you with aerial data for forest monitoring, planning, fire protection, law enforcement and post-disaster survey analysis.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978405/donehub-assets/industry-images/forestry/img-1_pzcfju.png',
    },
    {
      title: 'Situational Awareness',
      description:
        'Drones can be deployed for wildlife monitoring and natural resource management.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978405/donehub-assets/industry-images/forestry/img-2_k5m2xe.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Pest Control',
      description:
        'Aerial data captured by drones can be used to identify the effects of pests while spraying drones can be used to apply pesticides to control and mitigate the identified pests.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978406/donehub-assets/industry-images/forestry/img-3_ulnwmp.png',
    },
    {
      title: 'Forest Patrols',
      description:
        'The use of drones in forest patrols is helpful for the rapid deployment of rescue teams, repeatable missions, accurate data recording and complex environments. They are also useful in identifying areas of illegal logging, wildlife damage and illegal land occupation. ',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978405/donehub-assets/industry-images/forestry/img-4_pqubbg.png',
    },
    {
      title: 'Stockpile Measurement',
      description:
        'First responders can use aerial data from drones to assess the risk and route of fire spread. More so, firefighters can use drones equipped with speakers to broadcast information to ground teams conducting evacuation.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978405/donehub-assets/industry-images/forestry/img-5_si8lh3.png',
    },
  ],
};
// --------end of forestry details----------------------------------------

const mining: IndustryApplicationsSectionProps = {
  industryName: 'Mining',
  description: '',
  primaryDetails: [
    {
      title: 'Mapping Underground',
      description:
        'Drones equipped with special sensors can fly in confined spaces or GPS denied areas to successfully map underground mines.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978154/donehub-assets/industry-images/mining/img-1_zl0kya.png',
    },
    {
      title: 'Stockpile Management',
      description:
        'Data collected by drones and processed with relevant software assists mine operators to measure stockpiles accurately. More so, frequent volume calculations of stockpiles with accurate results are now possible at lower cost and improved safety.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676977544/donehub-assets/industry-images/survey/img-2_kzakm0.png',
    },
  ],
  secondaryDetails: [
    {
      title: 'Mine Surveys',
      description:
        'Drones make it easier for surveyors to capture data points to generate topographic maps, 2D and 3D maps, digital terrain models and contours at mine concessions and  exploration sites.',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978154/donehub-assets/industry-images/mining/image_2_k5kntn.png',
    },
    {
      title: 'Other Applications',
      description:
        'Blast monitoring. Monitor tailing dams to prevent environmentally toxic run-offs.  Plan mining operations in inaccessible areas and rugged terrains. Generate accurate models of mine site for quarry management and operation planning. Provide aerial security and surveillance for mine sites and undeveloped concessions. ',
      imageUrl:
        'https://res.cloudinary.com/djmx11b6s/image/upload/v1676978153/donehub-assets/industry-images/mining/image_3_a9ljhx.png',
    },
  ],
};
// --------end of mining details----------------------------------------

export const industryApplicationDetails: {
  [key in Industry]: IndustryApplicationsSectionProps;
} = {
  agriculture,
  survey,
  security,
  media,
  infrastructure,
  construction,
  publicSafety,
  forestry,
  mining,
};
