import React from 'react';
import NewsFeedTemplateStyles from './styles/NewsFeedTemplate.styles';
import FeaturedStory from '../Components/FeatureSections/FeaturedStory';
import ThreeStorySection from '../Components/FeatureSections/ThreeStorySection';
import GeneralStorySection from '../Components/FeatureSections/GeneralStorySection';
import Head from '../Elements/Head';

export default function NewsFeedTemplate({
  featuredNewsData,
  recentNewsData,
  allNewsData,
}) {
  return (
    <>
      <Head
        title="Latest News  | Power and Control - Electrical Contractors"
        description="Stay up to date with the latest trends and developments in renewable energy with Power and Control's news page. From policy updates to new technologies and project updates, we bring you timely and insightful content that empowers you to make informed decisions about your energy future. Join our community of industry leaders and enthusiasts and be part of the clean energy revolution."
        ogImage={featuredNewsData[0].hero.url}
        url="https://pac-electrical.co.uk/news"
      />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <div className="spacer-lg" />
      <NewsFeedTemplateStyles>
        <div className="divider" />
        <FeaturedStory data={featuredNewsData} type="News" link="news" />
        <div className="divider" />
        {recentNewsData.length > 0 && (
          <ThreeStorySection data={recentNewsData} type="News" link="news" />
        )}
        <div className="divider" />
        {allNewsData.length > 0 && (
          <GeneralStorySection data={allNewsData} type="News" link="news" />
        )}
      </NewsFeedTemplateStyles>
    </>
  );
}
