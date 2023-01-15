import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import categoriesData from '../src/data/categories/categories.json';

const postsDirectory = join(process.cwd(), 'posts');

const getPostSlugs = (categories = null) => {
  let posts = [];
  categories = categories ? categories : categoriesData;

  categories.map(category => {
    const path = join(postsDirectory, category.dir);
    if (!fs.existsSync(path)) return;

    const categoryPosts = {
      category: category,
      slugs: fs.readdirSync(path)
    }
    posts.push(categoryPosts);
  });

  return posts;
}

const getPostBySlug = (slug, fields = [], category = null) => {
  slug = slug.replace(/\.md$/, '');
  if (!category) {
    category = categoriesData.find(category => fs.existsSync(join(postsDirectory, `${category.dir}/${slug}.md`)));
  }

  const fullPath = join(postsDirectory, `${category.dir}/${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        items[field] = slug;
        break;
      case 'category':
        items[field] = category.label;
        break;
      case 'content':
        items[field] = content;
        break;
      default:
        if (typeof data[field] !== 'undefined') {
          items[field] = data[field];
        }
    }
  });

  return items;
}

const getPostsByCategory = (category, fields = []) => {
  const postSlugs = getPostSlugs([category]);
  let posts = [];

  if (postSlugs.length > 0) {
    postSlugs.map(item => {
      posts = posts.concat(item.slugs.map(slug => getPostBySlug(slug, fields, item.category)));
    })
  }
  
  return posts
};

const getAllPosts = (fields = []) => {
  const postSlugs = getPostSlugs();
  let posts = [];

  postSlugs.map(item => {
    posts = posts.concat(item.slugs.map(slug => getPostBySlug(slug, fields, item.category)));
  });

  return posts;
}
// Get Markdown File Content 

const getFileContentBySlug = (fileName, postsPath) => {

    const postFilePath = join(postsPath, `${fileName}.md`)
    const fileContents = fs.readFileSync(postFilePath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      data,
      content
    }
}

export { getPostSlugs, getPostsByCategory, getPostBySlug, getAllPosts, getFileContentBySlug };




 


