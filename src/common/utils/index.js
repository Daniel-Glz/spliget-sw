import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { remark } from 'remark'
import html from 'remark-html'

const formatPosts = (posts) => {
  if (!Array.isArray(posts)) {
    posts = [posts]
  }
  return posts.map((post) => {
    const { date, slug, title, categories, featuredImage, author, content, tags } = post;
    const { sourceUrl, altText, srcSet } = featuredImage ? featuredImage.node : null;
    const { name } = author ? author.node : {name: null};
    const { edges } = categories;
    const primaryCategory = edges.find((edge) => edge.isPrimary).node;
    const listCategories = edges.map((edge) => edge.node);

    const formattedPost = {
      date: date ? DateTime.fromISO(date).toFormat('dd LLL yyyy') : null,
      slug: slug ? slug : null,
      title: title ? title : null,
      author: name ? name : null,
      content: content ? content : null,
      tags: tags ? tags.nodes : null,
      categories: listCategories ? listCategories : null,
      primaryCategory: primaryCategory ? primaryCategory : null,
      featuredImage: {
        sourceUrl,
        altText,
        srcSet,
      },
    };
    return formattedPost;
  });
}

const formatCategories = (categories) => {
  if (!Array.isArray(categories)) {
    categories = [categories]
  }
  return categories.map((category) => {
    const { name, slug, image } = category;
    const { src } = image ? image : null;
    const { sourceUrl, altText } = src ? src : null;

    const formattedCategory = {
      name: name ? name : null,
      slug: slug ? slug : null,
      image: {
        sourceUrl,
        altText,
      },
    };
    return formattedCategory;
  });
}

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

const SortingByDate = (posts) => {
  return posts
  .sort((post1, post2) => {

    const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
    return afterDate - beforeDate;
    
})
}

const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
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

export {formatPosts, formatCategories, slugify, removeDuplicates, SortingByDate, HoverActiveClass, markdownToHtml};