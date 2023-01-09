import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import categories from '../src/data/categories/categories.json';

const postsDirectory = join(process.cwd(), 'posts');

const getPostSlugs = (categories = null) => {
  let posts = [];

  if (categories) {
    categories = Array.isArray(categories) ? categories : [categories];
  } else {
    let categoriesData = getCategories();
    categories = categoriesData.map((category) => category.dir);
  }
  categories.forEach((category) => {
    const categoryPath = join(postsDirectory, category);
    const categoryPosts = fs.readdirSync(categoryPath);

    posts = [...posts, { category: category.dir, slugs: categoryPosts }];
  });

  return posts;
};

const getCategories = () => categories;

const getPostBySlug = (slug, fields = [], category = null) => {
  const realSlug = slug.replace(/\.md$/, '');
  const categories = getCategories();

  if (!category) {
    category = categories.find((cate) => fs.existsSync(join(postsDirectory, `${cate.dir}/${realSlug}.md`)));
  } else {
    category = categories.find((cate) => cate.dir === category);
  }
  
  const fullPath = join(postsDirectory, `${category.dir}/${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'category') {
      items[field] = category.label;
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

const getPostsByCategory = (category, fields = []) => {
  const postSlugs = getPostSlugs(category);
  let posts = [];
  postSlugs[0].slugs.map((slug) => {
    posts.push(getPostBySlug(slug, fields, category));
  });

  return posts
}

const getAllPosts = (fields = []) => {
  const postSlugs = getPostSlugs();
  let posts = [];
  postSlugs.map((item) => {
    const categoryPosts = item.slugs.map((slug) => getPostBySlug(slug, fields, item.category));
    posts = [...posts, ...categoryPosts];
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

export { getPostSlugs, getPostsByCategory, getPostBySlug, getAllPosts, getFileContentBySlug, getCategories };




 


