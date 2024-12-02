import data from '../data/testimonials.json';

export const state = {
  testimonialsIndex: 0,
  testimonialsAmount: data.length,
  quote: data[0],
  data
};
