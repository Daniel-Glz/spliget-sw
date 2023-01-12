import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { markdownToTxt } from 'markdown-to-txt';


const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
}

const removeDuplicates = (originalArray, prop) => {
  var newArray = [];
  var lookupObject  = {};

  for(var i in originalArray) {
     lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(i in lookupObject) {
      newArray.push(lookupObject[i]);
  }
   return newArray;
}

const sortingByDate = (posts) => {
  return posts
  .sort((post1, post2) => {

    const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
    return afterDate - beforeDate;
    
})
}

const generateArticleJsonLd = (post) => {
  //stringify all post properties
  const body = JSON.stringify(markdownToTxt(escape(post.content)));
  const wordCount = body.split(/\s/g).length;
  const imagePathname = post.featuredImage.split('/').pop();
  const imageName = imagePathname.split('.').shift();
  
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "${post.title}",
      "dependencies": "${post.dependencies || ''}",
      "proficiencyLevel": "${post.proficiencyLevel || ''}",
      "alternativeHeadline": "${post.alternativeHeadline || post.title}",
      "image": "https://www.spligetsw.com/_next/static/chunks/images/images/posts/${imageName}_640_85.webp",
      "author": "${post.authorName}",
      "editor": "${post.authorName}",
      "genre": "${post.category}",
      "keywords": "${post.keywords || ''}",
      "datePublished": "${post.date}",
      "dateModified": "${post.lastMod}",
      "description": "${post.metaDescription}",
      "wordCount": "${wordCount}",
      "articleBody": ${body},
      "publisher": "Spliget SW",
      "url": "${process.env.SITE_URL || "https://www.spligetsw.com/"}${post.slug}"
    }`
  }
}

function escape(htmlStr) {
  return htmlStr.replace(/\s*\[.*?\]\s*/g, '')
        .replace(/\s*!\(.*?\)\s*/g, '')
        .replace(/\s+/g,' ').trim()
}

const HoverActiveClass = (hoverRef) => {
	const [refLists, setrefLists] = useState([]);
	
	useEffect(() => {
		const refContainer = hoverRef.current.childNodes;
		setrefLists(refContainer);
	}, []);

	refLists.forEach((f) => {
		f.addEventListener("mouseenter", function () {
			refLists.forEach((e) => {
				var div = e.querySelector(".content-block");
				div.classList.add("axil-control");
				div.classList.remove("is-active");
			});
			this.querySelector(".content-block").classList.add("is-active");
		})
	});
}

const orderPostsByCategory = (posts, categories) => {
  let data = [];
  categories.forEach((category) => {
    if (category.toLowerCase() === "recientes") {
      data.push({ category, posts: posts.slice(0, 3) });
      return;
    }
    const filteredPosts = posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
    data.push({ category, posts: filteredPosts });
  });

  return data;
}

export { slugify, removeDuplicates, sortingByDate, HoverActiveClass, orderPostsByCategory, generateArticleJsonLd};