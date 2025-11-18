import React from 'react';

const stories = [
  {
    id: 'story_001',
    title: 'From Unemployed to Agri-preneur: Mary\'s Story',
    excerpt: 'Read how Mary, a young graduate from Nakuru, transformed her family\'s land into a thriving avocado farm with the help of Barakah Roots.',
    image: '/placeholder.jpg',
    datePublished: '2025-10-22',
    author: 'Jane Doe',
  },
  {
    id: 'story_002',
    title: 'Reforesting the Highlands: A Community Effort',
    excerpt: 'Discover how our recent planting drive in the Aberdare foothills brought together hundreds of volunteers to restore a critical water catchment area.',
    image: '/placeholder.jpg',
    datePublished: '2025-10-15',
    author: 'John Smith',
  },
  {
    id: 'story_003',
    title: 'The Sweet Taste of Success: A Mango Farmer\'s Testimonial',
    excerpt: 'John, a farmer from Kisumu, shares his experience with our improved mango seedlings and how they have boosted his income.',
    image: '/placeholder.jpg',
    datePublished: '2025-10-08',
    author: 'Peter Jones',
  },
];

const Stories = () => {
  return (
    <div className="container mx-auto py-20">
      <title>Impact Stories - Barakah Roots</title>
      <meta name="description" content="Read testimonials and stories of impact from the youth and communities we have empowered through our agricultural initiatives." />
      <h1 className="text-4xl font-bold text-center text-deep-olive">Impact Stories</h1>
      <p className="text-center text-barakah-text mt-4 max-w-3xl mx-auto">
        These are the stories of change, growth, and hope from the heart of our community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {stories.map((story) => {
          const storySchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": story.title,
            "description": story.excerpt,
            "image": `https://barakahroots.org${story.image}`,
            "author": {
              "@type": "Person",
              "name": story.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Barakah Roots — Kenya Youth Agricultural Initiative",
              "logo": {
                "@type": "ImageObject",
                "url": "https://barakahroots.org/logo.png"
              }
            },
            "datePublished": story.datePublished
          };

          return (
            <div key={story.id} className="bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-1 overflow-hidden">
              <script type="application/ld+json">
                {JSON.stringify(storySchema)}
              </script>
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-deep-olive">{story.title}</h2>
                <p className="text-barakah-text mt-2">{story.excerpt}</p>
                <button className="mt-4 text-light-green font-semibold hover:text-deep-olive transition-colors">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;