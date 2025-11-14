import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedButton from '../components/AnimatedButton';

const posts = [
  {
    title: 'The Power of One Tree',
    excerpt: 'Imagine if every household planted just one fruit tree—millions of kilograms of fresh produce and cooler, greener cities.',
    tag: 'Impact',
    date: '2025-11-14',
  },
  {
    title: 'Why Act Now',
    excerpt: 'Global markets and urban heat demand decisive climate action. Fruit trees are a natural solution with economic benefits.',
    tag: 'Advocacy',
    date: '2025-11-01',
  },
  {
    title: 'Membership Tiers Explained',
    excerpt: 'From Basic to Lifetime, membership supports planting, training, and long-term movement sustainability.',
    tag: 'Community',
    date: '2025-10-22',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-jungle mb-6">Blog</h1>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <AnimatedSection key={post.title}>
              <motion.article whileHover={{ scale: 1.02 }} className="bg-base-100 rounded-lg shadow p-6">
                <span className="text-sm text-neutral">{post.date}</span>
                <h2 className="text-2xl font-bold text-jungle mt-2">{post.title}</h2>
                <p className="text-neutral mt-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-light-green text-jungle text-sm">{post.tag}</span>
                  <AnimatedButton className="">Read</AnimatedButton>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;