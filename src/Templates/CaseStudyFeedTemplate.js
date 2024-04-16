import React from 'react';
import CaseStudyFeedTemplateStyles from './styles/CaseStudyFeedTemplate.styles';
import FeaturedStory from '../Components/FeatureSections/FeaturedStory';
import ThreeStorySection from '../Components/FeatureSections/ThreeStorySection';
import GeneralStorySection from '../Components/FeatureSections/GeneralStorySection';
import Head from '../Elements/Head';

export default function CaseStudyFeedTemplate({
  featuredStudyData,
  recentStudyData,
  allStudyData,
}) {
  return (
    <>
      <>
        <Head
          title="Case Studies | Power and Control - Electrical Contractors"
          description="Check out our newest case studies featuring commercial solar PV installation, EV charging installations, and electrical contracting services."
          ogImage={featuredStudyData[0].hero.url}
          url="https://pac-electrical.co.uk/case-studies"
        />
        <div className="spacer-lg" />
        <div className="spacer-lg" />
        <div className="spacer-lg" />
        <div className="spacer-lg" />
        <CaseStudyFeedTemplateStyles>
          <div className="divider" />
          <FeaturedStory data={featuredStudyData} />
          <div className="divider" />
          {recentStudyData.length > 0 && (
            <ThreeStorySection data={recentStudyData} />
          )}
          <div className="divider" />
          {allStudyData.length > 0 && (
            <GeneralStorySection data={allStudyData} />
          )}
        </CaseStudyFeedTemplateStyles>
      </>
    </>
  );
}
